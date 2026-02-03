"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Video,
  FileText,
  BarChart3,
  MessageSquare,
  Shield,
  Users,
  Zap,
  DollarSign,
  Award,
  Globe,
  Smartphone,
  Cloud,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";

export default function MedicFeatures() {
  const mainFeatures = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "AI-powered appointment booking that optimizes your calendar and reduces no-shows by 40%",
      features: [
        "Automated reminders",
        "Waitlist management",
        "Recurring appointments",
        "Calendar sync",
      ],
    },
    {
      icon: Video,
      title: "Telehealth Platform",
      description:
        "Full-featured virtual care platform with secure video, chat, and file sharing capabilities",
      features: [
        "HD video calls",
        "Screen sharing",
        "Secure messaging",
        "Virtual waiting room",
      ],
    },
    {
      icon: FileText,
      title: "Electronic Health Records",
      description:
        "Comprehensive EHR system with templates, prescriptions, and lab integration",
      features: [
        "Custom templates",
        "e-Prescriptions",
        "Lab integration",
        "Progress notes",
      ],
    },
    {
      icon: BarChart3,
      title: "Practice Analytics",
      description:
        "Real-time insights into your practice performance with actionable recommendations",
      features: [
        "Revenue tracking",
        "Patient analytics",
        "Performance metrics",
        "Growth insights",
      ],
    },
  ];

  const advancedFeatures = [
    {
      icon: DollarSign,
      title: "Billing & Payments",
      description:
        "Streamlined billing process with insurance claims and secure payment processing",
      highlights: [
        "Insurance claims",
        "Secure payments",
        "Automated invoicing",
        "Revenue reports",
      ],
    },
    {
      icon: Users,
      title: "Patient Management",
      description:
        "Complete patient relationship management with communication tools and follow-up systems",
      highlights: [
        "Patient portal",
        "Automated follow-ups",
        "Health records access",
        "Feedback system",
      ],
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security with HIPAA compliance and data protection measures",
      highlights: [
        "HIPAA compliant",
        "Data encryption",
        "Access controls",
        "Audit trails",
      ],
    },
    {
      icon: Globe,
      title: "Multi-Location Support",
      description:
        "Manage multiple practice locations with centralized control and individual settings",
      highlights: [
        "Centralized management",
        "Location settings",
        "Staff permissions",
        "Unified records",
      ],
    },
  ];

  const mobileFeatures = [
    {
      icon: Smartphone,
      title: "Mobile App",
      description:
        "Full-featured mobile application for managing your practice on the go",
      capabilities: [
        "Appointment management",
        "Patient communication",
        "Chart access",
        "Prescriptions",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      description:
        "Secure cloud-based platform accessible from any device with real-time sync",
      capabilities: [
        "Anywhere access",
        "Real-time sync",
        "Automatic backups",
        "Scalable storage",
      ],
    },
    {
      icon: Zap,
      title: "Automation Tools",
      description:
        "AI-powered automation for repetitive tasks and intelligent workflows",
      capabilities: [
        "Smart reminders",
        "Document automation",
        "Follow-up sequences",
        "Task management",
      ],
    },
    {
      icon: Award,
      title: "Professional Tools",
      description:
        "Specialized tools for different healthcare professionals and specialties",
      capabilities: [
        "Specialty templates",
        "Treatment plans",
        "Progress tracking",
        "Outcome measures",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header Section */}
      <section className="pt-16 md:pt-20 pb-12 md:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 mb-4 md:mb-6 ${bebasNeue.className}`}
          >
            Powerful <span className="text-blue-600">Features</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Discover the comprehensive suite of tools designed to streamline
            your practice, enhance patient care, and grow your professional
            impact.
          </motion.p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 text-center mb-12 md:mb-16 ${bebasNeue.className}`}
          >
            Core <span className="text-green-600">Practice Tools</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon
                      size={20}
                      className="md:w-6 md:h-6 text-blue-600"
                    />
                  </div>
                  <h3
                    className={`text-xl md:text-2xl font-bold text-slate-900 ${bebasNeue.className}`}
                  >
                    {feature.title}
                  </h3>
                </div>
                <p
                  className={`text-slate-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base ${poppins.className}`}
                >
                  {feature.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span
                        className={`text-slate-700 text-xs md:text-sm ${poppins.className}`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16 ${bebasNeue.className}`}
          >
            Advanced <span className="text-blue-400">Capabilities</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon
                      size={20}
                      className="md:w-6 md:h-6 text-blue-400"
                    />
                  </div>
                  <h3
                    className={`text-xl md:text-2xl font-bold text-white ${bebasNeue.className}`}
                  >
                    {feature.title}
                  </h3>
                </div>
                <p
                  className={`text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base ${poppins.className}`}
                >
                  {feature.description}
                </p>
                <div className="space-y-2 md:space-y-3">
                  {feature.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 md:gap-3">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span
                        className={`text-slate-300 text-xs md:text-sm ${poppins.className}`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile & Technology Features */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 text-center mb-12 md:mb-16 ${bebasNeue.className}`}
          >
            Technology <span className="text-purple-600">Platform</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {mobileFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 sm:p-6 rounded-xl md:rounded-2xl bg-white shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-xl md:rounded-2xl flex items-center justify-center bg-purple-100">
                  <feature.icon
                    size={20}
                    className="md:w-8 md:h-8 text-purple-600"
                  />
                </div>
                <h3
                  className={`text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 ${bebasNeue.className}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-slate-600 mb-4 md:mb-6 leading-relaxed text-xs md:text-sm ${poppins.className}`}
                >
                  {feature.description}
                </p>
                <div className="space-y-1 md:space-y-2">
                  {feature.capabilities.map((item, idx) => (
                    <div
                      key={idx}
                      className="text-slate-600 text-xs md:text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6 ${bebasNeue.className}`}
            >
              Seamless <span className="text-blue-600">Integration</span>
            </h2>
            <p
              className={`text-sm sm:text-base md:text-lg text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed ${poppins.className}`}
            >
              Doza integrates with your existing workflow and tools, making
              adoption smooth and efficient
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-2xl mx-auto">
              {[
                "EHR Systems",
                "Lab Services",
                "Pharmacy Networks",
                "Insurance Providers",
                "Medical Devices",
                "Payment Processors",
                "Scheduling Tools",
                "Communication Apps",
              ].map((integration, index) => (
                <div
                  key={integration}
                  className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm border border-slate-200"
                >
                  <span
                    className={`text-slate-700 text-xs md:text-sm ${poppins.className}`}
                  >
                    {integration}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
