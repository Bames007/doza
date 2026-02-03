"use client";

import { motion } from "framer-motion";
import {
  FileText,
  MapPin,
  Bell,
  Activity,
  Video,
  MessageCircle,
  CheckCircle,
  Zap,
} from "lucide-react";
import { Bebas_Neue, Poppins } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const colors = {
  green: { primary: "#239C3E", light: "#4CAF50", dark: "#1B7930" },
};

export default function PatientWhyChoose() {
  const features = [
    {
      icon: FileText,
      title: "Complete EMR Access",
      description:
        "Access your entire medical history, test results, and treatment plans in one secure digital vault.",
      benefits: [
        "Instant access to records",
        "Share with any doctor",
        "Emergency information available",
        "HIPAA compliant security",
      ],
      scenario:
        "In an emergency, paramedics can access your critical health information instantly, saving precious minutes.",
    },
    {
      icon: MapPin,
      title: "Real-Time Facility Finder",
      description:
        "Find nearby hospitals, clinics, and pharmacies with real-time availability and services.",
      benefits: [
        "Live wait times",
        "Service availability",
        "Emergency room status",
        "Pharmacy inventory",
      ],
      scenario:
        "Need urgent care? Find the nearest open facility with the services you need instead of driving around blindly.",
    },
    {
      icon: Bell,
      title: "Smart Medication Management",
      description:
        "Never miss a dose with intelligent reminders, auto-refills, and interaction warnings.",
      benefits: [
        "Custom reminders",
        "Prescription tracking",
        "Drug interaction alerts",
        "Auto-refill coordination",
      ],
      scenario:
        "Sarah's blood pressure medication is automatically refilled and delivered before she runs out.",
    },
    {
      icon: Activity,
      title: "Health Monitoring & AI Assistant",
      description:
        "Track vital signs, get insights, and receive personalized health recommendations.",
      benefits: [
        "BP & glucose tracking",
        "Trend analysis",
        "Personalized insights",
        "Early warning alerts",
      ],
      scenario:
        "John's Doza app detected an unusual heart rate pattern and suggested he consult his cardiologist.",
    },
    {
      icon: Video,
      title: "Telepresence with Professionals",
      description:
        "Connect with top specialists via high-quality video consultations from anywhere.",
      benefits: [
        "Instant specialist access",
        "Reduced travel time",
        "Continuity of care",
        "Family participation",
      ],
      scenario:
        "Maria consults with her neurologist from home, with her daughter joining the call to ask questions.",
    },
    {
      icon: MessageCircle,
      title: "Doza Medical Social Network",
      description:
        "Follow healthcare professionals, join health communities, and get expert medical tips.",
      benefits: [
        "Expert health content",
        "Community support",
        "Educational resources",
        "Professional insights",
      ],
      scenario:
        "David follows his favorite cardiologist and learns daily heart-health tips through the Doza social feed.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2
        className={`text-4xl sm:text-5xl font-bold text-slate-900 mb-6 ${bebasNeue.className}`}
      >
        Why <span style={{ color: colors.green.primary }}>Choose Doza</span>?
      </h2>
      <p
        className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
      >
        We've reimagined every aspect of healthcare to put you at the center of
        your health journey.
      </p>
    </motion.div>
  );
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200 group"
    >
      <div
        className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: `${colors.green.primary}15` }}
      >
        <feature.icon size={24} style={{ color: colors.green.primary }} />
      </div>

      <h3
        className={`text-xl font-bold text-slate-800 mb-3 ${bebasNeue.className}`}
      >
        {feature.title}
      </h3>

      <p className={`text-slate-600 mb-4 leading-relaxed ${poppins.className}`}>
        {feature.description}
      </p>

      <div className="space-y-2 mb-4">
        {feature.benefits.map((benefit: string, idx: number) => (
          <div key={idx} className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
            <span className={`text-sm text-slate-700 ${poppins.className}`}>
              {benefit}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
        <div className="flex items-start gap-2">
          <Zap size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
          <span className={`text-sm text-blue-800 ${poppins.className}`}>
            {feature.scenario}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
