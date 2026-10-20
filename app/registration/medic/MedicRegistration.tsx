"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  AlertCircle,
  User,
  Mail,
  Phone,
  Lock,
  Loader2,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { submitMedicRegistration } from "./RegistrationService";
import type { MedicRegistrationData } from "./type";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";
import { auth } from "@/app/utils/firebaseConfig";

const MEDICS_URL = "https://medics.dozamedic.com/";

// ─── Custom Select ──────────────────────────────────────────────────
const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder = "Select",
  icon: Icon,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`relative w-full pl-10 pr-4 py-3 rounded-xl border bg-white transition-all text-sm flex items-center text-left cursor-pointer outline-none ${
          open
            ? "border-emerald-500 ring-4 ring-emerald-500/10"
            : "border-slate-200 hover:border-slate-300"
        }`}
      >
        {Icon && (
          <Icon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        )}
        <span
          className={`flex-1 truncate ${
            value ? "text-slate-900" : "text-slate-400"
          }`}
        >
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 pointer-events-none transition-transform duration-300 ${
            open ? "rotate-180 text-emerald-600" : "text-slate-400"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-2xl shadow-2xl p-2 z-50 max-h-72 overflow-y-auto"
          >
            <div className="space-y-1">
              {options.map((opt) => {
                const isSelected = opt === value;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      onChange(opt);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 text-left ${
                      isSelected
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20"
                        : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-900"
                    }`}
                  >
                    <span className="truncate">{opt}</span>
                    {isSelected && (
                      <Check className="w-4 h-4 text-white shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Main Component ─────────────────────────────────────────────────
const MedicRegistration: React.FC = () => {
  const [formData, setFormData] = useState<MedicRegistrationData>({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      gender: "",
    },
    role: "medic",
    agreedToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    field: keyof typeof formData.personalInfo,
    value: string,
  ) => {
    setFormData({
      ...formData,
      personalInfo: { ...formData.personalInfo, [field]: value },
    });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const validateForm = (): boolean => {
    const e: Record<string, string> = {};
    const p = formData.personalInfo;

    if (!p.firstName.trim()) e.firstName = "First name is required";
    if (!p.lastName.trim()) e.lastName = "Last name is required";

    if (!p.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(p.email)) e.email = "Email is invalid";

    if (!p.phone.trim()) e.phone = "Phone number is required";
    if (!p.gender) e.gender = "Please select your gender";

    if (!p.password) e.password = "Password is required";
    else if (p.password.length < 8)
      e.password = "Password must be at least 8 characters";

    if (p.password !== p.confirmPassword)
      e.confirmPassword = "Passwords do not match";

    if (!formData.agreedToTerms) e.terms = "You must agree to the terms";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const fireWelcomeEmail = async () => {
    try {
      const idToken = await auth.currentUser?.getIdToken();
      if (!idToken) return;

      await fetch("/api/email/send-medic-welcome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ name: formData.personalInfo.firstName }),
      });
    } catch (err) {
      console.warn("medic welcome email failed", err);
    }
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      await submitMedicRegistration(formData);
      void fireWelcomeEmail();
      setSubmitSuccess(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Registration failed";
      setErrors({ form: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── Success screen ──────────────────────────────────────────
  if (submitSuccess) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center p-6 ${poppins.className}`}
        style={{
          background:
            "radial-gradient(1200px 600px at 50% -10%, #d1fae5 0%, #ecfdf5 35%, #f8fafc 75%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl p-10 shadow-xl shadow-emerald-900/5 border border-emerald-100/70 text-center"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-emerald-600 w-10 h-10" />
          </div>
          <h2 className={`text-4xl font-bold mb-4 ${bebasNeue.className}`}>
            WELCOME TO DOZA MEDIC.
          </h2>
          <p className="text-slate-500 mb-2">Your medic account is ready.</p>
          <p className="text-slate-400 text-sm mb-8">
            Log in to complete your professional profile and submit your
            credentials.
          </p>

          <a
            href={MEDICS_URL}
            className={`block w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition tracking-wide ${bebasNeue.className}`}
          >
            GO TO LOGIN
          </a>
        </motion.div>
      </div>
    );
  }

  // ─── Form ────────────────────────────────────────────────────
  return (
    <div
      className={`min-h-screen ${poppins.className}`}
      style={{
        background:
          "radial-gradient(1400px 700px at 50% -10%, #d1fae5 0%, #ecfdf5 30%, #f6faf8 70%, #f8fafc 100%)",
      }}
    >
      <main className="max-w-3xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1
            className={`text-5xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
          >
            BECOME A <span className="text-emerald-600">DOZA MEDIC</span>
          </h1>
          <p className="text-slate-500">
            Create your account. You'll finish your professional profile after
            logging in.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm shadow-emerald-900/5 border border-emerald-100/70">
            <h2
              className={`text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 ${bebasNeue.className}`}
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                1
              </div>
              YOUR DETAILS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.personalInfo.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    placeholder="John"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-rose-500 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.personalInfo.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    placeholder="Doe"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm"
                  />
                </div>
                {errors.lastName && (
                  <p className="text-rose-500 text-xs mt-1">
                    {errors.lastName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={formData.personalInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="you@yourpractice.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm"
                  />
                </div>
                {errors.email && (
                  <p className="text-rose-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    value={formData.personalInfo.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+2340000000000"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm"
                  />
                </div>
                {errors.phone && (
                  <p className="text-rose-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Gender
                </label>
                <CustomSelect
                  value={formData.personalInfo.gender}
                  onChange={(v) => handleInputChange("gender", v)}
                  options={["Male", "Female"]}
                  placeholder="Select Gender"
                  icon={User}
                />
                {errors.gender && (
                  <p className="text-rose-500 text-xs mt-1">{errors.gender}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={formData.personalInfo.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    placeholder="Min 8 characters"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm"
                  />
                </div>
                {errors.password && (
                  <p className="text-rose-500 text-xs mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={formData.personalInfo.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    placeholder="Repeat password"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-rose-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════
              SUBMIT SECTION — RESTORED
          ═══════════════════════════════════════════════════════ */}
          <div className="space-y-4">
            {/* Form-level error (network, server, auth) */}
            {errors.form && (
              <div
                role="alert"
                className="p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-start gap-3 text-rose-700 text-sm"
              >
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                <span>{errors.form}</span>
              </div>
            )}

            {/* Terms checkbox — with inline error */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.agreedToTerms}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agreedToTerms: e.target.checked,
                    })
                  }
                  className="sr-only peer"
                />
                <span
                  className="mt-0.5 w-5 h-5 shrink-0 rounded-lg border-2 border-slate-300 bg-white flex items-center justify-center transition-all duration-200
                    peer-checked:bg-emerald-600 peer-checked:border-emerald-600
                    peer-focus-visible:ring-4 peer-focus-visible:ring-emerald-500/20
                    group-hover:border-emerald-400"
                >
                  <Check
                    className={`w-3.5 h-3.5 text-white transition-opacity duration-150 ${
                      formData.agreedToTerms ? "opacity-100" : "opacity-0"
                    }`}
                    strokeWidth={3}
                  />
                </span>
                <span className="text-sm text-slate-600 select-none">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="font-semibold text-emerald-600 hover:underline"
                    target="_blank"
                  >
                    Terms &amp; Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-emerald-600 hover:underline"
                    target="_blank"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              {errors.terms && (
                <p className="text-rose-500 text-xs mt-1.5 ml-8">
                  {errors.terms}
                </p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-2xl font-bold text-base tracking-wide transition-all active:scale-[0.98] disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                isSubmitting
                  ? "bg-slate-300 text-slate-600 shadow-none"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating account…
                </>
              ) : (
                "Create account"
              )}
            </button>

            {/* Login link */}
            <p className="text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                href="/medic/login"
                className="text-emerald-600 font-bold hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default MedicRegistration;
