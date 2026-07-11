"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Stethoscope,
  Activity,
  Apple,
  Heart,
  FlaskConical,
  Eye,
  UserPlus,
  ClipboardCheck,
  Shield,
  TrendingUp,
  Users,
  Award,
  Target,
} from "lucide-react";
import Link from "next/link";

const bebasNeue = { className: "font-['Bebas_Neue']" };
const poppins = { className: "font-['Poppins']" };

const roles = [
  {
    title: "Doctors",
    icon: Stethoscope,
    desc: "Complete patient records, digital prescriptions, and lab integration.",
  },
  {
    title: "Nurses",
    icon: Activity,
    desc: "Real time vitals, medication logs, and care handoffs.",
  },
  {
    title: "Nutritionists",
    icon: Apple,
    desc: "Meal planning, dietary tracking, and patient progress reports.",
  },
  {
    title: "Therapists",
    icon: Heart,
    desc: "Secure session notes, mood tracking, and appointment scheduling.",
  },
  {
    title: "Pharmacists",
    icon: FlaskConical,
    desc: "Inventory management, prescription verification, and refill alerts.",
  },
  {
    title: "Opticians",
    icon: Eye,
    desc: "Prescription history, lens ordering, and vision test records.",
  },
  {
    title: "Specialists",
    icon: UserPlus,
    desc: "Custom workflows for cardiology, dermatology, and more.",
  },
];

export default function MedicAbout() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. OUR PURPOSE consistent two‑column header + simple narrative */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2
                className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
              >
                MEDICINE IS AN ART,
                <br />
                <span className="text-emerald-600">
                  SOFTWARE IS THE CANVAS.
                </span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p
                className={`text-slate-500 font-medium text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
              >
                We don't digitize bureaucracy we remove it. Built for doctors,
                by doctors. Doza handles the paperwork so you can focus on the
                patient.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                Why does the technology meant to heal the patient often hinder
                the practitioner? We asked this question and built Doza to
                answer it.
              </p>
              <p>
                Doza gives you a clean, fast dashboard to manage patient
                records, write prescriptions, and coordinate with your team. No
                clutter. No confusion.
              </p>
            </div>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                Every feature is designed to save you time and reduce errors.
                From one click referrals to automated billing, we handle the
                logistics so you can focus on care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE OFFER three simple pillars */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2
                className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
              >
                WHAT WE OFFER
                <br />
                <span className="text-emerald-600">PROVIDERS.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p
                className={`text-slate-500 font-medium text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
              >
                Three core tools to modernise your practice and improve patient
                outcomes without the complexity.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ClipboardCheck,
                label: "Complete Patient Records",
                desc: "Every note, test result, and prescription in one secure timeline.",
              },
              {
                icon: Shield,
                label: "You Control Your Data",
                desc: "Encrypted records that you own. Share access only with your team.",
              },
              {
                icon: TrendingUp,
                label: "Better Care, Faster",
                desc: "Fewer missed appointments, faster lab results, and clear care coordination.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all mb-5">
                  <item.icon size={28} />
                </div>
                <h3
                  className={`text-2xl font-bold text-slate-800 mb-3 ${bebasNeue.className}`}
                >
                  {item.label}
                </h3>
                <p
                  className={`text-slate-500 text-sm leading-relaxed ${poppins.className}`}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div
                className={`text-4xl font-bold text-emerald-600 ${bebasNeue.className}`}
              >
                2k+
              </div>
              <div
                className={`text-xs text-slate-500 uppercase tracking-wide ${poppins.className}`}
              >
                Active providers
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl font-bold text-emerald-600 ${bebasNeue.className}`}
              >
                15k+
              </div>
              <div
                className={`text-xs text-slate-500 uppercase tracking-wide ${poppins.className}`}
              >
                Patients managed
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl font-bold text-emerald-600 ${bebasNeue.className}`}
              >
                98%
              </div>
              <div
                className={`text-xs text-slate-500 uppercase tracking-wide ${poppins.className}`}
              >
                Provider satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOR EVERY MEDICAL ROLE role cards */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2
                className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
              >
                FOR EVERY
                <br />
                <span className="text-emerald-600">MEDICAL ROLE.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p
                className={`text-slate-500 font-medium text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
              >
                We designed Doza to fit the daily work of every healthcare
                professional from general practice to specialty clinics.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all mb-4">
                  <role.icon size={24} />
                </div>
                <h3
                  className={`text-2xl font-bold text-slate-800 mb-2 ${bebasNeue.className}`}
                >
                  {role.title}
                </h3>
                <p
                  className={`text-sm text-slate-500 leading-relaxed ${poppins.className}`}
                >
                  {role.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY PROVIDERS CHOOSE US consistent value props */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-emerald-50/20 to-slate-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <h2
                className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
              >
                WHY PROVIDERS
                <br />
                <span className="text-emerald-600">CHOOSE US.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p
                className={`text-slate-500 font-medium text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
              >
                Built by clinicians for clinicians we focus on what matters:
                saving time, reducing errors, and improving patient care.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Team Collaboration",
                desc: "Share patient notes securely with your colleagues.",
              },
              {
                icon: Award,
                title: "Fast Onboarding",
                desc: "Set up your practice in under 5 minutes.",
              },
              {
                icon: Shield,
                title: "HIPAA Ready",
                desc: "Bank level encryption for all patient data.",
              },
              {
                icon: TrendingUp,
                title: "No Hidden Fees",
                desc: "Free during beta pay only when you grow.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mx-auto mb-4">
                  <item.icon size={22} />
                </div>
                <h3
                  className={`text-2xl font-bold text-slate-800 mb-2 ${bebasNeue.className}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm text-slate-500 leading-relaxed ${poppins.className}`}
                >
                  {" "}
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA clean, modern */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-center shadow-xl">
            <h2
              className={`text-4xl md:text-6xl font-bold text-white mb-6 ${bebasNeue.className}`}
            >
              READY TO MODERNISE
              <br />
              YOUR PRACTICE?
            </h2>
            <p
              className={`text-slate-300 text-base md:text-lg mb-10 max-w-xl mx-auto ${poppins.className}`}
            >
              Join medical professionals using Doza to deliver better care with
              less administrative work.
            </p>
            <Link href="/registration/medic">
              <button className="group inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg">
                Get started it's free
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
