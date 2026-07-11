"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Star,
  Stethoscope,
  CheckCircle,
  Users,
  Heart,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import Link from "next/link";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side – main content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h2
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tighter ${bebasNeue.className}`}
            >
              Your health,
              <br />
              <span className="text-emerald-600">fully in your hands</span>
            </h2>

            <p
              className={`text-base md:text-lg text-slate-500 mt-6 mb-8 leading-relaxed max-w-md ${poppins.className}`}
            >
              Join thousands of patients who have simplified their care. Get
              instant access to your records, video visits, medication tracking,
              and more – all from your browser.
            </p>

            {/* Feature list */}
            <div className="space-y-3 mb-10">
              {[
                "Free during beta – no credit card",
                "Set up in under 2 minutes",
                "Cancel anytime, no questions",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-emerald-500" />
                  <span
                    className={`text-sm text-slate-600 ${poppins.className}`}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/registration/user">
                <button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-md group">
                  <span className={`${bebasNeue.className} tracking-wider`}>
                    JOIN NOW
                  </span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all group">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-50">
                  <Play size={14} fill="currentColor" />
                </div>
                <span className={`${bebasNeue.className} tracking-wider`}>
                  WATCH STORIES
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right side – testimonial card + stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Main testimonial card */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8 relative z-10">
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p
                className={`text-slate-700 text-base md:text-lg italic leading-relaxed mb-6 ${poppins.className}`}
              >
                “Doza helped me find the right specialist in minutes instead of
                days. My whole family uses it now.”
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div>
                  <p
                    className={`font-bold text-slate-800 ${bebasNeue.className} text-lg`}
                  >
                    Amina B.
                  </p>
                  <p className={`text-xs text-slate-500 ${poppins.className}`}>
                    Lagos • Verified patient
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full blur-2xl opacity-60 -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-100 rounded-full blur-2xl opacity-60 -z-10" />

            {/* Stats row below the card */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-slate-100">
                <Users size={20} className="text-emerald-500 mx-auto mb-2" />
                <div
                  className={`text-xl font-bold text-slate-800 ${bebasNeue.className}`}
                >
                  2,000+
                </div>
                <div
                  className={`text-[9px] text-slate-500 uppercase tracking-wide ${poppins.className}`}
                >
                  Active users
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-slate-100">
                <Heart size={20} className="text-emerald-500 mx-auto mb-2" />
                <div
                  className={`text-xl font-bold text-slate-800 ${bebasNeue.className}`}
                >
                  98%
                </div>
                <div
                  className={`text-[9px] text-slate-500 uppercase tracking-wide ${poppins.className}`}
                >
                  Satisfaction
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-slate-100">
                <ShieldCheck
                  size={20}
                  className="text-emerald-500 mx-auto mb-2"
                />
                <div
                  className={`text-xl font-bold text-slate-800 ${bebasNeue.className}`}
                >
                  AES-256
                </div>
                <div
                  className={`text-[9px] text-slate-500 uppercase tracking-wide ${poppins.className}`}
                >
                  Encryption
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional social proof bar at bottom (optional) */}
        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <Stethoscope size={18} className="text-emerald-500" />
            <span className={`text-xs text-slate-500 ${poppins.className}`}>
              10+ specialties
            </span>
          </div>
          <div className="w-px h-4 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-emerald-500" />
            <span className={`text-xs text-slate-500 ${poppins.className}`}>
              Instant care access
            </span>
          </div>
          <div className="w-px h-4 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-emerald-500" />
            <span className={`text-xs text-slate-500 ${poppins.className}`}>
              HIPAA & GDPR ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
