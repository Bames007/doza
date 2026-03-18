"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  Zap,
  Shield,
  Cloud,
  TrendingUp,
  Calendar,
  Monitor,
  MousePointer2,
  Lock,
} from "lucide-react";
import { bebasNeue, poppins } from "./constant";
import Image from "next/image";

const AppDownload: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Monitor,
      title: "Omnichannel Command",
      description:
        "Seamlessly transition from desktop to tablet without losing a single patient record.",
    },
    {
      icon: Zap,
      title: "Zero-Latency Sync",
      description:
        "Proprietary sync engine ensures staff see updates in less than 200ms.",
    },
    {
      icon: Shield,
      title: "Vault-Level Security",
      description:
        "Multi-layered AES-256 encryption that exceeds international health standards.",
    },
    {
      icon: Cloud,
      title: "Edge Sovereignty",
      description:
        "Your data stays local for speed but is backed up globally for resilience.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className={`py-32 bg-[#021817] overflow-hidden relative ${poppins.className}`}
    >
      {/* Animated Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af_1px,transparent_1px),linear-gradient(to_bottom,#1e40af_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating Aura Light */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Left: Strategic Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-400 text-[10px] tracking-[0.3em] font-black uppercase">
                Next-Gen Interface
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className={`text-6xl md:text-9xl font-bold text-white mb-8 leading-[0.8] tracking-tighter ${bebasNeue.className}`}
            >
              CLINIC AT YOUR <br />
              <span className="text-emerald-500">FINGERTIPS.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg mb-12 max-w-lg leading-relaxed font-medium"
            >
              Legacy software is slow. Doza is designed for the high-pressure
              environment of Nigerian healthcare—responsive, intuitive, and
              unbreakable.
            </motion.p>

            <div className="grid grid-cols-1 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative pl-6 border-l border-emerald-500/20 hover:border-emerald-500 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <feature.icon
                      size={18}
                      className="text-emerald-500 group-hover:scale-125 transition-transform"
                    />
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider group-hover:text-emerald-400 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: The Hardware Showcase */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative perspective-1000"
            >
              {/* Desktop Frame */}
              <div className="relative z-20 w-full aspect-[16/10] bg-slate-900 rounded-[2.5rem] p-3 border border-slate-700/50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Header detail */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800 border border-slate-700">
                    <Lock size={10} className="text-emerald-500" />
                    <span className="text-[10px] text-slate-500 font-mono">
                      doza-cloud-secure
                    </span>
                  </div>
                  <div className="w-10" />
                </div>

                <div className="w-full h-full relative group">
                  <Image
                    src="/assets/images/dashboard screenshot.png"
                    alt="Doza Desktop Interface"
                    fill
                    className="object-cover object-top brightness-90 group-hover:brightness-100 transition-all duration-700"
                  />
                  {/* Subtle scanline effect */}
                  <div className="absolute inset-0 bg-scanlines opacity-[0.02] pointer-events-none" />
                </div>

                {/* Glass Metric Cards */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-10 top-[20%] p-6 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl z-30"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/20">
                      <TrendingUp size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">
                        Growth
                      </p>
                      <p
                        className={`text-3xl text-white ${bebasNeue.className}`}
                      >
                        +24%
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -right-8 bottom-[15%] p-6 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl z-30"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500 rounded-2xl shadow-lg shadow-blue-500/20">
                      <Calendar size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest">
                        Appointments
                      </p>
                      <p
                        className={`text-3xl text-white ${bebasNeue.className}`}
                      >
                        142 Today
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Central Glow Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/20 blur-[150px] -z-10 rounded-full" />
            </motion.div>

            {/* Mouse Pointer Detail */}
            <motion.div
              animate={{
                x: [0, 40, -20, 0],
                y: [0, -60, 20, 0],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-1/2 right-1/4 z-40 pointer-events-none opacity-50"
            >
              <MousePointer2 className="text-white fill-white" size={24} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
