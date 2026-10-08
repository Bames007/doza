"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Check,
  Loader2,
  Tag,
  X,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Calendar,
  Lock,
} from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { db, auth } from "@/app/utils/firebaseConfig";
import { UserRegistrationData, ReferralValidation, avatars } from "./type";
import { motion } from "framer-motion";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";
import Link from "next/link";

const UserRegistration: React.FC = () => {
  const [formData, setFormData] = useState<UserRegistrationData>({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      gender: "",
      avatar: "/assets/avatars/happy_emoji.jpg",
    },
    referralCode: "",
    agreedToTerms: false,
    role: "user",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [referral, setReferral] = useState<ReferralValidation | null>(null);
  const [checkingReferral, setCheckingReferral] = useState(false);

  const handleInputChange = (
    field: keyof typeof formData.personalInfo,
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  const handleAvatarSelect = (avatarPath: string) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, avatar: avatarPath },
    }));
  };

  // ── Debounced referral validation ───────────────────────────
  useEffect(() => {
    const code = formData.referralCode.trim();
    if (!code) {
      setReferral(null);
      setCheckingReferral(false);
      return;
    }

    setCheckingReferral(true);
    const t = setTimeout(async () => {
      try {
        const res = await fetch("/api/referral-codes/validate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });
        const json = await res.json();

        if (res.ok && json.success) {
          setReferral({
            valid: true,
            code: json.data.code,
            codeId: json.data.id,
            rewardType: json.data.rewardType,
            rewardValue: json.data.rewardValue,
            description: json.data.description,
            assignedToType: json.data.assignedToType,
            assignedToId: json.data.assignedToId,
            assignedToName: json.data.assignedToName,
          });
        } else {
          setReferral({
            valid: false,
            error: json?.error || "Invalid referral code",
          });
        }
      } catch {
        setReferral({ valid: false, error: "Could not verify code" });
      } finally {
        setCheckingReferral(false);
      }
    }, 500);

    return () => clearTimeout(t);
  }, [formData.referralCode]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const { personalInfo, agreedToTerms, referralCode } = formData;

    if (!personalInfo.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!personalInfo.lastName.trim())
      newErrors.lastName = "Last name is required";
    if (!personalInfo.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(personalInfo.email))
      newErrors.email = "Email is invalid";
    if (!personalInfo.phone.trim())
      newErrors.phone = "Phone number is required";
    if (!personalInfo.dateOfBirth.trim())
      newErrors.dateOfBirth = "Date of birth is required";
    if (!personalInfo.gender) newErrors.gender = "Please select your gender";
    if (!personalInfo.password) newErrors.password = "Password is required";
    else if (personalInfo.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (personalInfo.password !== personalInfo.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!agreedToTerms) newErrors.terms = "You must agree to the terms";

    if (referralCode.trim()) {
      if (checkingReferral) {
        newErrors.referralCode = "Still checking code…";
      } else if (!referral || !referral.valid) {
        newErrors.referralCode = referral?.error || "Invalid referral code";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const incrementReferralUsage = useCallback(
    async (uid: string) => {
      if (!referral?.valid || !referral.code) return;
      try {
        await fetch("/api/referral-codes", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-user-id": uid,
            "x-user-name": `${formData.personalInfo.firstName} ${formData.personalInfo.lastName}`,
            "x-user-role": "user",
          },
          body: JSON.stringify({
            code: referral.code,
            usedBy: uid,
            usedByType: "user",
            usedFor: "registration",
            metadata: {
              email: formData.personalInfo.email,
              phone: formData.personalInfo.phone,
            },
          }),
        });
      } catch (err) {
        console.warn("Failed to increment referral usage", err);
      }
    },
    [referral, formData.personalInfo],
  );

  const sendEmails = useCallback(
    async (uid: string) => {
      try {
        await fetch("/api/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.personalInfo.email,
            name: formData.personalInfo.firstName,
            userId: uid,
          }),
        });
      } catch (err) {
        console.warn("Welcome email failed", err);
      }
    },
    [formData.personalInfo],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setErrors({});

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.personalInfo.email,
        formData.personalInfo.password,
      );
      const uid = userCredential.user.uid;

      const userProfile: Record<string, any> = {
        role: formData.role,
        email: formData.personalInfo.email,
        emailVerified: false,
        personalProfile: {
          fname: formData.personalInfo.firstName,
          lname: formData.personalInfo.lastName,
          age: formData.personalInfo.dateOfBirth,
          gender: formData.personalInfo.gender,
          phone: formData.personalInfo.phone,
          selectedImage: formData.personalInfo.avatar || "",
          bloodGroup: "",
          diastole: null,
          genotype: "",
          height: "",
          systole: null,
          weight: "",
          sosOneName: "",
          sosOnePhone: "",
          sosTwoName: "",
          sosTwoPhone: "",
        },
        medicalProfile: {
          allergies: "",
          asthma: false,
          diabetic: false,
          heartDisease: false,
          hypertension: false,
          smoker: false,
          ulcer: false,
        },
        drugSessions: {},
        familyAndFriends: [],
        encryptedFCMToken: "",
        subscription: null,
        referral:
          referral?.valid && referral.code
            ? {
                code: referral.code,
                codeId: referral.codeId,
                rewardType: referral.rewardType,
                rewardValue: referral.rewardValue,
                description: referral.description || "",
                assignedToType: referral.assignedToType,
                assignedToId: referral.assignedToId,
                assignedToName: referral.assignedToName || "",
                appliedAt: new Date().toISOString(),
              }
            : null,
        createdAt: new Date().toISOString(),
      };

      await set(ref(db, `doza/users/${uid}`), userProfile);

      await Promise.allSettled([incrementReferralUsage(uid), sendEmails(uid)]);

      setSubmitSuccess(true);
    } catch (error: any) {
      console.error("registration error", error);
      setErrors({ form: error?.message || "Registration failed" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderReferralBadge = () => {
    if (!formData.referralCode.trim()) return null;
    if (checkingReferral) {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 mt-2">
          <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-600" />
          Validating code…
        </span>
      );
    }
    if (!referral) return null;

    if (referral.valid) {
      const label =
        referral.rewardType === "discount"
          ? `${referral.rewardValue}% off`
          : referral.rewardType === "points"
            ? `${referral.rewardValue} points`
            : `₦${referral.rewardValue} cashback`;
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 mt-2">
          <CheckCircle2 className="w-3.5 h-3.5" />
          {label} applied
          {referral.description ? ` · ${referral.description}` : ""}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-600 mt-2">
        <AlertCircle className="w-3.5 h-3.5" />
        {referral.error}
      </span>
    );
  };

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
            WELCOME TO DOZA.
          </h2>
          <p className="text-slate-500 mb-2">
            Your account is ready. Welcome to Doza Medic.
          </p>
          <p className="text-slate-400 text-sm mb-8">
            You'll choose a plan inside the dashboard.
          </p>
          <Link
            href="https://users.dozamedic.com"
            className={`block w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition tracking-wide ${bebasNeue.className}`}
          >
            ENTER DASHBOARD
          </Link>
        </motion.div>
      </div>
    );
  }

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
            CREATE YOUR <span className="text-emerald-600">DOZA</span> ACCOUNT
          </h1>
          <p className="text-slate-500">
            Take control of your health. Pick your plan later in the dashboard.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Avatar */}
          <div className="bg-white p-6 rounded-3xl shadow-sm shadow-emerald-900/5 border border-emerald-100/70">
            <h2
              className={`text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 ${bebasNeue.className}`}
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                1
              </div>
              CHOOSE YOUR AVATAR
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg shadow-emerald-900/10 overflow-hidden">
                <img
                  src={formData.personalInfo.avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-6 sm:grid-cols-8 gap-3">
                {avatars.map((avatar) => (
                  <button
                    key={avatar}
                    type="button"
                    onClick={() => handleAvatarSelect(avatar)}
                    className={`w-12 h-12 rounded-full overflow-hidden transition-all ${
                      formData.personalInfo.avatar === avatar
                        ? "ring-4 ring-emerald-500 scale-110"
                        : "hover:scale-105"
                    }`}
                  >
                    <img
                      src={avatar}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 2: Personal Information */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm shadow-emerald-900/5 border border-emerald-100/70">
            <h2
              className={`text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 ${bebasNeue.className}`}
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                2
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
                    placeholder="john@example.com"
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

              {/* Date of Birth */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Date of Birth
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={formData.personalInfo.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange("dateOfBirth", e.target.value)
                    }
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm"
                  />
                </div>
                {errors.dateOfBirth && (
                  <p className="text-rose-500 text-xs mt-1">
                    {errors.dateOfBirth}
                  </p>
                )}
              </div>

              {/* Gender */}
              <div className="md:col-span-2">
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
                    type={showPassword ? "text" : "password"}
                    value={formData.personalInfo.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
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
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.personalInfo.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-rose-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Step 3: Referral Code */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm shadow-emerald-900/5 border border-emerald-100/70">
            <h2
              className={`text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 ${bebasNeue.className}`}
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                3
              </div>
              REFERRAL CODE (OPTIONAL)
            </h2>

            <div>
              <div className="relative">
                <Tag className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={formData.referralCode}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      referralCode: e.target.value.toUpperCase(),
                    }))
                  }
                  placeholder="E.G. DOZA100"
                  className={`w-full pl-10 pr-10 py-3 rounded-xl border transition-all outline-none font-mono tracking-wider text-sm uppercase ${
                    referral?.valid
                      ? "border-emerald-500 bg-emerald-50/40 focus:border-emerald-500"
                      : referral && !referral.valid
                        ? "border-rose-300 bg-rose-50/30 focus:border-rose-500"
                        : "border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  }`}
                />
                {formData.referralCode && (
                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, referralCode: "" }));
                      setReferral(null);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-slate-100"
                    aria-label="Clear referral code"
                  >
                    <X className="w-4 h-4 text-slate-400" />
                  </button>
                )}
              </div>

              {renderReferralBadge()}

              {errors.referralCode && (
                <p className="text-rose-500 text-xs mt-1">
                  {errors.referralCode}
                </p>
              )}
              <p className="text-xs text-slate-400 mt-2">
                If valid, the reward attaches to your account automatically.
              </p>
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-4">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    agreedToTerms: e.target.checked,
                  }))
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
                  Terms & Conditions
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
              <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-sm">
                {errors.form}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || checkingReferral}
              className={`w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg tracking-wider hover:bg-emerald-600 transition-all shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed ${bebasNeue.className}`}
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  PROCESSING...
                </span>
              ) : (
                "COMPLETE REGISTRATION"
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default UserRegistration;
