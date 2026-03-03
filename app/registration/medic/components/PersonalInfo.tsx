import React, { ChangeEvent } from "react";
import { User, Mail, Phone, Calendar, Upload } from "lucide-react";
import { MedicRegistrationData } from "../type";

interface PersonalInfoProps {
  formData: MedicRegistrationData;
  updateFormData: (updates: Partial<MedicRegistrationData>) => void;
  onBack: () => void;
  onNext: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  formData,
  updateFormData,
  onBack,
  onNext,
}) => {
  const handleInputChange = (
    field: keyof typeof formData.personalInfo,
    value: string,
  ) => {
    updateFormData({
      personalInfo: {
        ...formData.personalInfo,
        [field]: value,
      },
    });
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateFormData({
          personalInfo: {
            ...formData.personalInfo,
            profilePhoto: reader.result as string,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const isFormValid =
    formData.personalInfo.firstName.trim() !== "" &&
    formData.personalInfo.lastName.trim() !== "" &&
    formData.personalInfo.email.trim() !== "" &&
    formData.personalInfo.phone.trim() !== "" &&
    formData.personalInfo.dateOfBirth.trim() !== "" &&
    formData.personalInfo.gender.trim() !== "";

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
      <div className="text-center mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <User className="text-blue-600" size={24} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
          Personal Information
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Tell us about yourself
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {/* Profile Photo */}
        <div className="text-center">
          <label className="block text-gray-700 mb-3 text-sm sm:text-base">
            Profile Photo
          </label>
          <div className="flex flex-col items-center">
            {formData.personalInfo.profilePhoto ? (
              <div className="relative">
                <img
                  src={formData.personalInfo.profilePhoto}
                  alt="Profile"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-blue-100"
                />
                <button
                  onClick={() => handleInputChange("profilePhoto", "")}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs w-5 h-5 flex items-center justify-center"
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center mb-3">
                <User size={32} className="text-gray-400" />
              </div>
            )}
            <label className="cursor-pointer">
              <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition-colors">
                <Upload size={16} />
                <span>Upload Photo</span>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
              First Name *
            </label>
            <input
              type="text"
              value={formData.personalInfo.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
              Last Name *
            </label>
            <input
              type="text"
              value={formData.personalInfo.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
              Email Address *
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="email"
                value={formData.personalInfo.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
              Phone Number *
            </label>
            <div className="relative">
              <Phone
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="tel"
                value={formData.personalInfo.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
              Date of Birth *
            </label>
            <div className="relative">
              <Calendar
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="date"
                value={formData.personalInfo.dateOfBirth}
                onChange={(e) =>
                  handleInputChange("dateOfBirth", e.target.value)
                }
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
              Gender *
            </label>
            <select
              value={formData.personalInfo.gender}
              onChange={(e) => handleInputChange("gender", e.target.value)}
              className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
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
          Continue
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
