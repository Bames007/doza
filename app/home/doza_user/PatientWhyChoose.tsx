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
  ArrowUpRight,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { PremiumCard, GrainOverlay } from "@/app/ui/Premium";

export default function PatientWhyChoose() {
  const features = [
    {
      icon: FileText,
      title: "Your Medical Records",
      description:
        "All your health information in one secure place. Share with any doctor instantly.",
      benefits: ["Access anywhere", "Secure & private", "Emergency access"],
      scenario:
        "Paramedics can see your critical health information right away in an emergency.",
      color: "blue",
      span: "lg:col-span-2",
    },
    {
      icon: Activity,
      title: "Health Tracking",
      description:
        "Monitor your heart rate, activity, and other vital signs. Get alerts when something looks wrong.",
      benefits: [
        "Spot problems early",
        "Share with your doctor",
        "Track changes over time",
      ],
      scenario:
        "Doza noticed an irregular heartbeat and alerted your doctor automatically.",
      color: "green",
      span: "lg:col-span-1",
    },
    {
      icon: Video,
      title: "Video Doctor Visits",
      description:
        "See a doctor from home. Get prescriptions, referrals, and medical advice without traveling.",
      benefits: [
        "No waiting rooms",
        "Include family members",
        "Digital prescriptions",
      ],
      scenario:
        "Had a video visit with a specialist 100 miles away within 30 minutes.",
      color: "blue",
      span: "lg:col-span-1",
    },
    {
      icon: MapPin,
      title: "Find Nearby Care",
      description:
        "See live wait times at ERs and which pharmacies have your medication in stock.",
      benefits: [
        "Real ER wait times",
        "Medicine inventory",
        "Hospital status updates",
      ],
      scenario:
        "Found the only pharmacy near you that had your specific medication ready.",
      color: "green",
      span: "lg:col-span-2",
    },
    {
      icon: Bell,
      title: "Medication Help",
      description:
        "Get reminders for every dose. Never run out with automatic refill alerts.",
      benefits: ["Refill reminders", "Drug safety checks", "Dose tracking"],
      scenario:
        "Your refill is ordered and delivered before you take your last pill.",
      color: "blue",
      span: "lg:col-span-1",
    },
    {
      icon: MessageCircle,
      title: "Patient Communities",
      description:
        "Connect with others who have the same condition. Learn from real patient experiences.",
      benefits: ["Verified information", "Peer support", "Doctor-led groups"],
      scenario:
        "Joined a diabetes support group led by a certified diabetes educator.",
      color: "green",
      span: "lg:col-span-1",
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#FCFDFF]">
      <GrainOverlay />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- New Header: Two-column layout (same as provided) --- */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
            >
              WHY PATIENTS
              <br />
              <span className="text-emerald-600">CHOOSE DOZA</span>
            </h2>
          </div>
          <p
            className={`text-slate-500 font-medium max-w-sm text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
          >
            Doza puts you in control of your health. Keep your records, see
            doctors fast, track your medications, and find care near you all in
            one simple app.
          </p>
        </div>

        {/* --- Bento Grid --- */}
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

                {/* Real‑world impact footer (without Zap) */}
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-1.5 rounded-lg ${
                        feature.color === "blue"
                          ? "bg-blue-50 text-[#0086DB]"
                          : "bg-emerald-50 text-[#2BB14B]"
                      }`}
                    >
                      <CheckCircle size={14} />
                    </div>
                    <div className="flex flex-col">
                      <span
                        className={`text-[9px] font-black uppercase tracking-[0.2em] mb-1 ${
                          feature.color === "blue"
                            ? "text-[#0086DB]"
                            : "text-[#2BB14B]"
                        }`}
                      >
                        Real example
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
