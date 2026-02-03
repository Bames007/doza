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
    (role) => role.id === formData.professionalInfo.role
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
        newQualification.trim()
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
          (q) => q !== qualification
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
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Award className="text-green-600" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Professional Information
        </h2>
        <p className="text-gray-600">
          Share your professional background and expertise
        </p>
      </div>

      <div className="space-y-6">
        {/* License Number */}
        <div>
          <label className="block text-gray-700 mb-2">
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
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
            placeholder="Enter your license number"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block text-gray-700 mb-2">
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
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
            placeholder="Number of years"
          />
        </div>

        {/* Specialties */}
        {selectedRole && selectedRole.specialties.length > 0 && (
          <div>
            <label className="block text-gray-700 mb-4">
              Specialties * (Select all that apply)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {selectedRole.specialties.map((specialty) => (
                <label
                  key={specialty}
                  className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.professionalInfo.specialties.includes(specialty)
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 bg-gray-50 hover:border-blue-400"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.professionalInfo.specialties.includes(
                      specialty
                    )}
                    onChange={() => handleSpecialtyToggle(specialty)}
                    className="rounded border-gray-300 text-gray-900 text-blue-600 focus:ring-blue-600 mr-3"
                  />
                  <span className="text-gray-700">{specialty}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Custom Specialty */}
        {formData.professionalInfo.specialties.length === 0 && (
          <div>
            <label className="block text-gray-700 mb-2">
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
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="Enter your specialty"
            />
          </div>
        )}

        {/* Qualifications */}
        <div>
          <label className="block text-gray-700 mb-4">
            Qualifications & Certifications *
          </label>
          <div className="space-y-3">
            {formData.professionalInfo.qualifications.map(
              (qualification, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap size={20} className="text-gray-400" />
                    <span className="text-gray-700">{qualification}</span>
                  </div>
                  <button
                    onClick={() => removeQualification(qualification)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X size={20} />
                  </button>
                </div>
              )
            )}

            <div className="flex gap-2">
              <input
                type="text"
                value={newQualification}
                onChange={(e) => setNewQualification(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addQualification()}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                placeholder="Add a qualification or certification"
              />
              <button
                onClick={addQualification}
                disabled={!newQualification.trim()}
                className="bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Professional Bio */}
        <div>
          <label className="block text-gray-700 mb-2">
            Professional Bio
            <span className="text-sm text-gray-500 block">
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
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
            placeholder="Describe your professional experience, approach to care, and any special expertise..."
          />
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

export default ProfessionalInfo;
