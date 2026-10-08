import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, FileCheck, Calendar, Upload } from "lucide-react";
import { bebasNeue, poppins } from "../../../home/doza_center/constant";

const CENTER_URL = "https://centers.dozamedic.com";
const SUPPORT_EMAIL = "dozamedichq@gmail.com";

const SuccessStep: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      title: "Access Dashboard & Upload Credentials",
      description:
        "Log in to your center dashboard using your center name, the OTP sent to you, and your full name — then upload your credentials.",
      time: "Start now",
      status: "pending" as const,
    },
    {
      icon: FileCheck,
      title: "Document Verification",
      description:
        "Our team reviews your submitted medical licenses and registration details.",
      time: "1–2 business days",
      status: "upcoming" as const,
    },
    {
      icon: Calendar,
      title: "Site Inspection",
      description: "We schedule a facility visit with our medical audit team.",
      time: "3–5 business days",
      status: "upcoming" as const,
    },
    {
      icon: CheckCircle,
      title: "Board Approval",
      description:
        "Final review and approval by the Doza Medic governing board.",
      time: "24–48 hours post-inspection",
      status: "upcoming" as const,
    },
  ];

  return (
    <div className={`${poppins.className} text-slate-900`}>
      {/* Header — trimmed */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <div className="w-12 h-12 bg-emerald-500 rounded-xl rotate-12 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25">
          <CheckCircle size={24} className="text-white -rotate-12" />
        </div>
        <h1
          className={`${bebasNeue.className} text-2xl sm:text-3xl text-slate-900 mb-1 tracking-tight`}
        >
          Submission Successful
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm">
          Your center is now in our verification queue.
        </p>

        <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
          <span className="text-[9px] uppercase tracking-wider font-semibold text-emerald-700">
            Reference
          </span>
          <span
            className={`${bebasNeue.className} text-sm text-emerald-800 tracking-wider leading-none`}
          >
            DOZA-48392
          </span>
        </div>
      </motion.div>

      {/* CTA — trimmed */}
      <motion.a
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        href={CENTER_URL}
        className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-5 rounded-xl text-center transition-all shadow-md shadow-emerald-600/20 mb-6 active:scale-[0.99]"
      >
        <span
          className={`${bebasNeue.className} text-base tracking-wide block leading-tight`}
        >
          Go to Dashboard
        </span>
        <span className="text-emerald-100 text-[11px]">
          Login to start onboarding your center
        </span>
      </motion.a>

      {/* Steps — trimmed */}
      <h2
        className={`${bebasNeue.className} text-lg text-slate-900 mb-3 tracking-wide`}
      >
        What happens next
      </h2>

      <div className="space-y-2">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + idx * 0.04 }}
            className={`flex items-start gap-2.5 p-3 rounded-xl border ${
              step.status === "pending"
                ? "bg-emerald-50 border-emerald-200"
                : "bg-white border-slate-200"
            }`}
          >
            <div
              className={`p-2 rounded-lg shrink-0 ${
                step.status === "pending"
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              <step.icon size={14} />
            </div>
            <div className="flex-1 min-w-0">
              <h3
                className={`${bebasNeue.className} text-sm text-slate-900 leading-tight mb-0.5`}
              >
                {step.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-1.5">
                {step.description}
              </p>
              <div className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
                <Clock size={10} />
                {step.time}
              </div>
            </div>
            <span
              className={`shrink-0 mt-0.5 text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center ${
                step.status === "pending"
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {idx + 1}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-[11px] text-slate-500 mt-5">
        Need help?{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="text-emerald-600 font-semibold hover:underline"
        >
          {SUPPORT_EMAIL}
        </a>
      </p>
    </div>
  );
};

export default SuccessStep;
