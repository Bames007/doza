import React from "react";
import { CheckCircle, Clock, Mail, Phone } from "lucide-react";
import { MedicRegistrationData } from "../type";

interface SuccessStepProps {
  formData: MedicRegistrationData;
}

const SuccessStep: React.FC<SuccessStepProps> = ({ formData }) => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={40} className="text-green-600" />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Welcome to Our Healthcare Network!
      </h2>

      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Thank you for registering as a healthcare professional. Your application
        is under review and you'll hear from us within 24-48 hours.
      </p>

      {/* Next Steps */}
      <div className="bg-blue-50 rounded-xl p-6 max-w-md mx-auto mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
          <Clock size={20} />
          What's Next?
        </h3>
        <ul className="text-left text-gray-600 space-y-3 text-sm">
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-sm font-bold">1</span>
            </div>
            <span>Document verification and background check</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-sm font-bold">2</span>
            </div>
            <span>Platform orientation and setup</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-sm font-bold">3</span>
            </div>
            <span>Profile optimization and patient matching</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-sm font-bold">4</span>
            </div>
            <span>Start receiving patient appointments</span>
          </li>
        </ul>
      </div>

      {/* Contact Information */}
      <div className="border-t pt-6">
        <p className="text-gray-600 mb-4">
          Need immediate assistance? Contact our support team:
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail size={16} />
            <span>help@dozamedic.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone size={16} />
            <span>+234 81 2772 8084</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStep;
