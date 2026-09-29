// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   User,
//   Shield,
//   CheckCircle,
//   DollarSign,
//   Award,
//   FileText,
//   ChevronLeft,
// } from "lucide-react";
// import Link from "next/link";

// // Components
// import RoleSelection from "./components/RoleSelection";
// import PersonalInfo from "./components/PersonalInfo";
// import ProfessionalInfo from "./components/ProfessionalInfo";
// import PracticeInfo from "./components/PracticeInfo";
// import CredentialsUpload from "./components/CredentialsUpload";
// import LegalAgreement from "./components/LegalAgreement";
// import SuccessStep from "./components/SuccessStep";

// // Types
// import { RegistrationStep } from "./type";
// import { useMedicRegistration } from "./hook/useMedicRegistration";
// import { bebasNeue, poppins } from "@/app/home/doza_center/constant";

// const MedicRegistration: React.FC = () => {
//   const [currentStep, setCurrentStep] = useState<RegistrationStep>("role");

//   const {
//     formData,
//     updateFormData,
//     handleSubmit,
//     isSubmitting,
//     getLocationFromMap,
//   } = useMedicRegistration();

//   const steps: {
//     id: RegistrationStep;
//     label: string;
//     icon: React.ReactNode;
//   }[] = [
//     { id: "role", label: "Role", icon: <User size={16} /> },
//     { id: "personal", label: "Personal", icon: <User size={16} /> },
//     { id: "professional", label: "Professional", icon: <Award size={16} /> },
//     { id: "practice", label: "Practice", icon: <DollarSign size={16} /> },
//     { id: "credentials", label: "Documents", icon: <FileText size={16} /> },
//     { id: "legal", label: "Agreement", icon: <Shield size={16} /> },
//   ];

//   const activeStepIndex = steps.findIndex((s) => s.id === currentStep);
//   const isSuccess = currentStep === "success";

//   const onSubmitLegal = async () => {
//     try {
//       await handleSubmit();
//       setCurrentStep("success");
//     } catch (error) {
//       console.error("Submission failed", error);
//     }
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case "role":
//         return (
//           <RoleSelection
//             formData={formData}
//             updateFormData={updateFormData}
//             onNext={() => setCurrentStep("personal")}
//           />
//         );
//       case "personal":
//         return (
//           <PersonalInfo
//             formData={formData}
//             updateFormData={updateFormData}
//             onBack={() => setCurrentStep("role")}
//             onNext={() => setCurrentStep("professional")}
//           />
//         );
//       case "professional":
//         return (
//           <ProfessionalInfo
//             formData={formData}
//             updateFormData={updateFormData}
//             onBack={() => setCurrentStep("personal")}
//             onNext={() => setCurrentStep("practice")}
//           />
//         );
//       case "practice":
//         return (
//           <PracticeInfo
//             formData={formData}
//             updateFormData={updateFormData}
//             onBack={() => setCurrentStep("professional")}
//             onNext={() => setCurrentStep("credentials")}
//             getLocationFromMap={getLocationFromMap}
//           />
//         );
//       case "credentials":
//         return (
//           <CredentialsUpload
//             formData={formData}
//             updateFormData={updateFormData}
//             onBack={() => setCurrentStep("practice")}
//             onNext={() => setCurrentStep("legal")}
//           />
//         );
//       case "legal":
//         return (
//           <LegalAgreement
//             formData={formData}
//             updateFormData={updateFormData}
//             onBack={() => setCurrentStep("credentials")}
//             onSubmit={onSubmitLegal}
//             isSubmitting={isSubmitting}
//           />
//         );
//       case "success":
//         return <SuccessStep formData={formData} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 relative overflow-x-hidden">
//       {/* Abstract Backgrounds */}
//       <div className="fixed inset-0 z-0 opacity-40">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4" />
//         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4" />
//       </div>

//       <header className="relative z-10 bg-white/70 backdrop-blur-md border-b border-slate-200">
//         <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
//           <Link
//             href="/"
//             className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors"
//           >
//             <ChevronLeft size={20} />
//             <span className={`text-sm ${poppins.className} font-medium`}>
//               Back to Home
//             </span>
//           </Link>
//           <span
//             className={`text-2xl font-bold text-slate-900 tracking-tight ${bebasNeue.className}`}
//           >
//             DOZA
//           </span>
//           <div className="w-24" />
//         </div>
//       </header>

//       {/* Main Container - Responsive Widths */}
//       <main className="relative z-10 max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 py-12">
//         {/* Progress Bar Header */}
//         {!isSuccess && (
//           <div className="mb-12">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className={`text-2xl text-slate-800 ${bebasNeue.className}`}>
//                 REGISTRATION <span className="text-emerald-600">STEPS</span>
//               </h2>
//               <span className="text-sm text-slate-500 font-medium bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
//                 {activeStepIndex + 1} / {steps.length}
//               </span>
//             </div>

//             <div className="flex items-center justify-between gap-3">
//               {steps.map((step, index) => {
//                 const isCompleted = index < activeStepIndex;
//                 const isActive = index === activeStepIndex;

//                 return (
//                   <div key={step.id} className="flex-1">
//                     <div
//                       className={`h-2.5 rounded-full transition-all duration-500 ${
//                         isActive
//                           ? "bg-emerald-600 shadow-lg shadow-emerald-600/20"
//                           : isCompleted
//                             ? "bg-emerald-500"
//                             : "bg-slate-200"
//                       }`}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}

//         {/* Dynamic Card Area */}
//         <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 min-h-[600px] flex flex-col justify-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentStep}
//               initial={{ opacity: 0, scale: 0.98 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.98 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               {renderStep()}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MedicRegistration;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { submitMedicRegistration } from "./RegistrationService";
import type { MedicRegistrationData } from "./type";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";

const MedicRegistration: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<MedicRegistrationData>({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      gender: "",
    },
    role: "medic",
    agreedToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    field: keyof typeof formData.personalInfo,
    value: string,
  ) => {
    setFormData({
      ...formData,
      personalInfo: { ...formData.personalInfo, [field]: value },
    });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const validateForm = (): boolean => {
    const e: Record<string, string> = {};
    const p = formData.personalInfo;

    if (!p.firstName.trim()) e.firstName = "First name is required";
    if (!p.lastName.trim()) e.lastName = "Last name is required";

    if (!p.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(p.email)) e.email = "Email is invalid";

    if (!p.phone.trim()) e.phone = "Phone number is required";
    if (!p.gender) e.gender = "Please select your gender";

    if (!p.password) e.password = "Password is required";
    else if (p.password.length < 8)
      e.password = "Password must be at least 8 characters";

    if (p.password !== p.confirmPassword)
      e.confirmPassword = "Passwords do not match";

    if (!formData.agreedToTerms) e.terms = "You must agree to the terms";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      await submitMedicRegistration(formData);
      setSubmitSuccess(true);
    } catch (err: any) {
      setErrors({ form: err.message || "Registration failed" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── Success screen ──────────────────────────────────────────
  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-emerald-50/30 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl p-10 shadow-xl border border-slate-100 text-center"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-emerald-600 w-10 h-10" />
          </div>
          <h2 className={`text-4xl font-bold mb-4 ${bebasNeue.className}`}>
            WELCOME TO DOZA.
          </h2>
          <p className="text-slate-500 mb-8">
            Your medic account is ready. Log in to complete your profile and
            submit your credentials.
          </p>
          <button
            onClick={() => router.push("/medic/login")}
            className="block w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition"
          >
            GO TO LOGIN
          </button>
        </motion.div>
      </div>
    );
  }

  // ─── Form ────────────────────────────────────────────────────
  return (
    <div
      className={`min-h-screen bg-slate-50/50 relative ${poppins.className}`}
    >
      <main className="max-w-3xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1
            className={`text-5xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
          >
            BECOME A <span className="text-emerald-600">DOZA MEDIC</span>
          </h1>
          <p className="text-slate-500">
            Create your account. You'll finish your professional profile after
            logging in.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal info */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2
              className={`text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 ${bebasNeue.className}`}
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                1
              </div>
              YOUR DETAILS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.personalInfo.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.personalInfo.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="you@yourpractice.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.personalInfo.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+234..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Gender
                </label>
                <select
                  value={formData.personalInfo.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
                >
                  <option value="">Select...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.personalInfo.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  placeholder="Min 8 characters"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={formData.personalInfo.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  placeholder="Repeat password"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Terms + submit */}
          <div className="flex flex-col gap-4">
            {errors.form && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 text-red-600 text-sm">
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                <span>{errors.form}</span>
              </div>
            )}

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreedToTerms: e.target.checked })
                }
                className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-600">
                I agree to terms and privacy policy
              </span>
            </label>
            {errors.terms && (
              <p className="text-red-500 text-xs -mt-3 ml-8">{errors.terms}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-lg active:scale-[0.98] disabled:opacity-60"
            >
              {isSubmitting ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
            </button>

            <p className="text-center text-sm text-slate-400">
              Already have an account?{" "}
              <Link
                href="/medic/login"
                className="text-emerald-600 font-bold hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default MedicRegistration;
