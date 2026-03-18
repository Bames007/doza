"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building,
  Stethoscope,
  Pill,
  FlaskRound,
  Ambulance,
  Heart,
  Plus,
  ArrowRight,
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
    id: "pharmacy",
    icon: Pill,
    title: "Pharmacy",
    description: "Retail & Clinical Pharmacy",
  },
  {
    id: "diagnostic-lab",
    icon: FlaskRound,
    title: "Diagnostic Lab",
    description: "Pathology & Imaging",
  },
  {
    id: "cardiac-center",
    icon: Heart,
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
      className={`w-full max-w-4xl mx-auto px-4 py-6 md:py-12 ${poppins.className} text-slate-900`}
    >
      <header className="mb-8 md:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`text-3xl text-emerald-600 font-bold ${bebasNeue.className}`}
          >
            01
          </span>
          <div className="h-[2px] flex-1 bg-slate-200" />
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">
            Protocol
          </span>
        </div>
        <h2
          className={`text-4xl md:text-8xl font-bold leading-none mb-4 ${bebasNeue.className}`}
        >
          SELECT <span className="text-emerald-600">FACILITY</span>
        </h2>
        <p className="text-slate-700 text-xs md:text-base font-bold max-w-xl">
          Identify your clinical infrastructure to deploy management modules.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-3 md:gap-4 mb-10">
        {centerTypes.map((center, index) => {
          const Icon = center.icon;
          const isSelected = selectedCenterType === center.id;

          return (
            <motion.div
              key={center.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onCenterTypeSelect(center.id)}
              className={`group relative cursor-pointer rounded-2xl border-2 transition-all p-4 md:p-6 ${
                isSelected
                  ? "bg-white border-emerald-500 shadow-md"
                  : "bg-slate-100/50 border-transparent hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-slate-900 border border-slate-200"
                  }`}
                >
                  <Icon size={24} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-xl md:text-2xl font-bold leading-tight ${bebasNeue.className}`}
                  >
                    {center.title}
                  </h3>
                  <p className="text-slate-600 text-[10px] font-bold uppercase tracking-tight">
                    {center.description}
                  </p>
                </div>
                {isSelected ? (
                  <ShieldCheck className="text-emerald-600" size={20} />
                ) : (
                  <ChevronRight className="text-slate-400" size={20} />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Custom Category Strip */}
      <div className="p-4 md:p-6 rounded-2xl bg-slate-900">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-auto flex items-center gap-3">
            <Plus size={20} className="text-emerald-400" />
            <h4 className={`text-xl text-white ${bebasNeue.className}`}>
              CUSTOM
            </h4>
          </div>
          <input
            type="text"
            placeholder="Specify facility type..."
            value={formData.customType ?? ""}
            onChange={(e) => onInputChange("customType", e.target.value)}
            className="w-full flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm font-bold outline-none focus:bg-white focus:text-slate-900"
          />
          <button
            onClick={onCustomContinue}
            disabled={!(formData.customType ?? "").trim()}
            className="w-full md:w-auto px-8 py-3 bg-emerald-600 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest disabled:opacity-50"
          >
            Deploy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenterTypeStep;
