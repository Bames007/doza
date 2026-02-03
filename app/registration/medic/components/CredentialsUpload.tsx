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
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file size
    const maxSize =
      documentTypes.find((doc) => doc.id === documentType)?.maxSize || 5;
    if (file.size > maxSize * 1024 * 1024) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Check file type
    const acceptedFormats =
      documentTypes.find((doc) => doc.id === documentType)?.acceptedFormats ||
      [];
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();
    if (!acceptedFormats.includes(fileExtension || "")) {
      alert(
        `Please upload a file in one of these formats: ${acceptedFormats.join(
          ", "
        )}`
      );
      return;
    }

    const fileUrl = URL.createObjectURL(file);
    const existingDocIndex = formData.credentials.documents.findIndex(
      (doc) => doc.type === documentType
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
          (doc) => doc.type !== documentType
        ),
      },
    });
  };

  const getDocument = (documentType: string) => {
    return formData.credentials.documents.find(
      (doc) => doc.type === documentType
    );
  };

  const isFormValid = documentTypes
    .filter((doc) => doc.required)
    .every((doc) => getDocument(doc.id));

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="text-orange-600" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Upload Credentials
        </h2>
        <p className="text-gray-600">
          Please upload required documents for verification
        </p>
      </div>

      <div className="space-y-6">
        {documentTypes.map((docType) => {
          const uploadedDoc = getDocument(docType.id);

          return (
            <div
              key={docType.id}
              className="p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-400 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {docType.label} {docType.required && "*"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Accepted formats: {docType.acceptedFormats.join(", ")} • Max
                    size: {docType.maxSize}MB
                  </p>
                </div>

                {uploadedDoc && (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle size={20} />
                    <span className="text-sm font-medium">Uploaded</span>
                  </div>
                )}
              </div>

              {uploadedDoc ? (
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {uploadedDoc.fileName}
                      </p>
                      <p className="text-sm text-gray-600">
                        Uploaded on{" "}
                        {new Date(uploadedDoc.uploadDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeDocument(docType.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
                    <Upload size={48} className="text-gray-400 mb-3" />
                    <span className="text-gray-600 text-center">
                      Click to upload {docType.label.toLowerCase()}
                      <br />
                      <span className="text-sm text-gray-500">
                        {docType.acceptedFormats.join(", ")} up to{" "}
                        {docType.maxSize}MB
                      </span>
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
        <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-start gap-3">
            <AlertCircle
              size={20}
              className="text-blue-600 mt-0.5 flex-shrink-0"
            />
            <div>
              <h4 className="font-semibold text-blue-800 mb-1">
                Secure Document Handling
              </h4>
              <p className="text-blue-700 text-sm">
                Your documents are encrypted and stored securely. They will only
                be used for verification purposes and will not be shared with
                third parties without your consent.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!isFormValid}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Continue to Agreement
        </button>
      </div>
    </div>
  );
};

export default CredentialsUpload;
