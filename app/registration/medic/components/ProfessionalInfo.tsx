import React, { useState } from "react";
import { Award, GraduationCap, FileText, Plus, X } from "lucide-react";
import { MedicRegistrationData } from "../type";
import { medicRoles } from "../data/constants";

interface ProfessionalInfoProps {
  formData: MedicRegistrationData;
  updateFormData: (updates: Partial<MedicRegistrationData>) => void;
  onBack: () => void;
  onNext: () => void;
}

const ProfessionalInfo: React.FC<ProfessionalInfoProps> = ({
  formData,
  updateFormData,
  onBack,
  onNext,
}) => {
  const [newQualification, setNewQualification] = useState("");

  const selectedRole = medicRoles.find(
    (role) => role.id === formData.professionalInfo.role,
  );

  const handleSpecialtyToggle = (specialty: string) => {
    const currentSpecialties = formData.professionalInfo.specialties;
    const updatedSpecialties = currentSpecialties.includes(specialty)
      ? currentSpecialties.filter((s) => s !== specialty)
      : [...currentSpecialties, specialty];

    updateFormData({
      professionalInfo: {
        ...formData.professionalInfo,
        specialties: updatedSpecialties,
      },
    });
  };

  const addQualification = () => {
    if (
      newQualification.trim() &&
      !formData.professionalInfo.qualifications.includes(
        newQualification.trim(),
      )
    ) {
      updateFormData({
        professionalInfo: {
          ...formData.professionalInfo,
          qualifications: [
            ...formData.professionalInfo.qualifications,
            newQualification.trim(),
          ],
        },
      });
      setNewQualification("");
    }
  };

  const removeQualification = (qualification: string) => {
    updateFormData({
      professionalInfo: {
        ...formData.professionalInfo,
        qualifications: formData.professionalInfo.qualifications.filter(
          (q) => q !== qualification,
        ),
      },
    });
  };

  const isFormValid =
    formData.professionalInfo.licenseNumber.trim() !== "" &&
    formData.professionalInfo.yearsOfExperience > 0 &&
    formData.professionalInfo.specialties.length > 0 &&
    formData.professionalInfo.qualifications.length > 0;

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
      <div className="text-center mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <Award className="text-green-600" size={24} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
          Professional Information
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Share your professional background and expertise
        </p>
      </div>

      <div className="space-y-5 sm:space-y-6">
        {/* License Number */}
        <div>
          <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
            Professional License Number *
          </label>
          <input
            type="text"
            value={formData.professionalInfo.licenseNumber}
            onChange={(e) =>
              updateFormData({
                professionalInfo: {
                  ...formData.professionalInfo,
                  licenseNumber: e.target.value,
                },
              })
            }
            className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
            placeholder="Enter your license number"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
            Years of Experience *
          </label>
          <input
            type="number"
            min="0"
            max="50"
            value={formData.professionalInfo.yearsOfExperience}
            onChange={(e) =>
              updateFormData({
                professionalInfo: {
                  ...formData.professionalInfo,
                  yearsOfExperience: parseInt(e.target.value) || 0,
                },
              })
            }
            className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
            placeholder="Number of years"
          />
        </div>

        {/* Specialties */}
        {selectedRole && selectedRole.specialties.length > 0 && (
          <div>
            <label className="block text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
              Specialties * (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {selectedRole.specialties.map((specialty) => (
                <label
                  key={specialty}
                  className={`flex items-center p-2.5 sm:p-3 rounded-lg border-2 cursor-pointer transition-all text-sm sm:text-base ${
                    formData.professionalInfo.specialties.includes(specialty)
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 bg-gray-50 hover:border-blue-400"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.professionalInfo.specialties.includes(
                      specialty,
                    )}
                    onChange={() => handleSpecialtyToggle(specialty)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-600 mr-2 sm:mr-3 shrink-0"
                  />
                  <span className="text-gray-700 break-words">{specialty}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Custom Specialty */}
        {formData.professionalInfo.specialties.length === 0 && (
          <div>
            <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
              Please specify your specialty *
            </label>
            <input
              type="text"
              value={formData.professionalInfo.customSpecialty}
              onChange={(e) =>
                updateFormData({
                  professionalInfo: {
                    ...formData.professionalInfo,
                    customSpecialty: e.target.value,
                  },
                })
              }
              className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
              placeholder="Enter your specialty"
            />
          </div>
        )}

        {/* Qualifications */}
        <div>
          <label className="block text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
            Qualifications & Certifications *
          </label>
          <div className="space-y-2 sm:space-y-3">
            {formData.professionalInfo.qualifications.map(
              (qualification, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <GraduationCap
                      size={16}
                      className="text-gray-400 shrink-0"
                    />
                    <span className="text-gray-700 text-sm sm:text-base truncate">
                      {qualification}
                    </span>
                  </div>
                  <button
                    onClick={() => removeQualification(qualification)}
                    className="text-red-500 hover:text-red-700 p-1 shrink-0"
                  >
                    <X size={16} />
                  </button>
                </div>
              ),
            )}

            <div className="flex gap-2">
              <input
                type="text"
                value={newQualification}
                onChange={(e) => setNewQualification(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addQualification()}
                className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
                placeholder="Add a qualification"
              />
              <button
                onClick={addQualification}
                disabled={!newQualification.trim()}
                className="bg-blue-600 text-white px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Professional Bio */}
        <div>
          <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
            Professional Bio
            <span className="text-xs sm:text-sm text-gray-500 block mt-0.5">
              Briefly describe your professional background and approach
            </span>
          </label>
          <textarea
            value={formData.professionalInfo.bio}
            onChange={(e) =>
              updateFormData({
                professionalInfo: {
                  ...formData.professionalInfo,
                  bio: e.target.value,
                },
              })
            }
            rows={4}
            className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none resize-none text-sm sm:text-base"
            placeholder="Describe your professional experience, approach to care, and any special expertise..."
          />
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

export default ProfessionalInfo;
