"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Star, Stethoscope } from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { MagneticButton, GrainOverlay } from "@/app/ui/Premium";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-40 px-6 bg-[#FCFDFF] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden p-12 lg:p-32 bg-slate-950 rounded-[3rem] lg:rounded-[5rem] text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
        >
          <GrainOverlay />

          {/* Dynamic Light Rays */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 Resorts w-[800px] h-[500px] bg-[#2BB14B]/20 blur-[150px] rounded-full opacity-50" />
            <div className="absolute -bottom-[20%] right-0 w-[400px] h-[400px] bg-[#0086DB]/10 blur-[120px] rounded-full opacity-30" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-[#2BB14B] animate-pulse" />
              <span
                className={`text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase ${poppins.className}`}
              >
                Ready to transform?
              </span>
            </motion.div>

            <h2
              className={`text-6xl md:text-8xl lg:text-[10rem] font-bold text-white mb-10 leading-[0.8] tracking-tighter ${bebasNeue.className}`}
            >
              SECURE YOUR <br />
              <span className="text-[#2BB14B] italic">HEALTH FUTURE.</span>
            </h2>

            <p
              className={`text-lg md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed font-light ${poppins.className}`}
            >
              Join 50,000+ Nigerians who have upgraded to a proactive health
              lifestyle. Mastered by Doza,{" "}
              <span className="text-white">perfected by you.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/registration/user" className="w-full sm:w-auto">
                <MagneticButton className="w-full px-12 py-7 bg-[#2BB14B] text-white rounded-2xl font-black text-xl flex items-center justify-center gap-4 hover:shadow-[0_20px_50px_rgba(43,177,75,0.3)] transition-all group">
                  <span
                    className={
                      bebasNeue.className + " tracking-widest text-2xl"
                    }
                  >
                    START FREE TRIAL
                  </span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </MagneticButton>
              </Link>

              <button className="w-full sm:w-auto px-10 py-7 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-2xl font-bold flex items-center justify-center gap-4 hover:bg-white/10 transition-all group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Play size={14} fill="white" />
                </div>
                <span
                  className={bebasNeue.className + " tracking-widest text-2xl"}
                >
                  WATCH STORIES
                </span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-10 opacity-50">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#0086DB]" size={24} />
                <span
                  className={`text-[10px] font-bold text-white tracking-[0.2em] uppercase ${poppins.className}`}
                >
                  Bank-Level Encryption
                </span>
              </div>
              <div className="hidden md:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="flex text-[#2BB14B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <span
                  className={`text-[10px] font-bold text-white tracking-[0.2em] uppercase ${poppins.className}`}
                >
                  4.9/5 User Rating
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
