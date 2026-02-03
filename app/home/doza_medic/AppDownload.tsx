"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  Download,
  Smartphone,
  Zap,
  Shield,
  Cloud,
  Check,
  Sparkles,
  Star,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import Image from "next/image";

const AppDownload: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const features = [
    {
      icon: Smartphone,
      title: "Mobile Management",
      description:
        "Manage your center from anywhere with our dedicated mobile app",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description:
        "Instant notifications for appointments, inventory, and emergencies",
    },
    {
      icon: Shield,
      title: "Offline Capability",
      description: "Continue working even without internet connection",
    },
    {
      icon: Cloud,
      title: "Cloud Sync",
      description: "Automatic synchronization across all your devices",
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const floatVariants: Variants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const bubbleVariants: Variants = {
    floating: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 bg-gradient-to-br from-green-900 via-emerald-900 to-slate-900 overflow-hidden relative"
    >
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            variants={bubbleVariants}
            animate="floating"
            transition={{
              duration: 4 + Math.random() * 4,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: 40 + Math.random() * 80,
              height: 40 + Math.random() * 80,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Additional smaller bubbles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute rounded-full bg-white/5"
            style={{
              width: 10 + Math.random() * 30,
              height: 10 + Math.random() * 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-72 h-72 bg-green-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 -right-20 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              ></motion.div>
              <span
                className={`text-green-300 text-sm font-medium ${poppins.className} flex items-center gap-1`}
              >
                <Sparkles size={12} />
                Available on all platforms
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight ${bebasNeue.className}`}
            >
              Manage Your Center
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent mt-2"
              >
                On the Go
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`text-base md:text-lg text-green-100 mb-6 md:mb-8 leading-relaxed ${poppins.className}`}
            >
              Our dedicated mobile app gives you complete control over your
              healthcare center from anywhere. Zero downtime, real-time updates,
              and seamless synchronization.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-green-500/25 transition-all duration-300"
                  >
                    <feature.icon size={20} className="text-white" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-white font-semibold text-sm md:text-base mb-1 ${bebasNeue.className}`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-green-200 text-xs md:text-sm leading-relaxed ${poppins.className}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-green-500/25 border border-white/20"
              >
                <AppleIcon />
                <div className="text-left">
                  <div className="text-xs text-slate-600">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-4 bg-green-600 text-white border border-green-500 rounded-xl font-semibold hover:bg-green-500 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-green-500/25"
              >
                <GooglePlayIcon />
                <div className="text-left">
                  <div className="text-xs text-green-100">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </motion.button>
            </motion.div>

            {/* App Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-6 mt-6 md:mt-8"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                      className="w-7 h-7 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 border-2 border-green-900 shadow-lg"
                    ></motion.div>
                  ))}
                </div>
                <span className={`text-green-200 text-sm ${poppins.className}`}>
                  500+ Centers
                </span>
              </div>
              <div className="w-px h-6 bg-green-700"></div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Check size={16} className="text-green-400" />
                </motion.div>
                <span className={`text-green-200 text-sm ${poppins.className}`}>
                  Free Forever
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Screenshot */}
          <motion.div
            variants={itemVariants}
            className="relative order-1 lg:order-2"
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              {/* Animated Background Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-28 h-28 bg-green-500 rounded-full blur-2xl opacity-20"
              ></motion.div>
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-500 rounded-full blur-2xl opacity-20"
              ></motion.div>

              {/* Main Dashboard Image */}
              <motion.div
                variants={floatVariants}
                animate="floating"
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm"
              >
                <Image
                  src="/assets/images/dashboard screenshot.png"
                  alt="Doza Center Dashboard"
                  width={400}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Glow Effect */}
                <div className="absolute inset-0 ring-2 ring-inset ring-white/10 rounded-3xl pointer-events-none"></div>

                {/* Green Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent pointer-events-none"></div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.8,
                }}
                className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20"
              >
                <div className="text-center">
                  <div
                    className={`text-xl font-bold text-slate-900 ${bebasNeue.className}`}
                  >
                    24
                  </div>
                  <div className="text-xs text-slate-600 whitespace-nowrap">
                    Today's Appointments
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 1,
                }}
                className="absolute -top-4 -left-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-4 shadow-2xl"
              >
                <div className="text-center">
                  <div className={`text-xl font-bold ${bebasNeue.className}`}>
                    ₦420k
                  </div>
                  <div className="text-xs text-white/80">Revenue</div>
                </div>
              </motion.div>

              {/* Download Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-3 rounded-full shadow-2xl border border-green-400 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Download size={16} />
                  </motion.div>
                  <span
                    className={`text-sm font-semibold ${poppins.className}`}
                  >
                    Download Now
                  </span>
                </div>
              </motion.div>

              {/* Rating Badge */}
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={
                  isInView
                    ? { opacity: 1, rotate: 0 }
                    : { opacity: 0, rotate: -10 }
                }
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -top-2 right-8 bg-yellow-500 text-white px-3 py-1 rounded-full shadow-lg border border-yellow-400 backdrop-blur-sm flex items-center gap-1"
              >
                <Star size={12} className="fill-current" />
                <span className={`text-xs font-bold ${poppins.className}`}>
                  4.9
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Apple App Store Icon
const AppleIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    whileHover={{ scale: 1.1 }}
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </motion.svg>
);

// Google Play Store Icon
const GooglePlayIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    whileHover={{ scale: 1.1 }}
  >
    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
  </motion.svg>
);

export default AppDownload;
