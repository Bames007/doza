"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
} from "lucide-react";
import { bebasNeue, poppins } from "../../../home/doza_center/constant";
import { CenterRegistrationData, OwnerInfo } from "../type";

interface OwnerInfoStepProps {
  formData: CenterRegistrationData;
  onNestedInputChange: (
    section: keyof CenterRegistrationData,
    field: keyof OwnerInfo,
    value: string | boolean,
  ) => void;
  onInputChange: (field: keyof CenterRegistrationData, value: any) => void;
  onBack: () => void;
  onNext: () => void;
}

const OwnerInfoStep: React.FC<OwnerInfoStepProps> = ({
  formData,
  onNestedInputChange,
  onInputChange,
  onBack,
  onNext,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`w-full ${poppins.className} text-slate-900`}
    >
      {/* Header — trimmed */}
      <header className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`text-xl text-emerald-600 font-bold leading-none ${bebasNeue.className}`}
          >
            02
          </span>
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-500">
            Owner
          </span>
        </div>
        <h2
          className={`text-3xl md:text-4xl font-bold leading-tight mb-2 ${bebasNeue.className}`}
        >
          OWNER <span className="text-emerald-600">INFO</span>
        </h2>
        <p className="text-slate-600 text-xs md:text-sm">
          Information of the Center Owner or Authorized Representative for legal
          and operational purposes.
        </p>
      </header>

      {/* Center Name — trimmed */}
      <section className="mb-4">
        <label className="text-[9px] font-bold text-slate-600 uppercase mb-1 block">
          Center Name
        </label>
        <input
          type="text"
          value={formData.centerName || ""}
          onChange={(e) => onInputChange("centerName", e.target.value)}
          placeholder="Ex: Doza Medical Center"
          className="w-full bg-slate-100/80 rounded-lg px-3 py-2.5 text-sm font-bold outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </section>

      <div className="space-y-3">
        {/* Ownership check — trimmed */}
        <div className="bg-slate-100 p-3 rounded-xl border border-slate-200">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.ownerInfo.isOwner}
              onChange={(e) =>
                onNestedInputChange("ownerInfo", "isOwner", e.target.checked)
              }
              className="w-4 h-4 rounded border-2 border-slate-400 text-emerald-600 focus:ring-0"
            />
            <div>
              <span className="font-bold text-xs block">
                I am the legal owner
              </span>
              <p className="text-[10px] text-slate-600 font-medium uppercase">
                Confirm authority to register
              </p>
            </div>
          </label>
        </div>

        {!formData.ownerInfo.isOwner && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex gap-2">
            <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={16} />
            <p className="text-[11px] font-bold text-amber-900 leading-tight">
              AUTHORIZATION REQUIRED: You must have legal permission from the
              owner to proceed.
            </p>
          </div>
        )}

        {/* Personal — trimmed */}
        <section className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm space-y-3">
          <h3
            className={`text-base flex items-center gap-2 ${bebasNeue.className}`}
          >
            <User className="text-emerald-600" size={16} /> PERSONAL
          </h3>

          <div className="space-y-3">
            <div>
              <label className="text-[9px] font-bold text-slate-600 uppercase mb-1 block">
                Full Legal Name
              </label>
              <input
                type="text"
                value={formData.ownerInfo.fullName}
                onChange={(e) =>
                  onNestedInputChange("ownerInfo", "fullName", e.target.value)
                }
                className="w-full bg-slate-100/80 rounded-lg px-3 py-2.5 text-sm font-bold outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="text-[9px] font-bold text-slate-600 uppercase mb-1 block">
                Role / Position
              </label>
              <div className="relative">
                <select
                  value={formData.ownerInfo.position}
                  onChange={(e) =>
                    onNestedInputChange("ownerInfo", "position", e.target.value)
                  }
                  className="w-full bg-slate-100/80 rounded-lg px-3 py-2.5 text-sm font-bold outline-none appearance-none"
                >
                  <option value="Owner">Owner</option>
                  <option value="Director">Director</option>
                  <option value="Manager">Manager</option>
                  <option value="Administrator">Administrator</option>
                </select>
                <Briefcase
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none"
                  size={14}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact — trimmed */}
        <section className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm space-y-3">
          <h3
            className={`text-base flex items-center gap-2 ${bebasNeue.className}`}
          >
            <Mail className="text-emerald-600" size={16} /> CONTACT
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-100/80 rounded-lg px-3 py-2.5 flex items-center gap-2">
              <Mail size={14} className="text-slate-600 shrink-0" />
              <input
                type="email"
                value={formData.ownerInfo.email}
                onChange={(e) =>
                  onNestedInputChange("ownerInfo", "email", e.target.value)
                }
                placeholder="Email Address"
                className="bg-transparent w-full text-sm font-bold outline-none min-w-0"
              />
            </div>
            <div className="bg-slate-100/80 rounded-lg px-3 py-2.5 flex items-center gap-2">
              <Phone size={14} className="text-slate-600 shrink-0" />
              <input
                type="tel"
                value={formData.ownerInfo.phone}
                onChange={(e) =>
                  onNestedInputChange("ownerInfo", "phone", e.target.value)
                }
                placeholder="Phone Number"
                className="bg-transparent w-full text-sm font-bold outline-none min-w-0"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Footer nav — trimmed */}
      <footer className="mt-5 flex flex-col md:flex-row items-center justify-between gap-2 pt-4 border-t border-slate-200">
        <button
          onClick={onBack}
          className="w-full md:w-auto flex items-center justify-center gap-2 text-slate-900 font-bold text-[10px] uppercase py-2"
        >
          <ArrowLeft size={14} /> Back
        </button>
        <button
          onClick={onNext}
          className="w-full md:w-auto px-6 py-3 bg-slate-900 text-white rounded-lg font-bold text-[10px] uppercase tracking-widest shadow-lg flex items-center justify-center gap-2"
        >
          Final Step <ArrowRight size={14} />
        </button>
      </footer>
    </motion.div>
  );
};

export default OwnerInfoStep;
