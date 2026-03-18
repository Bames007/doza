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
  MapPin,
  Phone,
  Lock,
  ChevronRight,
  LucideIcon, // Import the Type
} from "lucide-react";
import { bebasNeue, poppins } from "../../../home/doza_center/constant";
import { CenterRegistrationData } from "../type";
import { db, storage } from "@/app/utils/firebaseConfig";
import { ref, set } from "firebase/database";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

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

  // Logic Helpers - Case insensitive signature matching for better UX
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

  // Logic Functions
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

  const sendOtpToEmailAndSave = async (): Promise<boolean> => {
    try {
      setCurrentStep("Sending verification code...");
      const otpCode = generateOtp();
      const response = await fetch("/api/send-otp-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          otp: otpCode,
          email: formData.ownerInfo.email,
          ownerName: formData.ownerInfo.fullName,
          centerName: formData.centerName,
        }),
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  const uploadLogoToStorage = async (
    logoData: string | File | null,
  ): Promise<string | null> => {
    if (!logoData) return null;
    try {
      setCurrentStep("Uploading logo...");
      const centerId = generateCenterId(formData.centerName);
      let blob: Blob;
      let fileExtension = "png";

      if (typeof logoData === "string" && logoData.startsWith("data:image")) {
        const response = await fetch(logoData);
        blob = await response.blob();
        const matches = logoData.match(/^data:image\/([a-zA-Z0-9]+);base64,/);
        if (matches) fileExtension = matches[1];
      } else if (logoData instanceof File) {
        blob = logoData;
        fileExtension = logoData.name.split(".").pop() || "png";
      } else return null;

      const logoPath = storageRef(
        storage,
        `doza_centers/${centerId}/logo/${centerId}_logo.${fileExtension}`,
      );
      const snapshot = await uploadBytes(logoPath, blob);
      return await getDownloadURL(snapshot.ref);
    } catch (error) {
      return null;
    }
  };

  const sendConfirmationEmail = async (centerData: any) => {
    try {
      setCurrentStep("Sending confirmation email...");
      const response = await fetch("/api/send-confirmation-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(centerData),
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  const saveToFirebase = async () => {
    setIsProcessing(true);
    setUploadError(null);
    setUploadProgress(0);

    try {
      const centerId = generateCenterId(formData.centerName);
      const staffId = generateStaffId(formData.centerName);
      const otpCode = generateOtp();

      setUploadProgress(10);
      const logoURL = await uploadLogoToStorage(formData.logo);

      setUploadProgress(30);
      await sendOtpToEmailAndSave();

      const centerData = {
        centerType: formData.centerType,
        centerName: formData.centerName,
        logo: logoURL,
        location: {
          address: formData.location?.address || "",
          lat: formData.location?.lat || 0,
          lng: formData.location?.lng || 0,
        },
        registrationNumbers: {
          cac: formData.registrationNumbers?.cac || "",
          state: formData.registrationNumbers?.state || "",
          federal: formData.registrationNumbers?.federal || "",
        },
        contact: {
          phone: formData.contact?.phone || "",
          email: formData.contact?.email || "",
          website: formData.contact?.website || "",
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
        centerId: centerId,
        createdAt: new Date().toISOString(),
        status: "pending",
        verified: false,
        verificationOtp: otpCode,
        staff: {
          [staffId]: {
            staffId: staffId,
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
        facilityDetails: {
          bedCapacity: (formData.specificDetails?.numberOfBeds as number) || 0,
          icuBeds: (formData.specificDetails?.icuBeds as number) || 0,
        },
        searchIndex: {
          name_lower: formData.centerName.toLowerCase(),
          type_lower: formData.centerType.toLowerCase(),
        },
        audit: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          createdBy: formData.ownerInfo?.email || "",
        },
      };

      setUploadProgress(60);
      setCurrentStep("Saving to DOZA database...");
      await set(ref(db, `doza_centers/${centerId}`), centerData);

      setUploadProgress(90);
      await sendConfirmationEmail({
        centerId,
        centerName: formData.centerName,
        ownerName: formData.ownerInfo.fullName,
        ownerEmail: formData.ownerInfo.email,
        otp: otpCode,
      });

      setUploadProgress(100);
      setCurrentStep("Registration complete!");
      setTimeout(onSubmit, 1500);
    } catch (error) {
      setUploadError("Failed to save registration. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full max-w-4xl mx-auto pb-16 px-4 sm:px-0 ${poppins.className}`}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-medium tracking-widest uppercase mb-4 border border-emerald-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Step 4: Verification
        </div>
        <h2
          className={`text-4xl sm:text-5xl font-normal text-slate-800 tracking-tight mb-3 ${bebasNeue.className}`}
        >
          Final Submission
        </h2>
        <p className="text-slate-500 font-light text-sm max-w-md mx-auto">
          Review your registration data and sign the digital agreement to
          proceed.
        </p>
      </div>

      <div className="space-y-6">
        {/* Registration Summary Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-100 flex items-center gap-2">
            <Building size={16} className="text-slate-400" />
            <h3 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Registration Summary
            </h3>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            <SummaryItem
              icon={Building}
              label="Center Name"
              value={formData.centerName}
            />
            <SummaryItem
              icon={Shield}
              label="Center Type"
              value={formData.centerType}
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
              icon={MapPin}
              label="Official Address"
              value={formData.location?.address}
              isTruncated
            />
            <SummaryItem
              icon={Phone}
              label="Phone Number"
              value={formData.contact?.phone}
            />
          </div>
        </div>

        {/* Legal Terms Scrollbox */}
        <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <FileText size={18} className="text-slate-400" />
            <h3 className="text-sm font-medium text-slate-700">
              Terms & Conditions
            </h3>
          </div>
          <div className="bg-white rounded-xl border border-slate-200/60 p-5 h-48 overflow-y-auto text-[13px] leading-relaxed text-slate-500 font-light space-y-4 shadow-inner">
            <p>
              <strong className="font-medium text-slate-800">
                1. Medical Standards:
              </strong>{" "}
              You certify compliance with all regional medical regulations and
              DOZA board standards.
            </p>
            <p>
              <strong className="font-medium text-slate-800">
                2. Data Accuracy:
              </strong>{" "}
              You affirm that all information provided is accurate and
              verifiable.
            </p>
            <p>
              <strong className="font-medium text-slate-800">
                3. Regular Inspections:
              </strong>{" "}
              You agree to permit inspections by DOZA Medical Board officials to
              verify standards.
            </p>
            <p>
              <strong className="font-medium text-slate-800">
                4. Patient Safety:
              </strong>{" "}
              You commit to maintaining the highest standards of patient safety
              and confidentiality.
            </p>
            <p>
              <strong className="font-medium text-slate-800">
                5. Maintenance:
              </strong>{" "}
              You agree to keep all licenses and certifications valid and
              up-to-date.
            </p>
          </div>
        </div>

        {/* Agreement Interaction */}
        <div className="space-y-4">
          <label
            className={`flex items-start gap-4 p-5 rounded-2xl cursor-pointer transition-all border ${formData.legal.agreed ? "bg-emerald-50/30 border-emerald-200 shadow-sm" : "bg-white border-slate-100"}`}
          >
            <input
              type="checkbox"
              checked={formData.legal.agreed}
              onChange={handleAgreementChange}
              className="w-5 h-5 mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 transition-colors"
            />
            <span className="text-sm text-slate-600 font-light leading-relaxed">
              I have read, understood, and agree to be bound by the terms above.
              I certify that all information provided is accurate and complete.
            </span>
          </label>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-end mb-3">
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                  Electronic Signature
                </p>
                <p className="text-xs text-slate-500 font-light">
                  Type:{" "}
                  <span className="font-medium text-slate-700">
                    {formData.ownerInfo?.fullName}
                  </span>
                </p>
              </div>
              {isSignatureMatched && (
                <CheckCircle size={16} className="text-emerald-500 mb-1" />
              )}
            </div>
            <input
              type="text"
              placeholder="Type full name to sign"
              value={formData.legal.signature}
              onChange={handleSignatureChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base font-light text-slate-700 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/5 transition-all placeholder:text-slate-300"
            />
            <AnimatePresence>
              {formData.legal.signature && !isSignatureMatched && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-rose-400 text-[11px] mt-2 flex items-center gap-1 overflow-hidden"
                >
                  <AlertCircle size={12} /> Signature must match the
                  administrator name exactly.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress & Error Displays */}
        {(isProcessing || uploadProgress > 0) && (
          <div className="py-2">
            <div className="flex justify-between text-[11px] text-slate-400 mb-1.5 font-medium uppercase tracking-tighter">
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
          <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-center gap-3 text-rose-600 text-xs">
            <AlertCircle size={16} /> {uploadError}
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-100">
          <button
            onClick={onBack}
            disabled={isProcessing}
            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-medium text-slate-500 hover:bg-slate-50 transition-all text-sm border border-slate-200 disabled:opacity-50"
          >
            <ArrowLeft size={16} /> Back to Owner Details
          </button>

          <button
            onClick={saveToFirebase}
            disabled={isSubmitDisabled}
            className="flex-[1.5] relative group overflow-hidden py-4 px-6 bg-slate-900 text-white rounded-xl font-medium text-sm transition-all disabled:opacity-20 shadow-xl hover:bg-slate-800 active:scale-[0.98]"
          >
            <span className="flex items-center justify-center gap-2 relative z-10">
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing Submission...
                </>
              ) : (
                <>
                  Submit to DOZA Medical Board
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-300 pt-2">
          <Lock size={12} />
          <span className="text-[10px] uppercase tracking-[0.2em] font-light">
            Secure 256-bit Encrypted Submission
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Internal sub-component - Correctly typed for Lucide Icons
const SummaryItem = ({
  label,
  value,
  icon: IconComponent,
  isTruncated = false,
}: {
  label: string;
  value?: string;
  icon: LucideIcon; // Changed to LucideIcon type
  isTruncated?: boolean;
}) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center gap-2">
      <span className="p-1.5 rounded-md bg-slate-50 text-slate-400">
        <IconComponent size={14} strokeWidth={2.2} />
      </span>
      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
        {label}
      </span>
    </div>
    <span
      className={`text-[14px] font-normal text-slate-700 ${isTruncated ? "truncate" : ""}`}
    >
      {value || "Not provided"}
    </span>
  </div>
);

export default LegalStep;
