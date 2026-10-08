"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronLeft } from "lucide-react";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";
import { GrainOverlay, PremiumCard } from "@/app/ui/Premium";
import Image from "next/image";
import Link from "next/link";

import CenterTypeStep from "./steps/CenterTypeStep";
import OwnerInfoStep from "./steps/OwnerInfo";
import LegalStep from "./steps/LegalStep";
import SuccessStep from "./steps/SuccessStep";

import { CenterRegistrationData } from "./type";

const CenterRegistration: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<
    "type" | "owner" | "legal" | "success"
  >("type");
  const [selectedCenterType, setSelectedCenterType] = useState<string>("");
  const [formData, setFormData] = useState<CenterRegistrationData>({
    role: "center",
    centerType: "",
    customType: "",
    centerName: "",
    logo: null,
    location: { address: "", lat: 0, lng: 0 },
    registrationNumbers: { cac: "", state: "", federal: "" },
    operatingHours: {
      opening: "08:00",
      closing: "18:00",
      days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    },
    contact: { phone: "", email: "", website: "" },
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
      date: new Date().toISOString().split("T")[0],
    },
    createdAt: new Date().toISOString(),
    status: "pending",
    verified: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    field: keyof CenterRegistrationData,
    value: any,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNestedInputChange = (
    section: keyof CenterRegistrationData,
    field: string,
    value: any,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...(prev[section] as any), [field]: value },
    }));
  };

  const handleCenterTypeSelect = (typeId: string) => {
    setSelectedCenterType(typeId);
    setFormData((prev) => ({ ...prev, centerType: typeId as any }));
    if (typeId !== "other") {
      setTimeout(() => setCurrentStep("owner"), 400);
    }
  };

  const handleCustomCenterContinue = () => {
    if ((formData.customType ?? "").trim()) {
      setFormData((prev) => ({ ...prev, centerType: "other" }));
      setTimeout(() => setCurrentStep("owner"), 400);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCurrentStep("success");
    setIsSubmitting(false);
  };

  const steps = [
    { key: "type", label: "Type", number: 1 },
    { key: "owner", label: "Owner", number: 2 },
    { key: "legal", label: "Submit", number: 3 },
  ];

  const currentIndex = steps.findIndex((s) => s.key === currentStep);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/10 to-white relative flex flex-col">
      <GrainOverlay />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-200/40 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-300/30 blur-[120px] rounded-full animate-pulse-slow" />
      </div>

      {/* Header — trimmed from h-20 to h-14 */}
      <header className="relative z-10 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-all"
          >
            <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
              <ChevronLeft
                size={16}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
            </div>
            <span
              className={`text-xs font-medium ${poppins.className} hidden sm:inline`}
            >
              Back to Home
            </span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-6 h-6">
              <Image
                src="/logo.png"
                alt="Doza"
                fill
                className="object-contain"
              />
            </div>
            <span
              className={`text-base font-bold text-slate-900 ${bebasNeue.className}`}
            >
              DOZA
            </span>
          </Link>
          <div className="w-16" />
        </div>
      </header>

      <main className="relative z-10 flex-grow max-w-3xl mx-auto w-full px-4 py-6">
        {/* Progress stepper — tightened */}
        {currentStep !== "success" && (
          <div className="mb-6">
            <div className="flex items-center justify-between max-w-xs mx-auto">
              {steps.map((step, i) => (
                <React.Fragment key={step.key}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                        i <= currentIndex
                          ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {i < currentIndex ? <Check size={14} /> : step.number}
                    </div>
                    <span
                      className={`text-[10px] mt-1.5 font-medium ${
                        i <= currentIndex
                          ? "text-emerald-600"
                          : "text-slate-400"
                      } ${poppins.className}`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 rounded-full transition-all ${
                        i < currentIndex ? "bg-emerald-500" : "bg-slate-200"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Form card — reduced outer padding */}
        <PremiumCard className="!p-4 sm:!p-6 md:!p-8 max-w-2xl mx-auto shadow-xl border border-slate-100 rounded-2xl bg-white/90 backdrop-blur-sm">
          <AnimatePresence mode="wait">
            {currentStep === "type" && (
              <motion.div
                key="type"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <CenterTypeStep
                  onCenterTypeSelect={handleCenterTypeSelect}
                  selectedCenterType={selectedCenterType}
                  formData={formData}
                  onInputChange={handleInputChange}
                  onCustomContinue={handleCustomCenterContinue}
                />
              </motion.div>
            )}

            {currentStep === "owner" && (
              <motion.div
                key="owner"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <OwnerInfoStep
                  formData={formData}
                  onNestedInputChange={handleNestedInputChange}
                  onInputChange={handleInputChange}
                  onBack={() => setCurrentStep("type")}
                  onNext={() => setCurrentStep("legal")}
                />
              </motion.div>
            )}

            {currentStep === "legal" && (
              <motion.div
                key="legal"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
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
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
              >
                <SuccessStep />
              </motion.div>
            )}
          </AnimatePresence>
        </PremiumCard>
      </main>

      <footer className="relative z-10 border-t border-slate-200 py-4 bg-white/50 backdrop-blur-sm text-center text-[10px] text-slate-400">
        © 2026 Doza. All rights reserved.
      </footer>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CenterRegistration;
