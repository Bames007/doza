"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  ArrowUpRight,
  ShieldCheck,
  Globe,
  Zap,
} from "lucide-react";
import { Bebas_Neue, Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative overflow-hidden bg-slate-50 border-t border-slate-200/60 ${poppins.className}`}
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[10%] -left-[5%] w-[30rem] h-[30rem] bg-green-200/50 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[25rem] h-[25rem] bg-blue-200/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Section 1: Brand & Vision */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-green-500/10 flex items-center justify-center border border-slate-100">
                <Image
                  src="/logo.png"
                  alt="Doza Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h2
                  className={`text-5xl tracking-tight text-slate-900 ${bebasNeue.className}`}
                >
                  DOZA
                </h2>
                <p className="text-green-600 font-semibold tracking-widest text-xs uppercase">
                  Healthcare Ecosystem
                </p>
              </div>
            </motion.div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              A premium digital experience bridging the gap between world-class
              healthcare and the people who need it most.
            </p>

            <div className="flex flex-wrap gap-4">
              <Badge
                icon={<ShieldCheck size={14} />}
                text="HIPAA Secure"
                color="green"
              />
              <Badge
                icon={<Globe size={14} />}
                text="Global Access"
                color="blue"
              />
            </div>
          </div>

          {/* Section 2: Contact Experience (Minimalist) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactCard
              icon={<Phone size={24} />}
              label="Emergency Support"
              value="+234 81 2772 8084"
              href="tel:+2348127728084"
              isUrgent
            />
            <ContactCard
              icon={<Mail size={24} />}
              label="General Inquiries"
              value="care@doza.com"
              href="mailto:care@doza.com"
            />
            <ContactCard
              icon={<MapPin size={24} />}
              label="Global HQ"
              value="Wuye, Abuja, Nigeria"
              href="#"
            />
            <ContactCard
              icon={<Instagram size={24} />}
              label="Follow our journey"
              value="@dozamedic"
              href="https://www.instagram.com/dozamedic?igsh=NndsMmF4N2JrNW41"
              target="_blank"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-16" />

        {/* Bottom Bar: The Signature */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-sm">
            © {currentYear} Doza Healthcare.{" "}
            <span className="hidden md:inline">|</span> All Rights Reserved.
          </div>

          {/* EBCom Signature - High End Placement */}
          <motion.a
            href="https://www.ebcomtechnologies.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-200/60 group transition-all hover:shadow-md"
          >
            <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
              Engineered By
            </span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/images/logo.png"
                  alt="EBCom"
                  width={25}
                  height={25}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-slate-900 text-sm group-hover:text-[#a27b5b] transition-colors">
                EBCom Technologies
              </span>
            </div>
          </motion.a>

          {/* Legal Small Link */}
          <div className="flex gap-6 text-xs font-semibold text-slate-400 uppercase tracking-tighter">
            <Link
              href="/legal/privacy"
              className="hover:text-slate-900 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/legal/terms"
              className="hover:text-slate-900 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Helper Components */

function Badge({
  icon,
  text,
  color,
}: {
  icon: React.ReactNode;
  text: string;
  color: "green" | "blue";
}) {
  const styles =
    color === "green"
      ? "bg-green-50 text-green-700 border-green-100"
      : "bg-blue-50 text-blue-700 border-blue-100";
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wide ${styles}`}
    >
      {icon} {text}
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  target,
  isUrgent = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  target?: string;
  isUrgent?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      whileHover={{ y: -5 }}
      className={`p-6 rounded-3xl border transition-all flex flex-col gap-4 ${
        isUrgent
          ? "bg-white border-red-100 shadow-lg shadow-red-500/5 hover:border-red-200"
          : "bg-white/50 border-slate-200/60 hover:border-green-300 hover:shadow-xl hover:shadow-green-500/5"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isUrgent ? "bg-red-50 text-red-500" : "bg-green-50 text-green-600"}`}
      >
        {icon}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {label}
          </span>
          {isUrgent && (
            <span className="flex items-center gap-1 text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full animate-pulse">
              <Zap size={10} /> LIVE
            </span>
          )}
        </div>
        <div className="text-slate-900 font-semibold flex items-center gap-1 group">
          {value}{" "}
          <ArrowUpRight
            size={14}
            className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all"
          />
        </div>
      </div>
    </motion.a>
  );
}
