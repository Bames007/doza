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
    <section className="bg-white py-32 text-[#1f2a1d]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#336443]" />
            <span className="text-[11px] tracking-[0.3em] text-[#336443] uppercase font-['Poppins'] font-semibold">
              Your Peace of Mind
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-['Bebas_Neue'] leading-[1.1] text-[#1f2a1d] mb-4">
            Safety <span className="text-[#85AB8B] italic">by design</span>
          </h2>
          <p className="text-[#4b5b47] font-['Poppins'] text-lg leading-relaxed">
            We built Doza from the ground up with privacy and security as the
            foundation – so you never have to worry.
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
              <h3 className="text-xl font-['Bebas_Neue'] tracking-wide mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#4b5b47] font-['Poppins'] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications & compliance badges */}
        <div className="bg-[#FAFAFA] rounded-3xl p-8 md:p-12 mb-16 border border-black/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle size={24} className="text-[#2AB04A]" />
                <span className="font-['Poppins'] text-sm font-semibold uppercase tracking-wider">
                  Certified & compliant
                </span>
              </div>
              <p className="text-[#4b5b47] font-['Poppins'] text-sm max-w-md">
                We meet the highest global standards for healthcare data
                security.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, i) => (
                <span
                  key={i}
                  className="px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white border border-black/10 shadow-sm"
                  style={{ color: cert.color }}
                >
                  {cert.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Simple, human assurance */}
        <div className="text-center max-w-2xl mx-auto">
          <Globe size={32} className="text-[#336443] mx-auto mb-4 opacity-40" />
          <p className="text-sm text-[#4b5b47] font-['Poppins'] italic">
            “Doza is built on the belief that your health data belongs to you –
            and only you. We'll never compromise that trust.”
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-[#336443]">
            <span className="text-[10px] tracking-wider uppercase font-semibold">
              The Doza Team
            </span>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-20 w-24 h-px bg-[#336443] mx-auto opacity-30" />
      </div>
    </section>
  );
}
