"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building,
  Stethoscope,
  Pill,
  FlaskRound,
  Ambulance,
  HeartHandshake,
  SmileIcon,
  LucideGlasses,
  Activity,
  Plus,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { bebasNeue, poppins } from "../../../home/doza_center/constant";
import { CenterRegistrationData } from "../type";

interface CenterTypeStepProps {
  selectedCenterType: string;
  onCenterTypeSelect: (typeId: string) => void;
  formData: CenterRegistrationData;
  onInputChange: (field: keyof CenterRegistrationData, value: any) => void;
  onCustomContinue: () => void;
}

const centerTypes = [
  {
    id: "hospital",
    icon: Building,
    title: "Hospital",
    description: "Multi-specialty & Surgery",
  },
  {
    id: "clinic",
    icon: Stethoscope,
    title: "Clinic",
    description: "Outpatient & Primary Care",
  },
  {
    id: "medical_center",
    icon: Activity,
    title: "Medical Center",
    description: "Comprehensive & Referrals",
  },
  {
    id: "dental_clinic",
    icon: SmileIcon,
    title: "Dental Clinic",
    description: "Oral & Maxillofacial Care",
  },
  {
    id: "optical_center",
    icon: LucideGlasses,
    title: "Eye Clinic",
    description: "Optical & Vision Care",
  },
  {
    id: "pharmacy",
    icon: Pill,
    title: "Pharmacy",
    description: "Retail & Clinical Pharmacy",
  },
  {
    id: "diagnostic_lab",
    icon: FlaskRound,
    title: "Diagnostic Lab",
    description: "Pathology & Imaging",
  },
  {
    id: "cardiac_center",
    icon: HeartHandshake,
    title: "Cardiac Center",
    description: "Cardiovascular Suites",
  },
  {
    id: "emergency",
    icon: Ambulance,
    title: "Emergency Unit",
    description: "Trauma & Urgent Care",
  },
];

const CenterTypeStep: React.FC<CenterTypeStepProps> = ({
  selectedCenterType,
  onCenterTypeSelect,
  formData,
  onInputChange,
  onCustomContinue,
}) => {
  return (
    <div
      className={`w-full max-w-3xl mx-auto py-1 ${poppins.className} text-slate-900`}
    >
      {/* Header — trimmed */}
      <header className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`text-xl text-emerald-600 font-bold leading-none ${bebasNeue.className}`}
          >
            01
          </span>
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-500">
            Center
          </span>
        </div>
        <h2
          className={`text-3xl md:text-4xl font-bold leading-tight mb-2 ${bebasNeue.className}`}
        >
          SELECT <span className="text-emerald-600">FACILITY</span>
        </h2>
        <p className="text-slate-600 text-xs md:text-sm">
          Identify your clinical infrastructure to deploy management modules.
        </p>
      </header>

      {/* Grid — tighter gap, smaller cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-6">
        {centerTypes.map((center, index) => {
          const Icon = center.icon;
          const isSelected = selectedCenterType === center.id;

          return (
            <motion.div
              key={center.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => onCenterTypeSelect(center.id)}
              className={`group relative cursor-pointer rounded-xl border transition-all px-3 py-3 ${
                isSelected
                  ? "bg-white border-emerald-500 shadow-sm"
                  : "bg-slate-100/50 border-transparent hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-slate-900 border border-slate-200"
                  }`}
                >
                  <Icon size={18} strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-sm md:text-base font-bold leading-tight ${bebasNeue.className}`}
                  >
                    {center.title}
                  </h3>
                  <p className="text-slate-500 text-[10px] font-medium uppercase tracking-tight truncate">
                    {center.description}
                  </p>
                </div>
                {isSelected ? (
                  <ShieldCheck
                    className="text-emerald-600 shrink-0"
                    size={16}
                  />
                ) : (
                  <ChevronRight className="text-slate-400 shrink-0" size={16} />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Custom strip — tighter */}
      <div className="p-3 md:p-4 rounded-xl bg-slate-900">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
          <div className="w-full md:w-auto flex items-center gap-2">
            <Plus size={16} className="text-emerald-400" />
            <h4 className={`text-sm text-white ${bebasNeue.className}`}>
              CUSTOM
            </h4>
          </div>
          <input
            type="text"
            placeholder="Specify facility type..."
            value={formData.customType ?? ""}
            onChange={(e) => onInputChange("customType", e.target.value)}
            className="w-full flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-xs font-medium outline-none focus:bg-white focus:text-slate-900"
          />
          <button
            onClick={onCustomContinue}
            disabled={!(formData.customType ?? "").trim()}
            className="w-full md:w-auto px-5 py-2 bg-emerald-600 text-white rounded-lg font-bold text-[10px] uppercase tracking-widest disabled:opacity-50"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenterTypeStep;
