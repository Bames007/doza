"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  AlertCircle,
  User,
  Mail,
  Phone,
  Lock,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { submitMedicRegistration } from "./RegistrationService";
import type { MedicRegistrationData } from "./type";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";
import { auth } from "@/app/utils/firebaseConfig"; // FIX: needed to get ID token

const MEDICS_URL = "https://medics.dozamedic.com/";

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

  // FIX: sends the Firebase ID token so the server can authenticate the caller.
  // The server derives uid/email from the verified token; we only send the name.
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
      // Never surface email failures to the user — registration already succeeded.
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

      // Fire-and-forget, but only after auth state is populated.
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

          {/* FIX: plain anchor for an external subdomain. router.push() does
              not handle absolute URLs. */}
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
          {/* Step 1: Personal Details */}
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
                <select
                  value={formData.personalInfo.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm cursor-pointer"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
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

          {/* Submit */}
          <div className="flex flex-col gap-4">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreedToTerms: e.target.checked })
                }
                className="mt-0.5 w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-600">
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
              <p className="text-rose-500 text-xs">{errors.terms}</p>
            )}

            {errors.form && (
              <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-sm flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errors.form}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg tracking-wider hover:bg-emerald-600 transition-all shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed ${bebasNeue.className}`}
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  CREATING ACCOUNT...
                </span>
              ) : (
                "CREATE ACCOUNT"
              )}
            </button>

            <p className="text-center text-sm text-slate-400">
              Already have an account?{" "}
              <a
                href={MEDICS_URL}
                className="text-emerald-600 font-bold hover:underline"
              >
                Log in
              </a>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default MedicRegistration;
