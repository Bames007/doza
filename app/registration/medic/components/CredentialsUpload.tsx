"use client";

import React, { ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Upload,
  CheckCircle,
  X,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  FileCheck,
} from "lucide-react";
import { MedicRegistrationData } from "../type";
import { documentTypes } from "../data/constants";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";

interface CredentialsUploadProps {
  formData: MedicRegistrationData;
  updateFormData: (updates: Partial<MedicRegistrationData>) => void;
  onBack: () => void;
  onNext: () => void;
}

const CredentialsUpload: React.FC<CredentialsUploadProps> = ({
  formData,
  updateFormData,
  onBack,
  onNext,
}) => {
  const handleFileUpload = (
    documentType: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const docTypeConfig = documentTypes.find((doc) => doc.id === documentType);
    const maxSize = docTypeConfig?.maxSize || 5;

    if (file.size > maxSize * 1024 * 1024) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }

    const acceptedFormats = docTypeConfig?.acceptedFormats || [];
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();

    if (!acceptedFormats.includes(fileExtension || "")) {
      alert(
        `Please upload a file in one of these formats: ${acceptedFormats.join(", ")}`,
      );
      return;
    }

    const fileUrl = URL.createObjectURL(file);
    const existingDocIndex = formData.credentials.documents.findIndex(
      (doc) => doc.type === documentType,
    );
    const updatedDocuments = [...formData.credentials.documents];

    if (existingDocIndex >= 0) {
      updatedDocuments[existingDocIndex] = {
        type: documentType,
        fileUrl,
        fileName: file.name,
        uploadDate: new Date().toISOString(),
      };
    } else {
      updatedDocuments.push({
        type: documentType,
        fileUrl,
        fileName: file.name,
        uploadDate: new Date().toISOString(),
      });
    }

    updateFormData({
      credentials: { ...formData.credentials, documents: updatedDocuments },
    });
  };

  const removeDocument = (documentType: string) => {
    updateFormData({
      credentials: {
        ...formData.credentials,
        documents: formData.credentials.documents.filter(
          (doc) => doc.type !== documentType,
        ),
      },
    });
  };

  const getDocument = (documentType: string) =>
    formData.credentials.documents.find((doc) => doc.type === documentType);

  const isFormValid = documentTypes
    .filter((doc) => doc.required)
    .every((doc) => getDocument(doc.id));

  return (
    <div className={`w-full max-w-4xl mx-auto px-4 py-8 ${poppins.className}`}>
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span
            className={`text-3xl text-emerald-600 font-bold ${bebasNeue.className}`}
          >
            05
          </span>
          <div className="h-[2px] flex-grow bg-slate-200" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            Credentials
          </span>
        </div>
        <h2
          className={`text-5xl md:text-7xl font-bold leading-tight ${bebasNeue.className}`}
        >
          VERIFY <span className="text-emerald-600">IDENTITY</span>
        </h2>
        <p className="mt-4 text-slate-600 max-w-lg">
          Please upload your professional certificates and identification
          documents for secure verification.
        </p>
      </header>

      {/* Upload Zones */}
      <div className="space-y-6">
        {documentTypes.map((docType) => {
          const uploadedDoc = getDocument(docType.id);

          return (
            <div
              key={docType.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-slate-900">
                    {docType.label}{" "}
                    {docType.required && (
                      <span className="text-emerald-600">*</span>
                    )}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Accepts {docType.acceptedFormats.join(", ")} • Max{" "}
                    {docType.maxSize}MB
                  </p>
                </div>
                {uploadedDoc && (
                  <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                    <CheckCircle size={14} /> Uploaded
                  </div>
                )}
              </div>

              <AnimatePresence mode="wait">
                {uploadedDoc ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-emerald-600">
                        <FileCheck size={20} />
                      </div>
                      <div className="truncate">
                        <p className="text-sm font-bold text-slate-900 truncate">
                          {uploadedDoc.fileName}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {new Date(
                            uploadedDoc.uploadDate,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeDocument(docType.id)}
                      className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </motion.div>
                ) : (
                  <label className="group block cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      accept={docType.acceptedFormats.join(",")}
                      onChange={(e) => handleFileUpload(docType.id, e)}
                    />
                    <div className="border-2 border-dashed border-slate-200 group-hover:border-emerald-400 group-hover:bg-emerald-50/50 rounded-xl py-8 flex flex-col items-center justify-center transition-all">
                      <Upload
                        size={24}
                        className="text-slate-400 group-hover:text-emerald-600 mb-2"
                      />
                      <span className="text-sm font-bold text-slate-600 group-hover:text-emerald-700">
                        Click to upload file
                      </span>
                    </div>
                  </label>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Security Notice */}
      <div className="mt-8 p-6 bg-slate-900 rounded-2xl flex items-start gap-4">
        <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
          <AlertCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-white mb-1">
            Secure Document Handling
          </h4>
          <p className="text-sm text-slate-400">
            Your documents are encrypted and stored securely. They will only be
            used for verification purposes and will not be shared with third
            parties without your consent.
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-100">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft size={20} /> Back
        </button>
        <button
          onClick={onNext}
          disabled={!isFormValid}
          className={`px-10 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 shadow-lg ${isFormValid ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-500/20" : "bg-slate-100 text-slate-400 cursor-not-allowed"}`}
        >
          Continue <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default CredentialsUpload;
