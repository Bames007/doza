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
    value: string
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
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="text-blue-600" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Personal Information
        </h2>
        <p className="text-gray-600">Tell us about yourself</p>
      </div>

      <div className="space-y-6">
        {/* Profile Photo */}
        <div className="text-center">
          <label className="block text-gray-700 mb-4">Profile Photo</label>
          <div className="flex flex-col items-center">
            {formData.personalInfo.profilePhoto ? (
              <div className="relative">
                <img
                  src={formData.personalInfo.profilePhoto}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
                />
                <button
                  onClick={() => handleInputChange("profilePhoto", "")}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 text-gray-900 flex items-center justify-center mb-4">
                <User size={48} className="text-gray-400" />
              </div>
            )}
            <label className="cursor-pointer">
              <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Upload size={20} />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">First Name *</label>
            <input
              type="text"
              value={formData.personalInfo.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Last Name *</label>
            <input
              type="text"
              value={formData.personalInfo.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Email Address *</label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                value={formData.personalInfo.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone Number *</label>
            <div className="relative">
              <Phone
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="tel"
                value={formData.personalInfo.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Date of Birth *</label>
            <div className="relative">
              <Calendar
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="date"
                value={formData.personalInfo.dateOfBirth}
                onChange={(e) =>
                  handleInputChange("dateOfBirth", e.target.value)
                }
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 text-gray-900 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Gender *</label>
            <select
              value={formData.personalInfo.gender}
              onChange={(e) => handleInputChange("gender", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
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

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 text-gray-900 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!isFormValid}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
