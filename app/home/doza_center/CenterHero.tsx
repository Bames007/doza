"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Building,
  Stethoscope,
  Heart,
  ArrowRight,
  Play,
  Star,
  Zap,
} from "lucide-react";
import { bebasNeue, poppins, colors } from "./constant";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CenterHeroProps {
  onBack: () => void;
}

export const CenterHero: React.FC<CenterHeroProps> = ({ onBack }) => {
  const router = useRouter();

  const handleWatchDemo = () => {
    console.log("Watch Demo clicked");
  };

  const handleStartFreeTrial = () => {
    router.push("/registration/center");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${
              colors.green?.primary || "#10b981"
            }40 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <section className="px-3 sm:px-6 pt-20 pb-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-green-100 text-green-700 mb-3 sm:mb-6"
              >
                <Building size={12} className="sm:w-4 sm:h-4" />
                <span className={`text-xs font-medium ${poppins.className}`}>
                  For Healthcare Centers
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 sm:mb-6 leading-tight ${bebasNeue.className}`}
              >
                Transform Your
                <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Healthcare Facility
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`text-sm sm:text-base md:text-lg text-slate-600 mb-4 sm:mb-8 leading-relaxed ${poppins.className}`}
              >
                Join Doza's comprehensive healthcare network. Get free EMR
                systems, AI-powered analytics, and seamless integration with
                thousands of patients and medical professionals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col xs:flex-row gap-2 sm:gap-4 justify-center lg:justify-start"
              >
                {/* Start Free Trial Button */}
                <Link href="/registration/center" passHref>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base text-white transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 w-full xs:w-auto group relative overflow-hidden"
                    style={{
                      backgroundColor: colors.green?.primary || "#10b981",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Building
                      size={16}
                      className="sm:w-5 sm:h-5 relative z-10"
                    />
                    <span className="relative z-10">Start Free Trial</span>
                    <ArrowRight
                      size={16}
                      className="sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </motion.button>
                </Link>

                {/* Watch Demo Button */}
                <motion.button
                  onClick={handleWatchDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base border-2 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 w-full xs:w-auto group"
                  style={{
                    borderColor: colors.green?.primary || "#10b981",
                    color: colors.green?.primary || "#10b981",
                    backgroundColor: "white",
                  }}
                >
                  <Play size={16} className="sm:w-5 sm:h-5" />
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8"
              >
                {[
                  { number: "500+", label: "Centers" },
                  { number: "50K+", label: "Patients" },
                  { number: "2K+", label: "Medics" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center lg:text-left"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div
                      className={`text-lg sm:text-xl md:text-2xl font-bold text-slate-900 ${bebasNeue.className}`}
                    >
                      {stat.number}
                    </div>
                    <div
                      className={`text-xs text-slate-600 ${poppins.className}`}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 sm:mt-8"
              >
                {[
                  { icon: Zap, text: "Free Forever Plan" },
                  { icon: Star, text: "4.9/5 Rating" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-200"
                  >
                    <item.icon size={14} className="text-green-600" />
                    <span
                      className={`text-xs text-slate-700 ${poppins.className}`}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Dashboard Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mt-6 lg:mt-0 order-first lg:order-last"
            >
              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl border border-green-200 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50"></div>

                {/* Dashboard Image */}
                <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/images/dashboard screenshot.png"
                    alt="Doza Center Dashboard - Real-time healthcare management interface"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent pointer-events-none"></div>
                </div>

                {/* Live Status Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg"
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className={`text-xs font-medium ${poppins.className}`}>
                    Live Demo
                  </span>
                </motion.div>
              </motion.div>

              {/* Floating Elements - Enhanced */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-green-500 text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl hidden sm:block z-10"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <Heart
                    size={12}
                    className="sm:w-4 sm:h-4"
                    fill="currentColor"
                  />
                  <span className={`text-xs font-bold ${bebasNeue.className}`}>
                    Patients
                  </span>
                </div>
                <div className={`text-[10px] ${poppins.className}`}>
                  15% Growth
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-emerald-500 text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl hidden sm:block z-10"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <Stethoscope size={12} className="sm:w-4 sm:h-4" />
                  <span className={`text-xs font-bold ${bebasNeue.className}`}>
                    Medics
                  </span>
                </div>
                <div className={`text-[10px] ${poppins.className}`}>
                  Networked
                </div>
              </motion.div>

              {/* Bottom Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center gap-4 mt-4 sm:mt-6"
              >
                {[
                  { value: "99.9%", label: "Uptime" },
                  { value: "24/7", label: "Support" },
                  { value: "SSL", label: "Secure" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`text-sm font-bold text-slate-700 ${bebasNeue.className}`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`text-xs text-slate-500 ${poppins.className}`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-green-600"
        >
          <span className={`text-xs ${poppins.className} mb-2`}>
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-green-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
