"use client";

import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, Play, Calendar, Star, X } from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import Image from "next/image";
import { SectionLabel, MagneticButton, GrainOverlay } from "@/app/ui/Premium";
import { useRef, useState } from "react";
import Link from "next/link";

// --- Advanced UI Components ---

const FloatingPanel = ({ children, className, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`absolute z-30 rounded-2xl border border-white/40 bg-white/70 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-3 md:p-4 ${className}`}
  >
    {children}
  </motion.div>
);

export default function PatientHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const yPhone = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yFloats = useTransform(scrollYProgress, [0, 1], [0, -130]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen lg:min-h-[110vh] flex items-center justify-center overflow-hidden bg-[#FCFDFF] py-20 lg:py-0"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-[#0086DB]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#2BB14B]/10 blur-[120px] rounded-full" />
        <GrainOverlay />
      </div>

      <div className="relative z-20 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- LEFT: Typography & CTAs --- */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <SectionLabel text="The Precision Medicine Platform" />

            <h1
              className={`mt-6 text-[13vw] sm:text-[10vw] lg:text-[7rem] xl:text-[8.5rem] font-bold leading-[0.85] tracking-tighter text-slate-950 ${bebasNeue.className}`}
            >
              HEALTHCARE <br />
              <span className="relative inline-block text-[#2BB14B] italic">
                REDESIGNED
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-2 left-0 w-full h-1 md:h-2 bg-[#0086DB]/20 origin-left"
                />
              </span>
              <br /> FOR YOU
            </h1>

            <p
              className={`mt-8 text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed font-light ${poppins.className}`}
            >
              Experience a world-class ecosystem where{" "}
              <span className="text-slate-900 font-medium">
                elite expertise
              </span>{" "}
              meets precision technology.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <Link href="/registration/user" className="w-full sm:w-auto">
                <MagneticButton className="w-full px-10 py-5 bg-slate-950 text-white rounded-full font-bold uppercase tracking-[0.15em] text-[10px] flex items-center justify-center gap-3 shadow-2xl hover:bg-[#0086DB] transition-all duration-500 group">
                  Begin Journey
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </MagneticButton>
              </Link>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center gap-4 px-8 py-5 rounded-full border border-slate-200 bg-white/40 backdrop-blur hover:bg-white transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0086DB] shadow-sm group-hover:scale-110 transition-transform">
                  <Play size={14} fill="currentColor" className="ml-0.5" />
                </div>
                <span
                  className={`text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 ${poppins.className}`}
                >
                  Watch Experience
                </span>
              </button>
            </div>
          </div>

          {/* --- RIGHT: The Interactive Mockup --- */}
          <div className="relative flex items-center justify-center perspective-[2000px]">
            <motion.div
              style={{ y: yPhone }}
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 w-[280px] sm:w-[320px] lg:w-[360px] aspect-[1/2] rounded-[3rem] p-3 bg-slate-950 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.3)] border border-white/20"
            >
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-white">
                <Image
                  src="/assets/images/doza mobile.jpg"
                  alt="App UI"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <FloatingPanel
                className="-top-10 -right-4 sm:-right-12 w-48"
                delay={0.6}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#2BB14B] text-white flex items-center justify-center">
                    <Calendar size={16} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    Consult
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-900">
                  Dr. Sarah Jenkins
                </p>
                <p className="text-[9px] text-slate-400">
                  Cardiology • 2:00 PM Today
                </p>
              </FloatingPanel>

              <FloatingPanel
                className="bottom-12 -left-6 sm:-left-16 w-56"
                delay={0.8}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                    Vitals Monitor
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#2BB14B] animate-pulse" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-slate-950 tracking-tighter">
                    98
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase">
                    SpO2
                  </span>
                </div>
              </FloatingPanel>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- VIDEO MODAL --- */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 md:p-10"
          >
            <motion.button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <iframe
                src="https://www.youtube.com/embed/1Bpj38bxJ60?autoplay=1"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
