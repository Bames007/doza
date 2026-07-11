"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building,
  Stethoscope,
  Pill,
  FlaskRound,
  Ambulance,
  Monitor,
} from "lucide-react";

const bebasNeue = { className: "font-['Bebas_Neue']" };
const poppins = { className: "font-['Poppins']" };

const centerTypes = [
  {
    icon: Building,
    title: "Hospitals",
    desc: "Full‑stack EMR for multi‑department coordination and ward management.",
    status: "Enterprise Ready",
  },
  {
    icon: Stethoscope,
    title: "Clinics",
    desc: "Streamlined digital scheduling and rapid patient history retrieval.",
    status: "Instant Setup",
  },
  {
    icon: Pill,
    title: "Pharmacies",
    desc: "Real‑time inventory control linked to automated e‑prescriptions.",
    status: "Sync Active",
  },
  {
    icon: Monitor,
    title: "Telemedicine",
    desc: "Integrated video consultations with instant medical record charting.",
    status: "Always On",
  },
  {
    icon: FlaskRound,
    title: "Laboratories",
    desc: "End‑to‑end test tracking and instant result delivery to patients.",
    status: "LIMS Integrated",
  },
  {
    icon: Ambulance,
    title: "Emergency",
    desc: "Realtime dispatch coordination and trauma record synchronization.",
    status: "Critical Link",
  },
];

export default function CenterAbout() {
  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header – left heading + right description */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
            >
              BUILT FOR ANY <br />
              <span className="text-emerald-600">MEDICAL SCALE</span>
            </h2>
          </div>
          <p
            className={`text-slate-500 font-medium max-w-sm text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
          >
            From basic practices to large scale hospital chains, Doza adapts to
            your specific operational rhythm.
          </p>
        </div>

        {/* Bento Grid – responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {centerTypes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 md:p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-emerald-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-slate-800 shadow-sm border border-slate-200 group-hover:text-emerald-600 transition-colors">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <span
                  className={`text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-white px-2.5 py-1 rounded-full border border-slate-200 ${poppins.className}`}
                >
                  {item.status}
                </span>
              </div>

              <h3
                className={`text-2xl md:text-3xl font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm text-slate-500 leading-relaxed ${poppins.className}`}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative line */}
        <div className="mt-20 md:mt-32 w-24 h-px bg-emerald-600/30 mx-auto" />
      </div>
    </section>
  );
}
