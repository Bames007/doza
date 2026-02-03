import React, { ChangeEvent, useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    value: string | boolean | number
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

  // Check if required fields are filled
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
    formData.legal.signature !== formData.ownerInfo.fullName ||
    !hasRequiredFields;

  const handleSignatureChange = (e: ChangeEvent<HTMLInputElement>) => {
    onNestedInputChange("legal", "signature", e.target.value);
    onNestedInputChange("legal", "date", new Date().toISOString());
  };

  const handleAgreementChange = (e: ChangeEvent<HTMLInputElement>) => {
    onNestedInputChange("legal", "agreed", e.target.checked);
  };

  // Generate OTP for database storage and email
  const generateOtp = (): string => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Send OTP email and save to database
  const sendOtpToEmailAndSave = async (): Promise<boolean> => {
    try {
      setCurrentStep("Sending verification code...");

      const otpCode = generateOtp();

      const response = await fetch("/api/send-otp-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          otp: otpCode,
          email: formData.ownerInfo.email,
          ownerName: formData.ownerInfo.fullName,
          centerName: formData.centerName,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send OTP email");
      }

      console.log("OTP email sent successfully");
      return true;
    } catch (error) {
      console.error("Error sending OTP email:", error);
      return false;
    }
  };

  // Generate unique center ID
  const generateCenterId = (centerName: string): string => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8);
    const nameCode = centerName
      .substring(0, 3)
      .toUpperCase()
      .replace(/\s/g, "");
    return `DOZA-${nameCode}-${timestamp}-${randomStr}`;
  };

  // Generate staff ID for owner
  const generateStaffId = (centerName: string): string => {
    const timestamp = Date.now().toString(36).substring(0, 4);
    const nameCode = centerName
      .substring(0, 3)
      .toUpperCase()
      .replace(/\s/g, "");
    return `STAFF-${nameCode}-${timestamp}-OWN-001`;
  };

  // Upload logo to Firebase Storage
  const uploadLogoToStorage = async (
    logoData: string | File | null
  ): Promise<string | null> => {
    if (!logoData) {
      return null;
    }

    try {
      setCurrentStep("Uploading logo...");
      const centerId = generateCenterId(formData.centerName);

      let blob: Blob;
      let fileExtension = "png";

      if (typeof logoData === "string" && logoData.startsWith("data:image")) {
        const response = await fetch(logoData);
        blob = await response.blob();
        const matches = logoData.match(/^data:image\/([a-zA-Z0-9]+);base64,/);
        if (matches && matches[1]) {
          fileExtension = matches[1];
        }
      } else if (logoData instanceof File) {
        blob = logoData;
        fileExtension = logoData.name.split(".").pop() || "png";
      } else {
        console.warn("Unsupported logo data type:", typeof logoData);
        return null;
      }

      const logoRef = storageRef(
        storage,
        `doza_centers/${centerId}/logo/${centerId}_logo.${fileExtension}`
      );

      const snapshot = await uploadBytes(logoRef, blob);
      const downloadURL = await getDownloadURL(snapshot.ref);

      console.log("Logo uploaded successfully:", downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading logo:", error);
      return null;
    }
  };

  // Send confirmation email
  const sendConfirmationEmail = async (centerData: any) => {
    try {
      setCurrentStep("Sending confirmation email...");

      const response = await fetch("/api/send-confirmation-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(centerData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      console.log("Confirmation email sent successfully");
      return true;
    } catch (error) {
      console.error("Error sending email:", error);
      return false;
    }
  };

  // Save all data to Firebase with proper schema
  const saveToFirebase = async () => {
    setIsProcessing(true);
    setUploadError(null);
    setUploadProgress(0);

    try {
      // Generate IDs
      const centerId = generateCenterId(formData.centerName);
      const staffId = generateStaffId(formData.centerName);
      const otpCode = generateOtp(); // Generate OTP for database storage

      console.log("🆔 Generating Center ID:", centerId);
      console.log("👤 Generating Staff ID:", staffId);
      console.log("🔐 Generating OTP for database:", otpCode);

      // Step 1: Upload logo
      setUploadProgress(10);
      setCurrentStep("Uploading center logo...");
      const logoURL = await uploadLogoToStorage(formData.logo);
      console.log("📁 Logo Upload:", logoURL ? "Success" : "Skipped");

      // Step 2: Send OTP email
      setUploadProgress(20);
      setCurrentStep("Sending verification email...");
      await sendOtpToEmailAndSave();

      // Step 3: Prepare complete center data
      setUploadProgress(30);
      setCurrentStep("Preparing registration data...");

      // Prepare owner staff data
      const ownerStaffData = {
        staffId: staffId,
        userId: null,

        // Personal Information
        personalInfo: {
          fullName: formData.ownerInfo.fullName,
          email: formData.ownerInfo.email,
          phone: formData.ownerInfo.phone,
          position: formData.ownerInfo.position,
        },

        // Professional Information
        professional: {
          role: "owner",
          department: "administration",
          employmentType: "full-time",
          startDate: new Date().toISOString(),
        },

        // Status
        status: "active",
        isOwner: true,

        // Timestamps
        joinedAt: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      };

      // In your saveToFirebase function, update the centerData structure:
      const centerData = {
        // Core registration data
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
        specificDetails: formData.specificDetails || {},
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
        otpGeneratedAt: new Date().toISOString(),
        otpExpiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString(), // 10 minutes

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
            joinedAt: new Date().toISOString(),
            lastUpdated: new Date().toISOString(),
            createdAt: new Date().toISOString(),
          },
        },

        // Facility details
        facilityDetails: {
          bedCapacity: (formData.specificDetails?.numberOfBeds as number) || 0,
          icuBeds: (formData.specificDetails?.icuBeds as number) || 0,
        },

        // Search optimization
        searchIndex: {
          name_lower: formData.centerName.toLowerCase(),
          type_lower: formData.centerType.toLowerCase(),
        },

        // Audit trail
        audit: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          createdBy: formData.ownerInfo?.email || "",
        },
      };

      console.log("📊 Complete Center Data Prepared:", centerData);

      // Step 4: Save everything to single center document
      setUploadProgress(50);
      setCurrentStep("Saving to DOZA database...");

      // Save complete center data to single path
      const centerRef = ref(db, `doza_centers/${centerId}`);
      await set(centerRef, centerData);

      // Step 5: Send confirmation email
      setUploadProgress(85);
      setCurrentStep("Sending confirmation...");
      await sendConfirmationEmail({
        centerId: centerId,
        centerName: formData.centerName,
        ownerName: formData.ownerInfo.fullName,
        ownerEmail: formData.ownerInfo.email,
        otp: otpCode, // Include OTP in confirmation email if needed
      });

      setUploadProgress(100);
      setCurrentStep("Registration complete!");

      // Log success
      console.log("🎉 CENTER REGISTRATION COMPLETE!");
      console.log("Center ID:", centerId);
      console.log("Center Name:", formData.centerName);
      console.log("OTP stored in database:", otpCode);

      // Proceed to success step
      setTimeout(() => {
        onSubmit();
      }, 1500);
    } catch (error) {
      console.error("Error saving to Firebase:", error);
      setUploadError("Failed to save registration. Please try again.");
      setIsProcessing(false);
    }
  };

  const handleSubmit = async () => {
    if (isSubmitDisabled) return;
    await saveToFirebase();
  };

  return (
    <motion.div
      key="legal"
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
            STEP 4 OF 4 - VERIFICATION & SUBMISSION
          </span>
        </motion.div>

        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 ${bebasNeue.className}`}
        >
          Final Verification
        </h2>
        <p
          className={`text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 ${poppins.className}`}
        >
          Verify your information and submit for medical board approval
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl shadow-emerald-500/5 border border-emerald-100">
        {/* Data Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <Building className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
            <h3
              className={`text-lg sm:text-xl font-bold text-gray-900 ${bebasNeue.className}`}
            >
              Registration Summary
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-3 text-gray-900 text-sm">
            <div className="flex items-center gap-2">
              <Building size={16} className="text-gray-500" />
              <span>
                <strong>Center:</strong> {formData.centerName || "Not provided"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} className="text-gray-500" />
              <span>
                <strong>Type:</strong> {formData.centerType || "Not provided"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} className="text-gray-500" />
              <span>
                <strong>Owner:</strong>{" "}
                {formData.ownerInfo?.fullName || "Not provided"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gray-500" />
              <span>
                <strong>Email:</strong>{" "}
                {formData.ownerInfo?.email || "Not provided"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-gray-500" />
              <span>
                <strong>Location:</strong>{" "}
                {formData.location?.address
                  ? formData.location.address.substring(0, 40) + "..."
                  : "Not provided"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gray-500" />
              <span>
                <strong>Phone:</strong>{" "}
                {formData.contact?.phone || "Not provided"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        {(isProcessing || uploadProgress > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 sm:mb-6 p-4 sm:p-6 bg-blue-50 rounded-2xl border border-blue-200"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <Upload className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-700 font-semibold text-sm sm:text-base">
                    {currentStep}
                  </span>
                  <span className="text-blue-600 text-xs sm:text-sm">
                    {uploadProgress}%
                  </span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Terms and Conditions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 sm:mb-8 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl border border-emerald-200"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <FileText className="text-emerald-600 w-5 h-5 sm:w-6 sm:h-6" />
            <h3
              className={`text-xl sm:text-2xl font-bold text-gray-900 ${bebasNeue.className}`}
            >
              Terms & Conditions
            </h3>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 max-h-60 sm:max-h-80 overflow-y-auto">
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-700">
              <p>
                <strong>1. Medical Standards Compliance</strong>
                <br />
                By submitting this registration, you certify that your
                healthcare center complies with all applicable medical standards
                and regulations.
              </p>

              <p>
                <strong>2. Data Accuracy</strong>
                <br />
                You affirm that all information provided in this registration is
                accurate, complete, and truthful to the best of your knowledge.
              </p>

              <p>
                <strong>3. Regular Inspections</strong>
                <br />
                You agree to permit unannounced inspections by DOZA Medical
                Board officials to verify compliance with healthcare standards.
              </p>

              <p>
                <strong>4. Patient Safety</strong>
                <br />
                You commit to maintaining the highest standards of patient
                safety, confidentiality, and care in accordance with medical
                ethics.
              </p>

              <p>
                <strong>5. License Maintenance</strong>
                <br />
                You agree to maintain all required licenses, certifications, and
                insurance coverage current and valid.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Agreement Checkbox */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6 sm:mb-8 p-4 sm:p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-emerald-300 transition-all duration-300"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex items-center h-6 mt-0.5 sm:mt-1 flex-shrink-0">
              <input
                type="checkbox"
                id="legal-agreement"
                checked={formData.legal?.agreed || false}
                onChange={handleAgreementChange}
                className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="legal-agreement" className="cursor-pointer">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <CheckCircle
                    size={18}
                    className={
                      formData.legal?.agreed
                        ? "text-emerald-600"
                        : "text-gray-400"
                    }
                  />
                  <span
                    className={`font-semibold text-gray-900 text-sm sm:text-base ${poppins.className}`}
                  >
                    I agree to the Terms & Conditions
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  I have read, understood, and agree to be bound by all the
                  terms and conditions outlined above. I certify that all
                  information provided is accurate and complete.
                </p>
              </label>
            </div>
          </div>
        </motion.div>

        {/* Electronic Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <label
            className={`block text-sm font-semibold text-gray-900 mb-3 sm:mb-4 ${poppins.className}`}
          >
            Electronic Signature
            <span className="text-red-500 ml-1">*</span>
          </label>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-4 sm:p-6 border border-emerald-200">
            <div className="mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                Type your full name to sign electronically as the authorized
                representative:
              </p>
              <p className="text-sm font-medium text-emerald-700">
                {formData.ownerInfo?.fullName || "Full name not provided"}
              </p>
            </div>

            <input
              type="text"
              value={formData.legal?.signature || ""}
              onChange={handleSignatureChange}
              placeholder="Enter your full name exactly as shown above"
              className="w-full px-3 sm:px-4 py-3 text-gray-900 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 bg-white text-sm sm:text-base"
            />

            {formData.legal?.signature &&
              formData.legal.signature !== formData.ownerInfo?.fullName && (
                <div className="mt-2 sm:mt-3 flex items-center gap-2 text-amber-600 text-xs sm:text-sm">
                  <AlertCircle size={14} className="sm:w-4 sm:h-4" />
                  <span>
                    Signature must match the owner's full name exactly
                  </span>
                </div>
              )}

            {formData.legal?.signature === formData.ownerInfo?.fullName && (
              <div className="mt-2 sm:mt-3 flex items-center gap-2 text-emerald-600 text-xs sm:text-sm">
                <CheckCircle size={14} className="sm:w-4 sm:h-4" />
                <span>Signature verified and accepted</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Error Message */}
        {uploadError && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 rounded-xl border border-red-200"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <AlertCircle
                size={18}
                className="text-red-500 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"
              />
              <div>
                <p className="text-red-700 text-sm font-medium">
                  Submission Error
                </p>
                <p className="text-red-600 text-xs">{uploadError}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200 mb-6 sm:mb-8"
        >
          <Shield
            size={20}
            className="text-emerald-600 w-5 h-5 sm:w-6 sm:h-6"
          />
          <div className="text-center">
            <p className="text-emerald-700 font-semibold text-sm">
              Encrypted & Secured Submission
            </p>
            <p className="text-emerald-600 text-xs">
              All data is protected with enterprise-grade security
            </p>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-200"
        >
          <motion.button
            type="button"
            onClick={onBack}
            disabled={isProcessing}
            whileHover={{ scale: isProcessing ? 1 : 1.02 }}
            whileTap={{ scale: isProcessing ? 1 : 0.98 }}
            className="group flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-2xl text-gray-600 hover:bg-gray-50 hover:border-gray-400 disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400 transition-all duration-300 text-sm sm:text-base font-medium order-2 sm:order-1 min-h-[44px]"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span>Back to Owner</span>
          </motion.button>
          <motion.button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
            whileHover={{ scale: isSubmitDisabled ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitDisabled ? 1 : 0.98 }}
            className="group flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-semibold hover:from-emerald-700 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base order-1 sm:order-2 min-h-[44px] relative overflow-hidden"
          >
            {/* Animated background */}
            {!isSubmitDisabled && !isProcessing && (
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            )}

            <span className="relative z-10 flex items-center gap-2">
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span className="hidden sm:inline">Processing...</span>
                  <span className="sm:hidden">Processing</span>
                </>
              ) : isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <span className="hidden sm:inline">
                    Submit to DOZA Medical Board
                  </span>
                  <span className="sm:hidden">Submit Registration</span>
                  <Shield
                    size={18}
                    className="relative z-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </>
              )}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LegalStep;
