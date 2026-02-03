"use client";

import { motion } from "framer-motion";
import {
  Shield,
  TrendingUp,
  Users,
  Award,
  Zap,
  CheckCircle,
  Activity,
  Bell,
  MapPin,
  Smartphone,
  Target,
  RefreshCw,
} from "lucide-react";
import { Bebas_Neue, Poppins } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const colors = {
  green: { primary: "#239C3E", light: "#4CAF50", dark: "#1B7930" },
  blue: { primary: "#1D4ED8", light: "#3B82F6", dark: "#1E40AF" },
};

export default function PatientFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Emergency Ready Medical Profile",
      description:
        "Critical information available to emergency responders with your consent",
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Health Insights",
      description:
        "Get personalized recommendations based on your health data trends",
    },
    {
      icon: Users,
      title: "Family Health Management",
      description:
        "Monitor and manage health for your entire family in one place",
    },
    {
      icon: Award,
      title: "Health Goals & Rewards",
      description:
        "Set goals, track progress, and earn rewards for healthy habits",
    },
  ];

  const assistantFeatures = [
    { icon: Activity, text: "Tracks your daily vitals automatically" },
    { icon: Bell, text: "Sends medication reminders" },
    { icon: MapPin, text: "Finds the best care options nearby" },
    { icon: Smartphone, text: "Syncs with your health devices" },
    { icon: Target, text: "Provides personalized health tips" },
    { icon: RefreshCw, text: "Coordinates with your care team" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FeatureList features={features} />
          <AssistantShowcase features={assistantFeatures} />
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
        className={`text-5xl sm:text-6xl font-bold text-slate-900 mb-6 tracking-tight ${bebasNeue.className}`}
      >
        Your <span style={{ color: colors.green.primary }}>All-in-One</span>{" "}
        Health Companion
      </h2>
      <p
        className={`text-xl text-slate-600 max-w-2xl mx-auto ${poppins.className}`}
      >
        Comprehensive healthcare features designed to keep you and your family
        healthy
      </p>
    </motion.div>
  );
}

function FeatureList({ features }: { features: Array<any> }) {
  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="flex items-start gap-6 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{
              backgroundColor: `${colors.green.primary}15`,
              boxShadow: `0 4px 12px ${colors.green.primary}20`,
            }}
          >
            <feature.icon size={28} style={{ color: colors.green.primary }} />
          </div>
          <div className="flex-1">
            <h3
              className={`text-2xl font-bold text-slate-800 mb-3 tracking-tight ${bebasNeue.className}`}
            >
              {feature.title}
            </h3>
            <p
              className={`text-slate-600 leading-relaxed text-lg ${poppins.className}`}
            >
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function AssistantShowcase({
  features,
}: {
  features: Array<{ icon: any; text: string }>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200/60 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 opacity-10"
        style={{ backgroundColor: colors.blue.primary }}
      />
      <div
        className="absolute bottom-0 left-0 w-24 h-24 rounded-full -ml-12 -mb-12 opacity-10"
        style={{ backgroundColor: colors.blue.primary }}
      />

      <div className="text-center mb-10 relative z-10">
        <div
          className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: `${colors.blue.primary}15`,
            boxShadow: `0 8px 24px ${colors.blue.primary}20`,
          }}
        >
          <Zap size={36} style={{ color: colors.blue.primary }} />
        </div>
        <h3
          className={`text-3xl font-bold text-slate-800 mb-3 tracking-tight ${bebasNeue.className}`}
        >
          Smart Health Assistant
        </h3>
        <p className={`text-slate-600 text-lg ${poppins.className}`}>
          Your AI-powered health companion that works around the clock
        </p>
      </div>

      <div className="space-y-4 relative z-10">
        {features.map((item, index) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5 + index * 0.1,
              type: "spring",
              stiffness: 120,
            }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 transition-all duration-300 group"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
              style={{ backgroundColor: `${colors.blue.primary}15` }}
            >
              <item.icon size={20} style={{ color: colors.blue.primary }} />
            </div>
            <span
              className={`text-slate-700 text-lg font-medium ${poppins.className} group-hover:text-slate-900 transition-colors`}
            >
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Floating action button style element */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="absolute top-6 right-6"
      >
        <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />
      </motion.div>
    </motion.div>
  );
}
