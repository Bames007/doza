"use client";
import React, { useState } from "react";
import {
  CheckCircle,
  User,
  Mail,
  Phone,
  Lock,
  AlertCircle,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { db, auth } from "@/app/utils/firebaseConfig";
import { UserRegistrationData, Plan } from "./type";
import { plans } from "./constants";
import { avatars } from "./type";

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
      personalInfo: {
        ...formData.personalInfo,
        [field]: value,
      },
    });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
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
    if (personalInfo.password !== personalInfo.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!selectedPlan) newErrors.plan = "Please select a plan";
    if (!agreedToTerms) newErrors.terms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({}); // Clear previous errors

    try {
      // 1. Create Firebase Auth user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.personalInfo.email,
        formData.personalInfo.password,
      );
      const uid = userCredential.user.uid;

      // 2. Prepare user profile matching your Firebase schema
      const userProfile = {
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

      // 3. Save to Realtime Database under doza/users/{uid}
      const userRef = ref(db, `doza/users/${uid}`);
      await set(userRef, userProfile);

      setSubmitSuccess(true);
    } catch (error: any) {
      console.error("Registration error:", error);
      // Handle Firebase Auth errors
      if (error.code === "auth/email-already-in-use") {
        setErrors({ form: "Email already registered" });
      } else if (error.code === "auth/weak-password") {
        setErrors({ form: "Password should be at least 6 characters" });
      } else if (error.code === "auth/invalid-email") {
        setErrors({ form: "Invalid email address" });
      } else {
        setErrors({ form: error.message || "Registration failed" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-8 px-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl text-center border border-green-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Welcome to Doza!
          </h2>
          <p className="text-gray-600 mb-6">
            Your account has been created successfully. Please verify your email
            to get started.
          </p>
          <a
            href="/login"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-200"
          >
            Go to Login
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Create Your <span className="text-green-600">Doza</span> Account
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Join thousands of Nigerians taking control of their health with
            personalized plans and expert support.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-2xl border border-green-100"
        >
          {/* Avatar Selection */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-5 flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-xl">
                <User size={20} className="text-green-700" />
              </div>
              Choose Your Avatar
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-green-300 shadow-lg flex-shrink-0">
                <img
                  src={formData.personalInfo.avatar}
                  alt="Selected avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 w-full">
                <p className="text-sm text-gray-500 mb-3">Tap to select:</p>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                  {avatars.map((avatar) => (
                    <button
                      key={avatar}
                      type="button"
                      onClick={() => handleAvatarSelect(avatar)}
                      className={`relative rounded-full overflow-hidden w-14 h-14 md:w-16 md:h-16 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-200 ${
                        formData.personalInfo.avatar === avatar
                          ? "ring-4 ring-green-500 scale-110"
                          : "ring-2 ring-gray-200 hover:ring-green-300"
                      }`}
                    >
                      <img
                        src={avatar}
                        alt="Avatar option"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-5 flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-xl">
                <User size={20} className="text-green-700" />
              </div>
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* First Name */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.personalInfo.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.firstName ? "border-red-400" : "border-gray-300"
                  } bg-white text-gray-900 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition placeholder-gray-500`}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.personalInfo.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.lastName ? "border-red-400" : "border-gray-300"
                  } bg-white text-gray-900 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition placeholder-gray-500`}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.lastName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label className="block text-gray-800 font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                  <input
                    type="email"
                    value={formData.personalInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border ${
                      errors.email ? "border-red-400" : "border-gray-300"
                    } bg-white text-gray-900 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition placeholder-gray-500`}
                    placeholder="john.doe@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="md:col-span-2">
                <label className="block text-gray-800 font-medium mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                  <input
                    type="tel"
                    value={formData.personalInfo.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border ${
                      errors.phone ? "border-red-400" : "border-gray-300"
                    } bg-white text-gray-900 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition placeholder-gray-500`}
                    placeholder="+234 800 000 0000"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                  <input
                    type="date"
                    value={formData.personalInfo.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange("dateOfBirth", e.target.value)
                    }
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border ${
                      errors.dateOfBirth ? "border-red-400" : "border-gray-300"
                    } bg-white text-gray-900 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition`}
                  />
                </div>
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.dateOfBirth}
                  </p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex rounded-xl overflow-hidden border border-gray-300 bg-white">
                  <button
                    type="button"
                    onClick={() => handleInputChange("gender", "Male")}
                    className={`flex-1 py-3 text-sm font-medium transition-all ${
                      formData.personalInfo.gender === "Male"
                        ? "bg-green-600 text-white"
                        : "bg-white text-gray-800 hover:bg-gray-100"
                    } focus:outline-none focus:ring-2 focus:ring-green-500`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange("gender", "Female")}
                    className={`flex-1 py-3 text-sm font-medium transition-all ${
                      formData.personalInfo.gender === "Female"
                        ? "bg-green-600 text-white"
                        : "bg-white text-gray-800 hover:bg-gray-100"
                    } focus:outline-none focus:ring-2 focus:ring-green-500`}
                  >
                    Female
                  </button>
                </div>
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.gender}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                  <input
                    type="password"
                    value={formData.personalInfo.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border ${
                      errors.password ? "border-red-400" : "border-gray-300"
                    } bg-white text-gray-900 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition placeholder-gray-500`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                  <input
                    type="password"
                    value={formData.personalInfo.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border ${
                      errors.confirmPassword
                        ? "border-red-400"
                        : "border-gray-300"
                    } bg-white text-gray-900 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition placeholder-gray-500`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Plan Selection */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-5">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {plans.map((plan: Plan) => (
                <label
                  key={plan.id}
                  className={`relative block p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 hover:shadow-xl ${
                    formData.selectedPlan === plan.id
                      ? "border-green-500 bg-green-50/50"
                      : "border-gray-200 bg-white hover:border-green-200"
                  } ${plan.highlighted ? "ring-4 ring-green-100" : ""}`}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    checked={formData.selectedPlan === plan.id}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        selectedPlan: e.target.value as any,
                      })
                    }
                    className="hidden"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900">
                      {plan.name}
                    </h3>
                    {plan.tagline && (
                      <p className="text-sm text-green-600 italic mt-1">
                        {plan.tagline}
                      </p>
                    )}
                    <p className="text-2xl font-bold text-green-700 my-3">
                      {plan.price}
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2 text-left">
                      {plan.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle
                            size={16}
                            className="text-green-500 mt-0.5 shrink-0"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                      Most Popular
                    </span>
                  )}
                </label>
              ))}
            </div>
            {errors.plan && (
              <p className="text-red-500 text-sm mt-3 flex items-center gap-1">
                <AlertCircle size={14} /> {errors.plan}
              </p>
            )}
          </div>

          {/* Terms Agreement */}
          <div className="mb-8">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreedToTerms: e.target.checked })
                }
                className="mt-1 w-5 h-5 rounded border-gray-400 text-green-600 focus:ring-green-500"
              />
              <span className="text-gray-700 text-sm">
                I agree to the{" "}
                <a
                  href="/terms"
                  className="text-green-600 font-medium hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-green-600 font-medium hover:underline"
                >
                  Privacy Policy
                </a>
              </span>
            </label>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <AlertCircle size={14} /> {errors.terms}
              </p>
            )}
          </div>

          {/* Form error */}
          {errors.form && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700">
              <AlertCircle size={20} />
              <span>{errors.form}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-200"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Creating account...
              </>
            ) : (
              <>
                <CheckCircle size={20} />
                Create Account
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
