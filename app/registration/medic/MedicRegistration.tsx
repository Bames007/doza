"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Shield,
  CheckCircle,
  DollarSign,
  Award,
  FileText,
} from "lucide-react";

// Components
import RoleSelection from "./components/RoleSelection";
import PersonalInfo from "./components/PersonalInfo";
import ProfessionalInfo from "./components/ProfessionalInfo";
import PracticeInfo from "./components/PracticeInfo";
import CredentialsUpload from "./components/CredentialsUpload";
import LegalAgreement from "./components/LegalAgreement";
import SuccessStep from "./components/SuccessStep";

// Types and Data
import { RegistrationStep } from "./type";
import { useMedicRegistration } from "./hook/useMedicRegistration";

const MedicRegistration: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<RegistrationStep>("role");

  const {
    formData,
    updateFormData,
    handleSubmit,
    isSubmitting,
    getLocationFromMap,
  } = useMedicRegistration();

  const onSubmitLegal = async () => {
    try {
      await handleSubmit();
      setCurrentStep("success");
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  const steps: {
    id: RegistrationStep;
    label: string;
    icon: React.ReactNode;
  }[] = [
    { id: "role", label: "Role", icon: <User size={16} /> },
    { id: "personal", label: "Personal", icon: <User size={16} /> },
    { id: "professional", label: "Professional", icon: <Award size={16} /> },
    { id: "practice", label: "Practice", icon: <DollarSign size={16} /> },
    { id: "credentials", label: "Documents", icon: <FileText size={16} /> },
    { id: "legal", label: "Agreement", icon: <Shield size={16} /> },
  ];

  const renderStep = () => {
    switch (currentStep) {
      case "role":
        return (
          <RoleSelection
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentStep("personal")}
          />
        );
      case "personal":
        return (
          <PersonalInfo
            formData={formData}
            updateFormData={updateFormData}
            onBack={() => setCurrentStep("role")}
            onNext={() => setCurrentStep("professional")}
          />
        );
      case "professional":
        return (
          <ProfessionalInfo
            formData={formData}
            updateFormData={updateFormData}
            onBack={() => setCurrentStep("personal")}
            onNext={() => setCurrentStep("practice")}
          />
        );
      case "practice":
        return (
          <PracticeInfo
            formData={formData}
            updateFormData={updateFormData}
            onBack={() => setCurrentStep("professional")}
            onNext={() => setCurrentStep("credentials")}
            getLocationFromMap={getLocationFromMap}
          />
        );
      case "credentials":
        return (
          <CredentialsUpload
            formData={formData}
            updateFormData={updateFormData}
            onBack={() => setCurrentStep("practice")}
            onNext={() => setCurrentStep("legal")}
          />
        );
      case "legal":
        return (
          <LegalAgreement
            formData={formData}
            updateFormData={updateFormData}
            onBack={() => setCurrentStep("credentials")}
            onSubmit={onSubmitLegal}
            isSubmitting={isSubmitting}
          />
        );
      case "success":
        return <SuccessStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-6 px-3 sm:py-8 sm:px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Join Our Healthcare Network
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
            Connect with patients and build your practice through our trusted
            healthcare platform
          </p>
        </div>

        {/* Progress Bar – Mobile Optimised */}
        <div className="mb-6 sm:mb-8 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg overflow-hidden">
          <div className="flex items-center justify-between mb-2 sm:mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1 min-w-0">
                <div className="flex items-center justify-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all text-xs sm:text-sm ${
                      currentStep === step.id
                        ? "bg-blue-600 border-blue-600 text-white"
                        : currentStep > step.id
                          ? "bg-green-500 border-green-500 text-white"
                          : "bg-white border-gray-300 text-gray-500"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle size={14} className="sm:w-4 sm:h-4" />
                    ) : (
                      step.icon
                    )}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 sm:h-1 mx-1 sm:mx-2 transition-all ${
                      currentStep > step.id ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          {/* Labels – hidden on very small screens, visible on sm and up */}
          <div className="hidden sm:flex justify-between text-xs sm:text-sm text-gray-600 px-2">
            {steps.map((step) => (
              <span key={step.id} className="text-center flex-1 truncate px-1">
                {step.label}
              </span>
            ))}
          </div>
          {/* Optional: show current step name on mobile */}
          <div className="sm:hidden text-center text-sm font-medium text-gray-700 mt-2">
            Step {steps.findIndex((s) => s.id === currentStep) + 1} of{" "}
            {steps.length}: {steps.find((s) => s.id === currentStep)?.label}
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MedicRegistration;
