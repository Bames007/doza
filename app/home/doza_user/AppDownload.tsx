"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Zap,
  Shield,
  Cloud,
  Check,
  Sparkles,
  Star,
  ArrowRight,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import {
  TiltCard,
  PremiumCard,
  MagneticButton,
  GrainOverlay,
} from "@/app/ui/Premium";
import Image from "next/image";

export default function AppDownload() {
  const features = [
    {
      icon: Smartphone,
      title: "MOBILE FIRST",
      desc: "Native iOS & Android experience.",
    },
    {
      icon: Zap,
      title: "INSTANT SYNC",
      desc: "Zero-latency health data updates.",
    },
    {
      icon: Shield,
      title: "ENCRYPTED",
      desc: "Military-grade health data security.",
    },
    {
      icon: Cloud,
      title: "CLOUD VAULT",
      desc: "Access records from any corner of the globe.",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 px-6 bg-[#0B0F1A] overflow-hidden">
      <GrainOverlay />

      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2BB14B]/10 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0086DB]/10 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8"
            >
              <Sparkles size={14} className="text-[#2BB14B]" />
              <span
                className={`text-[10px] font-bold tracking-[0.2em] uppercase text-slate-300 ${poppins.className}`}
              >
                v3.0 Now Live
              </span>
            </motion.div>

            <h2
              className={`text-6xl md:text-8xl font-bold text-white mb-8 leading-[0.85] tracking-tighter ${bebasNeue.className}`}
            >
              YOUR HEALTH. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BB14B] to-[#0086DB]">
                UNTEHTERED.
              </span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {features.map((feat, idx) => (
                <div key={feat.title} className="group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2BB14B] group-hover:bg-[#2BB14B] group-hover:text-white transition-all duration-500">
                      <feat.icon size={18} />
                    </div>
                    <h4
                      className={`text-lg font-bold text-white tracking-tight ${bebasNeue.className}`}
                    >
                      {feat.title}
                    </h4>
                  </div>
                  <p
                    className={`text-xs text-slate-400 leading-relaxed ${poppins.className}`}
                  >
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <MagneticButton className="flex-1 px-8 py-5 bg-white text-slate-950 rounded-2xl font-bold flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform">
                <AppleIcon />
                <div className="text-left leading-none">
                  <p
                    className={`text-[10px] uppercase tracking-wider opacity-60 ${poppins.className}`}
                  >
                    Download on
                  </p>
                  <p className={`text-xl ${bebasNeue.className}`}>App Store</p>
                </div>
              </MagneticButton>
              <MagneticButton className="flex-1 px-8 py-5 bg-[#2BB14B] text-white rounded-2xl font-bold flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform">
                <GooglePlayIcon />
                <div className="text-left leading-none">
                  <p
                    className={`text-[10px] uppercase tracking-wider opacity-80 ${poppins.className}`}
                  >
                    Get it on
                  </p>
                  <p className={`text-xl ${bebasNeue.className}`}>
                    Google Play
                  </p>
                </div>
              </MagneticButton>
            </div>

            <div className="flex items-center gap-8 py-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#0B0F1A] bg-slate-800 flex items-center justify-center overflow-hidden"
                    >
                      <div className="w-full h-full bg-gradient-to-tr from-[#0086DB] to-[#2BB14B]" />
                    </div>
                  ))}
                </div>
                <span
                  className={`text-[11px] font-bold text-slate-400 uppercase tracking-widest ${poppins.className}`}
                >
                  50k+ Active Users
                </span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2BB14B]" />
                <span
                  className={`text-[11px] font-bold text-slate-400 uppercase tracking-widest ${poppins.className}`}
                >
                  No Subscription Required
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20"
            >
              <PremiumCard className="!p-0 border-white/20 shadow-[0_0_100px_rgba(0,134,219,0.2)] rounded-[3rem] overflow-hidden max-w-[320px] mx-auto bg-slate-900">
                <Image
                  src="/assets/images/dashboard screenshot.png"
                  alt="App"
                  width={320}
                  height={650}
                  className="w-full h-auto opacity-90"
                />
              </PremiumCard>
            </motion.div>

            {/* Decorative Data Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full -z-10 animate-[spin_30s_linear_infinite_reverse]" />
          </div>
        </div>
      </div>
    </section>
  );
}

const AppleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
  </svg>
);
