"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Building,
  Stethoscope,
  Pill,
  Eye,
  FlaskRound,
  Ambulance,
  Cloud,
  Brain,
  Network,
  CheckCircle2,
  ArrowRight,
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
      icon: Eye,
      title: "Eye Centers",
      desc: "Specialized ophthalmology workflows and vision-specific charting.",
      status: "Custom Modules",
      color: "from-amber-500/20",
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
      className={`py-28 bg-[#F8FAFC] relative overflow-hidden ${poppins.className}`}
    >
      {/* Dynamic Aura Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">
                Adaptive Infrastructure
              </span>
            </motion.div>
            <h2
              className={`text-6xl md:text-9xl font-bold text-slate-900 leading-[0.8] tracking-tighter ${bebasNeue.className}`}
            >
              VERSATILITY <br />{" "}
              <span className="text-emerald-600">BY DESIGN</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-lg leading-snug border-l-2 border-emerald-500 pl-6">
            Whether you're a boutique clinic or a national hospital chain, Doza
            scales to your specific medical rhythm.
          </p>
        </div>

        {/* Improved Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {centerTypes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative p-10 bg-white border border-slate-200 rounded-[3.5rem] shadow-sm hover:shadow-2xl hover:border-emerald-200 transition-all duration-500"
            >
              {/* Gradient Corner Bloom */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-[3.5rem]`}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-900 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-12 shadow-inner transition-all duration-500">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                    {item.status}
                  </span>
                </div>

                <h3
                  className={`text-4xl font-bold text-slate-900 mb-4 tracking-tight ${bebasNeue.className}`}
                >
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8 min-h-[4rem]">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all cursor-pointer">
                  Explore Module <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Hub: The "Power Card" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-12 md:p-20 bg-slate-900 rounded-[4rem] relative overflow-hidden"
        >
          {/* Background Detail */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3
                className={`text-5xl md:text-8xl text-white mb-8 leading-[0.85] ${bebasNeue.className}`}
              >
                ONE HUB. <br />{" "}
                <span className="text-emerald-500">ALL SYSTEMS.</span>
              </h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                Bridge your legacy software with Doza's AI engine. We don't
                replace your workflow—we supercharge it.
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  "HL7 Compliant",
                  "AES-256 Security",
                  "Real-time Sync",
                  "Multi-Tenant",
                ].map((tag) => (
                  <div
                    key={tag}
                    className="px-5 py-2 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold text-emerald-400 uppercase tracking-widest backdrop-blur-md"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Sync Latency", value: "<10ms", icon: Network },
                  { label: "Uptime", value: "99.99%", icon: Cloud },
                  { label: "AI Insights", value: "Real-time", icon: Brain },
                  { label: "Support", value: "24/7 Live", icon: Stethoscope },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-slate-950/40 rounded-[2rem] border border-white/5"
                  >
                    <stat.icon className="text-emerald-500 mb-4" size={20} />
                    <div
                      className={`text-3xl text-white ${bebasNeue.className}`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[9px] text-slate-500 font-black uppercase tracking-widest mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CenterAbout;
