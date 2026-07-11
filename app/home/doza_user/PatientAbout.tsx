"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, Activity, ArrowUpRight } from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { PremiumCard, TiltCard, GrainOverlay } from "@/app/ui/Premium";

export default function PatientAbout() {
  const items = [
    {
      id: "01",
      icon: ShieldCheck,
      title: "Your Medical Records",
      desc: "Stop repeating your health history to every new doctor. Keep all your records in one secure place that you control.",
      features: [
        "All records in one place",
        "Share with your doctors",
        "You decide who sees what",
        "Keep records for life",
      ],
      color: "from-[#059669] to-[#065f46]",
      lightBg: "bg-emerald-50",
      iconColor: "text-[#059669]",
    },
    {
      id: "02",
      icon: Stethoscope,
      title: "See a Doctor Fast",
      desc: "Connect with the right specialist when you need one. Get help for emergencies or regular checkups without long waits.",
      features: [
        "Video visits with doctors",
        "Find the right specialist",
        "See ER wait times",
        "Talk to a nurse anytime",
      ],
      color: "from-[#10b981] to-[#059669]",
      lightBg: "bg-emerald-50",
      iconColor: "text-[#10b981]",
    },
    {
      id: "03",
      icon: Activity,
      title: "Track Your Health",
      desc: "Keep track of your medications, daily habits, and health measurements. Get reminders so you never miss a dose.",
      features: [
        "Connect health devices",
        "Medication reminders",
        "Track your daily routine",
        "See your health progress",
      ],
      color: "from-[#064e3b] to-[#059669]",
      lightBg: "bg-emerald-50",
      iconColor: "text-[#064e3b]",
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#F8FDF9]">
      <GrainOverlay />

      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-200/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
            >
              YOUR HEALTH,
              <br />
              <span className="text-emerald-600">IN ONE PLACE</span>
            </h2>
          </div>
          <p
            className={`text-slate-500 font-medium max-w-sm text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
          >
            Doza gives you control over your medical care. Manage your health
            records, see doctors quickly, and track your medications — all in
            one simple app.
          </p>
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
                <PremiumCard className="h-full group border-emerald-100 hover:border-emerald-300 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-emerald-100/50">
                  <span
                    className={`absolute -right-4 -top-8 text-9xl font-bold opacity-[0.05] select-none ${bebasNeue.className}`}
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
                      <li key={feat} className="flex items-center gap-3">
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

                  <Link href="/registration/user">
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#059669] group-hover:gap-4 transition-all">
                      Start Your Journey <ArrowUpRight size={14} />
                    </button>
                  </Link>
                </PremiumCard>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* --- Simple Stats Bar --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-[2rem] border border-emerald-50 shadow-[0_20px_50px_rgba(5,150,105,0.05)]" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-12 p-12 md:p-16">
            {[
              {
                number: "100%",
                label: "Your Records",
                sub: "You stay in control",
              },
              {
                number: "24/7",
                label: "Doctor Access",
                sub: "Help when you need it",
              },
              {
                number: "Fast",
                label: "ER Wait Times",
                sub: "Know before you go",
              },
              {
                number: "Clear",
                label: "Health Tracking",
                sub: "See your progress",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div
                  className={`text-5xl md:text-6xl font-bold text-slate-900 mb-1 tracking-tighter ${bebasNeue.className}`}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-[10px] font-black uppercase tracking-[0.2em] text-[#059669] mb-1 ${poppins.className}`}
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
