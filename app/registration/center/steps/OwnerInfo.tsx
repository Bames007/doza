import React, { ChangeEvent } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { bebasNeue, poppins } from "../../../home/doza_center/constant";
import { CenterRegistrationData, OwnerInfo } from "../type";

interface OwnerInfoStepProps {
  formData: CenterRegistrationData;
  onNestedInputChange: (
    section: keyof CenterRegistrationData,
    field: keyof OwnerInfo,
    value: string | boolean
  ) => void;
  onBack: () => void;
  onNext: () => void;
}

const OwnerInfoStep: React.FC<OwnerInfoStepProps> = ({
  formData,
  onNestedInputChange,
  onBack,
  onNext,
}) => {
  return (
    <motion.div
      key="owner"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-6xl mx-auto"
    >
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6"
        >
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span
            className={`text-emerald-700 font-medium text-xs sm:text-sm ${poppins.className}`}
          >
            STEP 3 OF 4 - OWNER INFORMATION
          </span>
        </motion.div>

        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 ${bebasNeue.className}`}
        >
          Owner Information
        </h2>
        <p
          className={`text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 ${poppins.className}`}
        >
          Tell us about the person responsible for this facility
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl shadow-emerald-500/5 border border-emerald-100">
        {/* Ownership Confirmation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200"
        >
          <label className="flex items-start sm:items-center gap-3 sm:gap-4 text-gray-700 text-sm sm:text-base cursor-pointer group">
            <div className="relative mt-1 sm:mt-0 flex-shrink-0">
              <input
                type="checkbox"
                checked={formData.ownerInfo.isOwner}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onNestedInputChange("ownerInfo", "isOwner", e.target.checked)
                }
                className="w-5 h-5 rounded border-2 border-gray-300 text-emerald-600 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300"
              />
            </div>
            <div className="flex-1">
              <span className="font-semibold text-gray-900 text-sm sm:text-base">
                I am the owner of this healthcare facility
              </span>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Confirm that you are the legal owner or authorized
                representative
              </p>
            </div>
          </label>
        </motion.div>

        {!formData.ownerInfo.isOwner && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 sm:mb-8 p-4 sm:p-6 bg-amber-50 rounded-2xl border border-amber-200"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                <span className="text-white text-xs sm:text-sm font-bold">
                  !
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 text-sm sm:text-base mb-2">
                  Authorization Required
                </h4>
                <p className="text-amber-700 text-xs sm:text-sm leading-relaxed">
                  If you are not the owner, you must have written authorization
                  from the legal owner to register this facility. This
                  documentation may be requested during the verification
                  process.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Personal Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
              <User className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3
                className={`text-xl sm:text-2xl font-bold text-gray-900 ${bebasNeue.className}`}
              >
                Personal Details
              </h3>
              <p className={`text-gray-600 text-sm ${poppins.className}`}>
                Your contact and role information
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div>
              <label className="block text-gray-700 mb-2 sm:mb-3 font-medium text-sm">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.ownerInfo.fullName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onNestedInputChange("ownerInfo", "fullName", e.target.value)
                }
                className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-gray-900 border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all duration-300 text-sm sm:text-base"
                placeholder="Enter your full legal name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 sm:mb-3 font-medium text-sm">
                Position/Role *
              </label>
              <div className="relative">
                <select
                  value={formData.ownerInfo.position}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    onNestedInputChange("ownerInfo", "position", e.target.value)
                  }
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-gray-900 border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all duration-300 text-sm sm:text-base appearance-none bg-white pr-12"
                >
                  <option value="Owner">Owner</option>
                  <option value="Director">Director</option>
                  <option value="Manager">Manager</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Other">Other</option>
                </select>
                <Briefcase className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
              <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3
                className={`text-xl sm:text-2xl font-bold text-gray-900 ${bebasNeue.className}`}
              >
                Contact Information
              </h3>
              <p className={`text-gray-600 text-sm ${poppins.className}`}>
                How we can reach you
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div>
              <label className="block text-gray-700 mb-2 sm:mb-3 font-medium text-sm">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.ownerInfo.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onNestedInputChange("ownerInfo", "email", e.target.value)
                  }
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-gray-900 border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all duration-300 text-sm sm:text-base pl-12 sm:pl-14"
                  placeholder="Enter your email address"
                  required
                />
                <Mail className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 sm:mb-3 font-medium text-sm">
                Phone Number *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={formData.ownerInfo.phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onNestedInputChange("ownerInfo", "phone", e.target.value)
                  }
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-gray-900 border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all duration-300 text-sm sm:text-base pl-12 sm:pl-14"
                  placeholder="Enter your phone number"
                  required
                />
                <Phone className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-200"
        >
          <motion.button
            type="button"
            onClick={onBack}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-2xl text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm sm:text-base font-medium order-2 sm:order-1 min-h-[44px]"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span>Back to Center Details</span>
          </motion.button>
          <motion.button
            type="button"
            onClick={onNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base order-1 sm:order-2 min-h-[44px]"
          >
            <span>Continue to Legal</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OwnerInfoStep;
