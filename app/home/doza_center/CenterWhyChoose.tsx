"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  TrendingUp,
  ShieldCheck,
  Users,
  Globe,
  Clock,
  Award,
  Handshake,
} from "lucide-react";
import { bebasNeue, poppins } from "./constant";

const CenterWhyChoose: React.FC = () => {
  const benefits = [
    {
      title: "98% Client Retention",
      desc: "From small clinics to large hospital networks Doza is the infrastructure behind modern care.",
      icon: Heart,
      stat: "98%",
      statLabel: "retention",
    },
    {
      title: "35% Higher Efficiency",
      desc: "Reduce admin overhead and reallocate resources to patient care. Measurable ROI within months.",
      icon: TrendingUp,
      stat: "35%",
      statLabel: "cost reduction",
    },
    {
      title: "99.9% Uptime SLA",
      desc: "Mission critical reliability with 24/7 monitoring and dedicated support.",
      icon: Clock,
      stat: "99.9%",
      statLabel: "uptime",
    },
    {
      title: "Global Compliance",
      desc: "Fully compliant with NDPR, GDPR, HIPAA, and local healthcare regulations.",
      icon: ShieldCheck,
      stat: "100%",
      statLabel: "compliant",
    },
    {
      title: "48h Average Setup",
      desc: "Connect your existing EMR, lab systems, and billing software in days, not months.",
      icon: Globe,
      stat: "48h",
      statLabel: "integration",
    },
    {
      title: "24/7 Human Support",
      desc: "Real people, real answers dedicated team ready anytime.",
      icon: Users,
      stat: "always",
      statLabel: "available",
    },
    {
      title: "Award Winning Platform",
      desc: "Recognised for innovation in healthcare technology. Trusted by industry leaders.",
      icon: Award,
      stat: "2026",
      statLabel: "Best HealthTech",
    },
    {
      title: "Future Ready Roadmap",
      desc: "We evolve with you predictive analytics, smarter workflows, and more coming soon.",
      icon: Handshake,
      stat: "always",
      statLabel: "updating",
    },
  ];

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Subtle radial background accents – no gradients on cards */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[90px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header – clean editorial */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[0.9] tracking-tighter ${bebasNeue.className}`}
            >
              BUILT FOR YOUR <br />
              <span className="text-emerald-600">FACILITY'S GROWTH</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-lg leading-snug border-l-2 border-emerald-500 pl-6">
            Doza empowers your team to focus on patients, not paperwork. Real
            results, measurable outcomes, and a partner you can trust.
          </p>
        </div>

        {/* Bento Grid – 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Radial hover effect (pure CSS) */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-emerald-50 rounded-xl">
                    <item.icon
                      size={22}
                      className="text-emerald-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-2xl font-bold text-slate-800 ${bebasNeue.className}`}
                    >
                      {item.stat}
                    </div>
                    <div
                      className={`text-[9px] uppercase tracking-wider text-slate-400 ${poppins.className}`}
                    >
                      {item.statLabel}
                    </div>
                  </div>
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA – with proper link and less rounded corners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className={`text-3xl md:text-4xl mb-2 ${bebasNeue.className}`}>
              Ready to transform your facility?
            </h3>
            <p className={`text-slate-300 text-sm ${poppins.className}`}>
              Join healthcare leaders who trust Doza to run their operations.
            </p>
          </div>
          <Link href="/registration/center">
            <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl">
              Join the Doza Network
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CenterWhyChoose;
