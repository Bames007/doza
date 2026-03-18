"use client";

import { motion } from "framer-motion";
import {
  Target,
  Globe,
  Shield,
  Zap,
  Users,
  Award,
  BarChart3,
  Heart,
  Building,
  CheckCircle2,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { useRouter } from "next/navigation";

export default function MedicAbout() {
  const router = useRouter();

  const brand = {
    green: "#2BB14B", // Primary
    blue: "#0086DB", // Secondary
    slate: "#0F172A", // Text/Dark
  };

  const navToRegister = () => router.push("/registration/medic");

  const missionItems = [
    {
      icon: Target,
      title: "Our Mission",
      accent: brand.green,
      description:
        "Empowering healthcare professionals with technology that prioritizes patient care over paperwork.",
    },
    {
      icon: Globe,
      title: "Our Vision",
      accent: brand.blue,
      description:
        "A borderless healthcare ecosystem where medical expertise is accessible to every patient, everywhere.",
    },
    {
      icon: Shield,
      title: "Our Commitment",
      accent: brand.slate,
      description:
        "Upholding the world's strictest standards in medical data security and HIPAA compliance.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden w-full selection:bg-green-100">
      {/* 1. ULTRA-CLEAN HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 z-10 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(#2BB14B_1px,transparent_1px)] [background-size:40px_40px] opacity-10 -mr-96 -mt-96"
        />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-6 py-2 rounded-full border border-slate-100 bg-white shadow-sm mb-10"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#2BB14B] animate-ping" />
            <span
              className={`text-slate-900 text-[10px] tracking-[0.3em] font-black uppercase ${poppins.className}`}
            >
              The Future of Practice
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`text-7xl md:text-9xl font-bold text-slate-900 mb-8 leading-[0.8] tracking-tighter ${bebasNeue.className}`}
          >
            PRECISION <br />
            <span className="text-[#2BB14B]">FOR PROFESSIONALS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-slate-500 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12 ${poppins.className}`}
          >
            Doza provides a elite-tier infrastructure for clinicians who demand
            seamless integration, global reach, and absolute security.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={navToRegister}
            className="px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-bold flex items-center gap-4 hover:bg-[#0086DB] transition-all duration-500 shadow-2xl shadow-slate-900/20"
          >
            JOIN THE ECOSYSTEM
            <ArrowUpRight size={22} />
          </motion.button>
        </div>
      </section>

      {/* 2. THE MISSION "EXPERIENCE" GRID */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {missionItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group p-10 rounded-[3rem] bg-slate-50 border border-transparent hover:border-slate-100 hover:bg-white transition-all duration-500 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white transition-transform group-hover:rotate-6 shadow-xl"
                style={{ backgroundColor: item.accent }}
              >
                <item.icon size={32} />
              </div>
              <h3
                className={`text-4xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
              >
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. LUXURY DARK MODE SECTION (The Specialties) */}
      <section className="mx-6 py-32 px-10 bg-slate-900 rounded-[4rem] relative overflow-hidden">
        {/* Subtle Brand Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2BB14B]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0086DB]/10 blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center mb-24">
          <h2
            className={`text-6xl md:text-8xl font-bold text-white leading-none ${bebasNeue.className}`}
          >
            BUILT FOR EVERY <br />{" "}
            <span className="text-[#0086DB]">SPECIALTY.</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Doctors", features: ["EHR Sync", "AI Charts"] },
            { title: "Nurses", features: ["Care Coordination", "Alerts"] },
            { title: "Nutrition", features: ["Meal Plans", "Bio-Data"] },
            { title: "Therapy", features: ["Secure Chat", "Session Logs"] },
          ].map((type, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col h-full hover:bg-white/10 transition-all"
            >
              <h4
                className={`text-3xl font-bold text-white mb-6 ${bebasNeue.className}`}
              >
                {type.title}
              </h4>
              <div className="space-y-4 mt-auto">
                {type.features.map((feat, fi) => (
                  <div key={fi} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#2BB14B]" />
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. ECOSYSTEM STATS (Brand Experience) */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <h2
              className={`text-7xl md:text-9xl font-bold text-slate-900 leading-[0.8] mb-8 ${bebasNeue.className}`}
            >
              GLOBAL <br /> <span className="text-[#2BB14B]">INTEGRATION.</span>
            </h2>
            <p className="text-slate-500 text-xl max-w-lg mb-12 font-medium">
              We connect you with 500,000+ patients across the globe. Our
              green-protocol ensures your practice grows at the speed of light.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Active Patients",
                  val: "500K+",
                  color: "bg-green-50 text-[#2BB14B]",
                },
                {
                  label: "Medical Centers",
                  val: "200+",
                  color: "bg-blue-50 text-[#0086DB]",
                },
              ].map((stat, i) => (
                <div key={i} className={`p-8 rounded-[2rem] ${stat.color}`}>
                  <div
                    className={`text-5xl font-bold mb-2 ${bebasNeue.className}`}
                  >
                    {stat.val}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            {/* Sweet Glass Card Stack */}
            <div className="relative z-10 p-1 bg-white rounded-[3rem] shadow-2xl border border-slate-100 rotate-2">
              <img
                src="/assets/images/dashboard screenshot.png"
                className="rounded-[2.8rem] w-full"
                alt="Experience"
              />
            </div>
            <div className="absolute top-10 left-10 -z-10 w-full h-full bg-[#2BB14B]/10 rounded-[3rem] -rotate-2" />
          </div>
        </div>
      </section>

      {/* 5. THE FINAL CTA EXPERIENCE */}
      <section className="pb-32 px-6">
        <motion.div
          onClick={navToRegister}
          whileHover={{ scale: 0.98 }}
          className="max-w-6xl mx-auto p-20 bg-slate-900 rounded-[4rem] text-center cursor-pointer group relative overflow-hidden"
        >
          {/* Animated Hover Background */}
          <div className="absolute inset-0 bg-[#0086DB] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />

          <div className="relative z-10">
            <h2
              className={`text-6xl md:text-9xl font-bold text-white mb-8 ${bebasNeue.className}`}
            >
              START YOUR <br />{" "}
              <span className="group-hover:text-slate-900 transition-colors">
                NEW CHAPTER.
              </span>
            </h2>
            <div className="flex items-center justify-center gap-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-xl">
                <Plus size={32} />
              </div>
              <span
                className={`text-white text-2xl font-bold ${bebasNeue.className} tracking-widest`}
              >
                JOIN DOZA MEDICS
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
