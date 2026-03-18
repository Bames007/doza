"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Play,
  Shield,
  BarChart3,
  Users,
  Calendar,
  FileText,
  Smartphone,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { bebasNeue, poppins } from "../home/doza_center/constant";
import Image from "next/image";

const FeaturesTourPage = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const features = [
    {
      icon: BarChart3,
      title: "AI-Powered Analytics",
      description:
        "Get real-time insights into patient flow and revenue trends with advanced algorithms.",
      benefits: [
        "Predictive patient volume",
        "Revenue forecasting",
        "Performance benchmarks",
      ],
    },
    {
      icon: Users,
      title: "Patient Management",
      description:
        "Streamline registration and medical records in one seamless, high-speed platform.",
      benefits: [
        "Digital patient intake",
        "Automated reminders",
        "Centralized records",
      ],
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Optimize staff and resource allocation with intelligent, conflict-free scheduling.",
      benefits: [
        "Automated slot management",
        "Staff optimization",
        "Resource allocation",
      ],
    },
    {
      icon: FileText,
      title: "Free EMR System",
      description:
        "Comprehensive Electronic Medical Records system included at no additional cost.",
      benefits: ["HIPAA compliant", "Custom templates", "Integration ready"],
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description:
        "Manage your center from anywhere with our fully responsive mobile platform.",
      benefits: ["Real-time updates", "On-the-go access", "Push notifications"],
    },
    {
      icon: Shield,
      title: "Compliance Node",
      description:
        "Enterprise-grade security with built-in compliance for global regulations.",
      benefits: ["Data encryption", "Audit trails", "Compliance reporting"],
    },
  ];

  return (
    <div
      className={`min-h-screen bg-[#FDFDFF] text-slate-900 ${poppins.className}`}
    >
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-400/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-purple-400/5 blur-[100px] rounded-full" />
      </div>

      {/* Modern Header */}
      <header className="bg-white/70 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="Doza"
                fill
                className="object-contain transition-transform group-hover:scale-110"
              />
            </div>
            <span
              className={`text-2xl font-black tracking-tighter text-slate-900 ${bebasNeue.className}`}
            >
              DOZA
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600"
            >
              Home
            </Link>
            <Link href="/registration/center">
              <button className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-[10px] font-black tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
                GET STARTED
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8"
            >
              <Play size={14} className="text-blue-600 fill-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.2em]">
                Product Walkthrough
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-6xl md:text-8xl font-bold text-slate-900 mb-8 leading-[0.9] tracking-tighter ${bebasNeue.className}`}
            >
              PRECISION TOOLS FOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                MODERN MEDICINE
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12 font-medium"
            >
              Transforming raw clinical data into actionable patient care.
              Explore the ecosystem designed for high-performance medical
              centers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Floating Stats Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100"
        >
          {[
            { n: "65%", l: "Patient Velocity" },
            { n: "40%", l: "Admin Reduction" },
            { n: "85%", l: "Patient Retention" },
            { n: "50%", l: "OpEx Savings" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div
                className={`text-4xl md:text-6xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors ${bebasNeue.className}`}
              >
                {stat.n}
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {stat.l}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Features Showcase */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group p-10 bg-white rounded-[3rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-slate-50 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h3
                className={`text-3xl text-slate-900 mb-4 tracking-tight ${bebasNeue.className}`}
              >
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                {feature.description}
              </p>

              <div className="mt-auto w-full space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    <span className="text-[10px] font-black text-slate-700 uppercase tracking-tight">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[4rem] bg-slate-900 p-12 md:p-24 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="relative w-12 h-12 mb-8 mx-auto md:mx-0">
                <Image
                  src="/logo.png"
                  alt="Doza"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <h2
                className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight ${bebasNeue.className}`}
              >
                READY TO RECODE YOUR <br />
                <span className="text-blue-500">FACILITY?</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link href="/registration/center">
                <button className="group w-full md:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                  Start Trial
                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </Link>
              <Link href="/">
                <button className="w-full md:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                  Back Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-8 mb-8">
            <Link
              href="/"
              className="text-[10px] font-black uppercase text-slate-400 hover:text-blue-600 tracking-widest"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-[10px] font-black uppercase text-slate-400 hover:text-blue-600 tracking-widest"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-[10px] font-black uppercase text-slate-400 hover:text-blue-600 tracking-widest"
            >
              Compliance
            </Link>
          </div>
          <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.3em]">
            © 2026 DOZA HEALTHCARE. THE NEW STANDARD.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FeaturesTourPage;
