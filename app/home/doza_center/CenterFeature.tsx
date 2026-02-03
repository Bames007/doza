import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  CheckCircle,
  Brain,
  Cloud,
  BarChart3,
  Globe,
  Cpu,
  Zap,
  Network,
  Shield,
} from "lucide-react";
import { bebasNeue, poppins } from "./constant";
import { Feature } from "./type";

const CenterFeatures: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const features: Feature[] = [
    // ... (your features array remains the same)
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description:
        "Advanced machine learning algorithms provide insights into patient flow, resource allocation, and operational efficiency",
      benefits: [
        "Predictive patient volume",
        "Resource optimization",
        "Revenue forecasting",
        "Performance analytics",
      ],
    },
    {
      icon: Cloud,
      title: "Free EMR Systems",
      description:
        "Complete Electronic Medical Records system at no cost with seamless integration capabilities",
      benefits: [
        "Zero upfront cost",
        "Easy data migration",
        "Interoperability",
        "Customizable templates",
      ],
    },
    {
      icon: BarChart3,
      title: "Inventory Management",
      description:
        "Real-time inventory tracking with automated ordering and stock optimization for pharmacies and labs",
      benefits: [
        "Automated reordering",
        "Waste reduction",
        "Cost optimization",
        "Supplier integration",
      ],
    },
    {
      icon: Globe,
      title: "Location-Based Services",
      description:
        "Connect with local patients and emergency services through intelligent geolocation features",
      benefits: [
        "Local patient matching",
        "Emergency coordination",
        "Market analytics",
        "Service area optimization",
      ],
    },
    {
      icon: Cpu,
      title: "Advanced Monitoring",
      description:
        "Remote patient monitoring and specialized care management for clinics and diagnostic centers",
      benefits: [
        "Remote vitals tracking",
        "Alert systems",
        "Progress monitoring",
        "Specialized workflows",
      ],
    },
    {
      icon: Zap,
      title: "Emergency Response",
      description:
        "Integrated emergency response system connecting hospitals, pharmacies, and ambulances in real-time",
      benefits: [
        "Real-time coordination",
        "Patient tracking",
        "Resource dispatch",
        "Status updates",
      ],
    },
    {
      icon: Network,
      title: "Unified Network",
      description:
        "Seamless connection between patients, medics, and centers for coordinated care delivery",
      benefits: [
        "Cross-platform communication",
        "Shared records",
        "Referral management",
        "Collaborative care",
      ],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Military-grade security with HIPAA compliance and 99.9% uptime guarantee",
      benefits: [
        "Data encryption",
        "Access controls",
        "Audit trails",
        "Disaster recovery",
      ],
    },
  ];

  // Stagger animation for features with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="features"
      className="py-12 md:py-20 bg-white overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="w-3 h-3 bg-purple-600 rounded-full mx-1 inline-block"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full mx-1 inline-block"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full mx-1 inline-block"></div>
          </motion.div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight ${bebasNeue.className}`}
          >
            Powerful Features for
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mt-2"
            >
              Modern Healthcare
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed ${poppins.className} px-2`}
          >
            Designed specifically for healthcare providers, our features
            streamline operations, enhance patient care, and drive growth
            through intelligent technology.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl shadow-lg shadow-slate-200/50"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Icon Container */}
                <motion.div
                  variants={iconVariants}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0 shadow-lg"
                >
                  <feature.icon className="text-purple-600 w-6 h-6 sm:w-7 sm:h-7" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className={`text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight ${bebasNeue.className}`}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className={`text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6 ${poppins.className}`}
                  >
                    {feature.description}
                  </motion.p>

                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"
                  >
                    {feature.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.8 + index * 0.1 + idx * 0.1,
                        }}
                        className="flex items-center gap-2 sm:gap-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <CheckCircle
                            size={14}
                            className="text-green-500 flex-shrink-0"
                          />
                        </motion.div>
                        <span
                          className={`text-xs sm:text-sm text-slate-600 ${poppins.className} leading-tight`}
                        >
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-purple-100">
            <h3
              className={`text-2xl sm:text-3xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
            >
              Ready to Transform Your Healthcare Center?
            </h3>
            <p
              className={`text-slate-600 mb-6 max-w-2xl mx-auto ${poppins.className}`}
            >
              Join thousands of healthcare providers already using our platform
              to deliver better patient care.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CenterFeatures;
