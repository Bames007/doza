"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Stethoscope,
  Heart,
  Shield,
  Clock,
  Globe,
  Calendar,
  Building,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";
import { bebasNeue, poppins } from "./doza_center/constant";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom colors - Updated to green theme
const colors = {
  green: { primary: "#239C3E", light: "#4CAF50", dark: "#1B7930" },
  blue: { primary: "#1D4ED8", light: "#3B82F6", dark: "#1E40AF" },
  purple: { primary: "#8B5CF6", light: "#A78BFA", dark: "#7C3AED" },
};

type UserRole = "patient" | "medic" | "center" | null;

export default function DozaRoleBasedExperience() {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleRoleSelect = (role: UserRole) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedRole(role);
      setIsTransitioning(false);
    }, 600);
  };

  const handleBackToSelection = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedRole(null);
      setIsTransitioning(false);
    }, 600);
  };

  // Role selection screen
  if (selectedRole === null) {
    return (
      <RoleSelectionScreen
        onRoleSelect={handleRoleSelect}
        isTransitioning={isTransitioning}
      />
    );
  }

  // Role-specific experiences
  return (
    <AnimatePresence mode="wait">
      {!isTransitioning && (
        <motion.div
          key={selectedRole}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen"
        >
          {selectedRole === "patient" && (
            <PatientExperience onBack={handleBackToSelection} />
          )}
          {selectedRole === "medic" && (
            <MedicExperience onBack={handleBackToSelection} />
          )}
          {selectedRole === "center" && (
            <CenterExperience onBack={handleBackToSelection} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Role Selection Screen Component - Mobile Optimized
function RoleSelectionScreen({
  onRoleSelect,
  isTransitioning,
}: {
  onRoleSelect: (role: UserRole) => void;
  isTransitioning: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const roles = [
    {
      id: "patient",
      title: "Doza Patient",
      description:
        "Find care, manage health, and connect with medical professionals",
      icon: Heart,
      color: "green",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Find Doctors",
        "Book Appointments",
        "Health Records",
        "24/7 Support",
      ],
    },
    {
      id: "medic",
      title: "Doza Medic",
      description:
        "Join our network of healthcare professionals and grow your practice",
      icon: Stethoscope,
      color: "blue",
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Telehealth Tools",
        "Patient Management",
        "Continuing Education",
        "Professional Network",
      ],
    },
    {
      id: "center",
      title: "Doza Center",
      description:
        "Modern healthcare facilities with advanced technology and expert teams",
      icon: Building,
      color: "green",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Advanced Equipment",
        "Specialized Care",
        "Comfortable Spaces",
        "Expert Staff",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      >
        <source src="/assets/video/doza-video.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Healthcare background"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `linear-gradient(135deg, ${colors.green.primary}15 0%, ${colors.blue.primary}10 50%, ${colors.green.dark}15 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center w-full"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 ${bebasNeue.className}`}
            >
              Welcome to
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mt-2">
                Doza
              </span>
            </h1>
            <p
              className={`text-lg sm:text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed ${poppins.className} px-2`}
            >
              Choose your experience to discover how Doza is transforming
              healthcare
            </p>
          </motion.div>

          {/* Role Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                whileHover={{
                  y: window.innerWidth >= 768 ? -8 : 0,
                  scale: window.innerWidth >= 768 ? 1.02 : 1,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
                onClick={() => onRoleSelect(role.id as UserRole)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-15 group-hover:opacity-20 transition-opacity duration-500">
                  <img
                    src={role.image}
                    alt={role.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-4 sm:p-6 h-64 sm:h-80 flex flex-col justify-between">
                  <div>
                    {/* Icon */}
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundColor: `${colors.green.primary}25`,
                        border: `2px solid ${colors.green.primary}40`,
                      }}
                    >
                      <role.icon
                        size={24}
                        className="sm:w-7 sm:h-7"
                        style={{
                          color: colors.green.primary,
                        }}
                      />
                    </div>

                    {/* Title & Description */}
                    <h3
                      className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4 ${bebasNeue.className}`}
                    >
                      {role.title}
                    </h3>
                    <p
                      className={`text-slate-200 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base ${poppins.className}`}
                    >
                      {role.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-1 sm:space-y-2">
                      {role.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-slate-300 text-xs sm:text-sm"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full mr-2 sm:mr-3 flex-shrink-0"
                            style={{
                              backgroundColor: colors.green.primary,
                            }}
                          />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.div
                    whileHover={{ x: window.innerWidth >= 768 ? 5 : 0 }}
                    className="flex items-center justify-between pt-4 sm:pt-6 border-t border-white/20 mt-2"
                  >
                    <span
                      className="font-semibold text-sm sm:text-base"
                      style={{
                        color: colors.green.primary,
                      }}
                    >
                      Enter Experience
                    </span>
                    <ArrowRight
                      size={16}
                      className="sm:w-5 sm:h-5"
                      style={{
                        color: colors.green.primary,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 0 60px ${colors.green.primary}30`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Combined Experience Option */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 sm:mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onRoleSelect(null)}
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group w-full sm:w-auto"
            >
              <span
                className={`flex items-center gap-2 sm:gap-3 justify-center text-sm sm:text-base ${poppins.className}`}
              >
                <Globe size={18} className="sm:w-5 sm:h-5" />
                Explore All Experiences
                <ArrowRight
                  size={16}
                  className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Patient Experience Component - Mobile Optimized
function PatientExperience({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Back Button - Mobile Optimized */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 text-slate-700 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200"
      >
        <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
        <span className={`text-sm ${poppins.className}`}>Back</span>
      </motion.button>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-16 sm:pt-0">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Patient Care"
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 ${bebasNeue.className}`}
            >
              Your Health,
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mt-2">
                Simplified
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed ${poppins.className} px-2`}
            >
              Access personalized healthcare, connect with top medical
              professionals, and manage your wellness journey in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
                style={{ backgroundColor: colors.green.primary }}
              >
                Find Care Now
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base border-2 transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: colors.green.primary,
                  color: colors.green.primary,
                  backgroundColor: "white",
                }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patient Features */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-center mb-8 sm:mb-12 ${bebasNeue.className}`}
          >
            Why Choose Doza?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Calendar,
                title: "Easy Booking",
                desc: "Book appointments in seconds",
              },
              {
                icon: Shield,
                title: "Secure Records",
                desc: "Your health data protected",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                desc: "Always here when you need us",
              },
              {
                icon: Heart,
                title: "Personalized Care",
                desc: "Tailored to your needs",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 border border-slate-200"
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${colors.green.primary}15` }}
                >
                  <feature.icon
                    style={{ color: colors.green.primary }}
                    size={20}
                    className="sm:w-6 sm:h-6"
                  />
                </div>
                <h3
                  className={`text-lg sm:text-xl font-bold text-slate-800 mb-2 ${bebasNeue.className}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-slate-600 text-sm sm:text-base ${poppins.className}`}
                >
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Medic Experience Component - Mobile Optimized
function MedicExperience({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 text-slate-700 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200"
      >
        <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
        <span className={`text-sm ${poppins.className}`}>Back</span>
      </motion.button>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 pt-16 sm:pt-0">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Medical Professional"
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 ${bebasNeue.className}`}
            >
              Grow Your
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mt-2">
                Practice
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed ${poppins.className} px-2`}
            >
              Join thousands of healthcare professionals using Doza to
              streamline their practice and provide exceptional patient care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
                style={{ backgroundColor: colors.blue.primary }}
              >
                Join as Medic
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base border-2 transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: colors.green.primary,
                  color: colors.green.primary,
                  backgroundColor: "white",
                }}
              >
                View Benefits
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Center Experience Component - Mobile Optimized
function CenterExperience({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 text-slate-700 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200"
      >
        <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
        <span className={`text-sm ${poppins.className}`}>Back</span>
      </motion.button>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-16 sm:pt-0">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Medical Center"
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 ${bebasNeue.className}`}
            >
              Modern Care
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mt-2">
                Facilities
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed ${poppins.className} px-2`}
            >
              Equip your facility with cutting-edge technology and join our
              network of premium healthcare centers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
                style={{ backgroundColor: colors.green.primary }}
              >
                Partner With Us
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base border-2 transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: colors.green.dark,
                  color: colors.green.dark,
                  backgroundColor: "white",
                }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
