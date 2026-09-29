// "use client";

// import React from "react";
// import {
//   CheckCircle,
//   AlertTriangle,
//   ChevronLeft,
//   Lock,
//   Edit3,
//   FileText,
// } from "lucide-react";
// import { MedicRegistrationData } from "../type";
// import { bebasNeue, poppins, alexBrush } from "@/app/home/doza_center/constant";

// type LegalBooleanKey =
//   | "agreedToTerms"
//   | "agreedToPrivacy"
//   | "agreedToCommitment";

// interface LegalAgreementProps {
//   formData: MedicRegistrationData;
//   updateFormData: (updates: Partial<MedicRegistrationData>) => void;
//   onBack: () => void;
//   onSubmit: () => Promise<void>;
//   isSubmitting: boolean;
// }

// const LegalAgreement: React.FC<LegalAgreementProps> = ({
//   formData,
//   updateFormData,
//   onBack,
//   onSubmit,
//   isSubmitting,
// }) => {
//   // Target name for validation (used for visual guidance)
//   const fullName =
//     `${formData.personalInfo.firstName} ${formData.personalInfo.lastName}`.trim();

//   // Validation check: Compares input against target name
//   const isSignatureValid =
//     formData.legal.signature.trim() === fullName && fullName.length > 0;

//   const isFormValid =
//     formData.legal.agreedToTerms &&
//     formData.legal.agreedToPrivacy &&
//     formData.legal.agreedToCommitment &&
//     isSignatureValid;

//   return (
//     <div className={`w-full max-w-4xl mx-auto px-4 py-8 ${poppins.className}`}>
//       {/* Header */}
//       <header className="mb-12">
//         <div className="flex items-center gap-3 mb-6">
//           <span
//             className={`text-3xl text-emerald-600 font-bold ${bebasNeue.className}`}
//           >
//             06
//           </span>
//           <div className="h-[2px] flex-grow bg-slate-200" />
//           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
//             Legal Agreement
//           </span>
//         </div>
//         <h2
//           className={`text-5xl md:text-7xl font-bold leading-tight ${bebasNeue.className}`}
//         >
//           FINAL <span className="text-emerald-600">ATTESTATION</span>
//         </h2>
//       </header>

//       {/* Commitment Warning */}
//       <div className="mb-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl flex gap-4">
//         <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={24} />
//         <div>
//           <h3 className="font-bold text-amber-900">
//             Professional Responsibility
//           </h3>
//           <p className="text-sm text-amber-800/80 mt-1">
//             By signing this agreement, you acknowledge that all information
//             provided is accurate, and you commit to upholding the highest
//             standards of healthcare practice.
//           </p>
//         </div>
//       </div>

//       {/* Expanded Terms Section */}
//       <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8 h-[400px] overflow-y-auto shadow-sm">
//         <div className="flex items-center gap-2 text-slate-400 mb-6 border-b pb-4">
//           <FileText size={20} />
//           <span className="text-xs font-bold uppercase tracking-widest">
//             Terms & Conditions of Service
//           </span>
//         </div>
//         <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
//           <p>
//             <strong>1. Professional Practice:</strong> The Provider agrees to
//             maintain active licensing and credentials as required by the
//             relevant medical boards. Services provided must adhere to current
//             clinical guidelines and ethical standards.
//           </p>
//           <p>
//             <strong>2. Patient Confidentiality:</strong> All information shared
//             by patients is strictly confidential. The Provider is fully
//             responsible for securing patient records and complying with HIPAA,
//             GDPR, or applicable local data protection regulations.
//           </p>
//           <p>
//             <strong>3. Platform Engagement:</strong> The Provider agrees to
//             maintain a professional presence on the platform. This includes
//             responding to patient inquiries within the defined SLA of 24 hours
//             and maintaining the quality of care expected by our users.
//           </p>
//           <p>
//             <strong>4. Revenue and Fees:</strong> The Provider agrees to the
//             platform's revenue sharing model. Platform fees are calculated at
//             15% per successfully completed consultation to support
//             infrastructure, support, and marketing services.
//           </p>
//           <p>
//             <strong>5. Limitation of Liability:</strong> While the platform
//             provides the infrastructure for care, the Provider maintains
//             clinical autonomy and responsibility for the diagnosis, treatment,
//             and medical advice given to patients.
//           </p>
//           <p>
//             <strong>6. Termination:</strong> Either party may terminate this
//             agreement with 30 days written notice. The platform reserves the
//             right to suspend accounts immediately in the event of gross
//             professional misconduct or policy violations.
//           </p>
//         </div>
//       </div>

//       {/* Checkboxes */}
//       <div className="space-y-4 mb-10">
//         {[
//           {
//             key: "agreedToTerms",
//             label:
//               "I have read, understood, and agree to the Terms & Conditions above.",
//           },
//           {
//             key: "agreedToPrivacy",
//             label:
//               "I agree to the Privacy Policy and acknowledge my responsibilities regarding patient data.",
//           },
//           {
//             key: "agreedToCommitment",
//             label:
//               "I commit to active, high-quality participation and service standards.",
//           },
//         ].map((item) => {
//           const checkboxKey = item.key as LegalBooleanKey;
//           return (
//             <label
//               key={item.key}
//               className="flex items-start gap-3 cursor-pointer group"
//             >
//               <input
//                 type="checkbox"
//                 checked={!!formData.legal[checkboxKey]}
//                 onChange={(e) =>
//                   updateFormData({
//                     legal: {
//                       ...formData.legal,
//                       [checkboxKey]: e.target.checked,
//                     },
//                   })
//                 }
//                 className="mt-1 w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
//               />
//               <span className="text-slate-700 font-medium group-hover:text-emerald-700 transition-colors">
//                 {item.label}
//               </span>
//             </label>
//           );
//         })}
//       </div>

//       {/* Manual Signature Verification */}
//       <div className="mb-10 p-8 bg-slate-50 border-2 border-slate-200 rounded-3xl">
//         <label className="block text-sm font-bold text-slate-900 mb-6 text-center">
//           Type your full name exactly as:
//           <span className="block text-emerald-600 text-xl mt-2 tracking-wider font-semibold underline underline-offset-8">
//             {fullName}
//           </span>
//         </label>

//         <div className="relative max-w-lg mx-auto">
//           <input
//             type="text"
//             value={formData.legal.signature}
//             onChange={(e) =>
//               updateFormData({
//                 legal: {
//                   ...formData.legal,
//                   signature: e.target.value,
//                   date: new Date().toISOString(),
//                 },
//               })
//             }
//             className={`w-full px-6 py-4 rounded-xl border-2 bg-white transition-all text-xl outline-none text-center ${
//               isSignatureValid
//                 ? "border-emerald-500 text-emerald-900 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
//                 : "border-slate-300 text-slate-900 focus:border-slate-400"
//             } ${alexBrush.className}`}
//             placeholder="Type your name here"
//           />
//           <Edit3
//             className={`absolute right-4 top-4 ${isSignatureValid ? "text-emerald-500" : "text-slate-300"}`}
//             size={20}
//           />
//         </div>

//         {formData.legal.signature.length > 0 && !isSignatureValid && (
//           <p className="text-red-500 text-xs mt-4 text-center font-bold">
//             Signature does not match your registered name.
//           </p>
//         )}
//       </div>

//       {/* Navigation */}
//       <div className="flex justify-between items-center pt-8 border-t border-slate-100">
//         <button
//           onClick={onBack}
//           className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-500 hover:text-slate-900 transition-colors"
//         >
//           <ChevronLeft size={20} /> Back
//         </button>
//         <button
//           onClick={onSubmit}
//           disabled={!isFormValid || isSubmitting}
//           className={`px-10 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 shadow-lg ${
//             isFormValid
//               ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-500/20"
//               : "bg-slate-100 text-slate-400 cursor-not-allowed"
//           }`}
//         >
//           {isSubmitting ? "Completing..." : "Complete Registration"}
//           {!isSubmitting && <CheckCircle size={18} />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LegalAgreement;
