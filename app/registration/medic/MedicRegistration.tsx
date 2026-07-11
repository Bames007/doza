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
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

// Components
import RoleSelection from "./components/RoleSelection";
import PersonalInfo from "./components/PersonalInfo";
import ProfessionalInfo from "./components/ProfessionalInfo";
import PracticeInfo from "./components/PracticeInfo";
import CredentialsUpload from "./components/CredentialsUpload";
import LegalAgreement from "./components/LegalAgreement";
import SuccessStep from "./components/SuccessStep";

// Types
import { RegistrationStep } from "./type";
import { useMedicRegistration } from "./hook/useMedicRegistration";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";

const MedicRegistration: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<RegistrationStep>("role");

  const {
    formData,
    updateFormData,
    handleSubmit,
    isSubmitting,
    getLocationFromMap,
  } = useMedicRegistration();

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

  const activeStepIndex = steps.findIndex((s) => s.id === currentStep);
  const isSuccess = currentStep === "success";

  const onSubmitLegal = async () => {
    try {
      await handleSubmit();
      setCurrentStep("success");
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

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
    <div className="min-h-screen bg-slate-50 relative overflow-x-hidden">
      {/* Abstract Backgrounds */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4" />
      </div>

      <header className="relative z-10 bg-white/70 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors"
          >
            <ChevronLeft size={20} />
            <span className={`text-sm ${poppins.className} font-medium`}>
              Back to Home
            </span>
          </Link>
          <span
            className={`text-2xl font-bold text-slate-900 tracking-tight ${bebasNeue.className}`}
          >
            DOZA
          </span>
          <div className="w-24" />
        </div>
      </header>

      {/* Main Container - Responsive Widths */}
      <main className="relative z-10 max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 py-12">
        {/* Progress Bar Header */}
        {!isSuccess && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-2xl text-slate-800 ${bebasNeue.className}`}>
                REGISTRATION <span className="text-emerald-600">STEPS</span>
              </h2>
              <span className="text-sm text-slate-500 font-medium bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                {activeStepIndex + 1} / {steps.length}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3">
              {steps.map((step, index) => {
                const isCompleted = index < activeStepIndex;
                const isActive = index === activeStepIndex;

                return (
                  <div key={step.id} className="flex-1">
                    <div
                      className={`h-2.5 rounded-full transition-all duration-500 ${
                        isActive
                          ? "bg-emerald-600 shadow-lg shadow-emerald-600/20"
                          : isCompleted
                            ? "bg-emerald-500"
                            : "bg-slate-200"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Dynamic Card Area */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 min-h-[600px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default MedicRegistration;
