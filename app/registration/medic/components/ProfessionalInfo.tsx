// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Award,
//   GraduationCap,
//   Plus,
//   X,
//   ChevronRight,
//   ChevronLeft,
//   Briefcase,
// } from "lucide-react";
// import { MedicRegistrationData } from "../type";
// import { medicRoles } from "../data/constants";
// import { bebasNeue, poppins } from "@/app/home/doza_center/constant";

// interface ProfessionalInfoProps {
//   formData: MedicRegistrationData;
//   updateFormData: (updates: Partial<MedicRegistrationData>) => void;
//   onBack: () => void;
//   onNext: () => void;
// }

// const ProfessionalInfo: React.FC<ProfessionalInfoProps> = ({
//   formData,
//   updateFormData,
//   onBack,
//   onNext,
// }) => {
//   const [newQualification, setNewQualification] = useState("");

//   const selectedRole = medicRoles.find(
//     (role) => role.id === formData.professionalInfo.role,
//   );

//   const handleSpecialtyToggle = (specialty: string) => {
//     const currentSpecialties = formData.professionalInfo.specialties;
//     const updatedSpecialties = currentSpecialties.includes(specialty)
//       ? currentSpecialties.filter((s) => s !== specialty)
//       : [...currentSpecialties, specialty];

//     updateFormData({
//       professionalInfo: {
//         ...formData.professionalInfo,
//         specialties: updatedSpecialties,
//       },
//     });
//   };

//   const addQualification = () => {
//     if (
//       newQualification.trim() &&
//       !formData.professionalInfo.qualifications.includes(
//         newQualification.trim(),
//       )
//     ) {
//       updateFormData({
//         professionalInfo: {
//           ...formData.professionalInfo,
//           qualifications: [
//             ...formData.professionalInfo.qualifications,
//             newQualification.trim(),
//           ],
//         },
//       });
//       setNewQualification("");
//     }
//   };

//   const isFormValid =
//     formData.professionalInfo.licenseNumber.trim() !== "" &&
//     formData.professionalInfo.yearsOfExperience > 0 &&
//     (formData.professionalInfo.specialties.length > 0 ||
//       formData.professionalInfo.customSpecialty.trim() !== "") &&
//     formData.professionalInfo.qualifications.length > 0;

//   return (
//     <div className={`w-full max-w-4xl mx-auto px-4 py-8 ${poppins.className}`}>
//       {/* Header */}
//       <header className="mb-12">
//         <div className="flex items-center gap-3 mb-6">
//           <span
//             className={`text-3xl text-emerald-600 font-bold ${bebasNeue.className}`}
//           >
//             03
//           </span>
//           <div className="h-[2px] flex-grow bg-slate-200" />
//           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
//             Professional Background
//           </span>
//         </div>
//         <h2
//           className={`text-5xl md:text-7xl font-bold leading-tight ${bebasNeue.className}`}
//         >
//           YOUR <span className="text-emerald-600">EXPERTISE</span>
//         </h2>
//       </header>

//       <div className="space-y-8">
//         {/* Row: License & Experience */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-bold text-slate-900 mb-2">
//               License Number
//             </label>
//             <input
//               type="text"
//               value={formData.professionalInfo.licenseNumber}
//               onChange={(e) =>
//                 updateFormData({
//                   professionalInfo: {
//                     ...formData.professionalInfo,
//                     licenseNumber: e.target.value,
//                   },
//                 })
//               }
//               className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
//               placeholder="e.g. LIC-123456"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-bold text-slate-900 mb-2">
//               Years of Experience
//             </label>
//             <input
//               type="number"
//               min="0"
//               value={formData.professionalInfo.yearsOfExperience}
//               onChange={(e) =>
//                 updateFormData({
//                   professionalInfo: {
//                     ...formData.professionalInfo,
//                     yearsOfExperience: parseInt(e.target.value) || 0,
//                   },
//                 })
//               }
//               className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
//               placeholder="0"
//             />
//           </div>
//         </div>

//         {/* Specialties */}
//         {selectedRole && selectedRole.specialties.length > 0 ? (
//           <div>
//             <label className="block text-sm font-bold text-slate-900 mb-4">
//               Select Your Specialties
//             </label>
//             <div className="flex flex-wrap gap-2">
//               {selectedRole.specialties.map((specialty) => {
//                 const isSelected =
//                   formData.professionalInfo.specialties.includes(specialty);
//                 return (
//                   <motion.button
//                     key={specialty}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => handleSpecialtyToggle(specialty)}
//                     className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
//                       isSelected
//                         ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/20"
//                         : "bg-white text-slate-600 border-slate-200 hover:border-emerald-500"
//                     }`}
//                   >
//                     {specialty}
//                   </motion.button>
//                 );
//               })}
//             </div>
//           </div>
//         ) : (
//           <div>
//             <label className="block text-sm font-bold text-slate-900 mb-2">
//               Specify Specialty
//             </label>
//             <input
//               type="text"
//               value={formData.professionalInfo.customSpecialty}
//               onChange={(e) =>
//                 updateFormData({
//                   professionalInfo: {
//                     ...formData.professionalInfo,
//                     customSpecialty: e.target.value,
//                   },
//                 })
//               }
//               className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
//               placeholder="Enter your specific medical specialty"
//             />
//           </div>
//         )}

//         {/* Qualifications */}
//         <div>
//           <label className="block text-sm font-bold text-slate-900 mb-4">
//             Certifications & Qualifications
//           </label>
//           <div className="flex flex-wrap gap-2 mb-4">
//             <AnimatePresence>
//               {formData.professionalInfo.qualifications.map((q, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.8 }}
//                   className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700 text-sm"
//                 >
//                   <GraduationCap size={14} />
//                   {q}
//                   <button
//                     onClick={() =>
//                       updateFormData({
//                         professionalInfo: {
//                           ...formData.professionalInfo,
//                           qualifications:
//                             formData.professionalInfo.qualifications.filter(
//                               (x) => x !== q,
//                             ),
//                         },
//                       })
//                     }
//                   >
//                     <X
//                       size={14}
//                       className="hover:text-red-500 transition-colors"
//                     />
//                   </button>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//           <div className="flex gap-2">
//             <input
//               type="text"
//               value={newQualification}
//               onChange={(e) => setNewQualification(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && addQualification()}
//               className="flex-1 px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 transition-all"
//               placeholder="Add qualification (e.g. Board Certified)"
//             />
//             <button
//               onClick={addQualification}
//               disabled={!newQualification.trim()}
//               className="bg-slate-900 text-white px-6 rounded-xl hover:bg-emerald-600 transition-colors disabled:bg-slate-200"
//             >
//               <Plus size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Bio */}
//         <div>
//           <label className="block text-sm font-bold text-slate-900 mb-2">
//             Professional Bio
//           </label>
//           <textarea
//             value={formData.professionalInfo.bio}
//             onChange={(e) =>
//               updateFormData({
//                 professionalInfo: {
//                   ...formData.professionalInfo,
//                   bio: e.target.value,
//                 },
//               })
//             }
//             rows={4}
//             className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
//             placeholder="Tell us about your background and approach to patient care..."
//           />
//         </div>
//       </div>

//       {/* Footer Navigation */}
//       <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-100">
//         <button
//           onClick={onBack}
//           className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-500 hover:text-slate-900 transition-colors"
//         >
//           <ChevronLeft size={20} />
//           Back
//         </button>
//         <button
//           onClick={onNext}
//           disabled={!isFormValid}
//           className={`px-10 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 shadow-lg ${
//             isFormValid
//               ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-500/20"
//               : "bg-slate-100 text-slate-400 cursor-not-allowed"
//           }`}
//         >
//           Continue
//           <ChevronRight size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfessionalInfo;
