// app/login/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle,
  Lock,
  Stethoscope,
  Shield,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import NetworkStatus from "@/app/utils/NetworkStatus";
import { bebasNeue, poppins } from "../../home/doza_center/constant";

interface LoginForm {
  fullName: string;
  centerName: string;
  otp: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  data?: any;
  attemptsLeft?: number;
  blockedUntil?: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({
    fullName: "",
    centerName: "",
    otp: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockedUntil, setBlockedUntil] = useState<Date | null>(null);
  const [bubbles, setBubbles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      color: string;
      duration: number;
      delay: number;
    }>
  >([]);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: string;
      top: string;
      duration: number;
      delay: number;
    }>
  >([]);
  const [activeField, setActiveField] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    // Generate bubbles
    const colors = [
      "rgba(1, 120, 64, 0.4)",
      "rgba(0, 129, 213, 0.4)",
      "rgba(147, 51, 234, 0.4)",
      "rgba(239, 68, 68, 0.4)",
      "rgba(255, 193, 7, 0.4)",
      "rgba(16, 185, 129, 0.4)",
    ];

    const newBubbles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 120 + 30,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));

    setBubbles(newBubbles);

    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    }));

    setParticles(newParticles);
  }, []);

  // Check if user is blocked
  useEffect(() => {
    const blockedUntil = localStorage.getItem("blockedUntil");
    if (blockedUntil) {
      const blockTime = new Date(blockedUntil);
      if (blockTime > new Date()) {
        setIsBlocked(true);
        setBlockedUntil(blockTime);
      } else {
        localStorage.removeItem("blockedUntil");
        localStorage.removeItem("attemptsLeft");
      }
    }

    const attempts = localStorage.getItem("attemptsLeft");
    if (attempts) {
      setAttemptsLeft(parseInt(attempts));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isBlocked) {
      setError(
        "Account temporarily blocked. Please try again later or contact your center head."
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result: LoginResponse = await response.json();

      if (result.success) {
        // Reset attempts on successful login
        localStorage.removeItem("attemptsLeft");
        localStorage.removeItem("blockedUntil");

        // Store user session
        localStorage.setItem("userData", JSON.stringify(result.data));

        // Redirect to dashboard
        router.push("/center/dashboard");
      } else {
        const newAttempts = result.attemptsLeft || attemptsLeft - 1;
        setAttemptsLeft(newAttempts);
        localStorage.setItem("attemptsLeft", newAttempts.toString());

        if (result.blockedUntil) {
          setIsBlocked(true);
          setBlockedUntil(new Date(result.blockedUntil));
          localStorage.setItem("blockedUntil", result.blockedUntil);
        }

        setError(result.message);
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getTimeRemaining = () => {
    if (!blockedUntil) return "";
    const now = new Date();
    const diff = blockedUntil.getTime() - now.getTime();
    const minutes = Math.ceil(diff / (1000 * 60));
    return `${minutes} minutes`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <NetworkStatus />

      {/* Enhanced Animated Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute rounded-full opacity-30 blur-xl"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: bubble.size,
                height: bubble.size,
                background: `radial-gradient(circle, ${bubble.color}, transparent)`,
              }}
              initial={{
                y: 100,
                x: Math.random() * 100 - 50,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                y: -100,
                x: [0, Math.random() * 40 - 20, 0],
                scale: [0, 1, 0.8],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </AnimatePresence>

        {/* Floating particles - Client-side only */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-20 text-green-400/20"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Stethoscope size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-blue-400/20"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      >
        <Shield size={40} />
      </motion.div>

      {/* Main Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative w-full max-w-6xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Side - Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative bg-gradient-to-br from-green-600/20 to-blue-600/20"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="Modern Hospital"
              fill
              className="object-cover"
              priority
            />

            {/* Animated Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                >
                  <Stethoscope className="w-8 h-8 text-white" />
                </motion.div>

                <h2
                  className={`text-4xl font-bold mb-2 ${bebasNeue.className}`}
                >
                  Healthcare Excellence
                </h2>
                <p
                  className={`text-white/90 text-lg ${poppins.className} leading-relaxed`}
                >
                  Advanced center management platform for modern healthcare
                  facilities
                </p>

                {/* Feature List */}
                <motion.div
                  className="grid grid-cols-2 gap-3 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {[
                    "Secure Access",
                    "Real-time Data",
                    "24/7 Support",
                    "Easy Management",
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="flex items-center gap-2 text-white/80"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className={`text-sm ${poppins.className}`}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 flex flex-col justify-center"
          >
            <div className="w-full max-w-md mx-auto">
              {/* Logo and Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
              >
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 8,
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur-sm opacity-75" />
                    <Image
                      src="/logo.png"
                      alt="Doza Logo"
                      width={80}
                      height={80}
                      className="rounded-2xl relative z-10 border-4 border-white shadow-lg"
                    />
                  </div>
                </motion.div>
                <h1
                  className={`text-5xl font-bold text-gray-900 mb-2 ${bebasNeue.className}`}
                >
                  DOZA
                </h1>
                <p className={`text-gray-600 text-lg ${poppins.className}`}>
                  Center Management Portal
                </p>
              </motion.div>

              {/* Login Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl"
                  >
                    <Lock className="w-6 h-6 text-white" />
                  </motion.div>
                  <h2
                    className={`text-3xl font-bold text-gray-900 ${bebasNeue.className}`}
                  >
                    Center Login
                  </h2>
                </div>

                {/* Status Messages */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, height: 0 }}
                      animate={{ opacity: 1, scale: 1, height: "auto" }}
                      exit={{ opacity: 0, scale: 0.9, height: 0 }}
                      className="flex items-center gap-3 p-4 mb-6 bg-red-50 border border-red-200 rounded-xl text-red-700"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className={`text-sm ${poppins.className}`}>{error}</p>
                    </motion.div>
                  )}

                  {isBlocked && blockedUntil && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, height: 0 }}
                      animate={{ opacity: 1, scale: 1, height: "auto" }}
                      exit={{ opacity: 0, scale: 0.9, height: 0 }}
                      className="flex items-center gap-3 p-4 mb-6 bg-orange-50 border border-orange-200 rounded-xl text-orange-700"
                    >
                      <Lock className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p
                          className={`text-sm font-semibold ${poppins.className}`}
                        >
                          Account Temporarily Blocked
                        </p>
                        <p className={`text-xs ${poppins.className}`}>
                          Try again in {getTimeRemaining()} or contact your
                          center head.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {!isBlocked && attemptsLeft < 3 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, height: 0 }}
                      animate={{ opacity: 1, scale: 1, height: "auto" }}
                      exit={{ opacity: 0, scale: 0.9, height: 0 }}
                      className="flex items-center gap-3 p-4 mb-6 bg-blue-50 border border-blue-200 rounded-xl text-blue-700"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className={`text-sm ${poppins.className}`}>
                        {attemptsLeft} attempt{attemptsLeft !== 1 ? "s" : ""}{" "}
                        remaining
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleLogin} className="space-y-6">
                  {["fullName", "centerName", "otp"].map((fieldName, index) => (
                    <motion.div
                      key={fieldName}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <label
                        htmlFor={fieldName}
                        className={`block text-sm font-medium text-gray-700 mb-2 ${poppins.className}`}
                      >
                        {fieldName === "fullName" && "Full Name"}
                        {fieldName === "centerName" &&
                          "Center Name / Company ID"}
                        {fieldName === "otp" && "Daily OTP"}
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className={`relative transition-all duration-300 ${
                          activeField === fieldName
                            ? "ring-2 ring-green-500 ring-opacity-50"
                            : ""
                        }`}
                      >
                        <input
                          type={
                            fieldName === "otp"
                              ? showPassword
                                ? "text"
                                : "password"
                              : "text"
                          }
                          id={fieldName}
                          name={fieldName}
                          value={formData[fieldName as keyof LoginForm]}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField(fieldName)}
                          onBlur={() => setActiveField(null)}
                          required
                          disabled={isBlocked || loading}
                          className="w-full px-4 py-4 bg-white/80 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 backdrop-blur-sm"
                          placeholder={
                            fieldName === "fullName"
                              ? "Enter your full name"
                              : fieldName === "centerName"
                              ? "Enter center name or company ID"
                              : "Enter today's OTP"
                          }
                        />
                        {fieldName === "otp" && (
                          <motion.button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            disabled={isBlocked || loading}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </motion.button>
                        )}
                      </motion.div>
                    </motion.div>
                  ))}

                  <motion.button
                    type="submit"
                    disabled={isBlocked || loading}
                    whileHover={{ scale: loading || isBlocked ? 1 : 1.02 }}
                    whileTap={{ scale: loading || isBlocked ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 relative overflow-hidden group"
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span
                      className={`relative z-10 ${poppins.className} flex items-center justify-center gap-2`}
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Authenticating...
                        </>
                      ) : (
                        <>
                          {isBlocked
                            ? "Account Blocked"
                            : "Access Center Dashboard"}
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.div>
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200/50"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-1 bg-green-100 rounded-lg"
                    >
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </motion.div>
                    <div>
                      <p
                        className={`text-sm text-gray-700 ${poppins.className}`}
                      >
                        <strong>Need help?</strong> Contact your center head or
                        system administrator for your daily OTP and login
                        credentials.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
