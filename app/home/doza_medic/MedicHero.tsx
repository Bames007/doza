"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Users,
  Shield,
  Zap,
  Award,
  Calendar,
  DollarSign,
  TrendingUp,
  Globe,
  Building,
  Heart,
  Star,
  ArrowRight,
  PlayCircle,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";

const colors = {
  green: { primary: "#239C3E", light: "#4CAF50", dark: "#1B7930" },
  blue: { primary: "#1D4ED8", light: "#3B82F6", dark: "#1E40AF" },
  purple: { primary: "#8B5CF6", light: "#A78BFA", dark: "#7C3AED" },
};

export default function MedicHero({ onBack }: { onBack: () => void }) {
  const medicBenefits = [
    {
      icon: DollarSign,
      title: "Increased Earnings",
      description:
        "Average 40% revenue growth through our platform with optimized scheduling and reduced overhead",
      stat: "+40% Revenue",
    },
    {
      icon: Users,
      title: "Expanded Patient Base",
      description:
        "Access to thousands of pre-verified patients actively seeking quality healthcare providers",
      stat: "500K+ Patients",
    },
    {
      icon: Zap,
      title: "Streamlined Practice",
      description:
        "Reduce administrative work by 60% with our AI-powered practice management tools",
      stat: "60% Time Saved",
    },
    {
      icon: Globe,
      title: "Telehealth Reach",
      description:
        "Extend your practice beyond geographical limits with our seamless virtual care platform",
      stat: "Unlimited Reach",
    },
  ];

  const platformFeatures = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "AI-optimized appointment booking that maximizes your time and reduces no-shows",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description:
        "HIPAA-compliant environment with encrypted communications and secure data storage",
    },
    {
      icon: Award,
      title: "Continuing Education",
      description:
        "Access to accredited courses and certifications to advance your career",
    },
    {
      icon: TrendingUp,
      title: "Practice Analytics",
      description:
        "Real-time insights into your practice performance and patient satisfaction metrics",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20 pb-16 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-4 w-48 h-48 md:w-72 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-4 w-48 h-48 md:w-72 md:h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-100 border border-blue-200 mb-6 md:mb-8"
              >
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span
                  className={`text-blue-700 font-medium text-sm md:text-base ${poppins.className}`}
                >
                  For Healthcare Professionals
                </span>
              </motion.div>

              {/* Main Heading */}
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight ${bebasNeue.className}`}
              >
                Elevate Your
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Medical Practice
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className={`text-base sm:text-lg md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed ${poppins.className}`}
              >
                Join <strong>10,000+</strong> medical professionals who have
                transformed their practice with Doza's integrated healthcare
                ecosystem. Grow your patient base, streamline operations, and
                focus on what you do best—providing exceptional care.
              </p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12"
              >
                <button
                  className="group px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl md:hover:shadow-2xl flex items-center justify-center gap-2 md:gap-3"
                  style={{
                    background: `linear-gradient(135deg, ${colors.blue.primary}, ${colors.green.primary})`,
                  }}
                >
                  <Stethoscope size={20} className="md:w-6 md:h-6" />
                  Join Doza Medics
                  <ArrowRight
                    size={16}
                    className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button className="group px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 md:gap-3">
                  <PlayCircle size={20} className="md:w-6 md:h-6" />
                  Watch Demo
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 md:gap-8 items-center">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex -space-x-2 md:-space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <div>
                    <div
                      className={`font-bold text-slate-900 text-sm md:text-base ${poppins.className}`}
                    >
                      10,000+
                    </div>
                    <div
                      className={`text-xs md:text-sm text-slate-500 ${poppins.className}`}
                    >
                      Verified Medics
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={16}
                        className="md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div>
                    <div
                      className={`font-bold text-slate-900 text-sm md:text-base ${poppins.className}`}
                    >
                      4.9/5
                    </div>
                    <div
                      className={`text-xs md:text-sm text-slate-500 ${poppins.className}`}
                    >
                      Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 md:mt-0"
            >
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl p-4 md:p-6 lg:p-8 border border-slate-200">
                <h3
                  className={`text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6 ${bebasNeue.className}`}
                >
                  Practice Growth Metrics
                </h3>

                <div className="space-y-4 md:space-y-6">
                  {medicBenefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300 group"
                    >
                      <div
                        className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${colors.blue.primary}15` }}
                      >
                        <benefit.icon
                          size={20}
                          className="md:w-6 md:h-6"
                          style={{ color: colors.blue.primary }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`font-semibold text-slate-900 mb-1 text-sm md:text-base ${poppins.className}`}
                        >
                          {benefit.title}
                        </h4>
                        <p
                          className={`text-slate-600 text-xs md:text-sm ${poppins.className}`}
                        >
                          {benefit.description}
                        </p>
                      </div>
                      <div className="px-2 py-1 md:px-3 md:py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs md:text-sm whitespace-nowrap flex-shrink-0">
                        {benefit.stat}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 ${bebasNeue.className}`}
            >
              Everything You Need to
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p
              className={`text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
            >
              Our comprehensive platform is designed specifically for healthcare
              professionals, combining powerful tools with seamless integration
              into your existing workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white to-blue-50 hover:from-blue-50 hover:to-white transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 border border-slate-200 hover:border-blue-200 hover:shadow-lg md:hover:shadow-xl"
              >
                <div
                  className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-md md:group-hover:scale-110 md:group-hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${colors.blue.primary}, ${colors.green.primary})`,
                    boxShadow: `0 8px 20px ${colors.blue.primary}30`,
                  }}
                >
                  <feature.icon
                    size={24}
                    className="md:w-8 md:h-8 text-white"
                  />
                </div>
                <h3
                  className={`text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-2 md:mb-4 ${bebasNeue.className}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-slate-600 leading-relaxed text-sm md:text-base ${poppins.className}`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Integration Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Medic Focus - 70% */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-4 md:p-6 lg:p-8 border border-blue-200">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Stethoscope
                      size={20}
                      className="md:w-6 md:h-6 text-white"
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-2xl md:text-3xl font-bold text-slate-900 ${bebasNeue.className}`}
                    >
                      Doza Medics Advantage
                    </h3>
                    <p
                      className={`text-blue-600 font-medium text-sm md:text-base ${poppins.className}`}
                    >
                      Your success is our priority
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                  {[
                    "AI-powered patient matching",
                    "Automated billing & insurance",
                    "Telehealth infrastructure",
                    "Continuing education credits",
                    "Malpractice insurance partners",
                    "Research collaboration opportunities",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 md:gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span
                        className={`text-slate-700 text-sm md:text-base ${poppins.className}`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200">
                  <h4
                    className={`text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 ${bebasNeue.className}`}
                  >
                    Join the Elite Network
                  </h4>
                  <p
                    className={`text-slate-600 mb-3 md:mb-4 text-sm md:text-base ${poppins.className}`}
                  >
                    Top-performing medics on Doza see an average of 40% practice
                    growth within the first year, with access to premium
                    patients and cutting-edge medical centers.
                  </p>
                  <button
                    className="px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 text-sm md:text-base"
                    style={{ background: colors.blue.primary }}
                  >
                    Apply Now - Limited Spots
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Patient & Center Integration - 30% */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6 lg:space-y-8"
            >
              {/* Patients Card */}
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-4 md:p-6 border border-green-200">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Heart size={16} className="md:w-5 md:h-5 text-white" />
                  </div>
                  <h4
                    className={`text-xl md:text-2xl font-bold text-slate-900 ${bebasNeue.className}`}
                  >
                    Quality Patients
                  </h4>
                </div>
                <p
                  className={`text-slate-600 mb-3 md:mb-4 text-sm md:text-base ${poppins.className}`}
                >
                  Access our network of 500,000+ verified patients who value
                  quality care and are ready to book appointments.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs md:text-sm">
                  <span className="text-green-600 font-semibold">
                    ✓ Pre-screened
                  </span>
                  <span className="text-green-600 font-semibold">
                    ✓ Insurance verified
                  </span>
                </div>
              </div>

              {/* Centers Card */}
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-4 md:p-6 border border-purple-200">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <Building size={16} className="md:w-5 md:h-5 text-white" />
                  </div>
                  <h4
                    className={`text-xl md:text-2xl font-bold text-slate-900 ${bebasNeue.className}`}
                  >
                    Premium Centers
                  </h4>
                </div>
                <p
                  className={`text-slate-600 mb-3 md:mb-4 text-sm md:text-base ${poppins.className}`}
                >
                  Partner with 200+ state-of-the-art medical facilities equipped
                  with the latest technology and support staff.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs md:text-sm">
                  <span className="text-purple-600 font-semibold">
                    ✓ Advanced equipment
                  </span>
                  <span className="text-purple-600 font-semibold">
                    ✓ Professional staff
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 ${bebasNeue.className}`}
            >
              Ready to Transform
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Your Practice?
              </span>
            </h2>
            <p
              className={`text-base md:text-xl text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed ${poppins.className}`}
            >
              Join the medical professionals who are already experiencing
              unprecedented growth and satisfaction with Doza.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <button
                className="group px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl md:hover:shadow-2xl flex items-center justify-center gap-2 md:gap-3"
                style={{
                  background: `linear-gradient(135deg, ${colors.blue.primary}, ${colors.green.primary})`,
                }}
              >
                Start Your Application
                <ArrowRight
                  size={16}
                  className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105">
                Schedule Consultation
              </button>
            </div>
            <p
              className={`text-slate-400 mt-4 md:mt-6 text-sm md:text-base ${poppins.className}`}
            >
              Application review within 48 hours • No upfront costs
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
