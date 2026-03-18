"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import {
  Smartphone,
  Zap,
  Shield,
  Cloud,
  Check,
  Star,
  Activity,
  TrendingUp,
  Globe,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import Image from "next/image";

// --- Main Component ---
const AppDownload: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-slate-950 overflow-hidden"
    >
      <GrainOverlay />

      {/* --- Dynamic Background Atmosphere --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-12 md:gap-20">
          {/* --- Top: Header & CTA --- */}
          <div className="text-center flex flex-col items-center">
            <SectionLabel text="Institutional Mobility" />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className={`text-5xl md:text-8xl text-white mb-8 leading-none tracking-tight ${bebasNeue.className}`}
            >
              YOUR CLINIC. <br />
              <span className="text-emerald-400">UNBOUNDED.</span>
            </motion.h2>

            <p
              className={`text-slate-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed ${poppins.className}`}
            >
              Manage staff schedules, monitor pharmacy inventory, and track
              revenue in real-time. Whether on a desktop or tablet, stay
              synchronized with zero downtime.
            </p>

            {/* Store Buttons & Free Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="flex flex-wrap gap-4 justify-center">
                <MagneticButton className="px-8 py-4 bg-white text-slate-950 rounded-2xl flex items-center gap-3 font-bold hover:bg-emerald-50 transition-colors">
                  <AppleIcon />
                  <div className="text-left leading-none">
                    <span className="text-[10px] uppercase block opacity-60">
                      App Store
                    </span>
                    <span className="text-sm uppercase tracking-tighter">
                      Download
                    </span>
                  </div>
                </MagneticButton>

                <MagneticButton className="px-8 py-4 bg-slate-900 text-white border border-white/10 rounded-2xl flex items-center gap-3 font-bold hover:bg-slate-800 transition-colors">
                  <GooglePlayIcon />
                  <div className="text-left leading-none">
                    <span className="text-[10px] uppercase block opacity-60">
                      Google Play
                    </span>
                    <span className="text-sm uppercase tracking-tighter">
                      Install
                    </span>
                  </div>
                </MagneticButton>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <Check size={18} className="text-emerald-400" />
                <span
                  className={`text-white text-sm font-semibold ${poppins.className}`}
                >
                  Free Forever
                </span>
              </div>
            </div>
          </div>

          {/* --- Center: Landscape Dashboard Mockup --- */}
          <div className="relative w-full max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              {/* Luxury Browser Mockup */}
              <div className="relative z-20 bg-slate-900 rounded-[2rem] p-2 md:p-4 shadow-[0_50px_100px_-20px_rgba(16,185,129,0.2)] border border-white/10 overflow-hidden">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-6 py-3 bg-slate-800/50 rounded-t-[1.5rem] border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                  </div>
                  <div
                    className={`hidden md:block px-6 py-1.5 bg-slate-950/50 rounded-full text-[10px] text-slate-500 font-bold tracking-tight border border-white/5 ${poppins.className}`}
                  >
                    cloud.dozacenter.io/analytics/live
                  </div>
                  <div className="w-12" />
                </div>

                {/* Landscape Image Container */}
                <div className="relative aspect-[16/10] md:aspect-[16/9] bg-slate-950 rounded-b-[1.5rem] overflow-hidden group">
                  <Image
                    src="/assets/images/dashboard screenshot.png"
                    alt="Doza Center Landscape Dashboard"
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-[3s] ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* --- Floating "Live Data" Badges --- */}
              {/* Revenue Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-4 md:-left-12 top-1/4 p-4 md:p-6 bg-slate-900 text-white rounded-3xl shadow-2xl flex items-center gap-4 border border-white/10 backdrop-blur-xl z-30"
              >
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <div
                    className={`text-2xl md:text-3xl font-bold leading-none ${bebasNeue.className}`}
                  >
                    ₦1.2M
                  </div>
                  <div className="text-[9px] font-black uppercase opacity-60 tracking-widest">
                    Revenue Today
                  </div>
                </div>
              </motion.div>

              {/* Uptime Badge */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -right-4 md:-right-10 top-10 p-4 md:p-5 bg-white rounded-3xl shadow-2xl flex items-center gap-4 z-30 hidden sm:flex"
              >
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <Zap size={20} fill="currentColor" />
                </div>
                <div>
                  <div
                    className={`text-slate-900 text-xl font-bold ${bebasNeue.className}`}
                  >
                    99.9%
                  </div>
                  <div className="text-[9px] text-slate-400 font-black uppercase tracking-tight">
                    System Sync
                  </div>
                </div>
              </motion.div>

              {/* Rating Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-6 bottom-20 p-4 bg-emerald-500 rounded-2xl shadow-xl z-30 border-4 border-slate-950 hidden md:block"
              >
                <div className="flex items-center gap-2">
                  <Star size={16} fill="white" className="text-white" />
                  <span
                    className={`text-white font-bold text-sm ${poppins.className}`}
                  >
                    4.9/5 Rating
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Connectivity Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-video border border-emerald-500/10 rounded-[4rem] animate-ping [animation-duration:4s]" />
          </div>

          {/* --- Bottom: Feature Row --- */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pt-12">
            {[
              {
                icon: Globe,
                title: "Universal",
                desc: "Access from any browser.",
              },
              {
                icon: Activity,
                title: "Live Sync",
                desc: "Instant staff updates.",
              },
              {
                icon: Shield,
                title: "Encrypted",
                desc: "Tier-4 data security.",
              },
              {
                icon: Cloud,
                title: "Auto-Backup",
                desc: "Zero data loss sync.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all"
              >
                <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-4">
                  <f.icon size={20} />
                </div>
                <h3
                  className={`text-lg font-bold text-white mb-1 ${bebasNeue.className}`}
                >
                  {f.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Sub-Components ---

const SectionLabel: React.FC<{ text: string }> = ({ text }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
    <span
      className={`text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] ${poppins.className}`}
    >
      {text}
    </span>
  </div>
);

const MagneticButton: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerI = left + width / 2;
    const centerJ = top + height / 2;
    x.set(clientX - centerI);
    y.set(clientY - centerJ);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: dx, y: dy }}
      className="relative"
    >
      <button className={className}>{children}</button>
    </motion.div>
  );
};

const GrainOverlay = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-overlay">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

// --- Icons ---

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
  </svg>
);

export default AppDownload;
