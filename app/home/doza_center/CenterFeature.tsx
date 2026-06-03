"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  BarChart3,
  ClipboardCheck,
  Cpu,
  Globe,
  ShieldCheck,
  FileText,
  Video,
  CalendarDays,
  Box,
  CreditCard,
  Activity,
  Stethoscope,
} from "lucide-react";
import { bebasNeue, poppins } from "./constant";

const CenterFeatures: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: BarChart3,
      title: "Operational Metrics",
      description:
        "Real time dashboards for patient flow, staff productivity, and revenue trends.",
      tags: ["Real Time Data", "Volume Tracking", "Custom Reports"],
    },
    {
      icon: ClipboardCheck,
      title: "Electronic Records (EHR)",
      description:
        "Centralised, immutable patient records with rapid retrieval and audit trails.",
      tags: ["Paperless", "Custom Templates", "Version Control"],
    },
    {
      icon: Cpu,
      title: "Resource Management",
      description:
        "Automated tracking of supplies, medications, and clinical assets to prevent shortages.",
      tags: ["Auto Reordering", "Waste Audit", "Expiry Alerts"],
    },
    {
      icon: Globe,
      title: "Connectivity Suite",
      description:
        "Seamlessly connect departments, satellite clinics, labs, and pharmacies.",
      tags: ["Multi Site Sync", "API Access", "HL7 Ready"],
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance",
      description:
        "End to end encryption, role based access, and full compliance with global standards.",
      tags: ["NDPR/GDPR", "Access Control", "Audit Logs"],
    },
    {
      icon: Stethoscope,
      title: "Emergency Workflow",
      description:
        "Dedicated triage protocols, staff alerts, and rapid response coordination.",
      tags: ["Urgent Triage", "Priority Comms", "Mass Casualty Mode"],
    },
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description:
        "Paperless, error free scripts sent directly to integrated pharmacies.",
      tags: ["E Signatures", "Refill Alerts", "Formulary Check"],
    },
    {
      icon: Video,
      title: "Telemedicine Suite",
      description:
        "High definition video consultations, screen sharing, and secure patient links.",
      tags: ["Encrypted", "Waiting Room", "Recording"],
    },
    {
      icon: CalendarDays,
      title: "Smart Scheduling",
      description:
        "Intelligent appointment booking that reduces no shows and optimises resources.",
      tags: ["Auto Reminders", "Waitlist", "Resource Booking"],
    },
    {
      icon: Box,
      title: "Inventory Sync",
      description:
        "Real time stock levels, low stock alerts, and automated reordering.",
      tags: ["Barcode Scan", "Supplier Integration", "Cost Tracking"],
    },
    {
      icon: CreditCard,
      title: "Billing & Claims",
      description:
        "Seamless insurance verification, automated invoicing, and revenue cycle management.",
      tags: ["Claims Tracking", "Patient Statements", "Analytics"],
    },
    {
      icon: Activity,
      title: "Operations Hub",
      description:
        "Central command for bed tracking, staff allocation, and discharge planning.",
      tags: ["Bed Management", "Staff Rostering", "Discharge Workflow"],
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-28 bg-white relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[90px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header – reworded for clarity */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[0.9] tracking-tighter ${bebasNeue.className}`}
            >
              BUILT FOR FASTER, <br />
              <span className="text-emerald-600">SAFER CARE</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-lg leading-snug border-l-2 border-emerald-500 pl-6">
            Move beyond manual management. Our core suite gives you the control
            to handle high-volume traffic without sacrificing quality.
          </p>
        </div>

        {/* Features Grid – 3 columns, clean cards with radial hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Radial hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <feature.icon size={22} strokeWidth={1.5} />
                </div>
                <h3
                  className={`text-xl font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm text-slate-500 leading-relaxed mb-5 ${poppins.className}`}
                >
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-[9px] font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA – less rounded, no fake stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-10 rounded-xl bg-slate-900 text-white relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3
                className={`text-4xl md:text-5xl mb-2 ${bebasNeue.className}`}
              >
                READY TO UPGRADE?
              </h3>
              <p className={`text-slate-300 text-sm ${poppins.className}`}>
                Join healthcare facilities that trust Doza to run their
                operations.
              </p>
            </div>
            <Link href="/registration/center">
              <button className="px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl">
                Start Now
              </button>
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full -z-0" />
        </motion.div>
      </div>
    </section>
  );
};

export default CenterFeatures;
