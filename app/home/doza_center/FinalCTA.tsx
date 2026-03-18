"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  MessageCircle,
  Shield,
  Clock,
  Zap,
  ChevronRight,
} from "lucide-react";
import { bebasNeue, poppins } from "./constant";

const FinalCTA: React.FC = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className={`relative py-32 lg:py-48 bg-[#011413] overflow-hidden ${poppins.className}`}
    >
      {/* Advanced Mesh & Radial Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 blur-[160px] rounded-full opacity-50" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="flex flex-col items-center"
        >
          {/* Label with Live Pulse */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 group cursor-default"
          >
            <div className="relative">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping absolute inset-0" />
              <div className="w-2 h-2 bg-emerald-500 rounded-full relative" />
            </div>
            <span className="text-emerald-400 text-[10px] tracking-[0.3em] font-black uppercase">
              Limited Institutional Onboarding
            </span>
          </motion.div>

          {/* Epic Headline */}
          <motion.h2
            variants={itemVariants}
            className={`text-6xl md:text-9xl font-bold text-white leading-[0.8] mb-10 tracking-tighter ${bebasNeue.className}`}
          >
            THE FUTURE OF <br />
            <span className="text-emerald-500 italic">YOUR CLINIC</span> STARTS
            NOW
          </motion.h2>

          {/* High-Authority Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-emerald-100/50 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-14 font-medium"
          >
            Don&apos;t let legacy paperwork slow your healing potential. Join
            2,000+ facilities automating their growth with Doza&apos;s AI-driven
            EMR ecosystem.
          </motion.p>

          {/* Action Hub */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full"
          >
            <Link href="/registration/center" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-80 px-10 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-3xl font-black text-lg tracking-wide transition-all shadow-[0_20px_50px_rgba(16,185,129,0.2)] flex items-center justify-center gap-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Building2 size={22} />
                <span>START FREE TRIAL</span>
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </Link>

            <button className="w-full sm:w-auto px-10 py-6 bg-white/5 border border-white/10 text-white rounded-3xl font-black text-sm tracking-[0.1em] hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-xl uppercase">
              <MessageCircle size={20} />
              <span>Speak with an Expert</span>
            </button>
          </motion.div>

          {/* System Status / Indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mt-24 pt-16 border-t border-white/10 w-full"
          >
            {[
              {
                icon: Shield,
                title: "HIPAA Compliant",
                status: "Encrypted",
              },
              {
                icon: Clock,
                title: "15 Min Migration",
                status: "Cloud Native",
              },
              {
                icon: Zap,
                title: "Zero Setup Fee",
                status: "Instant Access",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center group ${i === 2 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all border border-white/5 group-hover:border-emerald-500/20">
                  <item.icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-slate-400 group-hover:text-emerald-400 transition-colors"
                  />
                </div>
                <h4 className="text-white text-[11px] font-black uppercase tracking-widest mb-1">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                  <p className="text-emerald-500/40 text-[9px] uppercase font-black tracking-widest">
                    {item.status}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
