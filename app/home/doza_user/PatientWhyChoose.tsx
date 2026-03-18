"use client";

import { motion } from "framer-motion";
import {
  FileText,
  MapPin,
  Bell,
  Activity,
  Video,
  MessageCircle,
  CheckCircle,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { SectionLabel, PremiumCard, GrainOverlay } from "@/app/ui/Premium";

export default function PatientWhyChoose() {
  const features = [
    {
      icon: FileText,
      title: "Omniscient EMR Access",
      description:
        "Your entire medical biography, decrypted and delivered in one secure digital vault.",
      benefits: [
        "Instant portability",
        "HIPAA Gold-Standard",
        "Emergency override access",
      ],
      scenario:
        "Paramedics can access your critical vitals instantly in emergencies.",
      color: "blue",
      span: "lg:col-span-2", // Large Card
    },
    {
      icon: Activity,
      title: "Predictive AI Vitals",
      description: "Biometric tracking that doesn't just monitor—it predicts.",
      benefits: [
        "Trend forecasting",
        "Early warning system",
        "Direct doc-sync",
      ],
      scenario:
        "Doza detected a heart rate anomaly and alerted your specialist automatically.",
      color: "green",
      span: "lg:col-span-1",
    },
    {
      icon: Video,
      title: "Elite Telepresence",
      description:
        "Global specialists in your living room via 4K clinical-grade video.",
      benefits: [
        "No-wait triage",
        "Multi-family calls",
        "Digital prescriptions",
      ],
      scenario:
        "Consult with a London-based neurologist from your home in minutes.",
      color: "blue",
      span: "lg:col-span-1",
    },
    {
      icon: MapPin,
      title: "Hyper-Local Facility Finder",
      description:
        "Live-inventory tracking for hospitals and pharmacies near you.",
      benefits: ["Live wait times", "Inventory tracking", "ER status updates"],
      scenario:
        "Found the only pharmacy within 10 miles with your specific med in stock.",
      color: "green",
      span: "lg:col-span-2", // Large Card
    },
    {
      icon: Bell,
      title: "Precision Med-Logic",
      description:
        "Intelligent adherence tools that manage the complexity of your health.",
      benefits: ["Auto-refill sync", "Interaction alerts", "Dose tracking"],
      scenario:
        "Refills are scheduled and delivered before you ever hit 'zero'.",
      color: "blue",
      span: "lg:col-span-1",
    },
    {
      icon: MessageCircle,
      title: "The Doza Social Circle",
      description:
        "Exclusive access to curated medical communities and elite practitioners.",
      benefits: ["Verified insights", "Peer support", "Direct medic feeds"],
      scenario:
        "Joined a nutrition circle led by the country's top clinical dietitians.",
      color: "green",
      span: "lg:col-span-1",
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#FCFDFF]">
      <GrainOverlay />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header --- */}
        <div className="flex flex-col items-center text-center mb-24">
          <SectionLabel text="The Doza Advantage" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mt-6 text-6xl md:text-8xl font-bold text-slate-950 leading-[0.9] tracking-tighter ${bebasNeue.className}`}
          >
            THE FUTURE OF <br />
            <span className="text-[#2BB14B]">PATIENT</span>{" "}
            <span className="text-[#0086DB]">POWER</span>
          </motion.h2>
          <p
            className={`mt-8 text-slate-500 max-w-2xl text-lg md:text-xl font-light leading-relaxed ${poppins.className}`}
          >
            We didn’t just build an app; we engineered a proactive ecosystem
            designed to keep you at your peak performance.
          </p>
        </div>

        {/* --- Luxury Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={feature.span}
            >
              <PremiumCard className="h-full group hover:shadow-2xl hover:shadow-[#0086DB]/5 transition-all duration-700 border-white/50 bg-white/40 backdrop-blur-md flex flex-col p-8">
                {/* Icon Header */}
                <div className="flex justify-between items-start mb-10">
                  <div
                    className={`relative w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${
                      feature.color === "blue" ? "bg-[#0086DB]" : "bg-[#2BB14B]"
                    }`}
                  >
                    {/* Background Glow */}
                    <div
                      className={`absolute inset-0 blur-xl opacity-40 -z-10 ${
                        feature.color === "blue"
                          ? "bg-[#0086DB]"
                          : "bg-[#2BB14B]"
                      }`}
                    />
                    <feature.icon size={28} strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-slate-300 group-hover:text-slate-900 transition-colors"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className={`text-4xl font-bold text-slate-900 mb-4 leading-tight ${bebasNeue.className}`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-slate-500 mb-8 text-sm leading-relaxed max-w-md ${poppins.className}`}
                  >
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {feature.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <div
                          className={`w-1 h-1 rounded-full ${feature.color === "blue" ? "bg-[#0086DB]" : "bg-[#2BB14B]"}`}
                        />
                        <span
                          className={`text-[10px] font-bold uppercase tracking-widest text-slate-700 ${poppins.className}`}
                        >
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real World Impact - The "Luxury" Footer */}
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-1.5 rounded-lg ${feature.color === "blue" ? "bg-blue-50 text-[#0086DB]" : "bg-emerald-50 text-[#2BB14B]"}`}
                    >
                      <Zap size={14} fill="currentColor" />
                    </div>
                    <div className="flex flex-col">
                      <span
                        className={`text-[9px] font-black uppercase tracking-[0.2em] mb-1 ${feature.color === "blue" ? "text-[#0086DB]" : "text-[#2BB14B]"}`}
                      >
                        Real-World Impact
                      </span>
                      <p
                        className={`text-[11px] text-slate-500 italic leading-snug ${poppins.className}`}
                      >
                        "{feature.scenario}"
                      </p>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
