"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Home, ArrowRight, Activity } from "lucide-react";
import Link from "next/link";
import { bebasNeue, poppins } from "./home/doza_center/constant";
import Image from "next/image";

const Error404: React.FC = () => {
  // Explicitly typing variants to avoid the 'ease' string mismatch
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut", // Framer Motion expects specific easing strings
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden flex items-center justify-center px-4">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl"
        />
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl w-full text-center"
      >
        {/* Brand Logo Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-12"
        >
          <div className="p-3 bg-white rounded-2xl shadow-xl shadow-emerald-500/10 border border-slate-100 mb-4">
            <Image
              alt="Doza Logo"
              src={"/logo.png"}
              height={45}
              width={45}
              className="object-contain"
            />
          </div>
          <h1
            className={`${bebasNeue.className} text-3xl tracking-widest text-emerald-600`}
          >
            DOZA HEALTHCARE
          </h1>
        </motion.div>

        {/* The 404 Visual */}
        <motion.div
          variants={itemVariants}
          className="relative inline-block mb-8"
        >
          <h2
            className={`${bebasNeue.className} text-[10rem] sm:text-[15rem] leading-none text-slate-900 select-none opacity-5 font-bold`}
          >
            404
          </h2>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              {/* Heart Rate / EKG Line Animation */}
              <svg
                width="240"
                height="80"
                viewBox="0 0 240 80"
                className="text-emerald-500 mb-2"
              >
                <motion.path
                  d="M0 40 L60 40 L70 10 L85 70 L100 40 L130 40 L160 40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx="165"
                  cy="40"
                  r="3"
                  className="text-rose-500"
                  fill="currentColor"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </svg>
              <h3
                className={`${bebasNeue.className} text-4xl sm:text-6xl text-slate-800 -mt-6 tracking-tight`}
              >
                CONNECTION LOST
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={itemVariants}
          className="bg-white/60 backdrop-blur-md border border-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-slate-200/50"
        >
          <p
            className={`${poppins.className} text-slate-600 text-lg mb-10 max-w-lg mx-auto leading-relaxed`}
          >
            We couldn't find the medical record or page you requested. It might
            have been relocated, archived, or the link is broken.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="group">
              <motion.button
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-2xl shadow-slate-900/20 transition-all"
              >
                <Home size={18} />
                Return to Dashboard
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-10 py-4 bg-white text-slate-600 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 transition-colors"
            >
              Go Back
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200/50 flex items-center justify-center gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-emerald-400" />
              <span className="text-[10px] uppercase tracking-widest font-bold">
                System Online
              </span>
            </div>
            <div className="h-1 w-1 bg-slate-300 rounded-full" />
            <span className="text-[10px] uppercase tracking-widest font-bold">
              Error ID: DOZA-404-X
            </span>
          </div>
        </motion.div>

        <motion.footer variants={itemVariants} className="mt-12">
          <p
            className={`${poppins.className} text-slate-400 text-xs tracking-wide`}
          >
            © {new Date().getFullYear()} Doza Healthcare. All medical data is
            secured with 256-bit encryption.
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default Error404;
