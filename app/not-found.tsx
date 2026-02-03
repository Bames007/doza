"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  ArrowRight,
  Search,
  Heart,
  Stethoscope,
  Sparkles,
  Zap,
  Clock,
  Users,
  Shield,
  Phone,
  Building,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { bebasNeue, poppins } from "./home/doza_center/constant";

const Error404: React.FC = () => {
  const quickLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Find Doctors", href: "/doctors", icon: Stethoscope },
    { name: "Emergency", href: "/emergency", icon: Zap },
    { name: "Contact", href: "/contact", icon: Users },
  ];

  const floatingIcons = [
    { icon: Heart, delay: 0, x: 10, y: -20 },
    { icon: Stethoscope, delay: 0.5, x: -15, y: 15 },
    { icon: Shield, delay: 1, x: 20, y: 10 },
    { icon: Users, delay: 1.5, x: -10, y: -15 },
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating medical icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.1, 0.8],
              x: item.x,
              y: item.y,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
            className="absolute text-green-200/40"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 15}%`,
            }}
          >
            <item.icon size={32} className="sm:size-48" />
          </motion.div>
        ))}

        {/* Gradient orbs */}
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
          className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-green-200 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-56 h-56 sm:w-72 sm:h-72 bg-emerald-200 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto text-center w-full">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            {/* Animated Number */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 1,
              }}
              className="relative inline-block mb-6 sm:mb-8"
            >
              <div className="relative">
                <motion.h1
                  className={`text-7xl sm:text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-slate-900 ${bebasNeue.className}`}
                >
                  404
                </motion.h1>

                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 blur-xl opacity-30 -z-10"
                />
              </div>

              {/* Floating particles around 404 */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"
                  style={{
                    top: `${30 + i * 20}%`,
                    left: `${80 + i * 10}%`,
                  }}
                />
              ))}
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 ${bebasNeue.className}`}
            >
              Page Not Found
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`text-base sm:text-xl md:text-2xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed ${poppins.className} px-2`}
            >
              Oops! The page you're looking for seems to have wandered off into
              the digital unknown. Let's get you back to healthy navigation.
            </motion.p>

            {/* Decorative medical badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={16} className="sm:size-20 text-green-600" />
              </motion.div>
              <span
                className={`text-green-700 font-semibold text-sm sm:text-base ${poppins.className}`}
              >
                Doza Healthcare Support
              </span>
            </motion.div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="col-span-1"
              >
                <Link
                  href={link.href}
                  className="group bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl sm:rounded-2xl p-3 sm:p-6 block text-center hover:shadow-xl sm:hover:shadow-2xl hover:border-green-200 transition-all duration-300 h-full flex flex-col items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-2 sm:mb-3 shadow-lg group-hover:shadow-green-500/25 transition-all duration-300"
                  >
                    <link.icon size={20} className="sm:size-24 text-white" />
                  </motion.div>
                  <span
                    className={`font-semibold text-slate-800 group-hover:text-green-600 transition-colors text-xs sm:text-sm ${poppins.className}`}
                  >
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            <Link href="/" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl sm:rounded-2xl font-semibold shadow-xl sm:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group"
              >
                <Home size={20} className="sm:size-24" />
                <span className="text-sm sm:text-base">Return to Homepage</span>
                <ArrowRight
                  size={16}
                  className="sm:size-20 group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white/80 backdrop-blur-sm border border-slate-300 text-slate-700 rounded-xl sm:rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:border-green-300 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group"
            >
              <Search size={18} className="sm:size-20" />
              <span className="text-sm sm:text-base">Search Our Site</span>
            </motion.button>
          </motion.div>

          {/* Emergency Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto mb-6 sm:mb-8"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-red-500 flex items-center justify-center flex-shrink-0 mt-1"
              >
                <Zap size={20} className="sm:size-24 text-white" />
              </motion.div>
              <div className="text-left flex-1">
                <h3
                  className={`text-red-800 font-bold text-base sm:text-lg mb-1 ${bebasNeue.className}`}
                >
                  Medical Emergency?
                </h3>
                <p
                  className={`text-red-600 text-sm sm:text-base ${poppins.className} mb-3 sm:mb-4`}
                >
                  If this is a medical emergency, please call emergency services
                  immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCall("211")}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                  >
                    <Phone size={16} />
                    <span
                      className={`font-semibold text-sm ${poppins.className}`}
                    >
                      Call 211 (Toll Free)
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCall("+2348127728084")}
                    className="flex items-center gap-2 bg-white hover:bg-red-50 text-red-700 border border-red-300 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <Building size={16} />
                    <span
                      className={`font-semibold text-sm ${poppins.className}`}
                    >
                      +234 812 772 8084
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Support Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto"
          >
            <div className="text-center mb-4">
              <p
                className={`text-slate-700 font-semibold mb-2 ${poppins.className}`}
              >
                Need help? Our support team is available 24/7
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center gap-2 justify-center sm:justify-start p-2 bg-green-50 rounded-lg">
                <Clock size={16} className="text-green-600" />
                <span
                  className={`text-slate-700 text-sm font-medium ${poppins.className}`}
                >
                  24/7 Support
                </span>
              </div>

              <div className="flex items-center gap-2 justify-center sm:justify-start p-2 bg-blue-50 rounded-lg">
                <MessageCircle size={16} className="text-blue-600" />
                <span
                  className={`text-slate-700 text-sm font-medium ${poppins.className}`}
                >
                  Live Chat
                </span>
              </div>

              <div className="flex items-center gap-2 justify-center sm:justify-start p-2 bg-purple-50 rounded-lg">
                <Shield size={16} className="text-purple-600" />
                <span
                  className={`text-slate-700 text-sm font-medium ${poppins.className}`}
                >
                  HIPAA Compliant
                </span>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-4 pt-4 border-t border-slate-200/60">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCall("+2348127728084")}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <Phone size={18} />
                <span className={`${poppins.className}`}>Call Support Now</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 text-green-50"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Error404;
