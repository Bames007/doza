"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  ArrowRight,
  PlayCircle,
  Activity,
  CheckCircle2,
  TrendingUp,
  X,
  Plus,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { useRouter } from "next/navigation";

export default function MedicHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const router = useRouter();

  const avatars = [
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop",
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Decor - Matching Center Hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -mr-48 -mt-48" />
      </div>

      <section className="relative pt-20 pb-32 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 mb-8 shadow-xl shadow-slate-900/20">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span
                  className={`text-white text-[10px] tracking-[0.3em] font-bold uppercase ${poppins.className}`}
                >
                  Clinician-First Ecosystem
                </span>
              </div>

              <h1
                className={`text-7xl md:text-9xl font-bold text-slate-900 mb-8 leading-[0.8] tracking-tighter ${bebasNeue.className}`}
              >
                UPGRADE YOUR <br />
                <span className="text-blue-600 italic">PRACTICE.</span>
              </h1>

              <p
                className={`text-slate-500 text-xl mb-12 max-w-lg leading-relaxed ${poppins.className}`}
              >
                Experience the world’s most intuitive platform for providers.
                Manage patients, automate billing, and scale your impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-16">
                <button
                  onClick={() => router.push("/registration/medic")}
                  className="group px-10 py-6 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-4 transition-all duration-500 shadow-2xl shadow-slate-900/30"
                >
                  <Stethoscope
                    size={22}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  JOIN DOZA MEDICS
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="px-10 py-6 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-4 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm"
                >
                  <PlayCircle size={22} />
                  WATCH DEMO
                </button>
              </div>

              {/* Trust Section */}
              <div className="flex items-center gap-8">
                <div className="flex -space-x-4">
                  {avatars.map((url, i) => (
                    <div
                      key={i}
                      className="w-14 h-14 rounded-full border-4 border-white shadow-2xl overflow-hidden ring-1 ring-slate-100"
                    >
                      <img
                        src={url}
                        alt="Medic"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-14 h-14 rounded-full border-4 border-white bg-blue-600 shadow-2xl flex items-center justify-center text-white ring-1 ring-slate-100">
                    <Plus size={20} />
                  </div>
                </div>
                <div>
                  <p
                    className={`text-2xl font-bold text-slate-900 ${bebasNeue.className}`}
                  >
                    10,000+ Verified
                  </p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                    Medical Professionals
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-20 bg-white rounded-[2.5rem] p-4 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.15)] border border-slate-100">
                <div className="flex items-center justify-between px-8 py-5 border-b border-slate-50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                  </div>
                  <div className="px-5 py-2 bg-slate-50 rounded-full text-[11px] text-slate-400 font-bold border border-slate-100">
                    dozamedic.com/medics
                  </div>
                </div>

                <div
                  className="relative aspect-[4/3] bg-slate-100 rounded-[2rem] overflow-hidden group cursor-pointer mt-2"
                  onClick={() => setIsVideoOpen(true)}
                >
                  {/* Reference to your Center Hero Image asset */}
                  <img
                    src="/assets/images/medic-dashboard-preview.jpg"
                    alt="Center Hero Preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />

                  {/* Luxury Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/5 group-hover:bg-slate-900/20 transition-all duration-500">
                    <div className="w-28 h-28 bg-white/10 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/30 shadow-2xl">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <PlayCircle size={36} className="text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -right-12 top-12 z-30 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-50"
              >
                <TrendingUp size={32} className="text-emerald-500 mb-2" />
                <p
                  className={`text-3xl font-bold text-slate-900 ${bebasNeue.className}`}
                >
                  +40%
                </p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">
                  Revenue Growth
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE LUXURY VIDEO MODAL */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.3)] border border-white/10"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition-all"
              >
                <X size={24} />
              </button>

              {/* VIDEO PLAYER */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                title="Medic Platform Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
