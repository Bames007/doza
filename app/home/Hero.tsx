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
  Users,
  Activity,
  Award,
  TrendingUp,
  Smartphone,
  FileText,
  Video,
  MapPin,
} from "lucide-react";
import { bebasNeue, poppins } from "./doza_center/constant";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Refined color palette
const colors = {
  green: {
    primary: "#059669", // emerald-600
    light: "#10b981", // emerald-500
    dark: "#047857", // emerald-700
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
  },
  blue: {
    primary: "#2563eb", // blue-600
    light: "#3b82f6", // blue-500
    dark: "#1d4ed8", // blue-700
    gradient: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
  },
  purple: {
    primary: "#7c3aed", // violet-600
    light: "#8b5cf6", // violet-500
    dark: "#6d28d9", // violet-700
    gradient: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
  },
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

  if (selectedRole === null) {
    return (
      <RoleSelectionScreen
        onRoleSelect={handleRoleSelect}
        isTransitioning={isTransitioning}
      />
    );
  }

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

// ==================== ROLE SELECTION SCREEN ====================
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
        "Your personal health companion for finding care and managing wellness",
      icon: Heart,
      colorSet: colors.green,
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Find doctors & specialists",
        "Book appointments instantly",
        "Secure health records",
        "24/7 virtual support",
      ],
    },
    {
      id: "medic",
      title: "Doza Medic",
      description:
        "Empower your practice with tools to manage patients and grow your network",
      icon: Stethoscope,
      colorSet: colors.blue,
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Telehealth platform",
        "Patient management",
        "CME opportunities",
        "Professional network",
      ],
    },
    {
      id: "center",
      title: "Doza Center",
      description:
        "State‑of‑the‑art facilities equipped with advanced technology",
      icon: Building,
      colorSet: colors.green, // or could use purple
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Advanced equipment",
        "Specialized care units",
        "Comfortable patient spaces",
        "Expert staff",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Video Background with improved overlay */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      >
        <source src="/assets/video/doza-video.mp4" type="video/mp4" />
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Healthcare background"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Gradient Overlay - smoother */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/90" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto text-center"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 space-y-4"
          >
            <h1
              className={`text-5xl font-bold text-white sm:text-6xl lg:text-7xl ${bebasNeue.className}`}
            >
              Welcome to
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Doza
              </span>
            </h1>
            <p
              className={`mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl ${poppins.className}`}
            >
              Choose your experience and discover how Doza is transforming
              healthcare.
            </p>
          </motion.div>

          {/* Role Cards */}
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/20 border border-white/20 hover:border-white/30"
                onClick={() => onRoleSelect(role.id as UserRole)}
              >
                {/* Background Image with overlay */}
                <div className="absolute inset-0">
                  <img
                    src={role.image}
                    alt=""
                    className="h-full w-full object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col p-6 text-left">
                  {/* Icon */}
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                    style={{ color: role.colorSet.primary }}
                  >
                    <role.icon size={28} />
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={`mb-2 text-2xl font-bold text-white lg:text-3xl ${bebasNeue.className}`}
                  >
                    {role.title}
                  </h3>
                  <p
                    className={`mb-6 text-sm text-slate-300 ${poppins.className}`}
                  >
                    {role.description}
                  </p>

                  {/* Features */}
                  <ul className="mb-6 space-y-2">
                    {role.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-slate-300"
                      >
                        <div
                          className="mr-3 h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: role.colorSet.primary }}
                        />
                        <span className={`text-sm ${poppins.className}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto flex items-center justify-between border-t border-white/20 pt-4">
                    <span
                      className={`text-sm font-semibold ${poppins.className}`}
                      style={{ color: role.colorSet.primary }}
                    >
                      Enter experience
                    </span>
                    <ArrowRight
                      size={18}
                      style={{ color: role.colorSet.primary }}
                    />
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{
                    boxShadow: `0 0 40px ${role.colorSet.primary}40`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Combined Experience Option */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onRoleSelect(null)}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-white/20"
            >
              <Globe size={20} />
              <span className={poppins.className}>Explore all experiences</span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// ==================== PATIENT EXPERIENCE ====================
function PatientExperience({ onBack }: { onBack: () => void }) {
  const features = [
    {
      icon: Calendar,
      title: "Easy Booking",
      desc: "Book appointments in seconds with your preferred doctor",
    },
    {
      icon: Shield,
      title: "Secure Records",
      desc: "Your health data is encrypted and private",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      desc: "Round‑the‑clock assistance from our care team",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      desc: "Tailored health recommendations just for you",
    },
  ];

  return (
    <RoleExperience
      role="patient"
      onBack={onBack}
      colorSet={colors.green}
      heroTitle="Your Health,"
      heroSubtitle="Simplified"
      heroDescription="Access personalized healthcare, connect with top medical professionals, and manage your wellness journey in one place."
      features={features}
      ctaLabel="Find Care Now"
    />
  );
}

// ==================== MEDIC EXPERIENCE ====================
function MedicExperience({ onBack }: { onBack: () => void }) {
  const features = [
    {
      icon: Video,
      title: "Telehealth Tools",
      desc: "Conduct virtual visits with integrated scheduling",
    },
    {
      icon: Users,
      title: "Patient Management",
      desc: "Track patient history and treatment plans",
    },
    {
      icon: Award,
      title: "Continuing Education",
      desc: "Access CME courses and professional development",
    },
    {
      icon: TrendingUp,
      title: "Practice Growth",
      desc: "Expand your network and attract new patients",
    },
  ];

  return (
    <RoleExperience
      role="medic"
      onBack={onBack}
      colorSet={colors.blue}
      heroTitle="Grow Your"
      heroSubtitle="Practice"
      heroDescription="Join thousands of healthcare professionals using Doza to streamline their practice and provide exceptional patient care."
      features={features}
      ctaLabel="Join as Medic"
    />
  );
}

// ==================== CENTER EXPERIENCE ====================
function CenterExperience({ onBack }: { onBack: () => void }) {
  const features = [
    {
      icon: Building,
      title: "Advanced Equipment",
      desc: "State‑of‑the‑art diagnostic and treatment technology",
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      desc: "Well‑connected facilities in accessible areas",
    },
    {
      icon: Users,
      title: "Expert Staff",
      desc: "Collaborate with skilled healthcare professionals",
    },
    {
      icon: Activity,
      title: "Specialized Care",
      desc: "Dedicated units for various medical specialties",
    },
  ];

  return (
    <RoleExperience
      role="center"
      onBack={onBack}
      colorSet={colors.green}
      heroTitle="Modern Care"
      heroSubtitle="Facilities"
      heroDescription="Equip your facility with cutting‑edge technology and join our network of premium healthcare centers."
      features={features}
      ctaLabel="Partner With Us"
    />
  );
}

// ==================== REUSABLE ROLE EXPERIENCE LAYOUT ====================
function RoleExperience({
  role,
  onBack,
  colorSet,
  heroTitle,
  heroSubtitle,
  heroDescription,
  features,
  ctaLabel,
}: {
  role: string;
  onBack: () => void;
  colorSet: typeof colors.green;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  features: { icon: any; title: string; desc: string }[];
  ctaLabel: string;
}) {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="fixed left-4 top-4 z-50 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-slate-700 shadow-lg backdrop-blur-sm transition-all hover:bg-white border border-slate-200 md:left-6 md:top-6"
      >
        <ChevronLeft size={18} />
        <span className={`text-sm ${poppins.className}`}>Back</span>
      </motion.button>

      {/* Hero Section */}
      <section
        className={`relative min-h-screen ${colorSet.bg} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0">
          <img
            src={`https://images.unsplash.com/photo-${
              role === "patient"
                ? "1576091160399-112ba8d25d1f"
                : role === "medic"
                  ? "1551601651-2a8555f1a136"
                  : "1519494026892-80bbd2d6fd0d"
            }?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80`}
            alt=""
            className="h-full w-full object-cover opacity-10"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-5xl font-bold text-slate-900 sm:text-6xl lg:text-7xl ${bebasNeue.className}`}
          >
            {heroTitle}
            <span
              className={`block bg-gradient-to-r ${colorSet.gradient} bg-clip-text text-transparent`}
            >
              {heroSubtitle}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl ${poppins.className}`}
          >
            {heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-lg px-8 py-4 text-white transition-all hover:shadow-xl"
              style={{ backgroundColor: colorSet.primary }}
            >
              <span className={poppins.className}>{ctaLabel}</span>
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border-2 px-8 py-4 transition-all hover:shadow-lg"
              style={{
                borderColor: colorSet.primary,
                color: colorSet.primary,
                backgroundColor: "white",
              }}
            >
              <span className={poppins.className}>Learn More</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-4xl font-bold text-center text-slate-900 sm:text-5xl ${bebasNeue.className}`}
          >
            Everything you need
          </motion.h2>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-slate-50 p-6 text-center transition-all hover:shadow-lg border border-slate-200"
              >
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${colorSet.primary}15` }}
                >
                  <feature.icon size={28} style={{ color: colorSet.primary }} />
                </div>
                <h3
                  className={`mb-2 text-xl font-bold text-slate-800 ${bebasNeue.className}`}
                >
                  {feature.title}
                </h3>
                <p className={`text-sm text-slate-600 ${poppins.className}`}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional CTA Section */}
      <section className={`py-20 ${colorSet.bg}`}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl font-bold text-slate-900 sm:text-5xl ${bebasNeue.className}`}
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className={`mt-4 text-lg text-slate-600 ${poppins.className}`}
          >
            Join thousands of satisfied users who have transformed their
            healthcare experience with Doza.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 rounded-lg px-8 py-4 text-white transition-all hover:shadow-xl"
            style={{ backgroundColor: colorSet.primary }}
          >
            <span className={poppins.className}>{ctaLabel}</span>
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
