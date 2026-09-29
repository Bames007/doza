// "use client";

// import React, { ChangeEvent } from "react";
// import {
//   User,
//   Mail,
//   Phone,
//   Calendar,
//   Lock,
//   Camera,
//   ChevronRight,
//   ChevronLeft,
// } from "lucide-react";
// import { MedicRegistrationData } from "../type";
// import { bebasNeue, poppins } from "@/app/home/doza_center/constant";

// interface PersonalInfoProps {
//   formData: MedicRegistrationData;
//   updateFormData: (updates: Partial<MedicRegistrationData>) => void;
//   onBack: () => void;
//   onNext: () => void;
// }

// const PersonalInfo: React.FC<PersonalInfoProps> = ({
//   formData,
//   updateFormData,
//   onBack,
//   onNext,
// }) => {
//   const handleInputChange = (
//     field: keyof typeof formData.personalInfo,
//     value: string,
//   ) => {
//     updateFormData({
//       personalInfo: { ...formData.personalInfo, [field]: value },
//     });
//   };

//   const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         updateFormData({
//           personalInfo: {
//             ...formData.personalInfo,
//             profilePhoto: reader.result as string,
//           },
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Validation: Ensures all required fields have a value
//   const isFormValid = Object.values(formData.personalInfo).every(
//     (val) => val !== "" && val !== null,
//   );

//   return (
//     <div className={`w-full max-w-4xl mx-auto px-4 py-8 ${poppins.className}`}>
//       {/* Header */}
//       <header className="mb-12">
//         <div className="flex items-center gap-3 mb-6">
//           <span
//             className={`text-3xl text-emerald-600 font-bold ${bebasNeue.className}`}
//           >
//             02
//           </span>
//           <div className="h-[2px] flex-grow bg-slate-200" />
//           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
//             Personal Details
//           </span>
//         </div>
//         <h2
//           className={`text-5xl md:text-7xl font-bold leading-tight ${bebasNeue.className}`}
//         >
//           YOUR <span className="text-emerald-600">IDENTITY</span>
//         </h2>
//         <p className="text-slate-500 mt-4 text-lg">
//           Let's get to know you. Please provide your professional details.
//         </p>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Left Column: Avatar */}
//         <div className="md:col-span-1">
//           <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
//             <label className="relative cursor-pointer group">
//               <div className="w-32 h-32 rounded-full bg-slate-200 overflow-hidden border-4 border-white shadow-lg mb-4 flex items-center justify-center">
//                 {formData.personalInfo.profilePhoto ? (
//                   <img
//                     src={formData.personalInfo.profilePhoto}
//                     alt="Profile"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <User size={48} className="text-slate-400" />
//                 )}
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                   <Camera className="text-white" />
//                 </div>
//               </div>
//               <input
//                 type="file"
//                 className="hidden"
//                 accept="image/*"
//                 onChange={handleFileUpload}
//               />
//             </label>
//             <h4 className={`text-xl ${bebasNeue.className}`}>PROFILE PHOTO</h4>
//             <p className="text-xs text-slate-500 mt-2">
//               JPG, PNG or WEBP (Max 2MB)
//             </p>
//           </div>
//         </div>

//         {/* Right Column: Form Fields */}
//         <div className="md:col-span-2 space-y-6">
//           {/* Names */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-bold text-slate-900 mb-2">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 value={formData.personalInfo.firstName}
//                 onChange={(e) => handleInputChange("firstName", e.target.value)}
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
//                 placeholder="John"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-bold text-slate-900 mb-2">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 value={formData.personalInfo.lastName}
//                 onChange={(e) => handleInputChange("lastName", e.target.value)}
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
//                 placeholder="Doe"
//               />
//             </div>
//           </div>

//           {/* Email & Password */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-bold text-slate-900 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail
//                   className="absolute left-3 top-3.5 text-slate-400"
//                   size={18}
//                 />
//                 <input
//                   type="email"
//                   value={formData.personalInfo.email}
//                   onChange={(e) => handleInputChange("email", e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
//                   placeholder="john@hospital.com"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-bold text-slate-900 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock
//                   className="absolute left-3 top-3.5 text-slate-400"
//                   size={18}
//                 />
//                 <input
//                   type="password"
//                   value={formData.personalInfo.password}
//                   onChange={(e) =>
//                     handleInputChange("password", e.target.value)
//                   }
//                   className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
//                   placeholder="••••••••"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Phone & DOB */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-bold text-slate-900 mb-2">
//                 Phone Number
//               </label>
//               <div className="relative">
//                 <Phone
//                   className="absolute left-3 top-3.5 text-slate-400"
//                   size={18}
//                 />
//                 <input
//                   type="tel"
//                   value={formData.personalInfo.phone}
//                   onChange={(e) => handleInputChange("phone", e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
//                   placeholder="+1 234 567 890"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-bold text-slate-900 mb-2">
//                 Date of Birth
//               </label>
//               <div className="relative">
//                 <Calendar
//                   className="absolute left-3 top-3.5 text-slate-400"
//                   size={18}
//                 />
//                 <input
//                   type="date"
//                   value={formData.personalInfo.dateOfBirth}
//                   onChange={(e) =>
//                     handleInputChange("dateOfBirth", e.target.value)
//                   }
//                   className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Gender */}
//           <div>
//             <label className="block text-sm font-bold text-slate-900 mb-2">
//               Gender
//             </label>
//             <select
//               value={formData.personalInfo.gender}
//               onChange={(e) => handleInputChange("gender", e.target.value)}
//               className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all appearance-none"
//             >
//               <option value="">Select...</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
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

// export default PersonalInfo;
