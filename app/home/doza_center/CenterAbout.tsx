"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building,
  Stethoscope,
  Pill,
  FlaskRound,
  Ambulance,
  Cloud,
  Brain,
  Network,
  ArrowRight,
  Monitor,
} from "lucide-react";
import { bebasNeue, poppins } from "./constant";

const CenterAbout: React.FC = () => {
  const centerTypes = [
    {
      icon: Building,
      title: "Hospitals",
      desc: "Full-stack EMR for multi-department coordination and ward management.",
      status: "Enterprise Ready",
      color: "from-blue-500/20",
    },
    {
      icon: Stethoscope,
      title: "Clinics",
      desc: "Streamlined digital scheduling and rapid patient history retrieval.",
      status: "Instant Setup",
      color: "from-emerald-500/20",
    },
    {
      icon: Pill,
      title: "Pharmacies",
      desc: "Real-time inventory control linked to automated e-prescriptions.",
      status: "Sync Active",
      color: "from-purple-500/20",
    },
    {
      icon: Monitor,
      title: "Telemedicine",
      desc: "Integrated video consultations with instant medical record charting.",
      status: "Always On",
      color: "from-cyan-500/20",
    },
    {
      icon: FlaskRound,
      title: "Laboratories",
      desc: "End-to-end test tracking and instant result delivery to patients.",
      status: "LIMS Integrated",
      color: "from-rose-500/20",
    },
    {
      icon: Ambulance,
      title: "Emergency",
      desc: "Real-time dispatch coordination and trauma record synchronization.",
      status: "Critical Link",
      color: "from-orange-500/20",
    },
  ];

  return (
    <section
      className={`py-24 bg-white relative overflow-hidden ${poppins.className}`}
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[0.9] tracking-tighter ${bebasNeue.className}`}
            >
              BUILT FOR ANY <br />
              <span className="text-emerald-600">MEDICAL SCALE</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-lg leading-snug border-l-2 border-emerald-500 pl-6">
            From basic practices to large-scale hospital chains, Doza adapts to
            your specific operational rhythm.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {centerTypes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-emerald-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm border border-slate-100 group-hover:text-emerald-600 transition-colors">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-slate-100">
                  {item.status}
                </span>
              </div>

              <h3
                className={`text-3xl font-bold text-slate-900 mb-3 ${bebasNeue.className}`}
              >
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CenterAbout;
