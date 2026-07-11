"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { db, auth } from "@/app/utils/firebaseConfig";
import { UserRegistrationData, Plan } from "./type";
import { plans } from "./constants";
import { avatars } from "./type";
import { motion } from "framer-motion";
import { bebasNeue } from "@/app/home/doza_center/constant";
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
    selectedPlan: null,
    agreedToTerms: false,
    role: "user",
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

  const handleAvatarSelect = (avatarPath: string) => {
    setFormData({
      ...formData,
      personalInfo: { ...formData.personalInfo, avatar: avatarPath },
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const { personalInfo, selectedPlan, agreedToTerms } = formData;
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
    if (!selectedPlan) newErrors.plan = "Please select a plan";
    if (!agreedToTerms) newErrors.terms = "You must agree to the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
      const userProfile = {
        role: formData.role,
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
        subscription: {
          plan: formData.selectedPlan,
          startDate: new Date().toISOString(),
          status: "active",
        },
      };
      await set(ref(db, `doza/users/${uid}`), userProfile);
      setSubmitSuccess(true);
    } catch (error: any) {
      setErrors({ form: error.message || "Registration failed" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-emerald-50/30 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl p-10 shadow-xl border border-slate-100 text-center"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-emerald-600 w-10 h-10" />
          </div>
          <h2 className={`text-4xl font-bold mb-4 ${bebasNeue.className}`}>
            WELCOME TO DOZA.
          </h2>
          <p className="text-slate-500 mb-8">
            Your account is ready. Start your health journey now.
          </p>
          <Link
            href="https://doza-user.vercel.app/"
            className="block w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition"
          >
            ENTER DASHBOARD
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 relative">
      <main className="max-w-3xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1
            className={`text-5xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
          >
            CREATE YOUR <span className="text-emerald-600">DOZA</span> ACCOUNT
          </h1>
          <p className="text-slate-500">
            Take control of your health with personalized plans.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Avatar Selection Section */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h2
              className={`text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 ${bebasNeue.className}`}
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                1
              </div>
              CHOOSE YOUR AVATAR
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
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

          {/* Personal Information Section */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2
              className={`text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 ${bebasNeue.className}`}
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                2
              </div>
              YOUR DETAILS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: "First Name",
                  field: "firstName",
                  type: "text",
                  placeholder: "John",
                },
                {
                  label: "Last Name",
                  field: "lastName",
                  type: "text",
                  placeholder: "Doe",
                },
                {
                  label: "Email",
                  field: "email",
                  type: "email",
                  placeholder: "john@example.com",
                  colSpan: true,
                },
                {
                  label: "Phone",
                  field: "phone",
                  type: "tel",
                  placeholder: "+234...",
                },
                { label: "Date of Birth", field: "dateOfBirth", type: "date" },
              ].map((item) => (
                <div
                  key={item.field}
                  className={item.colSpan ? "md:col-span-2" : ""}
                >
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    value={(formData.personalInfo as any)[item.field]}
                    onChange={(e) =>
                      handleInputChange(item.field as any, e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
                    placeholder={item.placeholder}
                  />
                  {errors[item.field] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[item.field]}
                    </p>
                  )}
                </div>
              ))}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.personalInfo.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={formData.personalInfo.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          {/* Plan Selection */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2
              className={`text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 ${bebasNeue.className}`}
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                3
              </div>
              CHOOSE PLAN
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan: Plan) => (
                <label
                  key={plan.id}
                  className={`cursor-pointer p-5 rounded-2xl border-2 transition-all hover:border-emerald-500 ${
                    formData.selectedPlan === plan.id
                      ? "border-emerald-500 bg-emerald-50/50"
                      : "border-slate-100 bg-slate-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    className="hidden"
                    checked={formData.selectedPlan === plan.id}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        selectedPlan: e.target.value as any,
                      })
                    }
                  />
                  <p className={`font-bold text-lg ${bebasNeue.className}`}>
                    {plan.name}
                  </p>
                  <p className="text-2xl font-bold text-emerald-600 my-2">
                    {plan.price}
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    {plan.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        ✓ {b}
                      </li>
                    ))}
                  </ul>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreedToTerms: e.target.checked })
                }
                className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-600">
                I agree to terms and privacy policy
              </span>
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-lg active:scale-[0.98]"
            >
              {isSubmitting ? "PROCESSING..." : "COMPLETE REGISTRATION"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default UserRegistration;
