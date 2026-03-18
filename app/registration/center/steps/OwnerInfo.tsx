"use client";

import React, { ChangeEvent } from "react";
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
  onBack: () => void;
  onNext: () => void;
}

const OwnerInfoStep: React.FC<OwnerInfoStepProps> = ({
  formData,
  onNestedInputChange,
  onBack,
  onNext,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`w-full max-w-4xl mx-auto px-3 py-6 ${poppins.className} text-slate-900`}
    >
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-emerald-100 px-3 py-1.5 rounded-lg mb-4">
          <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
          <span className="text-emerald-900 font-black text-[9px] uppercase tracking-widest">
            Step 03 — Ownership
          </span>
        </div>
        <h2
          className={`text-4xl md:text-7xl font-bold leading-none ${bebasNeue.className}`}
        >
          OWNER <span className="text-emerald-600">DETAILS</span>
        </h2>
      </div>

      <div className="space-y-4">
        {/* Ownership Check */}
        <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200">
          <label className="flex items-center gap-4 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.ownerInfo.isOwner}
              onChange={(e) =>
                onNestedInputChange("ownerInfo", "isOwner", e.target.checked)
              }
              className="w-6 h-6 rounded border-2 border-slate-400 text-emerald-600 focus:ring-0"
            />
            <div>
              <span className="font-bold text-sm block">
                I am the legal owner
              </span>
              <p className="text-[10px] text-slate-600 font-bold uppercase">
                Confirm authority to register
              </p>
            </div>
          </label>
        </div>

        {!formData.ownerInfo.isOwner && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
            <AlertCircle className="text-amber-600 shrink-0" size={18} />
            <p className="text-[11px] font-bold text-amber-900 leading-tight">
              AUTHORIZATION REQUIRED: You must have legal permission from the
              owner to proceed.
            </p>
          </div>
        )}

        {/* Identity Section */}
        <section className="bg-white border border-slate-200 p-4 md:p-8 rounded-3xl shadow-sm space-y-4">
          <h3
            className={`text-xl md:text-3xl flex items-center gap-2 ${bebasNeue.className}`}
          >
            <User className="text-emerald-600" size={20} /> PERSONAL
          </h3>

          <div className="space-y-4">
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
                className="w-full bg-slate-100/80 rounded-xl px-4 py-3.5 text-sm font-bold outline-none focus:ring-2 focus:ring-emerald-500"
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
                  className="w-full bg-slate-100/80 rounded-xl px-4 py-3.5 text-sm font-bold outline-none appearance-none"
                >
                  <option value="Owner">Owner</option>
                  <option value="Director">Director</option>
                  <option value="Manager">Manager</option>
                  <option value="Administrator">Administrator</option>
                </select>
                <Briefcase
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600"
                  size={16}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white border border-slate-200 p-4 md:p-8 rounded-3xl shadow-sm space-y-4">
          <h3
            className={`text-xl md:text-3xl flex items-center gap-2 ${bebasNeue.className}`}
          >
            <Mail className="text-emerald-600" size={20} /> CONTACT
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-100/80 rounded-xl px-4 py-3.5 flex items-center gap-3">
              <Mail size={16} className="text-slate-600" />
              <input
                type="email"
                value={formData.ownerInfo.email}
                onChange={(e) =>
                  onNestedInputChange("ownerInfo", "email", e.target.value)
                }
                placeholder="Email Address"
                className="bg-transparent w-full text-sm font-bold outline-none"
              />
            </div>
            <div className="bg-slate-100/80 rounded-xl px-4 py-3.5 flex items-center gap-3">
              <Phone size={16} className="text-slate-600" />
              <input
                type="tel"
                value={formData.ownerInfo.phone}
                onChange={(e) =>
                  onNestedInputChange("ownerInfo", "phone", e.target.value)
                }
                placeholder="Phone Number"
                className="bg-transparent w-full text-sm font-bold outline-none"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Footer Nav */}
      <footer className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-200">
        <button
          onClick={onBack}
          className="w-full md:w-auto flex items-center justify-center gap-2 text-slate-900 font-bold text-[10px] uppercase py-2"
        >
          <ArrowLeft size={14} /> Back
        </button>
        <button
          onClick={onNext}
          className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg flex items-center justify-center gap-2"
        >
          Final Step <ArrowRight size={14} />
        </button>
      </footer>
    </motion.div>
  );
};

export default OwnerInfoStep;
