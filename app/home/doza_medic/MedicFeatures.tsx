"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Video,
  FileText,
  BarChart3,
  Shield,
  Globe,
  DollarSign,
  ArrowRight,
  Database,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import Link from "next/link";

const clinicalTools = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    desc: "Automated booking with reminders to reduce missed appointments and no‑shows.",
  },
  {
    icon: Video,
    title: "Telehealth Visits",
    desc: "Secure, high‑quality video consultations with screen sharing and file transfer.",
  },
  {
    icon: FileText,
    title: "Digital Records",
    desc: "Easy to use templates for quick, accurate patient documentation.",
  },
  {
    icon: BarChart3,
    title: "Practice Analytics",
    desc: "Real time dashboard showing revenue, patient volume, and staff performance.",
  },
];

const backendInfrastructure = [
  {
    icon: Shield,
    title: "HIPAA & NDPR Ready",
    desc: "End to end encryption with multi‑factor authentication for all users.",
  },
  {
    icon: Database,
    title: "System Integration",
    desc: "Works with lab services, pharmacies, and existing practice software.",
  },
  {
    icon: DollarSign,
    title: "Billing Automation",
    desc: "Insurance verification, claim submission, and payment tracking made simple.",
  },
  {
    icon: Globe,
    title: "Remote Access",
    desc: "Secure access to patient data from any browser, anywhere.",
  },
];

export default function MedicFeatures() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Core Clinical Tools same header pattern */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2
                className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
              >
                CORE CLINICAL
                <br />
                <span className="text-emerald-600">TOOLS.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p
                className={`text-slate-500 font-medium text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
              >
                Everything you need to run a modern practice from scheduling to
                deep analytics.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicalTools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                  <tool.icon size={28} />
                </div>
                <h4
                  className={`text-2xl font-bold text-slate-800 mb-3 ${bebasNeue.className}`}
                >
                  {tool.title}
                </h4>
                <p
                  className={`text-slate-500 text-sm leading-relaxed ${poppins.className}`}
                >
                  {tool.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Foundation same header */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2
                className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
              >
                TECHNICAL
                <br />
                <span className="text-emerald-600">FOUNDATION.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p
                className={`text-slate-500 font-medium text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
              >
                Built to be secure, reliable, and easy to integrate with your
                existing systems.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {backendInfrastructure.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <feat.icon size={28} />
                </div>
                <div>
                  <h4
                    className={`text-2xl font-bold text-slate-800 mb-2 ${bebasNeue.className}`}
                  >
                    {feat.title}
                  </h4>
                  <p
                    className={`text-slate-500 text-sm leading-relaxed ${poppins.className}`}
                  >
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges clean */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-center text-slate-400 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
            <span className={poppins.className}>HL7 & FHIR ready</span>
            <span>•</span>
            <span className={poppins.className}>Multi‑factor auth</span>
            <span>•</span>
            <span className={poppins.className}>Real time sync</span>
            <span>•</span>
            <span className={poppins.className}>Audit logs</span>
          </div>
        </div>
      </section>

      {/* Final CTA same as about page */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-center shadow-xl">
            <h2
              className={`text-4xl md:text-6xl font-bold text-white mb-6 ${bebasNeue.className}`}
            >
              READY TO UPGRADE
              <br />
              <span className="text-emerald-400">YOUR PRACTICE?</span>
            </h2>
            <p
              className={`text-slate-300 text-base md:text-lg mb-10 max-w-xl mx-auto ${poppins.className}`}
            >
              Join the growing network of providers using Doza every day. It's
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
