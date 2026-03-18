"use client";

import { motion } from "framer-motion";
import {
  Users,
  Stethoscope,
  Building,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import {
  SectionLabel,
  PremiumCard,
  TiltCard,
  GrainOverlay,
} from "@/app/ui/Premium";

export default function PatientAbout() {
  const items = [
    {
      id: "01",
      icon: Users,
      title: "The Patient Portal",
      desc: "Personalized health journeys powered by AI. Navigate your wellness with precision tools and instant clinical access.",
      features: [
        "Biometric Syncing",
        "Smart Med-Reminders",
        "Instant Telehealth",
        "Emergency SOS",
      ],
      color: "from-[#2BB14B] to-[#1e7a34]", // Brand Green
      lightBg: "bg-emerald-50/50",
      iconColor: "text-[#2BB14B]",
    },
    {
      id: "02",
      icon: Stethoscope,
      title: "The Practitioner Suite",
      desc: "An elite workspace for modern healers. Reduce administrative burden and focus on what matters: the patient.",
      features: [
        "Cloud-Based EHR",
        "Automated Billing",
        "Global Med-Network",
        "AI Diagnostics",
      ],
      color: "from-[#0086DB] to-[#005fa0]", // Brand Blue
      lightBg: "bg-blue-50/50",
      iconColor: "text-[#0086DB]",
    },
    {
      id: "03",
      icon: Building,
      title: "The Institutional Hub",
      desc: "Enterprise-grade integration for hospitals and clinics. Synchronize your entire facility under one digital roof.",
      features: [
        "Resource Analytics",
        "Staff Optimization",
        "Inventory Control",
        "Patient Flow Tech",
      ],
      color: "from-[#0086DB] via-[#2BB14B] to-[#2BB14B]", // Mixed Gradient
      lightBg: "bg-slate-50/50",
      iconColor: "text-slate-900",
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#FCFDFF]">
      <GrainOverlay />

      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0086DB]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2BB14B]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <SectionLabel text="Our Ecosystem" />
            <h2
              className={`text-6xl md:text-8xl font-bold text-slate-900 leading-[0.9] mt-6 ${bebasNeue.className}`}
            >
              A NEW ERA OF <br />
              <span className="text-[#0086DB]">CONNECTED</span>{" "}
              <span className="text-[#2BB14B]">VITALITY</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`text-slate-500 max-w-sm text-lg font-light leading-relaxed pb-2 ${poppins.className}`}
          >
            Doza isn’t just an app; it’s a symbiotic network where technology
            serves humanity, making elite care a universal standard.
          </motion.p>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard className="h-full">
                <PremiumCard className="h-full group hover:border-[#0086DB]/30 transition-colors duration-500 overflow-hidden">
                  {/* Decorative Background ID */}
                  <span
                    className={`absolute -right-4 -top-8 text-9xl font-bold opacity-[0.03] select-none ${bebasNeue.className}`}
                  >
                    {item.id}
                  </span>

                  <div
                    className={`w-16 h-16 rounded-2xl ${item.lightBg} flex items-center justify-center ${item.iconColor} mb-8 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>

                  <h3
                    className={`text-4xl font-bold text-slate-900 mb-4 tracking-tight ${bebasNeue.className}`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-slate-500 mb-8 leading-relaxed text-sm ${poppins.className}`}
                  >
                    {item.desc}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {item.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-3 group/item"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`}
                        />
                        <span
                          className={`text-xs font-bold uppercase tracking-widest text-slate-700 ${poppins.className}`}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#0086DB] group-hover:gap-4 transition-all">
                    Explore Platform <ArrowUpRight size={14} />
                  </button>
                </PremiumCard>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* --- Luxury Stats Bar --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          {/* Floating Glass Container */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.05)]" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-12 p-12 md:p-16">
            {[
              {
                number: "10k+",
                label: "Verified Specialists",
                sub: "Global Network",
              },
              {
                number: "250+",
                label: "Elite Centers",
                sub: "Integrated Facilities",
              },
              {
                number: "24/7",
                label: "Concierge Care",
                sub: "Instant Access",
              },
              {
                number: "99.9%",
                label: "Uptime Health",
                sub: "Platform Reliability",
              },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center md:text-left">
                <div
                  className={`text-5xl md:text-6xl font-bold text-slate-900 mb-1 tracking-tighter ${bebasNeue.className}`}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-[10px] font-black uppercase tracking-[0.2em] text-[#0086DB] mb-1 ${poppins.className}`}
                >
                  {stat.label}
                </div>
                <div
                  className={`text-[10px] text-slate-400 font-medium ${poppins.className}`}
                >
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
