// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Plus, ChevronRight, ShieldCheck } from "lucide-react";
// import { bebasNeue, poppins } from "@/app/home/doza_center/constant";
// import { MedicRegistrationData } from "../type";
// import { medicRoles } from "../data/constants";

// interface RoleSelectionProps {
//   formData: MedicRegistrationData;
//   updateFormData: (updates: Partial<MedicRegistrationData>) => void;
//   onNext: () => void;
// }

// const RoleSelection: React.FC<RoleSelectionProps> = ({
//   formData,
//   updateFormData,
//   onNext,
// }) => {
//   const { role, customRole } = formData.professionalInfo;

//   const isReady =
//     role !== "" &&
//     (role !== "other" || (role === "other" && customRole?.trim() !== ""));

//   const handleRoleSelect = (id: string) => {
//     updateFormData({
//       professionalInfo: {
//         ...formData.professionalInfo,
//         role: id,
//         specialties: [],
//         customRole: id === "other" ? formData.professionalInfo.customRole : "",
//       },
//     });
//   };

//   return (
//     <div
//       className={`w-full max-w-5xl mx-auto px-4 py-8 ${poppins.className} text-slate-900`}
//     >
//       {/* Header */}
//       <header className="mb-12">
//         <div className="flex items-center gap-3 mb-6">
//           <span
//             className={`text-3xl text-emerald-600 font-bold ${bebasNeue.className}`}
//           >
//             01
//           </span>
//           <div className="h-[2px] flex-grow bg-slate-200" />
//           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 whitespace-nowrap">
//             Professional Identity
//           </span>
//         </div>
//         <h2
//           className={`text-5xl md:text-7xl font-bold leading-none mb-4 ${bebasNeue.className}`}
//         >
//           WHICH ROLE <span className="text-emerald-600">DEFINES YOU?</span>
//         </h2>
//         <p className="text-slate-500 font-bold max-w-xl">
//           Select your primary practice area to configure your dashboard
//           settings.
//         </p>
//       </header>

//       {/* Bento Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
//         {medicRoles
//           .filter((r) => r.id !== "other")
//           .map((r, index) => {
//             const Icon = r.icon;
//             const isSelected = role === r.id;

//             return (
//               <motion.button
//                 key={r.id}
//                 whileHover={{ y: -4 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => handleRoleSelect(r.id)}
//                 className={`group relative p-6 rounded-3xl border-2 text-left transition-all duration-300 ${
//                   isSelected
//                     ? "bg-white border-emerald-500 shadow-xl shadow-emerald-500/10"
//                     : "bg-white border-slate-100 hover:border-emerald-200 shadow-sm hover:shadow-md"
//                 }`}
//               >
//                 <div
//                   className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
//                     isSelected
//                       ? "bg-emerald-600 text-white"
//                       : "bg-slate-50 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600"
//                   }`}
//                 >
//                   <Icon size={24} />
//                 </div>

//                 <h3
//                   className={`text-2xl font-bold mb-2 ${bebasNeue.className}`}
//                 >
//                   {r.title}
//                 </h3>
//                 <p className="text-slate-500 text-sm leading-relaxed">
//                   {r.description}
//                 </p>

//                 {isSelected && (
//                   <div className="absolute top-6 right-6 text-emerald-600">
//                     <ShieldCheck size={24} />
//                   </div>
//                 )}
//               </motion.button>
//             );
//           })}

//         {/* Custom "Other" Bento Card - Full Width */}
//         <motion.div
//           onClick={() => handleRoleSelect("other")}
//           className={`col-span-1 sm:col-span-2 lg:col-span-3 p-6 rounded-3xl border-2 transition-all cursor-pointer duration-300 ${
//             role === "other"
//               ? "bg-emerald-600 border-emerald-600 shadow-xl"
//               : "bg-white border-slate-100 hover:border-emerald-500 shadow-sm hover:shadow-md"
//           }`}
//         >
//           <div className="flex flex-col md:flex-row items-center gap-6">
//             <div className="flex items-center gap-3">
//               <div
//                 className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
//                   role === "other"
//                     ? "bg-white text-emerald-600"
//                     : "bg-slate-50 text-slate-400"
//                 }`}
//               >
//                 <Plus size={24} />
//               </div>
//               <h4
//                 className={`text-2xl ${role === "other" ? "text-white" : "text-slate-900"} ${bebasNeue.className} whitespace-nowrap`}
//               >
//                 OTHER / CUSTOM
//               </h4>
//             </div>

//             <input
//               type="text"
//               placeholder="Specify your role here..."
//               value={customRole || ""}
//               onClick={(e) => e.stopPropagation()} // Prevent double trigger
//               onChange={(e) =>
//                 updateFormData({
//                   professionalInfo: {
//                     ...formData.professionalInfo,
//                     role: "other",
//                     customRole: e.target.value,
//                   },
//                 })
//               }
//               className={`w-full bg-transparent border-b-2 py-2 outline-none text-md placeholder-opacity-50 transition-colors ${
//                 role === "other"
//                   ? "border-white/30 text-white placeholder-white/50"
//                   : "border-slate-300 text-slate-900 placeholder-slate-400"
//               }`}
//             />
//           </div>
//         </motion.div>
//       </div>

//       {/* Footer Nav */}
//       <div className="flex justify-end pt-8">
//         <button
//           onClick={onNext}
//           disabled={!isReady}
//           className={`px-10 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 shadow-lg ${
//             isReady
//               ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-500/20"
//               : "bg-slate-100 text-slate-300 cursor-not-allowed"
//           }`}
//         >
//           Continue
//           <ChevronRight size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RoleSelection;
