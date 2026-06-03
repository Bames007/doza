"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Fingerprint,
  CheckCircle,
  Globe,
} from "lucide-react";

const bebasNeue = { className: "font-['Bebas_Neue']" };
const poppins = { className: "font-['Poppins']" };

const trustPoints = [
  {
    icon: Shield,
    title: "Your data stays yours",
    desc: "We never sell or share your health information. You control who sees what, and for how long.",
    color: "#2AB04A",
  },
  {
    icon: Lock,
    title: "Bank‑level encryption",
    desc: "Every record is encrypted end‑to‑end. Even if someone intercepts it, they can't read it.",
    color: "#2E98ED",
  },
  {
    icon: Eye,
    title: "You see everything",
    desc: "Full audit log of who accessed your data and when. No secrets. No surprises.",
    color: "#2AB04A",
  },
  {
    icon: Fingerprint,
    title: "Only you can unlock",
    desc: "Biometric login and multi‑factor authentication. Your identity is your key.",
    color: "#2E98ED",
  },
];

const certifications = [
  { name: "HIPAA Compliant", color: "#2AB04A" },
  { name: "GDPR Ready", color: "#2E98ED" },
  { name: "SOC 2 Type II", color: "#1f2a1d" },
  { name: "ISO 27001", color: "#336443" },
];

export default function AssuredSafety() {
  return (
    <section className="bg-white py-20 md:py-32 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-5xl md:text-8xl font-bold leading-[1.1] md:leading-[0.9] tracking-[0.01rem] ${bebasNeue.className}`}
            >
              Safety <br />
              <span className="text-emerald-600">by design</span>
            </h2>
          </div>
          <p
            className={`text-slate-500 font-medium max-w-sm text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
          >
            We built Doza from the ground up with privacy and security as the
            foundation so you never have to worry.
          </p>
        </div>

        {/* Trust points grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {trustPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all group-hover:scale-105"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon
                  size={32}
                  style={{ color: item.color }}
                  strokeWidth={1.2}
                />
              </div>
              <h3
                className={`text-xl font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm text-slate-500 leading-relaxed ${poppins.className}`}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications & compliance badges */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-10 mb-16 border border-slate-100 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle size={24} className="text-emerald-600" />
                <span
                  className={`text-sm font-semibold uppercase tracking-wider ${poppins.className}`}
                >
                  Certified & compliant
                </span>
              </div>
              <p
                className={`text-slate-500 text-sm max-w-md ${poppins.className}`}
              >
                We meet the highest global standards for healthcare data
                security.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 shadow-sm"
                  style={{ color: cert.color }}
                >
                  {cert.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Human assurance quote */}
        <div className="text-center max-w-2xl mx-auto">
          <Globe size={32} className="text-emerald-600/40 mx-auto mb-4" />
          <p className={`text-sm text-slate-500 italic ${poppins.className}`}>
            “Doza is built on the belief that your health data belongs to you –
            and only you. We'll never compromise that trust.”
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-emerald-700">
            <span
              className={`text-[10px] tracking-wider uppercase font-semibold ${poppins.className}`}
            >
              The Doza Team
            </span>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-20 w-24 h-px bg-emerald-600/30 mx-auto" />
      </div>
    </section>
  );
}
