// app/center/dashboard/panels/AddStaffModal.tsx
"use client";

import { motion } from "framer-motion";
import {
  X,
  Upload,
  FileText,
  User,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useState, useRef } from "react";
import { StaffMember } from "../panels/StaffPanel";

interface AddStaffModalProps {
  onClose: () => void;
  onStaffAdded: (staff: StaffMember) => void;
}

interface FormData {
  personal: {
    name: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    address: string;
  };
  professional: {
    roles: string[];
    specialization: string;
    joinDate: string;
    qualifications: string;
  };
  documents: {
    profilePicture: File | null;
    cv: File | null;
    guarantorLetter: File | null;
    otherDocuments: File[];
  };
}

const predefinedRoles = [
  "Doctor",
  "Nurse",
  "Support Staff",
  "Administrator",
  "Technician",
];
const customRoles = [
  "Physiotherapist",
  "Lab Technician",
  "Pharmacist",
  "Receptionist",
];

export default function AddStaffModal({
  onClose,
  onStaffAdded,
}: AddStaffModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    personal: {
      name: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      address: "",
    },
    professional: {
      roles: [],
      specialization: "",
      joinDate: new Date().toISOString().split("T")[0],
      qualifications: "",
    },
    documents: {
      profilePicture: null,
      cv: null,
      guarantorLetter: null,
      otherDocuments: [],
    },
  });
  const [customRole, setCustomRole] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handlePersonalChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  };

  const handleRoleToggle = (role: string) => {
    setFormData((prev) => ({
      ...prev,
      professional: {
        ...prev.professional,
        roles: prev.professional.roles.includes(role)
          ? prev.professional.roles.filter((r) => r !== role)
          : [...prev.professional.roles, role],
      },
    }));
  };

  const addCustomRole = () => {
    if (customRole && !formData.professional.roles.includes(customRole)) {
      setFormData((prev) => ({
        ...prev,
        professional: {
          ...prev.professional,
          roles: [...prev.professional.roles, customRole],
        },
      }));
      setCustomRole("");
    }
  };

  const handleFileChange = (
    field: keyof FormData["documents"],
    file: File | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      documents: { ...prev.documents, [field]: file },
    }));
  };

  const handleOtherDocuments = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files);
      setFormData((prev) => ({
        ...prev,
        documents: {
          ...prev.documents,
          otherDocuments: [...prev.documents.otherDocuments, ...newFiles],
        },
      }));
    }
  };

  const generateStaffId = () => {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000);
    return `HOS-${new Date().getFullYear()}-${random
      .toString()
      .padStart(3, "0")}`;
  };

  const handleSubmit = async () => {
    // Simulate Firebase save
    const newStaff: StaffMember = {
      id: Date.now().toString(),
      name: formData.personal.name,
      role: formData.professional.roles,
      email: formData.personal.email,
      phone: formData.personal.phone,
      joinDate: formData.professional.joinDate,
      dateOfBirth: formData.personal.dateOfBirth,
      address: formData.personal.address,
      specialization: formData.professional.specialization,
      qualifications: formData.professional.qualifications,
      metadata: {
        createdBy: "current-user-id", // Replace with actual user ID
        createdAt: new Date().toISOString(),
        staffId: generateStaffId(),
      },
    };

    // Here you would upload files to Firebase Storage and save data to Realtime Database
    console.log("Saving to Firebase:", newStaff, formData.documents);

    onStaffAdded(newStaff);
    onClose();
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.personal.name &&
          formData.personal.email &&
          formData.personal.phone
        );
      case 2:
        return formData.professional.roles.length > 0;
      case 3:
        return true; // Documents are optional
      case 4:
        return true; // Review step
      default:
        return false;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Add New Staff Member
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= step
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step}
              </div>
              {step < 4 && (
                <div
                  className={`w-16 h-1 ${
                    currentStep > step ? "bg-green-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Personal Details */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="text-gray-900 bg-white border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.personal.name}
                  onChange={(e) => handlePersonalChange("name", e.target.value)}
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="text-gray-900 bg-white border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.personal.email}
                  onChange={(e) =>
                    handlePersonalChange("email", e.target.value)
                  }
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="text-gray-900 bg-white border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.personal.phone}
                  onChange={(e) =>
                    handlePersonalChange("phone", e.target.value)
                  }
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="text-gray-900 bg-white border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.personal.dateOfBirth}
                  onChange={(e) =>
                    handlePersonalChange("dateOfBirth", e.target.value)
                  }
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  className="text-gray-900 bg-white border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  value={formData.personal.address}
                  onChange={(e) =>
                    handlePersonalChange("address", e.target.value)
                  }
                  placeholder="Enter full address"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Professional Information */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Professional Information
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Roles
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {predefinedRoles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => handleRoleToggle(role)}
                    className={`p-3 rounded-lg border-2 text-center transition-colors ${
                      formData.professional.roles.includes(role)
                        ? "border-green-600 bg-green-50 text-green-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Roles
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 text-gray-900 bg-white border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={customRole}
                    onChange={(e) => setCustomRole(e.target.value)}
                    placeholder="Add custom role"
                  />
                  <button
                    onClick={addCustomRole}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>

              {formData.professional.roles.length > 0 && (
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Selected Roles:</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.professional.roles.map((role) => (
                      <span
                        key={role}
                        className="bg-green-600 text-white px-3 py-1 rounded-full text-sm flex items-center"
                      >
                        {role}
                        <button
                          onClick={() => handleRoleToggle(role)}
                          className="ml-2 hover:text-red-200"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialization
                </label>
                <input
                  type="text"
                  className="text-gray-900 bg-white border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.professional.specialization}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      professional: {
                        ...prev.professional,
                        specialization: e.target.value,
                      },
                    }))
                  }
                  placeholder="e.g., Cardiology, Neurology"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Join Date
                </label>
                <input
                  type="date"
                  className="text-gray-900 bg-white border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.professional.joinDate}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      professional: {
                        ...prev.professional,
                        joinDate: e.target.value,
                      },
                    }))
                  }
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qualifications
                </label>
                <textarea
                  className="text-gray-900 bg-white border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  value={formData.professional.qualifications}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      professional: {
                        ...prev.professional,
                        qualifications: e.target.value,
                      },
                    }))
                  }
                  placeholder="List qualifications, certifications, etc."
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Documents */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Documents & Files
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Picture */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-sm text-gray-600 mb-2">Profile Picture</p>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={(e) =>
                    handleFileChange(
                      "profilePicture",
                      e.target.files?.[0] || null
                    )
                  }
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {formData.documents.profilePicture
                    ? "Change Photo"
                    : "Upload Photo"}
                </button>
                {formData.documents.profilePicture && (
                  <p className="text-sm text-green-600 mt-2">
                    {formData.documents.profilePicture.name}
                  </p>
                )}
              </div>

              {/* CV */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-sm text-gray-600 mb-2">
                  Curriculum Vitae (CV)
                </p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="cv-upload"
                  onChange={(e) =>
                    handleFileChange("cv", e.target.files?.[0] || null)
                  }
                />
                <label
                  htmlFor="cv-upload"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer"
                >
                  {formData.documents.cv ? "Change CV" : "Upload CV"}
                </label>
                {formData.documents.cv && (
                  <p className="text-sm text-green-600 mt-2">
                    {formData.documents.cv.name}
                  </p>
                )}
              </div>

              {/* Guarantor Letter */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-sm text-gray-600 mb-2">Guarantor Letter</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="guarantor-upload"
                  onChange={(e) =>
                    handleFileChange(
                      "guarantorLetter",
                      e.target.files?.[0] || null
                    )
                  }
                />
                <label
                  htmlFor="guarantor-upload"
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors cursor-pointer"
                >
                  {formData.documents.guarantorLetter
                    ? "Change Letter"
                    : "Upload Letter"}
                </label>
                {formData.documents.guarantorLetter && (
                  <p className="text-sm text-green-600 mt-2">
                    {formData.documents.guarantorLetter.name}
                  </p>
                )}
              </div>

              {/* Other Documents */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-sm text-gray-600 mb-2">Other Documents</p>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  id="other-docs-upload"
                  onChange={(e) => handleOtherDocuments(e.target.files)}
                />
                <label
                  htmlFor="other-docs-upload"
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  Add Documents
                </label>
                {formData.documents.otherDocuments.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">
                      {formData.documents.otherDocuments.length} file(s)
                      selected
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Review */}
        {currentStep === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Review Information
            </h3>

            <div className="bg-gray-50 rounded-lg p-6 space-y-6">
              {/* Personal Info */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-900">
                  <div>
                    <strong>Name:</strong> {formData.personal.name}
                  </div>
                  <div>
                    <strong>Email:</strong> {formData.personal.email}
                  </div>
                  <div>
                    <strong>Phone:</strong> {formData.personal.phone}
                  </div>
                  <div>
                    <strong>Date of Birth:</strong>{" "}
                    {formData.personal.dateOfBirth}
                  </div>
                  <div className="md:col-span-2">
                    <strong>Address:</strong> {formData.personal.address}
                  </div>
                </div>
              </div>

              {/* Professional Info */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Professional Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-900">
                  <div>
                    <strong>Roles:</strong>{" "}
                    {formData.professional.roles.join(", ")}
                  </div>
                  <div>
                    <strong>Specialization:</strong>{" "}
                    {formData.professional.specialization}
                  </div>
                  <div>
                    <strong>Join Date:</strong> {formData.professional.joinDate}
                  </div>
                  <div className="md:col-span-2">
                    <strong>Qualifications:</strong>{" "}
                    {formData.professional.qualifications}
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Documents</h4>
                <div className="text-sm space-y-2 text-gray-900">
                  <div>
                    <strong>Profile Picture:</strong>{" "}
                    {formData.documents.profilePicture
                      ? "Uploaded"
                      : "Not provided"}
                  </div>
                  <div>
                    <strong>CV:</strong>{" "}
                    {formData.documents.cv ? "Uploaded" : "Not provided"}
                  </div>
                  <div>
                    <strong>Guarantor Letter:</strong>{" "}
                    {formData.documents.guarantorLetter
                      ? "Uploaded"
                      : "Not provided"}
                  </div>
                  <div>
                    <strong>Other Documents:</strong>{" "}
                    {formData.documents.otherDocuments.length} file(s)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <span>Add Staff Member</span>
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
