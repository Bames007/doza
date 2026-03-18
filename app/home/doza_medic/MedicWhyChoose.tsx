"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Clock,
  Award,
  Globe,
  BarChart3,
  MessageSquare,
  FileText,
  Calendar,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { useRouter } from "next/navigation";

export default function MedicWhyChoose() {
  const router = useRouter();
  const navToRegister = () => router.push("/registration/medic");

  const benefits = [
    {
      icon: DollarSign,
      title: "Revenue Unleashed",
      accent: "#2BB14B",
      description:
        "Stop leaving money on the table. Our medics see an average 40% uptick in billable hours through automated optimization.",
      features: [
        "Smart Billing Engine",
        "No-Show Protection",
        "Tiered Patient Access",
      ],
    },
    {
      icon: Clock,
      title: "Reclaim Your Time",
      accent: "#0086DB",
      description:
        "We handle the bureaucracy. You handle the healing. Save 15+ hours monthly on digital paperwork.",
      features: ["AI Voice Charting", "Auto-Scheduling", "Instant Referrals"],
    },
  ];

  const metrics = [
    { value: "40%", label: "Revenue Lift", color: "text-[#2BB14B]" },
    { value: "15hr", label: "Monthly Saved", color: "text-[#0086DB]" },
    { value: "95%", label: "Patient Loyalty", color: "text-[#2BB14B]" },
    { value: "Top 1%", label: "Tech Stack", color: "text-[#0086DB]" },
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden w-full">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#2BB14B]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#0086DB]/5 rounded-full blur-[100px]" />
      </div>

      {/* 1. THE HOOK SECTION */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 mb-8"
          >
            <Sparkles size={14} className="text-[#2BB14B]" />
            <span
              className={`text-white text-[10px] tracking-[0.3em] font-bold uppercase ${poppins.className}`}
            >
              Elite Medical Infrastructure
            </span>
          </motion.div>

          <h2
            className={`text-7xl md:text-9xl font-bold text-slate-900 leading-[0.85] tracking-tighter mb-10 ${bebasNeue.className}`}
          >
            YOU HEAL THE WORLD. <br />
            <span className="text-[#0086DB]">WE RUN THE REST.</span>
          </h2>

          <p
            className={`text-slate-500 text-xl max-w-2xl mx-auto mb-12 ${poppins.className}`}
          >
            Why settle for fragmented software? Join the unified ecosystem where
            luxury design meets clinical precision.
          </p>
        </div>
      </section>

      {/* 2. THE DUAL POWER CARDS */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 overflow-hidden group"
            >
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg"
                  style={{ backgroundColor: b.accent }}
                >
                  <b.icon size={32} />
                </div>
                <h3
                  className={`text-5xl font-bold text-slate-900 mb-6 ${bebasNeue.className}`}
                >
                  {b.title}
                </h3>
                <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
                  {b.description}
                </p>

                <div className="space-y-4">
                  {b.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 opacity-20" />
                      <span className="text-slate-700 font-bold text-sm tracking-tight uppercase">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Background Accent */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. THE "RESULTS" STRIP */}
      <section className="py-24 bg-slate-900 mx-6 rounded-[4rem] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className={`text-6xl md:text-8xl font-bold mb-2 ${bebasNeue.className} ${m.color}`}
                >
                  {m.value}
                </div>
                <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLINICAL BEAUTY (Image/Content) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2
              className={`text-6xl md:text-8xl font-bold text-slate-900 leading-[0.8] mb-10 ${bebasNeue.className}`}
            >
              A DASHBOARD AS <br />{" "}
              <span className="text-[#2BB14B]">PURE AS YOUR CARE.</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Practice Analytics",
                  desc: "Visual data that actually makes sense.",
                  icon: BarChart3,
                },
                {
                  title: "Global Reach",
                  desc: "Consult with anyone, anywhere, instantly.",
                  icon: Globe,
                },
                {
                  title: "Military-Grade Security",
                  desc: "Beyond HIPAA. Peace of mind included.",
                  icon: Shield,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#0086DB] group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="p-4 bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100">
              <img
                src="/assets/images/medic-dashboard-preview.jpg"
                alt="The Beauty of Doza"
                className="rounded-[2rem] w-full grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Absolute badge */}
            <div className="absolute -bottom-10 -left-10 p-8 bg-[#2BB14B] rounded-[2rem] text-white shadow-2xl rotate-3">
              <TrendingUp size={32} className="mb-2" />
              <div className={`text-3xl font-bold ${bebasNeue.className}`}>
                PEAK PERFORMANCE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE FINAL CALL (Seductive Join) */}
      <section className="pb-32 px-6">
        <motion.div
          onClick={navToRegister}
          whileHover={{ scale: 1.01 }}
          className="max-w-6xl mx-auto rounded-[4rem] bg-gradient-to-br from-slate-900 to-slate-800 p-1 bg-white relative overflow-hidden group cursor-pointer"
        >
          <div className="bg-slate-900 rounded-[3.9rem] p-16 md:p-24 text-center relative z-10">
            <h2
              className={`text-6xl md:text-9xl font-bold text-white mb-10 ${bebasNeue.className}`}
            >
              YOUR PRACTICE. <br />{" "}
              <span className="text-[#2BB14B]">EVOLVED.</span>
            </h2>
            <button className="px-12 py-6 bg-[#0086DB] text-white rounded-2xl font-bold flex items-center gap-4 mx-auto hover:bg-[#2BB14B] transition-all duration-500 hover:scale-110 shadow-xl shadow-blue-500/20">
              JOIN DOZA MEDICS
              <ArrowUpRight size={24} />
            </button>
          </div>

          {/* Subtle brand lines in background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2BB14B]/5 to-transparent pointer-events-none" />
        </motion.div>
      </section>
    </div>
  );
}
