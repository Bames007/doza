// "use client";

// import React, { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import { CenterRegistrationData } from "./type";
// import Header from "./Header";
// import CenterTypeStep from "./steps/CenterTypeStep";
// import DetailsStep from "./steps/DetailsStep";
// import OwnerInfoStep from "./steps/OwnerInfo";
// import LegalStep from "./steps/LegalStep";
// import SuccessStep from "./steps/SuccessStep";

// const CenterRegistration: React.FC = () => {
//   const [currentStep, setCurrentStep] = useState<
//     "type" | "details" | "owner" | "legal" | "success"
//   >("type");
//   const [selectedCenterType, setSelectedCenterType] = useState<string>("");
//   const [formData, setFormData] = useState<CenterRegistrationData>({
//     centerType: "",
//     customType: "",
//     centerName: "",
//     logo: null,
//     location: {
//       address: "",
//       lat: 0,
//       lng: 0,
//     },
//     registrationNumbers: {
//       cac: "",
//       state: "",
//       federal: "",
//     },
//     operatingHours: {
//       opening: "08:00",
//       closing: "18:00",
//       days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
//     },
//     contact: {
//       phone: "",
//       email: "",
//       website: "",
//     },
//     ownerInfo: {
//       isOwner: true,
//       fullName: "",
//       email: "",
//       phone: "",
//       position: "Owner",
//     },
//     specificDetails: {},
//     legal: {
//       agreed: false,
//       signature: "",
//       date: "",
//     },
//     createdAt: "",
//     status: "pending",
//     verified: false,
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (
//     field: keyof CenterRegistrationData,
//     value: any
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleNestedInputChange = (
//     section: keyof CenterRegistrationData,
//     field: string,
//     value: any
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       [section]: {
//         ...(prev[section] as any),
//         [field]: value,
//       },
//     }));
//   };

//   const handleDeepNestedInputChange = (
//     section: keyof CenterRegistrationData,
//     subSection: string,
//     field: string,
//     value: any
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       [section]: {
//         ...(prev[section] as any),
//         [subSection]: {
//           ...((prev[section] as any)[subSection] || {}),
//           [field]: value,
//         },
//       },
//     }));
//   };

//   const handleCenterTypeSelect = (typeId: string) => {
//     setSelectedCenterType(typeId);
//     setFormData((prev) => ({
//       ...prev,
//       centerType: typeId,
//     }));

//     if (typeId !== "other") {
//       setTimeout(() => setCurrentStep("details"), 500);
//     }
//   };

//   const handleCustomCenterContinue = () => {
//     if ((formData.customType ?? "").trim()) {
//       setFormData((prev) => ({
//         ...prev,
//         centerType: "other",
//       }));
//       setTimeout(() => setCurrentStep("details"), 500);
//     }
//   };

//   const handleSubmit = async () => {
//     setIsSubmitting(true);
//     // Simulate API call
//     setTimeout(() => {
//       setCurrentStep("success");
//       setIsSubmitting(false);
//     }, 2000);
//   };

//   const steps = [
//     { key: "type", label: "Center Type" },
//     { key: "details", label: "Details" },
//     { key: "owner", label: "Owner Info" },
//     { key: "legal", label: "Legal" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6">
//         <Header />

//         {/* Progress Bar */}
//         <div className="mb-8 sm:mb-12">
//           <div className="flex items-center justify-between mb-4">
//             {steps.map((step, index) => (
//               <div key={step.key} className="flex items-center flex-1">
//                 <div
//                   className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
//                     currentStep === step.key
//                       ? "bg-purple-600 text-white"
//                       : currentStep > step.key
//                       ? "bg-green-500 text-white"
//                       : "bg-slate-300 text-slate-600"
//                   }`}
//                 >
//                   {index + 1}
//                 </div>
//                 {index < steps.length - 1 && (
//                   <div
//                     className={`flex-1 h-1 mx-2 ${
//                       currentStep > step.key ? "bg-green-500" : "bg-slate-300"
//                     }`}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-between text-xs sm:text-sm text-slate-600 px-2">
//             {steps.map((step) => (
//               <span key={step.key} className="text-center flex-1">
//                 {step.label}
//               </span>
//             ))}
//           </div>
//         </div>

//         <AnimatePresence mode="wait">
//           {currentStep === "type" && (
//             <CenterTypeStep
//               selectedCenterType={selectedCenterType}
//               onCenterTypeSelect={handleCenterTypeSelect}
//               formData={formData}
//               onInputChange={handleInputChange}
//               onCustomContinue={handleCustomCenterContinue}
//             />
//           )}

//           {currentStep === "details" && (
//             <DetailsStep
//               formData={formData}
//               selectedCenterType={selectedCenterType}
//               onInputChange={handleInputChange}
//               // onNestedInputChange={handleNestedInputChange}
//               onDeepNestedInputChange={handleDeepNestedInputChange}
//               onBack={() => setCurrentStep("type")}
//               onNext={() => setCurrentStep("owner")}
//             />
//           )}

//           {currentStep === "owner" && (
//             <OwnerInfoStep
//               formData={formData}
//               onNestedInputChange={handleNestedInputChange}
//               // onDeepNestedInputChange={handleDeepNestedInputChange}
//               onBack={() => setCurrentStep("details")}
//               onNext={() => setCurrentStep("legal")}
//             />
//           )}

//           {currentStep === "legal" && (
//             <LegalStep
//               formData={formData}
//               onNestedInputChange={handleNestedInputChange}
//               // onDeepNestedInputChange={handleDeepNestedInputChange}
//               isSubmitting={isSubmitting}
//               onBack={() => setCurrentStep("owner")}
//               onSubmit={handleSubmit}
//             />
//           )}

//           {currentStep === "success" && <SuccessStep />}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default CenterRegistration;
