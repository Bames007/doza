"use client";

import { motion } from "framer-motion";

interface Props {
  role: string | null;
}

export default function PageTransition({ role }: Props) {
  if (!role) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* The Capsule Container */}
      <div className="relative flex h-32 w-[400px] items-center overflow-hidden rounded-full shadow-[0_0_50px_rgba(42,176,74,0.3)]">
        {/* Left Side: Green "DO" */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          className="flex h-full w-1/2 items-center justify-end bg-gradient-to-r from-[#1E7D36] to-[#2AB04A] pr-4"
        >
          <span className="font-['Bebas_Neue'] text-5xl tracking-[0.2em] text-white">
            DO
          </span>
        </motion.div>

        {/* Right Side: Blue "ZA" */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          className="flex h-full w-1/2 items-center justify-start bg-gradient-to-l from-[#1B6BAA] to-[#2E98ED] pl-4"
        >
          <span className="font-['Bebas_Neue'] text-5xl tracking-[0.2em] text-white">
            ZA
          </span>
        </motion.div>
      </div>

      {/* Loading Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute mt-48 text-center text-white/40 tracking-[0.4em] uppercase font-['Poppins'] text-xs"
      >
        INITIALIZING {role.toUpperCase()}
      </motion.div>
    </motion.div>
  );
}
