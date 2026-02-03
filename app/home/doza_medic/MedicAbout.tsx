"use client";

import { motion } from "framer-motion";
import {
  Target,
  Globe,
  Shield,
  Zap,
  Users,
  Award,
  BarChart3,
  Heart,
  Building,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";

export default function MedicAbout() {
  const missionItems = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower healthcare professionals with technology that enhances patient care while optimizing practice efficiency and professional growth.",
    },
    {
      icon: Globe,
      title: "Our Vision",
      description:
        "A connected healthcare ecosystem where every medical professional can focus on what they do best - healing and helping patients.",
    },
    {
      icon: Shield,
      title: "Our Commitment",
      description:
        "Maintaining the highest standards of security, compliance, and professional excellence in everything we build for the medical community.",
    },
  ];

  const platformFeatures = [
    {
      icon: Zap,
      title: "Smart Practice Management",
      description:
        "AI-powered tools that reduce administrative work by 60% and optimize your practice operations",
    },
    {
      icon: Users,
      title: "Patient Network Access",
      description:
        "Connect with 500,000+ verified patients actively seeking quality healthcare providers",
    },
    {
      icon: Building,
      title: "Medical Center Partnerships",
      description:
        "Access to 200+ state-of-the-art facilities with advanced equipment and support staff",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description:
        "Data-driven insights to help you grow your practice and improve patient outcomes",
    },
  ];

  const professionalTypes = [
    {
      title: "Doctors & Physicians",
      description:
        "Comprehensive practice management with telehealth capabilities",
      features: [
        "Electronic Health Records",
        "Telemedicine",
        "Patient Scheduling",
        "Billing & Insurance",
      ],
    },
    {
      title: "Nurses & Practitioners",
      description:
        "Tools for patient care coordination and professional development",
      features: [
        "Patient Monitoring",
        "Care Plans",
        "Team Collaboration",
        "Continuing Education",
      ],
    },
    {
      title: "Nutritionists & Dietitians",
      description:
        "Specialized platform for nutritional counseling and meal planning",
      features: [
        "Meal Planning Tools",
        "Progress Tracking",
        "Client Management",
        "Recipe Database",
      ],
    },
    {
      title: "Therapists & Specialists",
      description: "Secure platform for therapy sessions and treatment plans",
      features: [
        "Session Notes",
        "Treatment Plans",
        "Progress Tracking",
        "Secure Messaging",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-x-hidden w-full">
      {/* Header Section */}
      <section className="pt-16 md:pt-20 pb-12 md:pb-16 px-4 sm:px-6 w-full">
        <div className="max-w-6xl mx-auto text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 px-2 ${bebasNeue.className}`}
          >
            About <span className="text-blue-600">Doza Medics</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2 ${poppins.className}`}
          >
            Doza is revolutionizing healthcare delivery by providing medical
            professionals with an integrated platform that combines advanced
            technology with a thriving ecosystem of patients and medical
            centers.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-white w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {missionItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-slate-50 hover:bg-white transition-all duration-300 hover:shadow-lg w-full"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center bg-blue-100">
                  <item.icon
                    size={20}
                    className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600"
                  />
                </div>
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4 ${bebasNeue.className}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base ${poppins.className}`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-8 sm:mb-12 md:mb-16 w-full"
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 px-2 ${bebasNeue.className}`}
            >
              Comprehensive <span className="text-blue-600">Platform</span>
            </h2>
            <p
              className={`text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2 ${poppins.className}`}
            >
              Everything healthcare professionals need to run successful, modern
              practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl bg-white shadow-md sm:shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center bg-blue-100">
                  <feature.icon
                    size={18}
                    className="sm:w-5 sm:h-5 md:w-7 md:h-7 text-blue-600"
                  />
                </div>
                <h3
                  className={`text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4 ${bebasNeue.className}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-slate-600 leading-relaxed text-xs sm:text-sm ${poppins.className}`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Types */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-slate-900 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-12 md:mb-16 px-2 ${bebasNeue.className}`}
          >
            For Every{" "}
            <span className="text-blue-400">Healthcare Professional</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
            {professionalTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg w-full"
              >
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4 ${bebasNeue.className}`}
                >
                  {type.title}
                </h3>
                <p
                  className={`text-slate-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-xs sm:text-sm md:text-base ${poppins.className}`}
                >
                  {type.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 md:gap-3">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1 sm:gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span
                        className={`text-slate-700 text-xs sm:text-sm ${poppins.className}`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Integration */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="w-full"
            >
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 px-2 ${bebasNeue.className}`}
              >
                Integrated{" "}
                <span className="text-green-600">Healthcare Ecosystem</span>
              </h2>
              <p
                className={`text-sm sm:text-base md:text-lg text-slate-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed px-2 ${poppins.className}`}
              >
                Doza connects you with patients and medical centers in a
                seamless network designed for modern healthcare delivery.
              </p>

              <div className="space-y-2 sm:space-y-3 md:space-y-4 px-2">
                {[
                  "Access to 500,000+ verified patients",
                  "Partnership with 200+ medical centers",
                  "Network of 10,000+ healthcare professionals",
                  "Integrated telehealth capabilities",
                  "Shared medical records system",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span
                      className={`text-slate-700 text-sm sm:text-base ${poppins.className}`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 lg:mt-0 w-full px-2"
            >
              {[
                {
                  icon: Heart,
                  label: "Patients",
                  value: "500K+",
                  color: "text-green-600",
                },
                {
                  icon: Building,
                  label: "Medical Centers",
                  value: "200+",
                  color: "text-blue-600",
                },
                {
                  icon: Users,
                  label: "Professionals",
                  value: "10K+",
                  color: "text-purple-600",
                },
                {
                  icon: Award,
                  label: "Satisfaction",
                  value: "98%",
                  color: "text-orange-600",
                },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="text-center p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 w-full"
                >
                  <item.icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${item.color} mx-auto mb-1 sm:mb-2 md:mb-3`}
                  />
                  <div
                    className={`text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1 ${bebasNeue.className}`}
                  >
                    {item.value}
                  </div>
                  <div
                    className={`text-slate-600 text-xs sm:text-sm ${poppins.className}`}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
