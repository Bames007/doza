// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   DollarSign,
//   Clock,
//   MapPin,
//   Languages,
//   Home,
//   Video,
//   User,
//   ChevronRight,
//   ChevronLeft,
//   Map,
// } from "lucide-react";
// import { MedicRegistrationData } from "../type";
// import { bebasNeue, poppins } from "@/app/home/doza_center/constant";

// interface PracticeInfoProps {
//   formData: MedicRegistrationData;
//   updateFormData: (updates: Partial<MedicRegistrationData>) => void;
//   onBack: () => void;
//   onNext: () => void;
//   getLocationFromMap: () => void;
// }

// const PracticeInfo: React.FC<PracticeInfoProps> = ({
//   formData,
//   updateFormData,
//   onBack,
//   onNext,
//   getLocationFromMap,
// }) => {
//   const commonLanguages = [
//     "English",
//     "Yoruba",
//     "Hausa",
//     "Igbo",
//     "Ibibio",
//     "Arabic",
//     "Hindi",
//     "Portuguese",
//   ];

//   const toggleLanguage = (language: string) => {
//     const currentLanguages = formData.practiceInfo.languages;
//     const updatedLanguages = currentLanguages.includes(language)
//       ? currentLanguages.filter((l) => l !== language)
//       : [...currentLanguages, language];
//     updateFormData({
//       practiceInfo: { ...formData.practiceInfo, languages: updatedLanguages },
//     });
//   };

//   const toggleConsultationType = (
//     type: keyof typeof formData.practiceInfo.consultationTypes,
//   ) => {
//     updateFormData({
//       practiceInfo: {
//         ...formData.practiceInfo,
//         consultationTypes: {
//           ...formData.practiceInfo.consultationTypes,
//           [type]: !formData.practiceInfo.consultationTypes[type],
//         },
//       },
//     });
//   };

//   const toggleDay = (day: string) => {
//     const currentDays = formData.practiceInfo.availability.days;
//     const updatedDays = currentDays.includes(day)
//       ? currentDays.filter((d) => d !== day)
//       : [...currentDays, day];
//     updateFormData({
//       practiceInfo: {
//         ...formData.practiceInfo,
//         availability: {
//           ...formData.practiceInfo.availability,
//           days: updatedDays,
//         },
//       },
//     });
//   };

//   const isFormValid =
//     formData.practiceInfo.hourlyRate > 0 &&
//     formData.location.address.trim() !== "" &&
//     formData.location.city.trim() !== "" &&
//     Object.values(formData.practiceInfo.consultationTypes).some((val) => val) &&
//     formData.practiceInfo.availability.days.length > 0;

//   return (
//     <div className={`w-full max-w-4xl mx-auto px-4 py-8 ${poppins.className}`}>
//       {/* Header */}
//       <header className="mb-12">
//         <div className="flex items-center gap-3 mb-6">
//           <span
//             className={`text-3xl text-emerald-600 font-bold ${bebasNeue.className}`}
//           >
//             04
//           </span>
//           <div className="h-[2px] flex-grow bg-slate-200" />
//           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
//             Practice Details
//           </span>
//         </div>
//         <h2
//           className={`text-5xl md:text-7xl font-bold leading-tight ${bebasNeue.className}`}
//         >
//           PRACTICE <span className="text-emerald-600">SETUP</span>
//         </h2>
//       </header>

//       <div className="space-y-10">
//         {/* Consultation Types */}
//         <section>
//           <label className="block text-sm font-bold text-slate-900 mb-4">
//             Consultation Methods
//           </label>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             {[
//               { id: "inPerson", label: "In-Person", icon: User },
//               { id: "online", label: "Online", icon: Video },
//               { id: "homeVisit", label: "Home Visit", icon: Home },
//             ].map((method) => {
//               const Icon = method.icon;
//               const isActive =
//                 formData.practiceInfo.consultationTypes[
//                   method.id as keyof typeof formData.practiceInfo.consultationTypes
//                 ];
//               return (
//                 <button
//                   key={method.id}
//                   onClick={() => toggleConsultationType(method.id as any)}
//                   className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all ${
//                     isActive
//                       ? "border-emerald-600 bg-emerald-50 text-emerald-700"
//                       : "border-slate-200 hover:border-emerald-300"
//                   }`}
//                 >
//                   <Icon
//                     size={24}
//                     className={isActive ? "text-emerald-600" : "text-slate-400"}
//                   />
//                   <span className="mt-2 font-bold">{method.label}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </section>

//         {/* Rate & Availability */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <section>
//             <label className="block text-sm font-bold text-slate-900 mb-2">
//               Hourly Rate ($)
//             </label>
//             <div className="relative">
//               <DollarSign
//                 className="absolute left-3 top-3.5 text-slate-400"
//                 size={18}
//               />
//               <input
//                 type="number"
//                 value={formData.practiceInfo.hourlyRate}
//                 onChange={(e) =>
//                   updateFormData({
//                     practiceInfo: {
//                       ...formData.practiceInfo,
//                       hourlyRate: parseInt(e.target.value) || 0,
//                     },
//                   })
//                 }
//                 className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
//                 placeholder="50"
//               />
//             </div>
//           </section>

//           <section>
//             <label className="block text-sm font-bold text-slate-900 mb-2">
//               Emergency Availability
//             </label>
//             <div className="flex items-center h-[52px] px-4 rounded-xl border border-slate-200">
//               <input
//                 type="checkbox"
//                 checked={formData.practiceInfo.availability.emergencyAvailable}
//                 onChange={(e) =>
//                   updateFormData({
//                     practiceInfo: {
//                       ...formData.practiceInfo,
//                       availability: {
//                         ...formData.practiceInfo.availability,
//                         emergencyAvailable: e.target.checked,
//                       },
//                     },
//                   })
//                 }
//                 className="w-5 h-5 rounded accent-emerald-600"
//               />
//               <span className="ml-3 text-sm text-slate-600">
//                 Available for emergency consultations
//               </span>
//             </div>
//           </section>
//         </div>

//         {/* Days & Hours */}
//         <section>
//           <label className="block text-sm font-bold text-slate-900 mb-4">
//             Availability Schedule
//           </label>
//           <div className="flex flex-wrap gap-2 mb-6">
//             {[
//               "monday",
//               "tuesday",
//               "wednesday",
//               "thursday",
//               "friday",
//               "saturday",
//               "sunday",
//             ].map((day) => {
//               const isSelected =
//                 formData.practiceInfo.availability.days.includes(day);
//               return (
//                 <button
//                   key={day}
//                   onClick={() => toggleDay(day)}
//                   className={`px-4 py-2 rounded-full border text-sm font-bold capitalize transition-all ${
//                     isSelected
//                       ? "bg-emerald-600 text-white border-emerald-600"
//                       : "bg-slate-50 text-slate-600 border-slate-200"
//                   }`}
//                 >
//                   {day.slice(0, 3)}
//                 </button>
//               );
//             })}
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
//                 Start Time
//               </label>
//               <input
//                 type="time"
//                 value={formData.practiceInfo.availability.hours.start}
//                 onChange={(e) =>
//                   updateFormData({
//                     practiceInfo: {
//                       ...formData.practiceInfo,
//                       availability: {
//                         ...formData.practiceInfo.availability,
//                         hours: {
//                           ...formData.practiceInfo.availability.hours,
//                           start: e.target.value,
//                         },
//                       },
//                     },
//                   })
//                 }
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500"
//               />
//             </div>
//             <div>
//               <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
//                 End Time
//               </label>
//               <input
//                 type="time"
//                 value={formData.practiceInfo.availability.hours.end}
//                 onChange={(e) =>
//                   updateFormData({
//                     practiceInfo: {
//                       ...formData.practiceInfo,
//                       availability: {
//                         ...formData.practiceInfo.availability,
//                         hours: {
//                           ...formData.practiceInfo.availability.hours,
//                           end: e.target.value,
//                         },
//                       },
//                     },
//                   })
//                 }
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Location Section */}
//         <section>
//           <label className="block text-sm font-bold text-slate-900 mb-4">
//             Practice Location
//           </label>
//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="Street Address"
//               value={formData.location.address}
//               onChange={(e) =>
//                 updateFormData({
//                   location: { ...formData.location, address: e.target.value },
//                 })
//               }
//               className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500"
//             />
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               <input
//                 type="text"
//                 placeholder="City"
//                 value={formData.location.city}
//                 onChange={(e) =>
//                   updateFormData({
//                     location: { ...formData.location, city: e.target.value },
//                   })
//                 }
//                 className="px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500"
//               />
//               <input
//                 type="text"
//                 placeholder="State"
//                 value={formData.location.state}
//                 onChange={(e) =>
//                   updateFormData({
//                     location: { ...formData.location, state: e.target.value },
//                   })
//                 }
//                 className="px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500"
//               />
//               <input
//                 type="text"
//                 placeholder="Country"
//                 value={formData.location.country}
//                 onChange={(e) =>
//                   updateFormData({
//                     location: { ...formData.location, country: e.target.value },
//                   })
//                 }
//                 className="px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500"
//               />
//             </div>
//             <button
//               onClick={getLocationFromMap}
//               className="flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
//             >
//               <Map size={18} /> Pin on Map
//             </button>
//           </div>
//         </section>
//       </div>

//       {/* Footer Navigation */}
//       <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-100">
//         <button
//           onClick={onBack}
//           className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-500 hover:text-slate-900 transition-colors"
//         >
//           <ChevronLeft size={20} /> Back
//         </button>
//         <button
//           onClick={onNext}
//           disabled={!isFormValid}
//           className={`px-10 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 shadow-lg ${isFormValid ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-500/20" : "bg-slate-100 text-slate-400 cursor-not-allowed"}`}
//         >
//           Continue <ChevronRight size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PracticeInfo;
