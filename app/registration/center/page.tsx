"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";
import { GrainOverlay, PremiumCard, MagneticButton } from "@/app/ui/Premium";
import Image from "next/image";
import Link from "next/link";

// Import step components
import CenterTypeStep from "./steps/CenterTypeStep";
import DetailsStep from "./steps/DetailsStep";
import OwnerInfoStep from "./steps/OwnerInfo";
import LegalStep from "./steps/LegalStep";
import SuccessStep from "./steps/SuccessStep";

// Import types
import { CenterRegistrationData } from "./type";

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
      date: new Date().toISOString().split("T")[0],
    },
    createdAt: new Date().toISOString(),
    status: "pending",
    verified: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handlers
  const handleInputChange = (
    field: keyof CenterRegistrationData,
    value: any,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNestedInputChange = (
    section: keyof CenterRegistrationData,
    field: string,
    value: any,
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
    value: any,
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
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCurrentStep("success");
    setIsSubmitting(false);
  };

  const steps = [
    { key: "type", label: "Type", number: 1 },
    { key: "details", label: "Details", number: 2 },
    { key: "owner", label: "Owner", number: 3 },
    { key: "legal", label: "Legal", number: 4 },
  ];

  const currentIndex = steps.findIndex((s) => s.key === currentStep);

  return (
    <div className="min-h-screen bg-[#FAFAFA] relative flex flex-col">
      <GrainOverlay />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-200/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-300/20 blur-[120px] rounded-full" />
      </div>

      <header className="relative z-10 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="Doza"
                fill
                className="object-contain"
              />
            </div>
            <span
              className={`text-xl font-bold text-slate-900 ${bebasNeue.className}`}
            >
              DOZA
            </span>
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex-grow max-w-5xl mx-auto w-full px-4 py-12">
        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {steps.map((step, i) => (
              <React.Fragment key={step.key}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      i <= currentIndex
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {i < currentIndex ? <Check size={18} /> : step.number}
                  </div>
                  <span
                    className={`text-xs mt-2 text-slate-500 ${poppins.className}`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 ${i < currentIndex ? "bg-emerald-600" : "bg-slate-200"}`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <PremiumCard className="!p-8 md:!p-12 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {currentStep === "type" && (
              <motion.div
                key="type"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <CenterTypeStep
                  // selected={selectedCenterType}
                  // onSelect={handleCenterTypeSelect}
                  // onNext={() => setCurrentStep("details")}
                  onCenterTypeSelect={handleCenterTypeSelect}
                  selectedCenterType={selectedCenterType}
                  formData={formData}
                  onInputChange={handleInputChange}
                  onCustomContinue={handleCustomCenterContinue}
                />
              </motion.div>
            )}

            {currentStep === "details" && (
              <motion.div
                key="details"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <DetailsStep
                  formData={formData}
                  selectedCenterType={selectedCenterType}
                  onInputChange={handleInputChange}
                  // onDeepNestedInputChange={handleDeepNestedInputChange}
                  onBack={() => setCurrentStep("type")}
                  onNext={() => setCurrentStep("owner")}
                />
              </motion.div>
            )}

            {currentStep === "owner" && (
              <motion.div
                key="owner"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
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
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <SuccessStep />
              </motion.div>
            )}
          </AnimatePresence>
        </PremiumCard>
      </main>

      <footer className="relative z-10 border-t border-slate-200 py-6 bg-white/50 backdrop-blur-sm text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-6">
          © 2026 Doza. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CenterRegistration;
