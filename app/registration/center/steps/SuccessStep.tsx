import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Clock,
  FileCheck,
  Calendar,
  Settings,
  Mail,
  Download,
  Share2,
  Building,
  User,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import { bebasNeue, poppins } from "../../../home/doza_center/constant";
import Link from "next/link";

const SuccessStep: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const nextSteps = [
    {
      icon: FileCheck,
      title: "Document Verification",
      description:
        "Reviewing submitted medical licenses and registration details.",
      time: "1-2 business days",
      status: "pending",
    },
    {
      icon: Calendar,
      title: "Site Inspection",
      description: "Schedule a facility visit with our medical audit team.",
      time: "3-5 business days",
      status: "upcoming",
    },
    {
      icon: CheckCircle,
      title: "Board Approval",
      description: "Final review by DOZA medical governing board.",
      time: "24-48h post-inspection",
      status: "upcoming",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-6 px-4 sm:py-12 relative overflow-hidden selection:bg-emerald-100">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-100/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200 text-slate-600 hover:text-emerald-600 transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm font-medium">Exit to Dashboard</span>
          </Link>
        </motion.div>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100"
        >
          <div className="bg-slate-900 p-8 sm:p-12 text-center relative">
            {/* Success Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 12 }}
              className="w-20 h-20 bg-emerald-500 rounded-3xl rotate-12 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/20"
            >
              <CheckCircle size={40} className="text-white -rotate-12" />
            </motion.div>

            <h1
              className={`${bebasNeue.className} text-4xl sm:text-6xl text-white mb-4 tracking-tight`}
            >
              Submission Successful
            </h1>
            <p
              className={`${poppins.className} text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed`}
            >
              Your healthcare facility (Ref:{" "}
              <span className="text-emerald-400 font-mono">DOZA-48392</span>) is
              now in our verification queue.
            </p>
          </div>

          <div className="p-6 sm:p-10 lg:p-14">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { label: "Timeline", value: "2-5 Days", color: "blue" },
                { label: "Priority", value: "Standard", color: "emerald" },
                { label: "Updates", value: "Email/SMS", color: "purple" },
                { label: "Support", value: "24/7 Live", color: "orange" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-slate-50 p-4 rounded-2xl border border-slate-100"
                >
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                    {item.label}
                  </p>
                  <p
                    className={`text-slate-900 font-bold ${bebasNeue.className} text-xl`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-emerald-600/10">
                <Download size={20} />
                Download Confirmation PDF
              </button>
              <button className="flex-1 bg-white border-2 border-slate-100 hover:border-emerald-100 hover:bg-emerald-50 text-slate-700 py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all">
                <Share2 size={20} />
                Share with Partners
              </button>
            </div>

            {/* Timeline Section */}
            <div className="max-w-3xl mx-auto">
              <h3
                className={`${bebasNeue.className} text-3xl text-slate-900 mb-8 text-center sm:text-left`}
              >
                Verification Roadmap
              </h3>

              <div className="space-y-4">
                {nextSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`group relative flex items-start gap-5 p-5 rounded-2xl border transition-all ${
                      step.status === "pending"
                        ? "bg-emerald-50/50 border-emerald-200 ring-1 ring-emerald-100"
                        : "bg-white border-slate-100"
                    }`}
                  >
                    <div
                      className={`mt-1 p-3 rounded-xl ${
                        step.status === "pending"
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      <step.icon size={22} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h4
                          className={`${bebasNeue.className} text-xl text-slate-900`}
                        >
                          {step.title}
                        </h4>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter ${
                            step.status === "pending"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {step.status}
                        </span>
                      </div>
                      <p className="text-slate-500 text-sm mb-2 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                        <Clock size={14} />
                        {step.time}
                      </div>
                    </div>
                    <ChevronRight
                      className="mt-1 text-slate-300 group-hover:text-emerald-400 transition-colors"
                      size={20}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Footer */}
          <div className="bg-slate-50 border-t border-slate-100 p-8 text-center">
            <div className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 cursor-pointer transition-colors font-medium">
              <Mail size={18} />
              <span>concierge@dozamedic.com</span>
            </div>
          </div>
        </motion.div>

        {/* Resource Cards (Refined Grid) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          {[
            {
              title: "Platform Tour",
              icon: Settings,
              desc: "Quick start guide for new clinics.",
            },
            {
              title: "Network",
              icon: User,
              desc: "Connect with 500+ specialists.",
            },
            {
              title: "Compliance",
              icon: FileCheck,
              desc: "Review regional health standards.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 mb-4">
                <item.icon size={24} />
              </div>
              <h4
                className={`${bebasNeue.className} text-xl text-slate-900 mb-1`}
              >
                {item.title}
              </h4>
              <p className="text-slate-500 text-sm leading-snug">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse {
          animation: pulse-slow 10s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SuccessStep;
