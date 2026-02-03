import React from "react";
import { motion } from "framer-motion";
import { MedicRegistrationData, MedicRole } from "../type";
import { medicRoles } from "../data/constants";

interface RoleSelectionProps {
  formData: MedicRegistrationData;
  updateFormData: (updates: Partial<MedicRegistrationData>) => void;
  onNext: () => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({
  formData,
  updateFormData,
  onNext,
}) => {
  const handleRoleSelect = (role: MedicRole) => {
    updateFormData({
      professionalInfo: {
        ...formData.professionalInfo,
        role: role.id,
        specialties: [],
      },
    });
  };

  const isFormValid = formData.professionalInfo.role !== "";

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What's Your Professional Role?
        </h2>
        <p className="text-gray-600">
          Select the role that best describes your healthcare expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {medicRoles.map((role) => {
          const IconComponent = role.icon;
          return (
            <motion.div
              key={role.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleRoleSelect(role)}
              className={`p-4 sm:p-6 rounded-xl border-2 cursor-pointer transition-all ${
                formData.professionalInfo.role === role.id
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-white hover:border-blue-400"
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <IconComponent className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {role.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {role.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Custom Role Input */}
      {formData.professionalInfo.role === "other" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mb-6"
        >
          <label className="block text-gray-700 mb-2">
            Specify Your Professional Role
          </label>
          <input
            type="text"
            value={formData.professionalInfo.customRole}
            onChange={(e) =>
              updateFormData({
                professionalInfo: {
                  ...formData.professionalInfo,
                  customRole: e.target.value,
                },
              })
            }
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
            placeholder="e.g., Physical Therapist, Nutritionist..."
          />
          <button
            onClick={onNext}
            className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        </motion.div>
      )}

      {formData.professionalInfo.role !== "other" &&
        formData.professionalInfo.role !== "" && (
          <div className="flex justify-end">
            <button
              onClick={onNext}
              disabled={!isFormValid}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Continue
            </button>
          </div>
        )}
    </div>
  );
};

export default RoleSelection;
