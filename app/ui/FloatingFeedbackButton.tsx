// components/FloatingFeedbackButton.tsx
"use client";

import { useState } from "react";
import { MessageSquareHeart, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackModal from "./DozaFeedbackSystem";

export default function FloatingFeedbackButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-4">
        {/* --- DYNAMIC LABEL (Appears on Hover) --- */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="hidden md:block px-4 py-2 bg-white/80 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-2xl shadow-emerald-500/10"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                Improve the Dream
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- THE MAIN BUTTON --- */}
        <motion.button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-[2rem] bg-slate-950 text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-500 hover:rounded-3xl"
        >
          {/* 1. LAYER: Inner Glow/Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* 2. LAYER: The Animated Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
          >
            <div className="absolute top-0 left-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
          </motion.div>

          {/* 3. CONTENT: Icon & Badge */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <MessageSquareHeart
              size={24}
              className="text-white group-hover:text-emerald-400 transition-colors duration-300"
              strokeWidth={1.5}
            />

            {/* Pulsing Notification Dot */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 border-2 border-slate-950"></span>
            </span>
          </div>

          {/* 4. LAYER: Interactive Shine */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </div>

      <FeedbackModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
