"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  Users,
  TrendingUp,
  Calculator,
  X,
  ShieldCheck,
  Globe,
  StethoscopeIcon,
  Sparkles,
  Zap,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { useRouter } from "next/navigation";

export default function FinalCTA() {
  const router = useRouter();
  const [isCalcOpen, setIsCalcOpen] = useState(false);
  const [patientsPerMonth, setPatientsPerMonth] = useState(60);
  const [estimatedEarnings, setEstimatedEarnings] = useState(0);

  useEffect(() => {
    const baseRate = 14500;
    setEstimatedEarnings(patientsPerMonth * baseRate);
  }, [patientsPerMonth]);

  const handleJoin = () => router.push("/registration/medic");

  const partnershipTiers = [
    {
      name: "Starter",
      price: "₦0",
      description: "For solo practitioners entering the digital health space.",
      features: ["100 Patients/mo", "Telehealth Core", "Basic Analytics"],
      potential: "₦500K",
      highlight: false,
    },
    {
      name: "Professional",
      price: "₦0",
      description: "Scale your clinical impact with priority patient routing.",
      features: [
        "Unlimited Patients",
        "Advanced AI Triage",
        "Priority Referrals",
        "Billing Automation",
      ],
      potential: "₦1.8M",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Full-stack solutions for hospitals and centers.",
      features: ["Multi-Center Sync", "Custom API Access", "Dedicated AM"],
      potential: "₦5M+",
      highlight: false,
    },
  ];

  return (
    <div
      className={`min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-emerald-200 ${poppins.className} overflow-x-hidden`}
    >
      {/* --- Ambient Background Elements --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-16 px-6 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-8"
          >
            <Sparkles size={14} className="text-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
              2026 Partner Intake Now Open
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-6xl md:text-[9rem] font-bold leading-[0.85] tracking-tighter mb-8 ${bebasNeue.className}`}
          >
            PRACTICE <span className="text-emerald-600">LIMITLESS</span>
          </motion.h1>

          <p className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 15,000+ Nigerian medics using Doza to automate their growth and
            focus on what matters:{" "}
            <span className="text-slate-900 font-semibold underline decoration-emerald-400 decoration-2">
              their patients.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleJoin}
              className="w-full sm:w-auto px-10 py-5 bg-emerald-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-200 hover:bg-emerald-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
            >
              START GROWING{" "}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setIsCalcOpen(true)}
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
            >
              <Calculator size={20} /> CHECK EARNINGS
            </button>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID STATS --- */}
      <section className="px-6 py-10 z-10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Main Stat */}
          <div className="col-span-2 md:col-span-2 p-8 bg-slate-900 rounded-[2.5rem] text-white flex flex-col justify-between min-h-[240px] group overflow-hidden relative">
            <div className="relative z-10">
              <Globe
                className="text-emerald-400 mb-6 group-hover:rotate-12 transition-transform"
                size={32}
              />
              <h3 className={`text-6xl font-bold ${bebasNeue.className}`}>
                36 STATES
              </h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">
                Nationwide Coverage
              </p>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
              <Globe size={200} />
            </div>
          </div>

          {/* Secure Stat */}
          <div className="col-span-2 md:col-span-1 p-8 bg-emerald-50 border border-emerald-100 rounded-[2.5rem] flex flex-col justify-between">
            <ShieldCheck className="text-emerald-600" size={32} />
            <div>
              <h3
                className={`text-4xl font-bold text-slate-900 ${bebasNeue.className}`}
              >
                NDPR SECURE
              </h3>
              <p className="text-slate-500 text-[10px] font-bold uppercase mt-1">
                Hospital Grade Encryption
              </p>
            </div>
          </div>

          {/* Revenue Stat */}
          <div className="col-span-2 md:col-span-1 p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <TrendingUp className="text-emerald-600" size={32} />
              <span className="bg-emerald-100 text-emerald-700 text-[9px] font-black px-2 py-1 rounded-md uppercase">
                Top Growth
              </span>
            </div>
            <div>
              <h3
                className={`text-5xl font-bold text-slate-900 ${bebasNeue.className}`}
              >
                +85%
              </h3>
              <p className="text-slate-500 text-[10px] font-bold uppercase mt-1">
                Avg. Rev Increase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PARTNERSHIP CARDS --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-5xl md:text-7xl font-bold ${bebasNeue.className}`}
            >
              PARTNERSHIP LEVELS
            </h2>
            <p className="text-slate-500 font-medium">
              Simple, transparent, and built for Nigerian healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnershipTiers.map((tier, i) => (
              <div
                key={i}
                className={`p-10 rounded-[3rem] border-2 transition-all duration-500 flex flex-col ${
                  tier.highlight
                    ? "bg-white border-emerald-500 shadow-2xl shadow-emerald-100 scale-105 z-20"
                    : "bg-white border-slate-100 hover:border-slate-200"
                }`}
              >
                <div className="mb-8">
                  {tier.highlight && (
                    <span className="bg-emerald-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase mb-4 inline-block">
                      Most Popular
                    </span>
                  )}
                  <h4 className={`text-4xl font-bold ${bebasNeue.className}`}>
                    {tier.name}
                  </h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span
                    className={`text-6xl font-bold ${bebasNeue.className} text-slate-900`}
                  >
                    {tier.price}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
                    / Setup
                  </span>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Zap size={14} className="text-emerald-500" />
                      <span className="text-sm font-semibold text-slate-700">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleJoin}
                  className={`w-full py-5 rounded-2xl font-bold text-sm transition-all ${
                    tier.highlight
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-slate-900 text-white hover:bg-black"
                  }`}
                >
                  SELECT {tier.name.toUpperCase()}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALCULATOR MODAL --- */}
      <AnimatePresence>
        {isCalcOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCalcOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => setIsCalcOpen(false)}
                className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-10">
                <h3
                  className={`text-5xl font-bold text-slate-900 leading-none ${bebasNeue.className}`}
                >
                  REVENUE ESTIMATOR
                </h3>
                <p className="text-slate-500 text-xs font-bold uppercase mt-2">
                  Adjust volume to see your potential
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-xs font-black uppercase text-slate-400 tracking-widest">
                      Patients / Month
                    </span>
                    <span
                      className={`text-4xl font-bold text-emerald-600 ${bebasNeue.className}`}
                    >
                      {patientsPerMonth}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={patientsPerMonth}
                    onChange={(e) =>
                      setPatientsPerMonth(parseInt(e.target.value))
                    }
                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>

                <div className="p-8 bg-slate-900 rounded-[2.5rem] text-center">
                  <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                    Projected Monthly Net
                  </p>
                  <h2
                    className={`text-6xl md:text-7xl text-white font-bold ${bebasNeue.className}`}
                  >
                    ₦{estimatedEarnings.toLocaleString()}
                  </h2>
                </div>

                <button
                  onClick={handleJoin}
                  className="w-full py-6 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-3"
                >
                  CLAIM THIS REVENUE <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MOBILE STICKY CTA --- */}
      <div className="fixed bottom-8 left-6 right-6 md:hidden z-50">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-white p-2 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white ml-1">
            <StethoscopeIcon size={24} />
          </div>
          <div className="flex-grow">
            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest leading-none mb-1">
              Join the 15k
            </p>
            <p className="font-bold text-slate-900 text-sm">Become a Partner</p>
          </div>
          <button
            onClick={handleJoin}
            className="bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold text-xs uppercase"
          >
            Join
          </button>
        </motion.div>
      </div>
    </div>
  );
}
