"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Video,
  FileText,
  BarChart3,
  Shield,
  Users,
  Zap,
  DollarSign,
  Award,
  Globe,
  Smartphone,
  Cloud,
  Plus,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { useRouter } from "next/navigation";
import {
  PremiumCard,
  TiltCard,
  SectionLabel,
  MagneticButton,
  GrainOverlay,
} from "../../ui/Premium";

export default function MedicFeatures() {
  const router = useRouter();
  const navToRegister = () => router.push("/registration/medic");

  const mainFeatures = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      color: "#2BB14B",
      desc: "AI-optimized calendar that slashes no-shows by 40%.",
    },
    {
      icon: Video,
      title: "Telehealth Hub",
      color: "#0086DB",
      desc: "Military-grade secure video for the borderless clinician.",
    },
    {
      icon: FileText,
      title: "Next-Gen EHR",
      color: "#2BB14B",
      desc: "Custom templates & lab sync designed for speed.",
    },
    {
      icon: BarChart3,
      title: "Practice Insights",
      color: "#0086DB",
      desc: "Real-time revenue and growth analytics at a glance.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white selection:bg-[#2BB14B] selection:text-white">
      <GrainOverlay />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <SectionLabel text="The Doza Ecosystem" />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-7xl md:text-9xl font-bold text-slate-900 mb-8 leading-[0.85] tracking-tighter ${bebasNeue.className}`}
          >
            PRECISION TOOLS. <br />
            <span className="text-[#2BB14B]">UNMATCHED POWER.</span>
          </motion.h1>

          <p
            className={`text-slate-500 text-xl max-w-2xl mx-auto mb-12 ${poppins.className}`}
          >
            A comprehensive suite of clinical intelligence designed to eliminate
            friction and amplify your impact.
          </p>

          <MagneticButton
            onClick={navToRegister}
            className="px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-bold flex items-center gap-4 mx-auto hover:bg-[#0086DB] transition-all duration-500 shadow-2xl"
          >
            GET FULL ACCESS <Plus size={20} />
          </MagneticButton>
        </div>

        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0086DB]/5 blur-[120px] -z-10" />
      </section>

      {/* --- CORE TOOLS (3D TILT EXPERIENCE) --- */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainFeatures.map((f, i) => (
              <TiltCard key={i} className="h-full">
                <PremiumCard className="h-full border-none shadow-xl">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg"
                    style={{ backgroundColor: f.color }}
                  >
                    <f.icon size={28} />
                  </div>
                  <h3
                    className={`text-4xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
                  >
                    {f.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {f.desc}
                  </p>
                </PremiumCard>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADVANCED CAPABILITIES (THE DARK MODE EXPERIENCE) --- */}
      <section className="py-32 px-6 bg-slate-900 mx-4 md:mx-8 rounded-[4rem] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <SectionLabel text="Enterprise Grade" />
            <h2 className={`text-6xl text-white mb-8 ${bebasNeue.className}`}>
              ADVANCED <br />
              <span className="text-[#0086DB]">INFRASTRUCTURE</span>
            </h2>
            <p className="text-slate-400 mb-10">
              Scalable technology that grows with your practice, from
              solo-provider to multi-state clinics.
            </p>

            <button
              onClick={navToRegister}
              className="text-[#2BB14B] font-bold flex items-center gap-2 group tracking-widest text-xs"
            >
              EXPLORE DOCS{" "}
              <Plus
                size={16}
                className="group-hover:rotate-90 transition-transform"
              />
            </button>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                t: "HIPAA ELITE",
                d: "End-to-end encryption & total data sovereignty.",
              },
              {
                icon: Globe,
                t: "MULTI-CLINIC",
                d: "Manage 50+ locations from one unified dashboard.",
              },
              {
                icon: DollarSign,
                t: "SMART REVENUE",
                d: "Auto-insurance verification & instant payouts.",
              },
              {
                icon: Users,
                t: "PATIENT PORTAL",
                d: "Custom branded patient apps for your practice.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <item.icon className="text-[#0086DB] mb-4" size={32} />
                <h4
                  className={`text-2xl text-white mb-2 ${bebasNeue.className}`}
                >
                  {item.t}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH STACK STRIP --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "EHR Systems",
              "Lab Services",
              "Pharmacy Networks",
              "Insurance Providers",
              "Medical Devices",
              "Payment Processors",
              "Scheduling Tools",
            ].map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1, color: "#2BB14B" }}
                className={`px-8 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-bold text-sm cursor-default transition-colors ${poppins.className}`}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className={`text-6xl md:text-8xl font-bold text-slate-900 mb-10 ${bebasNeue.className}`}
          >
            READY TO <span className="text-[#0086DB]">INTEGRATE?</span>
          </h2>
          <MagneticButton
            onClick={navToRegister}
            className="px-16 py-8 bg-[#2BB14B] text-white rounded-3xl font-bold text-xl shadow-2xl hover:shadow-green-500/20 transition-all"
          >
            START YOUR PRACTICE
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
