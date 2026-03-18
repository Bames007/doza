"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Zap,
  Award,
  Shield,
  Clock,
  Globe,
  ArrowUpRight,
  Activity,
  ChevronRight,
} from "lucide-react";
import { bebasNeue, poppins } from "./constant";

const CenterWhyChoose: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: "Expanded Patient Base",
      description:
        "Tap into a high-intent patient stream through our geo-intelligent routing.",
      features: ["Geo-Targeting", "Smart Referrals"],
      gridClass: "md:col-span-2 md:row-span-2 bg-slate-900 text-white", // Dark Card
      iconBg: "bg-emerald-500",
      accent: "text-emerald-400",
      isMain: true,
      textColor: "text-white",
      descColor: "text-slate-300",
    },
    {
      icon: Zap,
      title: "Operations",
      description: "Real-time clinic management.",
      features: ["AI Triage"],
      gridClass: "md:col-span-1 md:row-span-1 bg-white border-slate-200", // Light Card
      iconBg: "bg-slate-50",
      accent: "text-emerald-600",
      textColor: "text-slate-900",
      descColor: "text-slate-600",
    },
    {
      icon: Shield,
      title: "Secure Vault",
      description: "HIPAA & NDPR data protection.",
      features: ["Encrypted Records"],
      gridClass: "md:col-span-1 md:row-span-2 bg-emerald-50 border-emerald-100", // Tinted Card
      iconBg: "bg-white",
      accent: "text-emerald-700",
      textColor: "text-emerald-900",
      descColor: "text-emerald-800/70",
    },
    {
      icon: Award,
      title: "Trust Badge",
      description: "Verified elite status.",
      features: ["Quality Certs"],
      gridClass: "md:col-span-1 md:row-span-1 bg-white border-slate-200",
      iconBg: "bg-slate-50",
      accent: "text-emerald-600",
      textColor: "text-slate-900",
      descColor: "text-slate-600",
    },
    {
      icon: Globe,
      title: "The Ecosystem",
      description: "Nationwide specialist collaboration and knowledge sharing.",
      features: ["Provider Portal", "Resource Sharing"],
      gridClass: "md:col-span-2 md:row-span-1 bg-white border-slate-200",
      iconBg: "bg-slate-50",
      accent: "text-emerald-600",
      textColor: "text-slate-900",
      descColor: "text-slate-600",
    },
  ];

  return (
    <section
      id="benefits"
      className={`py-24 bg-[#F8FAFC] relative overflow-hidden ${poppins.className}`}
    >
      {/* Dynamic Background Blur */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-px w-10 bg-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600">
                The 2026 Edge
              </span>
            </motion.div>

            <h2
              className={`text-6xl md:text-8xl font-bold text-slate-900 leading-[0.85] ${bebasNeue.className}`}
            >
              BUILT FOR THE{" "}
              <span className="text-emerald-600 italic">MODERN</span> <br />{" "}
              MEDICAL CENTER
            </h2>
          </div>
          <p className="text-slate-600 font-medium max-w-xs text-sm leading-relaxed">
            Eliminate administrative friction and scale your clinical impact
            with Nigeria's most advanced health infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[220px]">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-[3rem] border flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${benefit.gridClass}`}
            >
              {/* Hover Interaction Overlay */}
              <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-[92%] transition-transform duration-500 opacity-20 pointer-events-none" />

              <div className="relative z-10 flex justify-between items-start">
                <div
                  className={`w-14 h-14 rounded-2xl ${benefit.iconBg} flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform`}
                >
                  <benefit.icon className={benefit.accent} size={28} />
                </div>
                <div
                  className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity ${benefit.textColor}`}
                >
                  Learn More <ChevronRight size={14} />
                </div>
              </div>

              <div className="relative z-10">
                {benefit.isMain && (
                  <div className="mb-6 p-4 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                        Network Pulse
                      </span>
                    </div>
                    <div className="flex justify-between items-end">
                      <p
                        className={`text-4xl font-bold text-white ${bebasNeue.className}`}
                      >
                        2.4M+
                      </p>
                      <p className="text-[9px] font-medium text-slate-300 text-right uppercase tracking-tighter">
                        Patients reaching <br /> out monthly
                      </p>
                    </div>
                  </div>
                )}

                <h3
                  className={`text-3xl font-bold mb-2 tracking-tight ${benefit.textColor} ${bebasNeue.className}`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`text-sm font-medium leading-snug mb-4 ${benefit.descColor}`}
                >
                  {benefit.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {benefit.features.map((f) => (
                    <span
                      key={f}
                      className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl border transition-colors
                        ${
                          benefit.isMain
                            ? "bg-white/10 border-white/20 text-white"
                            : "bg-slate-100 border-slate-200 text-slate-700"
                        }`}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* 24/7 Global Support Callout */}
          <motion.div
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 md:row-span-1 bg-emerald-600 rounded-[3rem] p-8 text-white flex flex-col justify-between group cursor-pointer shadow-lg shadow-emerald-200"
          >
            <Activity
              className="text-white group-hover:animate-pulse"
              size={32}
            />
            <div>
              <h4
                className={`text-4xl font-bold leading-none text-white ${bebasNeue.className}`}
              >
                LIVE <br /> ASSIST
              </h4>
              <p className="text-[10px] font-black text-emerald-100 uppercase mt-2 tracking-widest">
                24/7 Human Support
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CenterWhyChoose;
