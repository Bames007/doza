"use client";

import React, { ChangeEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  CheckCircle,
  FileText,
  AlertCircle,
  ArrowLeft,
  Upload,
  Building,
  Mail,
  User,
  Phone,
  Lock,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import { bebasNeue, poppins } from "../../../home/doza_center/constant";
import { CenterRegistrationData } from "../type";
import { db } from "@/app/utils/firebaseConfig";
import { ref, set } from "firebase/database";

interface LegalStepProps {
  formData: CenterRegistrationData;
  onNestedInputChange: (
    section: keyof CenterRegistrationData,
    field: string,
    value: string | boolean | number,
  ) => void;
  isSubmitting: boolean;
  onBack: () => void;
  onSubmit: () => void;
}

const LegalStep: React.FC<LegalStepProps> = ({
  formData,
  onNestedInputChange,
  isSubmitting,
  onBack,
  onSubmit,
}) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState<string>("");

  const isSignatureMatched =
    formData.legal?.signature?.trim().toLowerCase() ===
    formData.ownerInfo?.fullName?.trim().toLowerCase();

  const hasRequiredFields =
    formData.centerName &&
    formData.centerType &&
    formData.ownerInfo.fullName &&
    formData.ownerInfo.email &&
    formData.ownerInfo.phone;

  const isSubmitDisabled =
    isSubmitting ||
    isProcessing ||
    !formData.legal.agreed ||
    !isSignatureMatched ||
    !hasRequiredFields;

  const handleSignatureChange = (e: ChangeEvent<HTMLInputElement>) => {
    onNestedInputChange("legal", "signature", e.target.value);
    onNestedInputChange("legal", "date", new Date().toISOString());
  };

  const handleAgreementChange = (e: ChangeEvent<HTMLInputElement>) => {
    onNestedInputChange("legal", "agreed", e.target.checked);
  };

  const generateOtp = (): string =>
    Math.floor(100000 + Math.random() * 900000).toString();

  const generateCenterId = (centerName: string): string => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8);
    const nameCode = centerName
      .substring(0, 3)
      .toUpperCase()
      .replace(/\s/g, "");
    return `DOZA-${nameCode}-${timestamp}-${randomStr}`;
  };

  const generateStaffId = (centerName: string): string => {
    const timestamp = Date.now().toString(36).substring(0, 4);
    const nameCode = centerName
      .substring(0, 3)
      .toUpperCase()
      .replace(/\s/g, "");
    return `STAFF-${nameCode}-${timestamp}-OWN-001`;
  };

  const sendOtpEmail = async (otpCode: string): Promise<boolean> => {
    try {
      setCurrentStep("Sending verification code...");
      const res = await fetch("/api/send-otp-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          otp: otpCode,
          email: formData.ownerInfo.email,
          ownerName: formData.ownerInfo.fullName,
          centerName: formData.centerName,
        }),
      });
      return res.ok;
    } catch {
      return false;
    }
  };

  const sendConfirmationEmail = async (payload: {
    centerId: string;
    centerName: string;
    ownerName: string;
    ownerEmail: string;
  }): Promise<boolean> => {
    try {
      setCurrentStep("Sending confirmation email...");
      const res = await fetch("/api/send-confirmation-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      return res.ok;
    } catch {
      return false;
    }
  };

  const saveToFirebase = async () => {
    setIsProcessing(true);
    setUploadError(null);
    setUploadProgress(0);

    try {
      // Generate everything ONCE
      const centerId = generateCenterId(formData.centerName);
      const staffId = generateStaffId(formData.centerName);
      const otpCode = generateOtp();

      // "other" / "" fall back to medical_center so the dashboard has a valid key
      const resolvedCenterType =
        formData.centerType === "other" || formData.centerType === ""
          ? "medical_center"
          : formData.centerType;

      const centerData = {
        role: formData.role,
        centerType: resolvedCenterType,
        customType: formData.customType || "",
        centerName: formData.centerName,

        // Placeholder fields — dashboard will fill these
        logo: null,
        location: { address: "", lat: 0, lng: 0 },
        contact: {
          phone: formData.ownerInfo?.phone || "",
          email: formData.ownerInfo?.email || "",
          website: "",
        },

        ownerInfo: {
          isOwner: true,
          fullName: formData.ownerInfo?.fullName || "",
          email: formData.ownerInfo?.email || "",
          phone: formData.ownerInfo?.phone || "",
          position: formData.ownerInfo?.position || "Owner",
        },

        legal: {
          agreed: formData.legal?.agreed || false,
          signature: formData.legal?.signature || "",
          date: formData.legal?.date || new Date().toISOString(),
        },

        centerId,
        createdAt: new Date().toISOString(),
        status: "pending",
        verified: false,
        verificationOtp: otpCode,
        profileCompleted: false,

        staff: {
          [staffId]: {
            staffId,
            personalInfo: {
              fullName: formData.ownerInfo.fullName,
              email: formData.ownerInfo.email,
              phone: formData.ownerInfo.phone,
              position: formData.ownerInfo.position,
            },
            professional: {
              role: "owner",
              department: "administration",
              employmentType: "full-time",
              startDate: new Date().toISOString(),
            },
            status: "active",
            isOwner: true,
          },
        },

        searchIndex: {
          name_lower: formData.centerName.toLowerCase(),
          type_lower: resolvedCenterType.toLowerCase(),
        },

        audit: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          createdBy: formData.ownerInfo?.email || "",
        },
      };

      setUploadProgress(25);
      await sendOtpEmail(otpCode);

      setUploadProgress(60);
      setCurrentStep("Saving to DOZA database...");
      await set(ref(db, `doza_centers/${centerId}`), centerData);

      setUploadProgress(90);
      await sendConfirmationEmail({
        centerId,
        centerName: formData.centerName,
        ownerName: formData.ownerInfo.fullName,
        ownerEmail: formData.ownerInfo.email,
      });

      setUploadProgress(100);
      setCurrentStep("Registration complete!");
      setTimeout(onSubmit, 1500);
    } catch (error) {
      console.error("Registration error:", error);
      setUploadError("Failed to save registration. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full ${poppins.className} text-slate-900`}
    >
      {/* Alex Brush font — loaded once, scoped to .font-signature */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap");
        .font-signature {
          font-family: "Alex Brush", cursive;
        }
      `}</style>

      {/* Header — matches CenterTypeStep */}
      <header className="mb-5">
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`text-xl text-emerald-600 font-bold leading-none ${bebasNeue.className}`}
          >
            03
          </span>
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-500">
            Protocol
          </span>
        </div>
        <h2
          className={`text-3xl md:text-4xl font-bold leading-tight mb-2 ${bebasNeue.className}`}
        >
          FINAL <span className="text-emerald-600">SUBMISSION</span>
        </h2>
        <p className="text-slate-600 text-xs md:text-sm">
          Review your registration data and sign the digital agreement to
          proceed.
        </p>
      </header>

      <div className="space-y-4">
        {/* Registration Summary */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 flex items-center gap-2">
            <Building size={14} className="text-slate-500" />
            <h3 className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
              Registration Summary
            </h3>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            <SummaryItem
              icon={Building}
              label="Center Name"
              value={formData.centerName}
            />
            <SummaryItem
              icon={Shield}
              label="Center Type"
              value={
                formData.centerType === "other"
                  ? formData.customType || "Other"
                  : formData.centerType
                      .replace(/_/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())
              }
            />
            <SummaryItem
              icon={User}
              label="Lead Administrator"
              value={formData.ownerInfo?.fullName}
            />
            <SummaryItem
              icon={Mail}
              label="Contact Email"
              value={formData.ownerInfo?.email}
            />
            <SummaryItem
              icon={Phone}
              label="Phone Number"
              value={formData.ownerInfo?.phone}
            />
          </div>
          <div className="px-4 py-2 bg-emerald-50/60 border-t border-emerald-100 text-[11px] text-emerald-700 font-medium">
            ✓ Logo, address and other details can be added from your dashboard
            after registration.
          </div>
        </div>

        {/* Terms */}
        <div className="bg-slate-50/60 rounded-2xl p-4 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <FileText size={16} className="text-slate-500" />
            <h3 className="text-xs font-bold text-slate-700">
              Terms & Conditions
            </h3>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 h-40 overflow-y-auto text-[12px] leading-relaxed text-slate-600 space-y-3 shadow-inner">
            <p>
              <strong className="font-semibold text-slate-800">
                1. Medical Standards:
              </strong>{" "}
              You certify compliance with all regional medical regulations and
              Doza Medic standards.
            </p>
            <p>
              <strong className="font-semibold text-slate-800">
                2. Data Accuracy:
              </strong>{" "}
              You affirm that all information provided is accurate and
              verifiable.
            </p>
            <p>
              <strong className="font-semibold text-slate-800">
                3. Regular Inspections:
              </strong>{" "}
              You agree to permit inspections by Doza Medic Board officials to
              verify standards.
            </p>
            <p>
              <strong className="font-semibold text-slate-800">
                4. Patient Safety:
              </strong>{" "}
              You commit to maintaining the highest standards of patient safety
              and confidentiality.
            </p>
            <p>
              <strong className="font-semibold text-slate-800">
                5. Maintenance:
              </strong>{" "}
              You agree to keep all licenses and certifications valid and
              up-to-date.
            </p>
          </div>
        </div>

        {/* Agreement + Signature */}
        <div className="space-y-3">
          <label
            className={`flex items-start gap-3 p-4 rounded-2xl cursor-pointer transition-all border ${
              formData.legal.agreed
                ? "bg-emerald-50/40 border-emerald-300 shadow-sm"
                : "bg-white border-slate-200"
            }`}
          >
            <input
              type="checkbox"
              checked={formData.legal.agreed}
              onChange={handleAgreementChange}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className={`mt-0.5 shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                formData.legal.agreed
                  ? "bg-emerald-600 border-emerald-600"
                  : "bg-white border-slate-300"
              }`}
            >
              {formData.legal.agreed && (
                <CheckCircle size={12} className="text-white" strokeWidth={3} />
              )}
            </span>
            <span className="text-xs text-slate-700 leading-relaxed">
              I have read, understood, and agree to be bound by the terms above.
              I certify that all information provided is accurate and complete.
            </span>
          </label>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <div className="flex justify-between items-end mb-2">
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Electronic Signature
                </p>
                <p className="text-[11px] text-slate-500">
                  Type:{" "}
                  <span className="font-semibold text-slate-700">
                    {formData.ownerInfo?.fullName || "—"}
                  </span>
                </p>
              </div>
              {isSignatureMatched && (
                <CheckCircle size={16} className="text-emerald-500 mb-0.5" />
              )}
            </div>
            <input
              type="text"
              placeholder="Type your full name to sign"
              value={formData.legal.signature}
              onChange={handleSignatureChange}
              autoCapitalize="words"
              autoCorrect="off"
              spellCheck={false}
              className="font-signature w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-3xl text-center text-slate-800 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-slate-300 placeholder:text-lg placeholder:font-sans"
            />
            <AnimatePresence>
              {formData.legal.signature && !isSignatureMatched && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-rose-500 text-[11px] mt-2 flex items-center gap-1 overflow-hidden"
                >
                  <AlertCircle size={12} /> Signature must match the owner's
                  name exactly.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress */}
        {(isProcessing || uploadProgress > 0) && (
          <div className="py-1">
            <div className="flex justify-between text-[10px] text-slate-500 mb-1.5 font-bold uppercase tracking-tighter">
              <span className="flex items-center gap-2">
                <Upload size={12} className="animate-bounce" /> {currentStep}
              </span>
              <span>{uploadProgress}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}

        {uploadError && (
          <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2 text-rose-600 text-xs">
            <AlertCircle size={14} /> {uploadError}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-slate-200">
          <button
            onClick={onBack}
            disabled={isProcessing}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-slate-700 hover:bg-slate-100 transition-all text-[10px] uppercase tracking-widest border border-slate-200 disabled:opacity-50"
          >
            <ArrowLeft size={14} /> Back
          </button>

          <button
            onClick={saveToFirebase}
            disabled={isSubmitDisabled}
            className="flex-[1.5] relative group overflow-hidden py-3 px-5 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all disabled:opacity-30 shadow-lg hover:bg-emerald-600 active:scale-[0.98]"
          >
            <span className="flex items-center justify-center gap-2 relative z-10">
              {isProcessing ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing…
                </>
              ) : (
                <>
                  Submit to Doza Medic
                  <ChevronRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const SummaryItem = ({
  label,
  value,
  icon: IconComponent,
}: {
  label: string;
  value?: string;
  icon: LucideIcon;
}) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-1.5">
      <span className="p-1 rounded-md bg-slate-100 text-slate-500">
        <IconComponent size={12} strokeWidth={2.2} />
      </span>
      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
        {label}
      </span>
    </div>
    <span className="text-[13px] font-medium text-slate-800 truncate">
      {value || "Not provided"}
    </span>
  </div>
);

export default LegalStep;
