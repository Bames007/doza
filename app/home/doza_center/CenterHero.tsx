"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Building,
  ArrowRight,
  Play,
  Heart,
  Stethoscope,
  Star,
} from "lucide-react";
import { bebasNeue, poppins } from "./constant";
import Link from "next/link";
import Image from "next/image";

interface CenterHeroProps {
  onBack: () => void;
}

export const CenterHero: React.FC<CenterHeroProps> = () => {
  return (
    <div className="relative min-h-[90vh] lg:min-h-screen overflow-hidden bg-white">
      {/* Refined Background Strategy */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 via-transparent to-emerald-50/40" />

      <section className="relative px-4 sm:px-6 pt-10 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100/80 border border-green-200 text-green-700 mb-6 backdrop-blur-sm">
                <Building size={14} />
                <span
                  className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest ${poppins.className}`}
                >
                  Institutional Solutions
                </span>
              </div>

              <h1
                className={`text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[0.95] sm:leading-none ${bebasNeue.className}`}
              >
                TRANSFORM YOUR <br />
                <span className="text-[#2BB14B]">HEALTHCARE FACILITY</span>
              </h1>

              <p
                className={`text-sm sm:text-base lg:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed ${poppins.className}`}
              >
                Deploy Doza's AI-powered EMR suite. Connect your facility to a
                global network of patients and medical professionals instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/registration/center" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:px-8 py-4 bg-slate-950 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-slate-950/20 hover:bg-[#2BB14B] transition-all"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>

                <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all">
                  <Play size={18} fill="currentColor" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Minimalist Stats Row */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-12 pt-8 border-t border-slate-100">
                {[
                  { n: "500+", l: "Centers" },
                  { n: "50K+", l: "Patients" },
                  { n: "2K+", l: "Medics" },
                ].map((s) => (
                  <div key={s.l} className="text-center lg:text-left">
                    <div
                      className={`text-2xl sm:text-3xl font-bold text-slate-900 ${bebasNeue.className}`}
                    >
                      {s.n}
                    </div>
                    <div
                      className={`text-[9px] sm:text-[10px] text-slate-400 uppercase font-black tracking-widest ${poppins.className}`}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative z-10 p-2 sm:p-4 bg-white/50 backdrop-blur-sm rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white/50">
                <div className="relative rounded-[1.8rem] sm:rounded-[2rem] overflow-hidden border border-slate-200 shadow-inner">
                  <Image
                    src="/assets/images/dashboard screenshot.png"
                    alt="Doza Dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>

                {/* Mobile-Friendly Floating Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 right-4 sm:right-10 bg-[#2BB14B] px-5 py-3 rounded-2xl text-white shadow-2xl flex items-center gap-3"
                >
                  <div className="p-1.5 bg-white/20 rounded-lg">
                    <Heart fill="white" size={16} />
                  </div>
                  <div>
                    <div
                      className={`text-lg font-bold leading-none ${bebasNeue.className}`}
                    >
                      +15% Growth
                    </div>
                    <div
                      className={`text-[10px] opacity-80 font-medium ${poppins.className}`}
                    >
                      Patient Retention
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Soft decorative ambient glow */}
              <div className="absolute inset-0 bg-green-400/10 blur-[100px] -z-10 rounded-full scale-110" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
