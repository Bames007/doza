"use client";

import { motion } from "framer-motion";
import {
  Shield,
  TrendingUp,
  Users,
  Award,
  Zap,
  Activity,
  Bell,
  MapPin,
  Smartphone,
  Target,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { SectionLabel, PremiumCard, GrainOverlay } from "@/app/ui/Premium";

export default function PatientFeatures() {
  const mainFeatures = [
    {
      icon: Shield,
      title: "EMERGENCY VAULT",
      desc: "One-tap medical history for first responders.",
      color: "#0086DB",
    },
    {
      icon: TrendingUp,
      title: "BIO-ANALYTICS",
      desc: "Deep-learning insights from your vitals.",
      color: "#2BB14B",
    },
    {
      icon: Users,
      title: "FAMILY HUB",
      desc: "Manage 360° health for your inner circle.",
      color: "#0086DB",
    },
    {
      icon: Award,
      title: "ELITE REWARDS",
      desc: "Turn healthy habits into premium benefits.",
      color: "#2BB14B",
    },
  ];

  const aiStats = [
    { icon: Activity, text: "Continuous Vital Syncing", val: "99.9%" },
    { icon: Bell, text: "Medication Adherence", val: "100%" },
    { icon: Target, text: "Health Goal Accuracy", val: "94%" },
  ];

  return (
    <section className="relative py-24 lg:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* --- Left Content --- */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <SectionLabel text="The Doza Ecosystem" />
              <h2
                className={`mt-6 text-6xl md:text-7xl font-bold text-slate-950 leading-[0.9] tracking-tighter ${bebasNeue.className}`}
              >
                TOTAL CONTROL. <br />
                <span className="text-[#0086DB]">ZERO COMPROMISE.</span>
              </h2>
              <p
                className={`mt-6 text-slate-500 text-lg leading-relaxed ${poppins.className}`}
              >
                We’ve condensed a full medical team into a single, intuitive
                interface. Proactive, precise, and permanently yours.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {mainFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
                >
                  <feat.icon
                    size={24}
                    className="mb-4 transition-colors"
                    style={{ color: feat.color }}
                  />
                  <h3
                    className={`text-xl font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className={`text-xs text-slate-500 leading-snug ${poppins.className}`}
                  >
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- Right: The AI Console --- */}
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0086DB]/10 to-[#2BB14B]/10 blur-[100px] -z-10 rounded-full" />

            <PremiumCard className="relative overflow-hidden !p-0 border-white/40 bg-white/60 backdrop-blur-2xl shadow-2xl">
              <div className="p-8 border-b border-slate-100 bg-white/40 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0086DB] flex items-center justify-center text-white animate-pulse">
                    <Zap size={20} fill="currentColor" />
                  </div>
                  <div>
                    <h3
                      className={`text-2xl font-bold text-slate-900 ${bebasNeue.className}`}
                    >
                      DOZA AI ASSISTANT
                    </h3>
                    <p
                      className={`text-[10px] font-bold text-[#2BB14B] tracking-[0.2em] uppercase ${poppins.className}`}
                    >
                      System: Active
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-slate-200"
                    />
                  ))}
                </div>
              </div>

              <div className="p-8 space-y-4">
                {aiStats.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-50 shadow-sm group hover:border-[#0086DB]/30 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#0086DB] group-hover:bg-[#0086DB] group-hover:text-white transition-colors">
                        <item.icon size={18} />
                      </div>
                      <span
                        className={`text-sm font-medium text-slate-700 ${poppins.className}`}
                      >
                        {item.text}
                      </span>
                    </div>
                    <span
                      className={`text-lg font-bold text-[#2BB14B] ${bebasNeue.className}`}
                    >
                      {item.val}
                    </span>
                  </motion.div>
                ))}

                {/* Visual Data Representation */}
                <div className="mt-6 p-6 rounded-2xl bg-slate-950 text-white relative overflow-hidden">
                  <GrainOverlay />
                  <div className="relative z-10">
                    <p
                      className={`text-[10px] font-bold tracking-[0.3em] text-slate-400 mb-4 ${poppins.className}`}
                    >
                      NETWORK SYNCHRONIZATION
                    </p>
                    <div className="flex items-end gap-1.5 h-12">
                      {[30, 60, 45, 90, 100, 70, 85, 40, 60, 90].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: i * 0.05, duration: 1 }}
                          className="flex-1 bg-[#2BB14B] rounded-t-sm opacity-80"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PremiumCard>
          </div>
        </div>
      </div>
    </section>
  );
}
