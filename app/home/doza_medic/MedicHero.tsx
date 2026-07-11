"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  ArrowRight,
  PlayCircle,
  TrendingUp,
  X,
  Plus,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MedicHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const avatars = [
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop",
  ];

  return (
    <div className="h-screen w-full bg-slate-50 overflow-hidden relative font-['Poppins']">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50 animate-gradient-slow opacity-100" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-200 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-200 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <style jsx global>{`
        @keyframes gradient-slow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 15s ease infinite;
        }
      `}</style>

      {/* Main Content Layout: Aligned to bottom with top padding for navbar */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-8 flex items-end pb-10 pt-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <h1
              className={`${bebasNeue.className} text-7xl md:text-9xl text-slate-900 leading-[0.9] tracking-tighter`}
            >
              MODERNIZE YOUR <br />
              <span className="text-emerald-600">PRACTICE.</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              Experience the platform that automates administrative friction.
              Manage patients, track growth, and scale your impact—all from one
              interface.
            </p>

            <div className="flex gap-4">
              <Link href="/registration/medic">
                <button className="group px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20">
                  <span
                    className={`${bebasNeue.className} text-xl tracking-wide`}
                  >
                    JOIN DOZA
                  </span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-4">
              <div className="flex -space-x-3">
                {avatars.map((url, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden"
                  >
                    <img
                      src={url}
                      alt="Medic"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-emerald-500 shadow-md flex items-center justify-center text-white">
                  <Plus size={18} />
                </div>
              </div>
              <div>
                <p className={`${bebasNeue.className} text-2xl text-slate-800`}>
                  2,000+ Verified
                </p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Medical Professionals
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Floating Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-20 bg-white/60 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white/50 w-full">
              <div
                className="aspect-video bg-slate-900 rounded-2xl overflow-hidden relative group cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <div className="w-16 h-4 bg-emerald-500/20 rounded-md" />
                    <div className="w-8 h-8 rounded-full bg-slate-700" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-slate-800 rounded-xl animate-pulse" />
                    <div className="h-16 bg-slate-800 rounded-xl animate-pulse delay-150" />
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <PlayCircle size={32} className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-10 -bottom-10 bg-white p-6 rounded-2xl shadow-xl z-30 border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className={`${bebasNeue.className} text-3xl`}>+40%</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Efficiency
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white z-50"
              >
                <X />
              </button>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
