// app/components/SplashScreen.tsx
"use client";

import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
      className="fixed inset-0 z-[300] bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.28),transparent_55%)] pointer-events-none" />

      {/* Logo card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.15,
        }}
        className="relative"
      >
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-3xl flex items-center justify-center shadow-2xl shadow-black/30"
        >
          <img
            src="/logo.png"
            alt="Doza"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />
        </motion.div>
        {/* Soft glow ring behind */}
        <div className="absolute inset-0 rounded-3xl bg-white/40 blur-2xl -z-10" />
      </motion.div>

      {/* DOZA wordmark */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className="mt-6 text-3xl sm:text-4xl font-bold text-white tracking-[0.3em] font-['Bebas_Neue']"
      >
        DOZA
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-2 text-[9px] sm:text-[10px] font-mono text-white/70 tracking-[0.4em] uppercase"
      >
        Your Personal Medical Assistant
      </motion.p>

      {/* Progress bar */}
      <div className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-0.5 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.3 }}
          className="h-full w-full bg-white rounded-full"
        />
      </div>
    </motion.div>
  );
}
