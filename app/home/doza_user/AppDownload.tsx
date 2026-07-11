"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Users,
  Shield,
  Activity,
  Check,
  ArrowRight,
  Heart,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { MagneticButton } from "@/app/ui/Premium";
import Image from "next/image";
import Link from "next/link";

// Custom SVG icons for social media
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.218-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772c.5-.509 1.105-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
  </svg>
);

export default function AppDownload() {
  const features = [
    {
      icon: Globe,
      title: "WEB FIRST",
      desc: "Access your health dashboard from any browser, any device. No app install needed.",
    },
    {
      icon: Activity,
      title: "LIVE TRACKING",
      desc: "Real‑time vitals, medication logs, and care coordination for you and your family.",
    },
    {
      icon: Shield,
      title: "SECURE & PRIVATE",
      desc: "Bank‑level encryption for your medical records. You control who sees what.",
    },
    {
      icon: Users,
      title: "FAMILY ACCESS",
      desc: "Invite caregivers and manage health together from one shared web portal.",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FacebookIcon,
      url: "https://facebook.com/dozahealth",
    },
    { name: "X", icon: XIcon, url: "https://x.com/dozahealth" },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://instagram.com/dozahealth",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-white via-emerald-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Two‑column header – responsive */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] md:leading-[0.9] tracking-tight ${bebasNeue.className}`}
            >
              YOUR HEALTH,
              <br />
              <span className="text-emerald-600">ON THE WEB</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p
              className={`text-slate-500 font-medium text-sm sm:text-base leading-relaxed border-l-2 border-emerald-500 pl-4 sm:pl-6 ${poppins.className}`}
            >
              No app download needed. Access your care team, records, and
              medication tools directly from your browser anywhere, anytime.
            </p>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-start">
          {/* Left column: features + registration */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10 md:mb-12">
              {features.map((feat, idx) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <feat.icon
                        size={16}
                        className="sm:w-[18px] sm:h-[18px]"
                      />
                    </div>
                    <h4
                      className={`text-base sm:text-lg font-bold text-slate-800 tracking-tight ${bebasNeue.className}`}
                    >
                      {feat.title}
                    </h4>
                  </div>
                  <p
                    className={`text-xs sm:text-sm text-slate-500 leading-relaxed ${poppins.className}`}
                  >
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <Link href="/registration/user" className="w-full sm:flex-1">
                <MagneticButton className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-emerald-600 text-white rounded-xl font-bold flex items-center justify-center hover:bg-emerald-700 transition-all shadow-md">
                  <div className="text-center leading-tight">
                    <p
                      className={`text-[9px] sm:text-[10px] uppercase tracking-wider opacity-90 ${poppins.className}`}
                    >
                      Get started
                    </p>
                    <p
                      className={`text-base sm:text-lg ${bebasNeue.className}`}
                    >
                      Join Doza
                    </p>
                  </div>
                </MagneticButton>
              </Link>
              <Link href="#community" className="w-full sm:flex-1">
                <MagneticButton className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm">
                  <div className="text-center leading-tight">
                    <p
                      className={`text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-500 ${poppins.className}`}
                    >
                      Learn more
                    </p>
                    <p
                      className={`text-base sm:text-lg ${bebasNeue.className}`}
                    >
                      Watch demo
                    </p>
                  </div>
                </MagneticButton>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center overflow-hidden"
                    >
                      <div className="w-full h-full bg-gradient-to-tr from-emerald-400 to-emerald-600" />
                    </div>
                  ))}
                </div>
                <span
                  className={`text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider ${poppins.className}`}
                >
                  2,000+ Early Users
                </span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Check size={14} className="text-emerald-600" />
                <span
                  className={`text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider ${poppins.className}`}
                >
                  Free During Beta
                </span>
              </div>
            </div>
          </div>

          {/* Right column: Doza logo + community + preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 text-center transition-all hover:shadow-2xl">
              {/* Doza Logo */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="relative w-20 h-20 sm:w-28 sm:h-28">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="Doza Logo"
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <h3
                className={`text-2xl sm:text-3xl font-bold text-slate-800 mb-1 sm:mb-2 ${bebasNeue.className}`}
              >
                DOZA
              </h3>
              <p
                className={`text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8 ${poppins.className}`}
              >
                Your personal medical assistant.
              </p>

              {/* Community section - mobile responsive */}
              <div id="community" className="mb-6 sm:mb-8">
                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4 sm:mb-5 ${poppins.className}`}
                >
                  Join the community
                </p>
                <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300">
                        <social.icon />
                      </div>
                      <span
                        className={`text-[8px] sm:text-[9px] text-slate-400 mt-1 ${poppins.className}`}
                      >
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Dashboard preview */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="bg-slate-50 rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <Activity size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="h-2 w-20 sm:w-28 bg-slate-300 rounded-full mb-2" />
                    <div className="h-2 w-14 sm:w-20 bg-slate-200 rounded-full" />
                  </div>
                  <ArrowRight
                    size={14}
                    className="sm:w-4 sm:h-4 text-emerald-500"
                  />
                </div>
                <p
                  className={`text-[9px] sm:text-[10px] text-slate-400 mt-3 ${poppins.className}`}
                >
                  Access your dashboard instantly – no app required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
