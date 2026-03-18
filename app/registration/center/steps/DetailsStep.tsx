"use client";

import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Building,
  Clock,
  FileText,
  Phone,
  Mail,
  ArrowLeft,
  ArrowRight,
  Navigation,
  Loader2,
  Image as ImageIcon,
  Zap,
} from "lucide-react";
import { bebasNeue, poppins } from "../../../home/doza_center/constant";
import { CenterRegistrationData } from "../type";
import dynamic from "next/dynamic";

const MapModal = dynamic(() => import("./MapModal"), {
  ssr: false,
  loading: () => <div className="hidden">Loading...</div>,
});

const centerRequirements = {
  hospital: [
    {
      field: "numberOfBeds",
      label: "Bed Capacity",
      type: "number",
      icon: Building,
    },
    { field: "icuBeds", label: "ICU Capacity", type: "number", icon: Zap },
  ],
  optical_center: [
    {
      field: "ophthalmologists",
      label: "Ophthalmologists",
      type: "number",
      icon: Building,
    },
    { field: "optometrists", label: "Optometrists", type: "number", icon: Zap },
  ],
};

interface DetailsStepProps {
  formData: CenterRegistrationData;
  selectedCenterType: string;
  onInputChange: (field: keyof CenterRegistrationData, value: any) => void;
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
  const [isDetecting, setIsDetecting] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleGetActualLocation = () => {
    if (!navigator.geolocation) return alert("Not supported");
    setIsDetecting(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        onInputChange("location", {
          ...formData.location,
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsDetecting(false);
      },
      () => {
        alert("Check permissions");
        setIsDetecting(false);
      },
      { enableHighAccuracy: true },
    );
  };

  const hasValidLocation = !!(formData.location?.lat && formData.location?.lng);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`w-full max-w-5xl mx-auto px-3 md:px-8 py-4 md:py-10 ${poppins.className} text-slate-900`}
    >
      {/* Header - Scaled for Mobile */}
      <div className="mb-8 text-left md:text-center">
        <span className="text-[10px] font-black tracking-[0.2em] text-emerald-600 uppercase mb-1 block">
          Step 02
        </span>
        <h2
          className={`text-3xl md:text-7xl font-bold leading-none ${bebasNeue.className}`}
        >
          CENTER <span className="text-emerald-600">PROFILE</span>
        </h2>
      </div>

      <div className="space-y-4 md:space-y-10">
        {/* IDENTITY */}
        <section className="bg-white rounded-3xl border border-slate-200 p-4 md:p-8 shadow-sm">
          <h3
            className={`text-xl md:text-3xl mb-4 flex items-center gap-2 ${bebasNeue.className}`}
          >
            <Building size={18} className="text-emerald-600" /> IDENTITY
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
                Center Name
              </label>
              <input
                type="text"
                value={formData.centerName || ""}
                onChange={(e) => onInputChange("centerName", e.target.value)}
                className="w-full bg-slate-100/80 border-none rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Ex: Doza Clinic"
              />
            </div>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="relative aspect-[21/9] md:aspect-video rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
            >
              {logoPreview ? (
                <img
                  src={logoPreview}
                  className="absolute inset-0 w-full h-full object-contain p-2"
                  alt="Logo"
                />
              ) : (
                <span className="text-[10px] font-bold text-slate-600 uppercase">
                  Click to Upload Logo
                </span>
              )}
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setLogoPreview(URL.createObjectURL(file));
                    onInputChange("logo", file);
                  }
                }}
              />
            </div>
          </div>
        </section>

        {/* LOCATION & GPS */}
        <section className="bg-white rounded-3xl border border-slate-200 p-4 md:p-8 shadow-sm">
          <h3
            className={`text-xl md:text-3xl mb-4 flex items-center gap-2 ${bebasNeue.className}`}
          >
            <MapPin size={18} className="text-emerald-600" /> LOCATION
          </h3>
          <div className="space-y-3">
            <input
              type="text"
              value={formData.location?.address || ""}
              onChange={(e) =>
                onInputChange("location", {
                  ...formData.location,
                  address: e.target.value,
                })
              }
              placeholder="Street Address"
              className="w-full bg-slate-100/80 border-none rounded-xl px-4 py-3.5 text-sm font-bold outline-none"
            />
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleGetActualLocation}
                disabled={isDetecting}
                className="flex items-center justify-center gap-1.5 py-3 rounded-lg bg-emerald-600 text-white font-bold text-[9px] uppercase tracking-tighter"
              >
                {isDetecting ? (
                  <Loader2 size={12} className="animate-spin" />
                ) : (
                  <Navigation size={12} />
                )}{" "}
                GPS AUTO
              </button>
              <button
                type="button"
                onClick={() => setShowMapModal(true)}
                className={`py-3 rounded-lg border-2 font-bold text-[9px] uppercase tracking-tighter ${hasValidLocation ? "border-emerald-600 text-emerald-600 bg-emerald-50" : "border-slate-900 text-slate-900"}`}
              >
                {hasValidLocation ? "PINNED" : "MAP SELECT"}
              </button>
            </div>
          </div>
        </section>

        {/* CONTACT - Darker text for visibility */}
        <section className="bg-white rounded-3xl border border-slate-200 p-4 md:p-8 shadow-sm">
          <h3
            className={`text-xl md:text-3xl mb-4 flex items-center gap-2 ${bebasNeue.className}`}
          >
            <Phone size={18} className="text-emerald-600" /> CONTACT
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center bg-slate-100/80 rounded-xl px-4 py-3.5">
              <Mail size={16} className="text-slate-600 mr-3" />
              <input
                type="email"
                value={formData.contact?.email || ""}
                onChange={(e) =>
                  onInputChange("contact", {
                    ...formData.contact,
                    email: e.target.value,
                  })
                }
                placeholder="Email Address"
                className="bg-transparent w-full text-sm font-bold outline-none text-slate-900 placeholder-slate-500"
              />
            </div>
            <div className="flex items-center bg-slate-100/80 rounded-xl px-4 py-3.5">
              <Phone size={16} className="text-slate-600 mr-3" />
              <input
                type="tel"
                value={formData.contact?.phone || ""}
                onChange={(e) =>
                  onInputChange("contact", {
                    ...formData.contact,
                    phone: e.target.value,
                  })
                }
                placeholder="Phone Number"
                className="bg-transparent w-full text-sm font-bold outline-none text-slate-900 placeholder-slate-500"
              />
            </div>
          </div>
        </section>

        {/* CAPACITY */}
        {selectedCenterType in centerRequirements && (
          <section className="bg-white rounded-3xl border border-slate-200 p-4 md:p-8 shadow-sm">
            <h3
              className={`text-xl md:text-3xl mb-4 flex items-center gap-2 ${bebasNeue.className}`}
            >
              <Clock size={18} className="text-emerald-600" /> CAPACITY
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {centerRequirements[
                selectedCenterType as keyof typeof centerRequirements
              ]?.map((req) => {
                const rawValue = formData.specificDetails?.[req.field];
                // Ensure value is either a number or an empty string (for undefined/null/boolean)
                const safeValue = typeof rawValue === "number" ? rawValue : "";
                return (
                  <div
                    key={req.field}
                    className="p-3 bg-slate-100/80 rounded-xl"
                  >
                    <label className="text-[8px] font-black text-slate-500 uppercase block mb-1">
                      {req.label}
                    </label>
                    <input
                      type="number"
                      value={safeValue}
                      onChange={(e) =>
                        onInputChange("specificDetails", {
                          ...formData.specificDetails,
                          [req.field]: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full bg-transparent text-sm font-bold outline-none text-slate-900"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>

      {/* COMPACT FOOTER */}
      <footer className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-200">
        <button
          onClick={onBack}
          className="w-full md:w-auto flex items-center justify-center gap-2 text-slate-600 font-bold text-[10px] uppercase py-2"
        >
          <ArrowLeft size={14} /> Back
        </button>
        <button
          onClick={onNext}
          className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg active:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
        >
          Next Step <ArrowRight size={14} />
        </button>
      </footer>

      <MapModal
        isOpen={showMapModal}
        onClose={() => setShowMapModal(false)}
        onLocationSelect={(loc) => onInputChange("location", loc)}
        initialLocation={
          hasValidLocation
            ? { lat: formData.location!.lat, lng: formData.location!.lng }
            : null
        }
      />
    </motion.div>
  );
};

export default DetailsStep;
