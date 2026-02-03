"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Video,
  Phone,
  MapPin,
  Pill,
  TrendingUp,
  Star,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import Image from "next/image";

const colors = {
  green: { primary: "#239C3E", light: "#4CAF50", dark: "#1B7930" },
  blue: { primary: "#1D4ED8", light: "#3B82F6", dark: "#1E40AF" },
  purple: { primary: "#8B5CF6", light: "#A78BFA", dark: "#7C3AED" },
};

export default function PatientHero() {
  return (
    <section className="mt-0 relative min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-5 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute top-60 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <HeroContent />

          {/* Right Side - Mobile Screenshot with Animation */}
          <MobileScreenshot />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

function HeroContent() {
  return (
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
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-green-100 text-green-800"
      >
        <Heart size={16} />
        <span className={`text-sm font-medium ${poppins.className}`}>
          Your Health Revolution Starts Here
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight ${bebasNeue.className}`}
      >
        Healthcare That
        <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Actually Cares
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed ${poppins.className}`}
      >
        Doza puts you in control of your health journey. Access verified
        doctors, manage medications, track vital signs, and get emergency
        care—all in one intelligent platform designed around your life.
      </motion.p>

      <CTAButtons />
      <TrustIndicators />
    </motion.div>
  );
}

function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
    >
      <button
        className="px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 justify-center"
        style={{ backgroundColor: colors.green.primary }}
      >
        <Video size={20} />
        Start Free Trial
      </button>
      <button className="px-8 py-4 rounded-xl font-semibold text-lg bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300 hover:scale-105 flex items-center gap-3 justify-center">
        <Phone size={20} />
        Watch Demo
      </button>
    </motion.div>
  );
}

function TrustIndicators() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="mt-8 flex flex-col sm:flex-row items-center gap-6 text-slate-500"
    >
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"
            ></div>
          ))}
        </div>
        <span className={`text-sm ${poppins.className}`}>
          Join 500,000+ patients
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Star className="w-4 h-4 text-yellow-400 fill-current" />
        <span className={`text-sm ${poppins.className}`}>4.9/5 Rating</span>
      </div>
    </motion.div>
  );
}

function MobileScreenshot() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative flex justify-center items-center"
    >
      {/* Phone Frame */}
      <div className="relative bg-slate-900 rounded-[40px] p-4 shadow-2xl mx-auto">
        {/* Screen Content */}
        <div className="bg-white rounded-[32px] overflow-hidden relative">
          <Image
            alt="Doza Mobile App"
            src={"/assets/images/doza mobile.jpg"}
            width={300}
            height={600}
            className="w-full h-auto object-cover rounded-[32px]"
          />
        </div>
      </div>

      {/* Floating Elements Around the Phone */}
      <FloatingElement
        position="top"
        icon={MapPin}
        text="3 clinics nearby"
        color="green"
      />
      <FloatingElement
        position="bottom"
        icon={TrendingUp}
        text="Health score: 92%"
        color="blue"
      />
      <FloatingElement
        position="left"
        icon={Video}
        text="Video Consult"
        color="purple"
      />
      <FloatingElement
        position="right"
        icon={Pill}
        text="Medication Tracker"
        color="green"
      />
    </motion.div>
  );
}

function FloatingElement({
  position,
  icon: Icon,
  text,
  color,
}: {
  position: "top" | "bottom" | "left" | "right";
  icon: React.ComponentType<any>;
  text: string;
  color: keyof typeof colors;
}) {
  const positionClasses = {
    top: "-top-4 -right-4",
    bottom: "-bottom-4 -left-4",
    left: "-left-4 top-1/4",
    right: "-right-4 top-1/4",
  };

  return (
    <motion.div
      animate={{
        y:
          position === "top"
            ? [0, -10, 0]
            : position === "bottom"
            ? [0, 10, 0]
            : [0, 0, 0],
        x:
          position === "left"
            ? [0, -10, 0]
            : position === "right"
            ? [0, 10, 0]
            : [0, 0, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: position === "bottom" || position === "right" ? 1 : 0,
      }}
      className={`absolute ${positionClasses[position]} bg-white rounded-2xl p-3 shadow-lg border border-slate-200 z-20`}
    >
      <div className="flex items-center gap-2">
        <Icon size={16} style={{ color: colors[color].primary }} />
        <span
          className={`text-xs font-bold text-gray-400 ${poppins.className}`}
        >
          {text}
        </span>
      </div>
    </motion.div>
  );
}
