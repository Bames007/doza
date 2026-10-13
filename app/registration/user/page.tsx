"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
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
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { db, auth } from "@/app/utils/firebaseConfig";
import { UserRegistrationData, ReferralValidation, avatars } from "./type";
import { motion, AnimatePresence } from "framer-motion";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";
import Link from "next/link";

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

// ─── Custom Date Picker ─────────────────────────────────────────────

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAY_SHORT = ["S", "M", "T", "W", "T", "F", "S"];

const CustomDatePicker = ({
  value,
  onChange,
  placeholder = "Select Date",
  icon: Icon,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedDate = value ? new Date(value + "T00:00:00") : null;
  const [viewDate, setViewDate] = useState<Date>(
    selectedDate ?? new Date(2000, 0, 1),
  );

  // Click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Sync view when value changes externally
  useEffect(() => {
    if (selectedDate) setViewDate(selectedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const selectDay = (day: number) => {
    const d = new Date(year, month, day);
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    onChange(iso);
    setOpen(false);
  };

  const formatDisplay = (d: Date | null) => {
    if (!d) return placeholder;
    return d.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Year range for the year-picker dropdown (last 100 years)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const [yearOpen, setYearOpen] = useState(false);

  return (
    <div className="relative w-full" ref={ref}>
      {/* Trigger */}
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
            value ? "text-emerald-600 font-semibold" : "text-slate-400"
          }`}
        >
          {formatDisplay(selectedDate)}
        </span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 pointer-events-none transition-transform duration-300 ${
            open ? "rotate-180 text-emerald-600" : "text-slate-400"
          }`}
        />
      </button>

      {/* Calendar panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-2xl shadow-2xl p-3 z-50"
          >
            {/* Header: month + year, prev/next */}
            <div className="flex items-center justify-between mb-3">
              <button
                type="button"
                onClick={prevMonth}
                className="p-1.5 rounded-lg hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1 relative">
                <span className="text-sm font-bold text-slate-800">
                  {MONTH_NAMES[month]}
                </span>
                <button
                  type="button"
                  onClick={() => setYearOpen((v) => !v)}
                  className="text-sm font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-0.5 px-1.5 py-0.5 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  {year}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${
                      yearOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Year dropdown */}
                <AnimatePresence>
                  {yearOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-2 w-24 max-h-48 overflow-y-auto bg-white border border-slate-200/80 rounded-xl shadow-2xl p-1 z-10"
                    >
                      {years.map((y) => (
                        <button
                          key={y}
                          type="button"
                          onClick={() => {
                            setViewDate(new Date(y, month, 1));
                            setYearOpen(false);
                          }}
                          className={`w-full text-center px-2 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                            y === year
                              ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
                              : "text-slate-700 hover:bg-emerald-50"
                          }`}
                        >
                          {y}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={nextMonth}
                className="p-1.5 rounded-lg hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 transition-colors"
                aria-label="Next month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Day-of-week row */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              {DAY_SHORT.map((d, i) => (
                <div
                  key={i}
                  className="text-[10px] font-bold text-slate-400 uppercase text-center py-1"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`e-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const cellDate = new Date(year, month, day);
                const isSelected =
                  !!selectedDate &&
                  cellDate.getFullYear() === selectedDate.getFullYear() &&
                  cellDate.getMonth() === selectedDate.getMonth() &&
                  cellDate.getDate() === selectedDate.getDate();
                const isToday = cellDate.getTime() === today.getTime();

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => selectDay(day)}
                    className={`aspect-square rounded-lg text-xs font-semibold transition-all duration-150 flex items-center justify-center ${
                      isSelected
                        ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/30"
                        : isToday
                          ? "text-emerald-700 bg-emerald-50 hover:bg-emerald-100"
                          : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-900"
                    }`}
                  >
                    {day}
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

              {/* Date of Birth — custom picker */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Date of Birth
                </label>
                <CustomDatePicker
                  value={formData.personalInfo.dateOfBirth}
                  onChange={(v) => handleInputChange("dateOfBirth", v)}
                  placeholder="Select Date"
                  icon={Calendar}
                />
                {errors.dateOfBirth && (
                  <p className="text-rose-500 text-xs mt-1">
                    {errors.dateOfBirth}
                  </p>
                )}
              </div>

              {/* Gender — custom dropdown */}
              <div className="md:col-span-2">
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
            {/* Custom rounded green checkbox */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    agreedToTerms: e.target.checked,
                  }))
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
