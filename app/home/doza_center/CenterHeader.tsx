"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { poppins } from "./constant";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  onBack: () => void;
  currentExperience?: string;
}

export const CenterHeader: React.FC<HeaderProps> = ({
  onBack,
  currentExperience,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getRegistrationPath = (): string => {
    if (!currentExperience) return "/registration";
    const role = currentExperience.toLowerCase();
    if (role === "user") return "/registration/user";
    if (role === "medic") return "/registration/medic";
    if (role === "center") return "/registration/center";
    return "/registration";
  };

  return (
    <>
      <div className="h-20 sm:h-24 w-full bg-transparent" />

      <header className="fixed top-0 left-0 right-0 z-[100] px-3 py-3 sm:px-4 sm:py-4 pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            max-w-7xl mx-auto h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6 rounded-[1.2rem] sm:rounded-3xl pointer-events-auto
            transition-all duration-500 ease-in-out
            ${
              scrolled
                ? "bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                : "bg-white border border-slate-100 shadow-sm"
            }
          `}
        >
          {/* LEFT: Logo & The Experience Label */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/" className="flex items-center group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Doza"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <AnimatePresence mode="wait">
              {currentExperience && (
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2 border-l border-slate-200 pl-3 sm:pl-4"
                >
                  <span
                    className={`text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ${poppins.className}`}
                  >
                    Experience
                  </span>
                  <span
                    className={`text-[11px] sm:text-xs font-bold text-[#2BB14B] sm:text-slate-900 ${poppins.className}`}
                  >
                    {currentExperience}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Minimal Back Button */}
            <button
              onClick={onBack}
              className="flex items-center justify-center p-2 sm:px-4 sm:py-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all group"
            >
              <ArrowLeft
                size={18}
                className="sm:mr-2 group-hover:-translate-x-1 transition-transform"
              />
              <span
                className={`hidden sm:block text-[10px] font-bold uppercase tracking-widest ${poppins.className}`}
              >
                Change Experience
              </span>
            </button>

            {/* Primary Action */}
            <Link
              href={getRegistrationPath()}
              className="group flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-slate-950 text-white rounded-xl text-[11px] sm:text-sm font-bold hover:bg-[#2BB14B] transition-all shadow-xl shadow-slate-950/10 active:scale-95"
            >
              <span>Get Started</span>
              <ChevronRight
                size={14}
                className="opacity-50 group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        </motion.div>
      </header>
    </>
  );
};
