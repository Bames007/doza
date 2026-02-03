"use client";

import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Upload,
  Building,
  Clock,
  FileText,
  Phone,
  Mail,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { bebasNeue, poppins } from "../../../home/doza_center/constant";
import { CenterRegistrationData } from "../type";

// Dynamically import the MapModal to avoid SSR issues
import dynamic from "next/dynamic";

const MapModal = dynamic(() => import("./MapModal"), {
  ssr: false,
  loading: () => <div className="hidden">Loading map...</div>,
});

const centerRequirements = {
  hospital: [
    {
      field: "numberOfBeds",
      label: "Number of Beds",
      type: "number",
      required: true,
    },
    { field: "icuBeds", label: "ICU Beds", type: "number", required: true },
  ],
  "eye-center": [
    {
      field: "ophthalmologists",
      label: "Ophthalmologists",
      type: "number",
      required: true,
    },
    {
      field: "optometrists",
      label: "Optometrists",
      type: "number",
      required: true,
    },
  ],
};

interface DetailsStepProps {
  formData: CenterRegistrationData;
  selectedCenterType: string;
  onInputChange: (
    field: keyof CenterRegistrationData,
    value: string | Record<string, string | number | boolean> | File
  ) => void;
  onDeepNestedInputChange: (
    section: "location" | "registrationNumbers" | "contact",
    subSection: string,
    field: string,
    value: string
  ) => void;
  onBack: () => void;
  onNext: () => void;
}

const DetailsStep: React.FC<DetailsStepProps> = ({
  formData,
  selectedCenterType,
  onInputChange,
  onBack,
  onNext,
}) => {
  const [showMapModal, setShowMapModal] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/svg+xml",
      ];
      if (!validTypes.includes(file.type)) {
        alert("Please select a valid image file (JPEG, PNG, SVG)");
        return;
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setLogoPreview(previewUrl);

      // Update form data with the file
      onInputChange("logo", file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleLocationSelect = (location: {
    address: string;
    lat: number;
    lng: number;
  }) => {
    onInputChange("location", {
      address: location.address,
      lat: location.lat,
      lng: location.lng,
    });
  };

  const openMapModal = () => {
    setShowMapModal(true);
  };

  // Safe coordinate display function
  const displayCoordinates = () => {
    if (!formData.location?.lat || !formData.location?.lng)
      return "No location selected";

    const { lat, lng } = formData.location;

    // Check if coordinates are valid numbers
    if (
      typeof lat !== "number" ||
      typeof lng !== "number" ||
      isNaN(lat) ||
      isNaN(lng)
    ) {
      return "Invalid coordinates";
    }

    return `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
  };

  // Check if location has valid coordinates
  const hasValidLocation =
    formData.location?.lat &&
    formData.location?.lng &&
    !isNaN(formData.location.lat) &&
    !isNaN(formData.location.lng);

  // Cleanup logo preview URL
  useEffect(() => {
    return () => {
      if (logoPreview) {
        URL.revokeObjectURL(logoPreview);
      }
    };
  }, [logoPreview]);

  return (
    <>
      <motion.div
        key="details"
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
              STEP 2 OF 4 - CENTER DETAILS
            </span>
          </motion.div>

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 ${bebasNeue.className}`}
          >
            Center Information
          </h2>
          <p
            className={`text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 ${poppins.className}`}
          >
            Provide comprehensive details about your healthcare facility
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl shadow-emerald-500/5 border border-emerald-100 space-y-8 sm:space-y-12">
          {/* Basic Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                <Building className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3
                  className={`text-xl sm:text-2xl font-bold text-gray-900 ${bebasNeue.className}`}
                >
                  Basic Information
                </h3>
                <p className={`text-gray-600 text-sm ${poppins.className}`}>
                  Core details about your facility
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div>
                <label className="block text-gray-700 mb-2 sm:mb-3 font-medium text-sm">
                  Center Name *
                </label>
                <input
                  type="text"
                  value={formData.centerName || ""}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onInputChange("centerName", e.target.value)
                  }
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-gray-900 border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all duration-300 text-sm sm:text-base bg-white/50"
                  placeholder="Enter your center name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 sm:mb-3 font-medium text-sm">
                  Center Logo
                </label>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={triggerFileInput}
                  className="border-2 border-dashed border-gray-300 rounded-2xl p-4 sm:p-6 text-center cursor-pointer hover:border-emerald-400 hover:bg-emerald-50/50 transition-all duration-300 group relative min-h-[120px] flex items-center justify-center"
                >
                  {logoPreview ? (
                    <div className="flex flex-col items-center">
                      <img
                        src={logoPreview}
                        alt="Logo preview"
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover mb-2 sm:mb-3"
                      />
                      <span className="text-emerald-600 text-sm font-medium">
                        Logo Selected
                      </span>
                      <span className="text-gray-500 text-xs">
                        Click to change
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Upload
                        size={20}
                        className="mx-auto text-gray-400 mb-2 sm:mb-3 group-hover:text-emerald-500 transition-colors"
                      />
                      <span className="text-gray-600 text-sm group-hover:text-gray-700">
                        Upload logo (PNG, JPG, SVG)
                      </span>
                      <span className="text-gray-400 text-xs mt-1">
                        Max 5MB
                      </span>
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleLogoUpload}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3
                  className={`text-xl sm:text-2xl font-bold text-gray-900 ${bebasNeue.className}`}
                >
                  Location Details
                </h3>
                <p className={`text-gray-600 text-sm ${poppins.className}`}>
                  Where your facility is located
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 sm:mb-3 font-medium text-sm">
                  Full Address *
                </label>
                <input
                  type="text"
                  value={formData.location?.address || ""}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onInputChange("location", {
                      ...formData.location,
                      address: e.target.value,
                    })
                  }
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-gray-900 border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter complete facility address"
                  required
                />
              </div>

              {/* Current Location Display */}
              {hasValidLocation && (
                <div className="p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <MapPin
                        size={14}
                        className="text-blue-600 flex-shrink-0"
                      />
                      <div>
                        <p
                          className={`text-blue-700 text-xs sm:text-sm font-semibold ${poppins.className}`}
                        >
                          Location selected on map
                        </p>
                        <p className="text-blue-600 text-xs">
                          Coordinates: {displayCoordinates()}
                        </p>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex-shrink-0">
                      Saved
                    </div>
                  </div>
                </div>
              )}

              <motion.button
                type="button"
                onClick={openMapModal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 sm:gap-3 text-emerald-600 font-semibold text-sm sm:text-base hover:text-emerald-700 transition-colors duration-300 bg-emerald-50 hover:bg-emerald-100 px-4 sm:px-6 py-3 rounded-xl w-full justify-center min-h-[44px]"
              >
                <MapPin size={18} className="flex-shrink-0" />
                {hasValidLocation
                  ? "Update location on map"
                  : "Select location on map"}
              </motion.button>
            </div>
          </motion.div>

          {/* Registration Numbers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                <FileText className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3
                  className={`text-xl sm:text-2xl font-bold text-gray-900 ${bebasNeue.className}`}
                >
                  Registration & Licenses
                </h3>
                <p className={`text-gray-600 text-sm ${poppins.className}`}>
                  Official registration numbers
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div>
                <label className="block text-gray-700 mb-2 sm:mb-3 font-medium text-sm">
                  CAC Registration Number
                </label>
                <input
                  type="text"
                  value={formData.registrationNumbers?.cac || ""}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onInputChange("registrationNumbers", {
                      ...formData.registrationNumbers,
                      cac: e.target.value,
                    })
                  }
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-gray-900 border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter CAC registration number"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 sm:mb-3 font-medium text-sm">
                  State Health License
                </label>
                <input
                  type="text"
                  value={formData.registrationNumbers?.state || ""}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onInputChange("registrationNumbers", {
                      ...formData.registrationNumbers,
                      state: e.target.value,
                    })
                  }
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-gray-900 border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter state health license number"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3
                  className={`text-xl sm:text-2xl font-bold text-gray-900 ${bebasNeue.className}`}
                >
                  Contact Information
                </h3>
                <p className={`text-gray-600 text-sm ${poppins.className}`}>
                  How patients can reach you
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div>
                <label className="block text-gray-700 mb-2 sm:mb-3 font-medium text-sm">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.contact?.phone || ""}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onInputChange("contact", {
                      ...formData.contact,
                      phone: e.target.value,
                    })
                  }
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-gray-900 border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter center phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 sm:mb-3 font-medium text-sm">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.contact?.email || ""}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onInputChange("contact", {
                      ...formData.contact,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-gray-900 border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter center email address"
                  required
                />
              </div>
            </div>
          </motion.div>

          {/* Center-specific Requirements */}
          {selectedCenterType in centerRequirements && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3
                    className={`text-xl sm:text-2xl font-bold text-gray-900 ${bebasNeue.className}`}
                  >
                    Facility Specific Requirements
                  </h3>
                  <p className={`text-gray-600 text-sm ${poppins.className}`}>
                    Additional details for {selectedCenterType}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {centerRequirements[
                  selectedCenterType as keyof typeof centerRequirements
                ]?.map((req, index) => (
                  <motion.div
                    key={req.field}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <label className="block text-gray-700 mb-2 sm:mb-3 font-medium text-sm">
                      {req.label} {req.required && "*"}
                    </label>
                    <input
                      type={req.type}
                      value={
                        req.type === "number"
                          ? (formData.specificDetails?.[req.field] as number) ||
                            0
                          : (formData.specificDetails?.[req.field] as string) ||
                            ""
                      }
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        onInputChange("specificDetails", {
                          ...formData.specificDetails,
                          [req.field]:
                            req.type === "number"
                              ? parseInt(e.target.value) || 0
                              : e.target.value,
                        })
                      }
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-gray-900 border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all duration-300 text-sm sm:text-base"
                      required={req.required}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-200"
          >
            <motion.button
              type="button"
              onClick={onBack}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-2xl text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm sm:text-base font-medium order-2 sm:order-1 min-h-[44px]"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              <span>Back to Facility Type</span>
            </motion.button>
            <motion.button
              type="button"
              onClick={onNext}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 sm:py-4 rounded-2xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base order-1 sm:order-2 min-h-[44px]"
            >
              <span>Continue to Owner</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300 sm:w-5 sm:h-5"
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Dynamically imported MapModal */}
      <MapModal
        isOpen={showMapModal}
        onClose={() => setShowMapModal(false)}
        onLocationSelect={handleLocationSelect}
        initialLocation={
          hasValidLocation
            ? { lat: formData.location.lat, lng: formData.location.lng }
            : null
        }
      />
    </>
  );
};

export default DetailsStep;
