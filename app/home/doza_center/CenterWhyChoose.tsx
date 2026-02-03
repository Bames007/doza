import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Zap,
  Award,
  Shield,
  Clock,
  Globe,
} from "lucide-react";
import { bebasNeue, poppins } from "./constant";

const CenterWhyChoose: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: "Expanded Patient Base",
      description:
        "Access thousands of patients actively seeking healthcare services through our platform",
      features: [
        "Location-based matching",
        "Automated referrals",
        "Patient reviews & ratings",
        "Marketing support",
      ],
    },
    {
      icon: Zap,
      title: "Operational Efficiency",
      description:
        "Streamline your operations with automated systems and real-time management tools",
      features: [
        "Automated scheduling",
        "Inventory optimization",
        "Staff management",
        "AI-powered analytics",
      ],
    },
    {
      icon: Award,
      title: "Premium Positioning",
      description:
        "Stand out as a premium healthcare provider in our verified network of centers",
      features: [
        "Verified status",
        "Featured listings",
        "Professional branding",
        "Quality certification",
      ],
    },
    {
      icon: Shield,
      title: "Risk Management",
      description:
        "Comprehensive security and compliance features to protect your practice",
      features: [
        "HIPAA compliance",
        "Data encryption",
        "Audit trails",
        "Backup systems",
      ],
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock technical and operational support for your center",
      features: [
        "Dedicated account manager",
        "Technical support",
        "Training resources",
        "Priority assistance",
      ],
    },
    {
      icon: Globe,
      title: "Network Effects",
      description:
        "Benefit from being part of a growing ecosystem of healthcare providers",
      features: [
        "Cross-referrals",
        "Shared resources",
        "Community knowledge",
        "Collaborative care",
      ],
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 ${bebasNeue.className}`}
          >
            Why Healthcare Centers
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Choose Doza
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Join thousands of healthcare providers who have transformed their
            operations, increased patient satisfaction, and grown their practice
            with Doza.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-purple-200 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                <benefit.icon className="text-purple-600" size={24} />
              </div>

              <h3
                className={`text-2xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
              >
                {benefit.title}
              </h3>
              <p
                className={`text-slate-600 mb-6 leading-relaxed ${poppins.className}`}
              >
                {benefit.description}
              </p>

              <ul className="space-y-3">
                {benefit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle
                      size={16}
                      className="text-green-500 flex-shrink-0"
                    />
                    <span
                      className={`text-sm text-slate-600 ${poppins.className}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CenterWhyChoose;
