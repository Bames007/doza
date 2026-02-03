import React from "react";
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
  const handleSignatureChange = (signature: string) => {
    updateFormData({
      legal: {
        ...formData.legal,
        signature,
        date: new Date().toISOString(),
      },
    });
  };

  const isFormValid =
    formData.legal.agreedToTerms &&
    formData.legal.agreedToPrivacy &&
    formData.legal.agreedToCommitment &&
    formData.legal.signature.trim() ===
      `${formData.personalInfo.firstName} ${formData.personalInfo.lastName}`;

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="text-blue-600" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Professional Agreement
        </h2>
        <p className="text-gray-600">
          Review and accept our terms to join the platform
        </p>
      </div>

      {/* Commitment Warning */}
      <div className="mb-8 p-6 bg-orange-50 border border-orange-200 rounded-xl">
        <div className="flex items-start gap-4">
          <AlertTriangle
            className="text-orange-500 mt-1 flex-shrink-0"
            size={24}
          />
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-2">
              Platform Commitment
            </h3>
            <p className="text-orange-700 text-sm">
              To maintain service quality and patient trust, we require all
              professionals to maintain active engagement with the platform.
              Inactive accounts or consistent patient dissatisfaction may result
              in profile suspension.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6 max-h-96 overflow-y-auto mb-8 p-4 border border-gray-200 rounded-xl">
        {/* Terms of Service */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Terms of Service
          </h3>
          <div className="space-y-3 text-gray-700 text-sm">
            <p>
              <strong>1. Professional Commitment:</strong> I agree to maintain
              regular activity on the platform and respond to patient inquiries
              within 24 hours during business days.
            </p>
            <p>
              <strong>2. Service Quality:</strong> I commit to providing
              high-quality healthcare services and maintaining professional
              standards as per my licensing board requirements.
            </p>
            <p>
              <strong>3. Platform Engagement:</strong> I understand that
              consistent patient no-shows or cancellations on my part may affect
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
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Privacy & Data Protection
          </h3>
          <div className="space-y-3 text-gray-700 text-sm">
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
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Quality & Performance Agreement
          </h3>
          <div className="space-y-3 text-gray-700 text-sm">
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
      <div className="space-y-4 mb-8">
        <label className="flex items-start gap-3">
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
            className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
          />
          <span className="text-gray-700">
            I have read and agree to the Terms of Service and Professional
            Commitment requirements
          </span>
        </label>

        <label className="flex items-start gap-3">
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
            className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
          />
          <span className="text-gray-700">
            I agree to the Privacy Policy and data handling practices
          </span>
        </label>

        <label className="flex items-start gap-3">
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
            className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
          />
          <span className="text-gray-700">
            I commit to maintaining active engagement with the platform and
            providing quality healthcare services
          </span>
        </label>
      </div>

      {/* Electronic Signature */}
      <div className="mb-8">
        <label className="block text-gray-700 mb-3">
          Electronic Signature *
          <span className="text-sm text-gray-500 block">
            Type your full name as it appears in your registration
          </span>
        </label>
        <div className="relative">
          <input
            type="text"
            value={formData.legal.signature}
            onChange={(e) => handleSignatureChange(e.target.value)}
            className={`w-full px-4 py-4 rounded-xl border-2 bg-gray-50 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all ${
              formData.legal.signature ===
              `${formData.personalInfo.firstName} ${formData.personalInfo.lastName}`
                ? "border-green-500 bg-green-50"
                : "border-gray-300"
            } ${alexBrush.className} text-3xl text-center`}
            placeholder="Type your full name here"
          />

          {/* Signature Preview */}
          {formData.legal.signature && (
            <div className="mt-4 p-4 bg-gray-50 rounded-xl border">
              <p className="text-sm text-gray-600 mb-2">Signature Preview:</p>
              <p
                className={`text-2xl text-center ${alexBrush.className} text-gray-800`}
              >
                {formData.legal.signature}
              </p>
            </div>
          )}

          {/* Signature Validation */}
          {formData.legal.signature &&
            formData.legal.signature !==
              `${formData.personalInfo.firstName} ${formData.personalInfo.lastName}` && (
              <p className="text-red-600 text-sm mt-2 flex items-center gap-2">
                <AlertTriangle size={16} />
                Signature must match your registered name exactly
              </p>
            )}
        </div>
      </div>

      {/* Security Assurance */}
      <div className="flex items-center justify-center gap-2 text-green-600 mb-8">
        <Shield size={20} />
        <span className="text-sm font-medium">
          Your information is secured with enterprise-grade encryption
        </span>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <button
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          disabled={!isFormValid || isSubmitting}
          className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <CheckCircle size={20} />
              Complete Registration
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default LegalAgreement;
