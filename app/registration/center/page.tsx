"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CenterRegistrationData } from "./type";
import Header from "./Header";
import CenterTypeStep from "./steps/CenterTypeStep";
import DetailsStep from "./steps/DetailsStep";
import OwnerInfoStep from "./steps/OwnerInfo";
import LegalStep from "./steps/LegalStep";
import SuccessStep from "./steps/SuccessStep";

const CenterRegistration: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<
    "type" | "details" | "owner" | "legal" | "success"
  >("type");
  const [selectedCenterType, setSelectedCenterType] = useState<string>("");
  const [formData, setFormData] = useState<CenterRegistrationData>({
    centerType: "",
    customType: "",
    centerName: "",
    logo: null,
    location: {
      address: "",
      lat: 0,
      lng: 0,
    },
    registrationNumbers: {
      cac: "",
      state: "",
      federal: "",
    },
    operatingHours: {
      opening: "08:00",
      closing: "18:00",
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    },
    contact: {
      phone: "",
      email: "",
      website: "",
    },
    ownerInfo: {
      isOwner: true,
      fullName: "",
      email: "",
      phone: "",
      position: "Owner",
    },
    specificDetails: {},
    legal: {
      agreed: false,
      signature: "",
      date: "",
    },
    createdAt: "",
    status: "pending",
    verified: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    field: keyof CenterRegistrationData,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNestedInputChange = (
    section: keyof CenterRegistrationData,
    field: string,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section] as any),
        [field]: value,
      },
    }));
  };

  const handleDeepNestedInputChange = (
    section: keyof CenterRegistrationData,
    subSection: string,
    field: string,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section] as any),
        [subSection]: {
          ...((prev[section] as any)[subSection] || {}),
          [field]: value,
        },
      },
    }));
  };

  const handleCenterTypeSelect = (typeId: string) => {
    setSelectedCenterType(typeId);
    setFormData((prev) => ({
      ...prev,
      centerType: typeId,
    }));

    if (typeId !== "other") {
      setTimeout(() => setCurrentStep("details"), 500);
    }
  };

  const handleCustomCenterContinue = () => {
    if ((formData.customType ?? "").trim()) {
      setFormData((prev) => ({
        ...prev,
        centerType: "other",
      }));
      setTimeout(() => setCurrentStep("details"), 500);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setCurrentStep("success");
      setIsSubmitting(false);
    }, 2000);
  };

  const steps = [
    { key: "type" as const, label: "Center Type", number: 1 },
    { key: "details" as const, label: "Details", number: 2 },
    { key: "owner" as const, label: "Owner", number: 3 },
    { key: "legal" as const, label: "Legal", number: 4 },
  ];

  const getStepIndex = (step: string) => {
    return steps.findIndex((s) => s.key === step);
  };

  const currentStepIndex = getStepIndex(currentStep);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50/30 py-4 sm:py-8 relative overflow-hidden">
      {/* Enhanced Background decorative elements - Reduced for mobile */}
      <div className="absolute top-4 left-4 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-4 right-4 w-48 h-48 sm:w-96 sm:h-96 bg-lime-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-teal-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-10 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-green-200/30 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob animation-delay-3000"></div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <Header />

        {/* Enhanced Progress Bar - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          {/* Mobile Step Indicator */}
          <div className="sm:hidden mb-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-emerald-100 shadow-lg"
            >
              <div className="text-sm text-gray-600 font-medium mb-1">
                Step {currentStepIndex + 1} of {steps.length}
              </div>
              <div className="text-lg font-bold text-gray-900">
                {steps[currentStepIndex]?.label}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${((currentStepIndex + 1) / steps.length) * 100}%`,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-lg shadow-emerald-200/50"
                />
              </div>
            </motion.div>
          </div>

          {/* Desktop Progress Bar */}
          <div className="hidden sm:flex items-center justify-between mb-6 lg:mb-8">
            {steps.map((step, index) => {
              const isCompleted = currentStepIndex > index;
              const isActive = currentStep === step.key;
              const isUpcoming = currentStepIndex < index;

              return (
                <React.Fragment key={step.key}>
                  <div className="flex flex-col items-center flex-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-sm lg:text-base font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-2xl shadow-emerald-500/30 ring-4 ring-emerald-100"
                          : isCompleted
                          ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-2xl shadow-emerald-500/25 ring-2 ring-emerald-50"
                          : "bg-white text-gray-400 border-2 border-gray-200 shadow-sm"
                      }`}
                    >
                      {isCompleted ? (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-4 h-4 lg:w-6 lg:h-6"
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
                      ) : (
                        <motion.span
                          key={step.number}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {step.number}
                        </motion.span>
                      )}

                      {/* Active step pulse effect */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-emerald-500"
                          initial={{ scale: 1, opacity: 1 }}
                          animate={{ scale: 1.8, opacity: 0 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      )}
                    </motion.div>

                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className={`mt-2 lg:mt-4 text-xs lg:text-sm font-semibold text-center px-1 ${
                        isActive
                          ? "text-gray-900 font-bold"
                          : isCompleted
                          ? "text-gray-800"
                          : "text-gray-500"
                      }`}
                    >
                      {step.label}
                    </motion.span>

                    {/* Step description - hidden on small screens */}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-1 text-xs text-gray-600 text-center px-2 hidden lg:block"
                    >
                      {step.key === "type" && "Choose your center type"}
                      {step.key === "details" && "Enter center information"}
                      {step.key === "owner" && "Provide owner details"}
                      {step.key === "legal" && "Review and agree to terms"}
                    </motion.span>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="flex-1 mx-2 lg:mx-6 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: isCompleted ? "100%" : "0%" }}
                        animate={{
                          width: isCompleted
                            ? "100%"
                            : currentStepIndex > index
                            ? "100%"
                            : "0%",
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-lg shadow-emerald-200/50"
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

        {/* Step Content - Mobile Optimized */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            {currentStep === "type" && (
              <motion.div
                key="type"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <CenterTypeStep
                  selectedCenterType={selectedCenterType}
                  onCenterTypeSelect={handleCenterTypeSelect}
                  formData={formData}
                  onInputChange={handleInputChange}
                  onCustomContinue={handleCustomCenterContinue}
                />
              </motion.div>
            )}

            {currentStep === "details" && (
              <motion.div
                key="details"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <DetailsStep
                  formData={formData}
                  selectedCenterType={selectedCenterType}
                  onInputChange={handleInputChange}
                  onDeepNestedInputChange={handleDeepNestedInputChange}
                  onBack={() => setCurrentStep("type")}
                  onNext={() => setCurrentStep("owner")}
                />
              </motion.div>
            )}

            {currentStep === "owner" && (
              <motion.div
                key="owner"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <OwnerInfoStep
                  formData={formData}
                  onNestedInputChange={handleNestedInputChange}
                  onBack={() => setCurrentStep("details")}
                  onNext={() => setCurrentStep("legal")}
                />
              </motion.div>
            )}

            {currentStep === "legal" && (
              <motion.div
                key="legal"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <LegalStep
                  formData={formData}
                  onNestedInputChange={handleNestedInputChange}
                  isSubmitting={isSubmitting}
                  onBack={() => setCurrentStep("owner")}
                  onSubmit={handleSubmit}
                />
              </motion.div>
            )}

            {currentStep === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                <SuccessStep />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Improve mobile touch targets */
        @media (max-width: 640px) {
          button,
          [role="button"] {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </div>
  );
};

export default CenterRegistration;
