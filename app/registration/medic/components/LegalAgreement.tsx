import React, { useEffect } from "react";
import { Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { MedicRegistrationData } from "../type";
import { alexBrush } from "../../../home/doza_center/constant";

interface LegalAgreementProps {
  formData: MedicRegistrationData;
  updateFormData: (updates: Partial<MedicRegistrationData>) => void;
  onBack: () => void;
  onSubmit: () => Promise<void>;
  isSubmitting: boolean;
}

const LegalAgreement: React.FC<LegalAgreementProps> = ({
  formData,
  updateFormData,
  onBack,
  onSubmit,
  isSubmitting,
}) => {
  // Auto‑fill signature from personal info when component mounts or name changes
  useEffect(() => {
    const fullName =
      `${formData.personalInfo.firstName} ${formData.personalInfo.lastName}`.trim();
    if (fullName && !formData.legal.signature) {
      updateFormData({
        legal: {
          ...formData.legal,
          signature: fullName,
        },
      });
    }
  }, [formData.personalInfo.firstName, formData.personalInfo.lastName]);

  const handleSignatureChange = (signature: string) => {
    updateFormData({
      legal: {
        ...formData.legal,
        signature,
        date: new Date().toISOString(),
      },
    });
  };

  const fullName =
    `${formData.personalInfo.firstName} ${formData.personalInfo.lastName}`.trim();
  const isSignatureValid = formData.legal.signature.trim() === fullName;

  const isFormValid =
    formData.legal.agreedToTerms &&
    formData.legal.agreedToPrivacy &&
    formData.legal.agreedToCommitment &&
    isSignatureValid;

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
      <div className="text-center mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <Shield className="text-blue-600" size={24} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
          Professional Agreement
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Review and accept our terms to join the platform
        </p>
      </div>

      {/* Commitment Warning */}
      <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-orange-50 border border-orange-200 rounded-xl">
        <div className="flex items-start gap-3 sm:gap-4">
          <AlertTriangle className="text-orange-500 mt-1 shrink-0" size={20} />
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-orange-800 mb-1">
              Platform Commitment
            </h3>
            <p className="text-orange-700 text-xs sm:text-sm">
              To maintain service quality and patient trust, we require all
              professionals to maintain active engagement with the platform.
              Inactive accounts or consistent patient dissatisfaction may result
              in profile suspension.
            </p>
          </div>
        </div>
      </div>

      {/* Terms & Policies (scrollable) */}
      <div className="space-y-4 sm:space-y-6 max-h-72 sm:max-h-96 overflow-y-auto mb-6 sm:mb-8 p-3 sm:p-4 border border-gray-200 rounded-xl text-sm sm:text-base">
        {/* Terms of Service */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
            Terms of Service
          </h3>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>1. Professional Commitment:</strong> I agree to maintain
              regular activity on the platform and respond to patient inquiries
              within 24 hours during business days.
            </p>
            <p>
              <strong>2. Service Quality:</strong> I commit to providing
              high‑quality healthcare services and maintaining professional
              standards as per my licensing board requirements.
            </p>
            <p>
              <strong>3. Platform Engagement:</strong> I understand that
              consistent patient no‑shows or cancellations on my part may affect
              my profile visibility and platform standing.
            </p>
            <p>
              <strong>4. Revenue Share:</strong> I agree to the platform's
              revenue sharing model of 15% per consultation, which supports
              platform maintenance and patient acquisition.
            </p>
            <p>
              <strong>5. Availability:</strong> I will maintain accurate
              availability schedules and update them promptly when changes
              occur.
            </p>
          </div>
        </div>

        {/* Privacy Policy */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
            Privacy & Data Protection
          </h3>
          <div className="space-y-2 text-gray-700">
            <p>
              Your professional information will be displayed to patients
              seeking healthcare services. We protect your personal contact
              information and facilitate communication through our secure
              platform.
            </p>
            <p>
              Patient medical information is confidential and protected under
              healthcare privacy laws. You are responsible for maintaining
              patient confidentiality.
            </p>
          </div>
        </div>

        {/* Quality Commitment */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
            Quality & Performance Agreement
          </h3>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Performance Metrics:</strong> Your profile performance
              will be measured based on patient ratings, response times, and
              appointment completion rates.
            </p>
            <p>
              <strong>Continuous Engagement:</strong> We expect professionals to
              maintain minimum platform activity levels to ensure patient access
              to quality care.
            </p>
            <p>
              <strong>Professional Development:</strong> You agree to maintain
              current certifications and licenses required for your practice.
            </p>
          </div>
        </div>
      </div>

      {/* Agreement Checkboxes */}
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        <label className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
          <input
            type="checkbox"
            checked={formData.legal.agreedToTerms}
            onChange={(e) =>
              updateFormData({
                legal: {
                  ...formData.legal,
                  agreedToTerms: e.target.checked,
                },
              })
            }
            className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-600 shrink-0"
          />
          <span className="text-gray-700">
            I have read and agree to the Terms of Service and Professional
            Commitment requirements
          </span>
        </label>

        <label className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
          <input
            type="checkbox"
            checked={formData.legal.agreedToPrivacy}
            onChange={(e) =>
              updateFormData({
                legal: {
                  ...formData.legal,
                  agreedToPrivacy: e.target.checked,
                },
              })
            }
            className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-600 shrink-0"
          />
          <span className="text-gray-700">
            I agree to the Privacy Policy and data handling practices
          </span>
        </label>

        <label className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
          <input
            type="checkbox"
            checked={formData.legal.agreedToCommitment}
            onChange={(e) =>
              updateFormData({
                legal: {
                  ...formData.legal,
                  agreedToCommitment: e.target.checked,
                },
              })
            }
            className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-600 shrink-0"
          />
          <span className="text-gray-700">
            I commit to maintaining active engagement with the platform and
            providing quality healthcare services
          </span>
        </label>
      </div>

      {/* Electronic Signature */}
      <div className="mb-6 sm:mb-8">
        <label className="block text-gray-700 mb-2 text-sm sm:text-base">
          Electronic Signature *
          <span className="text-xs sm:text-sm text-gray-500 block mt-0.5">
            Type your full name as it appears in your registration
          </span>
        </label>
        <div className="relative">
          <input
            type="text"
            value={formData.legal.signature}
            onChange={(e) => handleSignatureChange(e.target.value)}
            className={`w-full px-4 py-3 sm:py-4 rounded-xl border-2 bg-gray-50 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-xl sm:text-2xl md:text-3xl text-center ${
              isSignatureValid
                ? "border-green-500 bg-green-50"
                : "border-gray-300"
            } ${alexBrush.className}`}
            placeholder="Your full name will appear here"
          />

          {/* Signature Preview (only shown if signature exists) */}
          {formData.legal.signature && (
            <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gray-50 rounded-xl border">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                Signature Preview:
              </p>
              <p
                className={`text-xl sm:text-2xl text-center ${alexBrush.className} text-gray-800 break-words`}
              >
                {formData.legal.signature}
              </p>
            </div>
          )}

          {/* Validation Error */}
          {formData.legal.signature && !isSignatureValid && (
            <p className="text-red-600 text-xs sm:text-sm mt-2 flex items-center gap-1">
              <AlertTriangle size={14} />
              Signature must match your registered name exactly
            </p>
          )}
        </div>
      </div>

      {/* Security Assurance */}
      <div className="flex items-center justify-center gap-2 text-green-600 mb-6 sm:mb-8">
        <Shield size={18} />
        <span className="text-xs sm:text-sm font-medium">
          Your information is secured with enterprise‑grade encryption
        </span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-xl text-sm sm:text-base text-gray-600 hover:bg-gray-50 transition-colors order-2 sm:order-1"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          disabled={!isFormValid || isSubmitting}
          className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-green-600 text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 order-1 sm:order-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <CheckCircle size={18} />
              <span>Complete Registration</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default LegalAgreement;
