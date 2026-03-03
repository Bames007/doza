import React, { ChangeEvent } from "react";
import { FileText, Upload, CheckCircle, X, AlertCircle } from "lucide-react";
import { MedicRegistrationData } from "../type";
import { documentTypes } from "../data/constants";

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

    const maxSize =
      documentTypes.find((doc) => doc.id === documentType)?.maxSize || 5;
    if (file.size > maxSize * 1024 * 1024) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }

    const acceptedFormats =
      documentTypes.find((doc) => doc.id === documentType)?.acceptedFormats ||
      [];
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();
    if (!acceptedFormats.includes(fileExtension || "")) {
      alert(
        `Please upload a file in one of these formats: ${acceptedFormats.join(
          ", ",
        )}`,
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
      credentials: {
        ...formData.credentials,
        documents: updatedDocuments,
      },
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

  const getDocument = (documentType: string) => {
    return formData.credentials.documents.find(
      (doc) => doc.type === documentType,
    );
  };

  const isFormValid = documentTypes
    .filter((doc) => doc.required)
    .every((doc) => getDocument(doc.id));

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
      <div className="text-center mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <FileText className="text-orange-600" size={24} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
          Upload Credentials
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Please upload required documents for verification
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {documentTypes.map((docType) => {
          const uploadedDoc = getDocument(docType.id);

          return (
            <div
              key={docType.id}
              className="p-4 sm:p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-400 transition-colors"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex-1 pr-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    {docType.label} {docType.required && "*"}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 break-words">
                    Accepted: {docType.acceptedFormats.join(", ")} • Max{" "}
                    {docType.maxSize}MB
                  </p>
                </div>

                {uploadedDoc && (
                  <div className="flex items-center gap-1 sm:gap-2 text-green-600 shrink-0">
                    <CheckCircle size={18} className="sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium hidden xs:inline">
                      Uploaded
                    </span>
                  </div>
                )}
              </div>

              {uploadedDoc ? (
                <div className="flex items-center justify-between p-3 sm:p-4 bg-green-50 rounded-lg gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <FileText size={18} className="text-green-600 shrink-0" />
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                        {uploadedDoc.fileName}
                      </p>
                      <p className="text-xs text-gray-600">
                        {new Date(uploadedDoc.uploadDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeDocument(docType.id)}
                    className="text-red-500 hover:text-red-700 p-1 shrink-0"
                    aria-label="Remove file"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer block">
                  <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
                    <Upload size={32} className="text-gray-400 mb-2 sm:mb-3" />
                    <span className="text-gray-600 text-center text-sm sm:text-base">
                      Click to upload {docType.label.toLowerCase()}
                    </span>
                    <span className="text-xs text-gray-500 text-center mt-1">
                      {docType.acceptedFormats.join(", ")} up to{" "}
                      {docType.maxSize}
                      MB
                    </span>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept={docType.acceptedFormats.join(",")}
                    onChange={(e) => handleFileUpload(docType.id, e)}
                  />
                </label>
              )}
            </div>
          );
        })}

        {/* Security Notice */}
        <div className="p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-start gap-2 sm:gap-3">
            <AlertCircle size={18} className="text-blue-600 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold text-blue-800 text-sm sm:text-base mb-0.5">
                Secure Document Handling
              </h4>
              <p className="text-blue-700 text-xs sm:text-sm">
                Your documents are encrypted and stored securely. They will only
                be used for verification purposes and will not be shared with
                third parties without your consent.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-6 sm:mt-8">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-xl text-sm sm:text-base text-gray-600 hover:bg-gray-50 transition-colors order-2 sm:order-1"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!isFormValid}
          className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors order-1 sm:order-2"
        >
          Continue to Agreement
        </button>
      </div>
    </div>
  );
};

export default CredentialsUpload;
