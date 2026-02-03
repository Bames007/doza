"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Stethoscope,
  Users,
  Heart,
  Shield,
  Globe,
  Award,
  Calendar,
  UserCheck,
  Building,
  Zap,
  Pill,
  Play,
  X,
  ArrowRight,
  Video,
  Brain,
  Microscope,
  Activity,
  Eye,
  Target,
  Rocket,
} from "lucide-react";
import { bebasNeue, poppins } from "./doza_center/constant";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type UserRole = "patient" | "medic" | "center" | null;

interface DozaRoleBasedExperienceProps {
  onRoleSelect: (role: UserRole) => void;
  showBackButton?: boolean;
  onBack?: () => void;
}

export default function DozaRoleBasedExperience({
  onRoleSelect,
  showBackButton = false,
  onBack,
}: DozaRoleBasedExperienceProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitioningTo, setTransitioningTo] = useState<UserRole>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleRoleSelect = (role: UserRole) => {
    setTransitioningTo(role);
    setIsTransitioning(true);
    setTimeout(() => {
      onRoleSelect(role);
      setIsTransitioning(false);
      setTransitioningTo(null);
    }, 1200);
  };

  const openVideoModal = () => {
    setVideoModalOpen(true);
    // Auto-play when modal opens
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(console.log);
      }
    }, 300);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const experiences = [
    {
      id: "patient",
      title: "Doza Patient",
      tagline: "Your Health, Revolutionized",
      description:
        "Experience personalized healthcare with AI-powered diagnostics and 24/7 medical support designed around your needs.",
      icon: Heart,
      color: "emerald",
      video: "/assets/video/doza-video.mp4",
      poster:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      perks: [
        {
          icon: UserCheck,
          text: "AI Health Assessment",
          description: "Smart diagnostics powered by advanced algorithms",
        },
        {
          icon: Calendar,
          text: "Instant Appointments",
          description: "Book with top specialists in seconds",
        },
        {
          icon: Shield,
          text: "Health Monitoring",
          description: "24/7 tracking with real-time alerts",
        },
        {
          icon: Pill,
          text: "Digital Pharmacy",
          description: "Prescriptions delivered to your door",
        },
      ],
      stats: [
        { value: "50K+", label: "Patients Served" },
        { value: "99.7%", label: "Satisfaction Rate" },
        { value: "<30min", label: "Avg. Wait Time" },
      ],
    },
    {
      id: "medic",
      title: "Doza Medic",
      tagline: "Practice Elevated",
      description:
        "Join a network of elite medical professionals with cutting-edge tools, AI assistance, and seamless patient management.",
      icon: Stethoscope,
      color: "blue",
      video: "/assets/video/doza-video.mp4",
      poster:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      perks: [
        {
          icon: Brain,
          text: "AI Diagnostics",
          description: "Advanced diagnostic support and insights",
        },
        {
          icon: Activity,
          text: "Patient Analytics",
          description: "Comprehensive health data visualization",
        },
        {
          icon: Zap,
          text: "Efficient Workflow",
          description: "Streamlined patient management system",
        },
        {
          icon: Globe,
          text: "Global Network",
          description: "Connect with medical professionals worldwide",
        },
      ],
      stats: [
        { value: "2.5K+", label: "Medical Experts" },
        { value: "40%", label: "Time Saved" },
        { value: "95%", label: "Accuracy Boost" },
      ],
    },
    {
      id: "center",
      title: "Doza Center",
      tagline: "Healthcare Perfected",
      description:
        "State-of-the-art medical facilities equipped with the latest technology and staffed by world-class professionals.",
      icon: Building,
      color: "purple",
      video: "/assets/video/doza-video.mp4",
      poster:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      perks: [
        {
          icon: Microscope,
          text: "Advanced Equipment",
          description: "Latest medical technology and devices",
        },
        {
          icon: Award,
          text: "Certified Excellence",
          description: "Internationally accredited facilities",
        },
        {
          icon: Rocket,
          text: "Modern Design",
          description: "Healing-focused architecture and spaces",
        },
        {
          icon: Users,
          text: "Expert Teams",
          description: "Multidisciplinary specialist teams",
        },
      ],
      stats: [
        { value: "25+", label: "Locations" },
        { value: "24/7", label: "Operations" },
        { value: "99.9%", label: "Uptime" },
      ],
    },
  ];

  const colorMap = {
    emerald: {
      primary: "#10b981",
      light: "#34d399",
      dark: "#059669",
      gradient: "from-emerald-500 to-green-500",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      glow: "0 0 80px rgba(16, 185, 129, 0.15)",
    },
    blue: {
      primary: "#3b82f6",
      light: "#60a5fa",
      dark: "#2563eb",
      gradient: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      glow: "0 0 80px rgba(59, 130, 246, 0.15)",
    },
    purple: {
      primary: "#8b5cf6",
      light: "#a78bfa",
      dark: "#7c3aed",
      gradient: "from-purple-500 to-indigo-500",
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
      glow: "0 0 80px rgba(139, 92, 246, 0.15)",
    },
  };

  // Get experience details for transition screen
  const getExperienceDetails = (role: UserRole) => {
    return experiences.find((exp) => exp.id === role) || experiences[0];
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50"
      ref={sectionRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Gradient Mesh */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Particles */}
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => {
            // Use deterministic positions based on index
            const positions = [
              { left: "10%", top: "20%" },
              { left: "20%", top: "80%" },
              { left: "30%", top: "40%" },
              { left: "40%", top: "60%" },
              { left: "50%", top: "10%" },
              { left: "60%", top: "90%" },
              { left: "70%", top: "30%" },
              { left: "80%", top: "70%" },
              { left: "90%", top: "50%" },
              { left: "15%", top: "65%" },
              { left: "25%", top: "25%" },
              { left: "35%", top: "85%" },
            ];

            const pos = positions[i] || positions[0];

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-slate-300/40 rounded-full"
                animate={{
                  y: [0, -80, 0],
                  x: [0, Math.sin(i) * 30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 4 + (i % 3) * 2, // Deterministic duration
                  repeat: Infinity,
                  delay: (i % 4) * 0.5, // Deterministic delay
                }}
                style={pos}
              />
            );
          })}
        </div>
      </div>

      {/* Back Button */}
      {showBackButton && onBack && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="fixed top-8 left-8 z-50 flex items-center gap-3 rounded-2xl bg-white/80 backdrop-blur-xl px-6 py-4 text-slate-700 hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl border border-slate-200/60"
        >
          <X size={20} />
          <span className={`font-semibold ${poppins.className}`}>
            Back to Home
          </span>
        </motion.button>
      )}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-lg"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span
                  className={`text-sm font-semibold text-slate-700 ${poppins.className}`}
                >
                  TRANSFORMING HEALTHCARE
                </span>
              </motion.div>

              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className={`text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[0.9] ${bebasNeue.className}`}
                >
                  <span className="block">Welcome</span>
                  <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    To Doza
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-4"
                >
                  <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                  <p
                    className={`text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl ${poppins.className}`}
                  >
                    Discover how Doza is revolutionizing healthcare through
                    AI-powered solutions, cutting-edge technology, and
                    compassionate care for everyone.
                  </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex items-center gap-8 pt-6"
                >
                  {[
                    { value: "50K+", label: "Patients" },
                    { value: "2.5K+", label: "Doctors" },
                    { value: "25+", label: "Centers" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div
                        className={`text-3xl font-bold text-slate-900 ${bebasNeue.className}`}
                      >
                        {stat.value}
                      </div>
                      <div
                        className={`text-sm text-slate-500 ${poppins.className}`}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-square max-w-md mx-auto bg-gradient-to-br from-white to-slate-100 shadow-2xl border border-slate-200/60">
                {/* Animated Gradient Orb */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl"></div>

                {/* Central Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: { duration: 4, repeat: Infinity },
                    }}
                    className="w-48 h-48 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5 rounded-full backdrop-blur-sm border border-slate-200/40 flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                      onClick={openVideoModal}
                    >
                      <Play size={40} className="text-white ml-2" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Floating Icons */}
                {[Eye, Target, Rocket].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 flex items-center justify-center shadow-lg"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, Math.sin(index) * 10, 0],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    style={{
                      top: `${20 + index * 25}%`,
                      left: index === 0 ? "10%" : index === 1 ? "70%" : "40%",
                    }}
                  >
                    <Icon size={24} className="text-slate-700" />
                  </motion.div>
                ))}
              </div>

              {/* Play Video Text */}
              <motion.button
                onClick={openVideoModal}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/60 text-slate-700 hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-lg"
              >
                <Video size={20} />
                <span className={`font-semibold ${poppins.className}`}>
                  Watch Overview
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((experience, index) => {
            const colors = colorMap[experience.color as keyof typeof colorMap];

            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -12, scale: 1.02 }}
                onHoverStart={() => setHoveredCard(experience.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-slate-200/80"
                style={{
                  boxShadow:
                    hoveredCard === experience.id
                      ? colors.glow
                      : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Header Section */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={experience.poster}
                    alt={experience.title}
                    height={400}
                    width={320}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent"></div>

                  {/* Play Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={openVideoModal}
                    className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/60 flex items-center justify-center shadow-2xl hover:bg-white transition-all duration-300"
                  >
                    <Play size={24} className="text-slate-700 ml-1" />
                  </motion.button>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-2xl`}
                      >
                        <experience.icon size={28} className="text-white" />
                      </div>
                      <div>
                        <h3
                          className={`text-3xl font-bold text-white ${bebasNeue.className}`}
                        >
                          {experience.title}
                        </h3>
                        <p
                          className={`text-white/90 font-semibold ${poppins.className}`}
                        >
                          {experience.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <p
                    className={`text-slate-600 leading-relaxed mb-6 ${poppins.className}`}
                  >
                    {experience.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60">
                    {experience.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div
                          className={`text-2xl font-bold text-slate-900 ${bebasNeue.className}`}
                        >
                          {stat.value}
                        </div>
                        <div
                          className={`text-xs text-slate-500 font-medium ${poppins.className}`}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Perks */}
                  <div className="space-y-4 mb-8">
                    {experience.perks.map((perk, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + idx * 0.1,
                        }}
                        className="flex items-start gap-4 group/perk"
                      >
                        <div
                          className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0 group-hover/perk:scale-110 transition-transform duration-300`}
                        >
                          <perk.icon size={20} className={colors.text} />
                        </div>
                        <div>
                          <h4
                            className={`font-semibold text-slate-800 mb-1 ${poppins.className}`}
                          >
                            {perk.text}
                          </h4>
                          <p
                            className={`text-slate-500 text-sm ${poppins.className}`}
                          >
                            {perk.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleRoleSelect(experience.id as UserRole)}
                    className={`w-full py-4 px-6 rounded-2xl bg-gradient-to-r ${colors.gradient} text-white font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 group/cta`}
                  >
                    <span>Enter {experience.title}</span>
                    <ArrowRight
                      size={20}
                      className="group-hover/cta:translate-x-1 transition-transform"
                    />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Combined Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 text-slate-500">
              <div className="w-8 h-px bg-slate-300"></div>
              <span className={`text-sm font-semibold ${poppins.className}`}>
                OR EXPLORE ALL
              </span>
              <div className="w-8 h-px bg-slate-300"></div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onRoleSelect(null)}
              className="px-12 py-4 rounded-2xl bg-white border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span
                className={`flex items-center gap-3 font-semibold ${poppins.className}`}
              >
                <Globe size={20} />
                Discover Complete Platform
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-xl bg-white/90"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-200/80"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                playsInline
              >
                <source src="/assets/video/doza-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeVideoModal}
                className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/60 flex items-center justify-center text-slate-700 hover:bg-white transition-all duration-300 shadow-lg"
              >
                <X size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Transition Overlay - CenterHeader Style with Doza Logo */}
      <AnimatePresence>
        {isTransitioning && transitioningTo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          >
            <div className="text-center max-w-md mx-auto px-6">
              {/* Doza Logo and Title */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                {(() => {
                  const experience = getExperienceDetails(transitioningTo);
                  const colors =
                    colorMap[experience.color as keyof typeof colorMap];

                  return (
                    <div className="flex flex-col items-center gap-6">
                      {/* Doza Logo with Gradient Background */}
                      <div
                        className={`w-24 h-24 rounded-3xl bg-white flex items-center justify-center shadow-2xl p-4`}
                      >
                        <Image
                          src="/logo.png"
                          alt="Doza Logo"
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div>
                        <h2
                          className={`text-4xl font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
                        >
                          {experience.title}
                        </h2>
                        <p
                          className={`text-slate-600 text-lg ${poppins.className}`}
                        >
                          {experience.tagline}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>

              {/* Loading Bar */}
              <div className="mb-8">
                <div className="w-64 h-2 bg-slate-200 rounded-full overflow-hidden mx-auto">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                  />
                </div>
              </div>

              {/* Loading Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <p className={`text-slate-600 text-lg ${poppins.className}`}>
                  Preparing your experience...
                </p>

                {/* Loading Dots */}
                <div className="flex justify-center gap-2">
                  {[0, 1, 2].map((index) => (
                    <motion.div
                      key={index}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="w-2 h-2 bg-slate-400 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Subtle Background Animation */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  background: `linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6)`,
                  backgroundSize: "200% 200%",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { DozaRoleBasedExperience };
