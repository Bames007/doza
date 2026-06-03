"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Code,
  Activity,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";

// Optimized variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

export default function MeetFounder() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-[#FDFDFC] py-20 px-6 md:px-12 selection:bg-emerald-100"
    >
      <div className="max-w-6xl mx-auto space-y-24">
        {/* HERO SECTION */}
        <motion.section
          variants={itemVariants}
          className="grid md:grid-cols-12 gap-12 items-center"
        >
          <div className="md:col-span-5 relative">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl">
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply" />
              <img
                src="/assets/ceo.png"
                alt="Eddy Bames"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-emerald-100 hidden md:block">
              <div className="text-emerald-600 font-bold text-4xl">10+</div>
              <div className="text-slate-500 text-sm font-medium">
                Years in Tech
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-8">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-widest uppercase">
              The Founder
            </span>
            <h1 className="text-[clamp(3.5rem,8vw,6rem)] leading-[0.85] font-['Bebas_Neue'] text-slate-900 tracking-tight">
              Eddy <span className="text-emerald-500 italic block">Bames</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg font-['Poppins']">
              Engineer, developer, and believer in a world where no patient is
              turned away because a hospital lacks the right tools.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="h-1 w-12 bg-emerald-500 rounded-full" />
              <div className="h-1 w-4 bg-emerald-200 rounded-full" />
            </div>
          </div>
        </motion.section>

        {/* BENTO GRID SECTION */}
        <motion.section
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Genesis Box */}
          <div className="md:col-span-2 bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-['Bebas_Neue'] text-slate-900 mb-6">
              The Genesis
            </h3>
            <div className="space-y-6 text-slate-600 font-['Poppins'] leading-relaxed">
              <p>
                Eddy has been building technology since 2012 – from financial
                platforms to developer tools. But it was watching patients being
                turned away from hospital after hospital that changed
                everything.
              </p>
              <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 text-lg italic text-slate-800">
                "I realized healthcare runs on disconnected islands. No shared
                records, no real-time availability. I started Doza because no
                one should die simply because a hospital doesn't talk to another
                hospital."
              </blockquote>
            </div>
          </div>

          {/* Quote Box */}
          <div className="bg-slate-900 p-10 rounded-[2rem] text-white flex flex-col justify-center items-center text-center">
            <Code size={48} className="text-emerald-400 mb-6" />
            <p className="text-3xl font-['Bebas_Neue'] leading-tight">
              Code for care,
              <br />
              not for clicks.
            </p>
          </div>
        </motion.section>

        {/* MISSION & VISION */}
        <motion.section
          variants={itemVariants}
          className="bg-emerald-600 rounded-[2rem] p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6 opacity-90">
              <Activity size={24} />
              <h3 className="text-2xl font-['Bebas_Neue'] uppercase tracking-widest">
                Our Mission
              </h3>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 opacity-95 font-light">
              We are building the infrastructure for the next generation of
              healthcare. We connect every patient to the right doctor,
              pharmacy, and facility instantly.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-bold">
              <Target size={20} className="text-emerald-200" />
              <span>Zero avoidable denials by 2030</span>
            </div>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500 rounded-full blur-3xl opacity-50" />
        </motion.section>

        {/* LETTERS SECTION */}
        <motion.section
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          <LetterCard
            title="To Our Investors"
            icon={TrendingUp}
            content="You're not just funding a platform. You're funding a future where a mother in a rural village gets the same speed of care as a CEO in a capital city. Doza is infrastructure, and infrastructure saves lives."
            sign="Eddy Bames"
          />
          <LetterCard
            title="To Our Users"
            icon={Users}
            content="Your health story should follow you – not the other way around. I built Doza for every person who has ever been lost in a maze of referrals, lost records, and lost time. You are why we exist."
            sign="— Eddy"
          />
        </motion.section>
      </div>
    </motion.main>
  );
}

function LetterCard({ title, icon: Icon, content, sign }: any) {
  return (
    <div className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="bg-emerald-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
        <Icon className="text-emerald-600" size={24} />
      </div>
      <h3 className="text-2xl mb-4 font-['Bebas_Neue'] text-slate-900">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed mb-8 font-['Poppins']">
        {content}
      </p>
      <div className="text-emerald-700 font-bold text-xs uppercase tracking-widest italic font-['Poppins']">
        {sign}
      </div>
    </div>
  );
}
