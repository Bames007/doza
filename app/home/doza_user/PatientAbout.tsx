"use client";

import { motion } from "framer-motion";
import { Users, Stethoscope, Building, CheckCircle, Zap } from "lucide-react";
import { Bebas_Neue, Poppins } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const colors = {
  green: { primary: "#239C3E", light: "#4CAF50", dark: "#1B7930" },
  blue: { primary: "#1D4ED8", light: "#3B82F6", dark: "#1E40AF" },
  purple: { primary: "#8B5CF6", light: "#A78BFA", dark: "#7C3AED" },
};

export default function PatientAbout() {
  const ecosystemItems = [
    {
      icon: Users,
      title: "For Patients",
      description:
        "Take control of your health journey with smart tools, 24/7 access to care, and a supportive medical community.",
      features: [
        "Personal Health Dashboard",
        "Medication Management",
        "Virtual Consultations",
        "Emergency Services",
      ],
      color: "green",
    },
    {
      icon: Stethoscope,
      title: "For Medics",
      description:
        "Join our network of verified healthcare professionals providing exceptional care through modern technology.",
      features: [
        "Telehealth Platform",
        "Patient Management",
        "Continuing Education",
        "Professional Network",
      ],
      color: "blue",
    },
    {
      icon: Building,
      title: "For Centers",
      description:
        "Modern healthcare facilities equipped with advanced technology and integrated with our digital ecosystem.",
      features: [
        "Advanced Equipment",
        "Digital Integration",
        "Quality Standards",
        "Expert Staff",
      ],
      color: "purple",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Verified Medics" },
    { number: "200+", label: "Care Centers" },
    { number: "24/7", label: "Support" },
    { number: "98%", label: "Satisfaction" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {ecosystemItems.map((item, index) => (
            <EcosystemCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <UnifiedValueProposition stats={stats} />
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
        What is <span style={{ color: colors.green.primary }}>Doza</span>?
      </h2>
      <p
        className={`text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed ${poppins.className}`}
      >
        Doza is your complete healthcare ecosystem—connecting patients, medical
        professionals, and modern facilities through intelligent technology that
        makes quality healthcare accessible, personal, and proactive.
      </p>
    </motion.div>
  );
}

function EcosystemCard({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
    >
      <div
        className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center mx-auto"
        style={{
          backgroundColor: `${
            colors[item.color as keyof typeof colors].primary
          }15`,
        }}
      >
        <item.icon
          size={32}
          style={{ color: colors[item.color as keyof typeof colors].primary }}
        />
      </div>

      <h3
        className={`text-2xl font-bold text-center text-slate-800 mb-4 ${bebasNeue.className}`}
      >
        {item.title}
      </h3>

      <p
        className={`text-slate-600 text-center mb-6 leading-relaxed ${poppins.className}`}
      >
        {item.description}
      </p>

      <div className="space-y-3">
        {item.features.map((feature: string, idx: number) => (
          <div key={idx} className="flex items-center gap-3">
            <CheckCircle
              size={16}
              style={{
                color: colors[item.color as keyof typeof colors].primary,
              }}
            />
            <span className={`text-slate-700 ${poppins.className}`}>
              {feature}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function UnifiedValueProposition({
  stats,
}: {
  stats: Array<{ number: string; label: string }>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white text-center"
    >
      <h3 className={`text-3xl font-bold mb-4 ${bebasNeue.className}`}>
        One Platform, Complete Healthcare
      </h3>
      <p
        className={`text-lg mb-6 max-w-2xl mx-auto leading-relaxed ${poppins.className}`}
      >
        Whether you're managing chronic conditions, seeking specialist care, or
        maintaining wellness, Doza provides the tools, professionals, and
        facilities you need—all working together seamlessly.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((stat, index) => (
          <div key={stat.label} className="text-center">
            <div className={`text-2xl font-bold ${bebasNeue.className}`}>
              {stat.number}
            </div>
            <div className="text-green-100 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
