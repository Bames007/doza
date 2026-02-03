import React, { ChangeEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Building,
  Stethoscope,
  Pill,
  Eye,
  FlaskRound,
  Ambulance,
  Heart,
  LucideLaugh,
  Plus,
  ArrowRight,
} from "lucide-react";
import { bebasNeue, poppins } from "../../../home/doza_center/constant";
import { CenterRegistrationData } from "../type";

interface CenterTypeStepProps {
  selectedCenterType: string;
  onCenterTypeSelect: (typeId: string) => void;
  formData: CenterRegistrationData;
  onInputChange: (field: keyof CenterRegistrationData, value: any) => void;
  onCustomContinue: () => void;
}

const centerTypes = [
  {
    id: "hospital",
    icon: Building,
    title: "Hospital",
    description: "Comprehensive medical facility with multiple departments",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    id: "clinic",
    icon: Stethoscope,
    title: "Clinic",
    description: "General medical practice and outpatient care",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "pharmacy",
    icon: Pill,
    title: "Pharmacy",
    description: "Medication dispensing and pharmaceutical services",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: "eye-center",
    icon: Eye,
    title: "Eye Center",
    description: "Ophthalmology and vision care services",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    id: "dental-clinic",
    icon: LucideLaugh,
    title: "Dental Clinic",
    description: "Dental care and oral health services",
    gradient: "from-lime-500 to-green-600",
  },
  {
    id: "laboratory",
    icon: FlaskRound,
    title: "Laboratory",
    description: "Medical testing and diagnostic services",
    gradient: "from-emerald-500 to-cyan-600",
  },
  {
    id: "emergency",
    icon: Ambulance,
    title: "Emergency Services",
    description: "Urgent care and emergency response",
    gradient: "from-red-500 to-orange-600",
  },
  {
    id: "cardiac-center",
    icon: Heart,
    title: "Cardiac Center",
    description: "Heart and cardiovascular care",
    gradient: "from-rose-500 to-pink-600",
  },
];

const CenterTypeStep: React.FC<CenterTypeStepProps> = ({
  selectedCenterType,
  onCenterTypeSelect,
  formData,
  onInputChange,
  onCustomContinue,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Set initial value
      checkMobile();

      // Add event listener for window resize
      window.addEventListener("resize", checkMobile);

      // Cleanup
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const handleCustomTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange("customType", e.target.value);
  };

  return (
    <motion.div
      key="type"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 sm:gap-3 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6"
        >
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span
            className={`text-emerald-700 font-medium text-xs sm:text-sm ${poppins.className}`}
          >
            STEP 1 OF 4
          </span>
        </motion.div>

        <h2
          className={`text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 ${bebasNeue.className}`}
        >
          Choose Your Facility Type
        </h2>
        <p
          className={`text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed ${poppins.className} px-2`}
        >
          Select the category that best represents your healthcare facility.
          This helps us customize your registration experience.
        </p>
      </div>

      {/* Center Types Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {centerTypes.map((center, index) => {
          const Icon = center.icon;
          const isSelected = selectedCenterType === center.id;

          return (
            <motion.div
              key={center.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: !isMobile ? 1.02 : 1,
                y: !isMobile ? -4 : 0,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onCenterTypeSelect(center.id)}
              className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 group overflow-hidden ${
                isSelected
                  ? "bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-500 shadow-lg sm:shadow-xl shadow-emerald-500/20"
                  : "bg-white border-2 border-gray-200 hover:border-emerald-300 hover:shadow-md sm:hover:shadow-lg hover:shadow-emerald-500/10"
              }`}
            >
              {/* Background Gradient Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${center.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Selection Indicator */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full flex items-center justify-center"
                >
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 sm:w-3 sm:h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </motion.div>
              )}

              {/* Icon Container */}
              <div
                className={`relative w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl mb-3 sm:mb-4 flex items-center justify-center transition-all duration-300 ${
                  isSelected
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                    : "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white"
                }`}
              >
                <Icon
                  size={20}
                  className="sm:w-6 sm:h-6 transition-all duration-300"
                />
              </div>

              {/* Content */}
              <h3
                className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 transition-colors duration-300 ${
                  isSelected
                    ? "text-gray-900"
                    : "text-gray-800 group-hover:text-gray-900"
                } ${bebasNeue.className}`}
              >
                {center.title}
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                  isSelected
                    ? "text-gray-700"
                    : "text-gray-600 group-hover:text-gray-700"
                } ${poppins.className}`}
              >
                {center.description}
              </p>

              {/* Hover Arrow - Hidden on mobile for cleaner look */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block"
              >
                <ArrowRight size={16} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Custom Type Option */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-emerald-50/80 to-green-50/80 rounded-xl sm:rounded-2xl border-2 border-emerald-200 p-4 sm:p-6 lg:p-8 backdrop-blur-sm"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
            <Plus className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1">
            <h3
              className={`text-xl sm:text-2xl font-bold text-gray-900 mb-1 ${bebasNeue.className}`}
            >
              Don't See Your Facility Type?
            </h3>
            <p
              className={`text-gray-600 text-sm sm:text-base ${poppins.className}`}
            >
              Specify your custom healthcare facility type below
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="Enter your specific facility type (e.g., Rehabilitation Center, Mental Health Clinic, etc.)"
              value={formData.customType ?? ""}
              onChange={handleCustomTypeChange}
              className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-300 focus:border-emerald-500 focus:ring-2 sm:focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 text-sm sm:text-base bg-white/50 backdrop-blur-sm"
            />
          </div>
          <motion.button
            onClick={onCustomContinue}
            disabled={!(formData.customType ?? "").trim()}
            whileHover={{ scale: !isMobile ? 1.02 : 1 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            <span className="text-sm sm:text-base">Continue with Custom</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </motion.button>
        </div>

        {/* Helper Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={`text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 text-center ${poppins.className}`}
        >
          Your custom type will be reviewed and approved by our team
        </motion.p>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-pulse"></div>
          <span
            className={`text-xs sm:text-sm font-medium text-gray-600 ${poppins.className}`}
          >
            {selectedCenterType
              ? "Type selected"
              : "Choose a facility type to continue"}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CenterTypeStep;
