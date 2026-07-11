"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  Clock,
  BarChart3,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import Link from "next/link";

const primaryBenefits = [
  {
    icon: DollarSign,
    title: "Practice Growth",
    text: "See a real increase in billable hours with our smart scheduling and automated billing. No more missed appointments or delayed payments.",
    features: ["Smart billing", "No‑show reduction", "Flexible payment plans"],
  },
  {
    icon: Clock,
    title: "Less Paperwork",
    text: "Save over 10 hours each month on forms and charts. Voice‑to‑text notes and auto‑filled templates let you focus on patients, not typing.",
    features: [
      "Voice‑to‑text charting",
      "Auto‑scheduling",
      "One‑click referrals",
    ],
  },
];

const performanceMetrics = [
  { value: "2,000+", label: "Active providers" },
  { value: "30%", label: "Efficiency gain" },
  { value: "94%", label: "Patient retention" },
  { value: "HIPAA", label: "Ready certified" },
];

export default function MedicWhyChoose() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. CORE BENEFITS */}

      <section className="py-16 md:py-24 px-4 sm:px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2
                className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
              >
                CORE BENEFITS <br />
                <span className="text-emerald-600">THAT MATTER.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p
                className={`text-slate-500 font-medium text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
              >
                Two pillars that transform how you run your practice more
                revenue, less paperwork, happier staff.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {primaryBenefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 md:p-10 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                  <b.icon size={28} />
                </div>
                <h3
                  className={`text-4xl font-bold text-slate-800 mb-4 ${bebasNeue.className}`}
                >
                  {b.title}
                </h3>
                <p className="text-slate-500 text-base md:text-lg mb-8 leading-relaxed">
                  {b.text}
                </p>
                <div className="space-y-3">
                  {b.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      <span
                        className={`text-sm font-medium text-slate-700 uppercase tracking-wide ${poppins.className}`}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. REAL RESULTS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2
                className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
              >
                REAL RESULTS, <br />
                <span className="text-emerald-600">REAL NUMBERS.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p
                className={`text-slate-500 font-medium text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
              >
                From solo practitioners to large clinics Doza delivers
                measurable improvements in efficiency and patient care.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {performanceMetrics.map((m, i) => (
              <div key={i}>
                <div
                  className={`text-4xl md:text-5xl font-bold text-emerald-600 mb-2 ${bebasNeue.className}`}
                >
                  {m.value}
                </div>
                <div
                  className={`text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-[0.2em] ${poppins.className}`}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DASHBOARD */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2
                className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
              >
                A DASHBOARD AS <br />
                <span className="text-emerald-600">CLEAR AS YOUR CARE.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p
                className={`text-slate-500 font-medium text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
              >
                Turn complex patient data into simple, actionable views all from
                one central hub.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: BarChart3,
                  title: "Practice Analytics",
                  desc: "See your busiest hours, top services, and revenue trends at a glance.",
                },
                {
                  icon: Globe,
                  title: "Telemedicine Ready",
                  desc: "Secure video visits integrated directly into patient records.",
                },
                {
                  icon: Shield,
                  title: "HIPAA Compliant",
                  desc: "Bank level encryption and full audit logs for every action.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4
                      className={`text-lg font-bold text-slate-800 mb-1 ${bebasNeue.className}`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-slate-500 text-sm leading-relaxed ${poppins.className}`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="mx-auto text-[9px] text-slate-400 font-mono">
                  doza.health/dashboard
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-8 w-2/3 bg-white rounded-md border border-slate-100" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-24 bg-white rounded-xl border border-slate-100" />
                  <div className="h-24 bg-white rounded-xl border border-slate-100" />
                  <div className="h-24 bg-white rounded-xl border border-slate-100" />
                </div>
                <div className="h-32 bg-white rounded-xl border border-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-center shadow-xl">
            <h2
              className={`text-4xl md:text-6xl font-bold text-white mb-6 ${bebasNeue.className}`}
            >
              YOUR PRACTICE. <br />
              <span className="text-emerald-400">EVOLVED.</span>
            </h2>
            <p
              className={`text-slate-300 text-base md:text-lg mb-10 max-w-xl mx-auto ${poppins.className}`}
            >
              Join hundreds of providers who have already upgraded to Doza. It's
              free during beta no strings attached.
            </p>
            <Link href="/registration/medic">
              <button className="group inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg">
                Join Doza
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
            <p
              className={`text-[10px] text-slate-400 mt-6 ${poppins.className}`}
            >
              No credit card required • Free during beta
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
