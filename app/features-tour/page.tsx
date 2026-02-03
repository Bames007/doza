"use client";

import { motion } from "framer-motion";
import {
  Play,
  Shield,
  BarChart3,
  Users,
  Calendar,
  FileText,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { bebasNeue, poppins } from "../home/doza_center/constant";
import Image from "next/image";

const FeaturesTourPage = () => {
  const features = [
    {
      icon: BarChart3,
      title: "AI-Powered Analytics",
      description:
        "Get real-time insights into patient flow, revenue trends, and operational efficiency with our advanced AI algorithms.",
      benefits: [
        "Predictive patient volume",
        "Revenue forecasting",
        "Performance benchmarks",
      ],
    },
    {
      icon: Users,
      title: "Patient Management",
      description:
        "Streamline patient registration, appointments, and medical records in one seamless platform.",
      benefits: [
        "Digital patient intake",
        "Automated reminders",
        "Centralized records",
      ],
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Optimize your staff and resource allocation with intelligent appointment scheduling.",
      benefits: [
        "Automated slot management",
        "Staff optimization",
        "Resource allocation",
      ],
    },
    {
      icon: FileText,
      title: "Free EMR System",
      description:
        "Comprehensive Electronic Medical Records system included at no additional cost.",
      benefits: ["HIPAA compliant", "Custom templates", "Integration ready"],
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description:
        "Manage your center from anywhere with our fully responsive mobile platform.",
      benefits: ["Real-time updates", "On-the-go access", "Push notifications"],
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security with built-in compliance for healthcare regulations.",
      benefits: ["Data encryption", "Audit trails", "Compliance reporting"],
    },
  ];

  const stats = [
    { number: "65%", label: "Faster Patient Processing" },
    { number: "40%", label: "Reduced Administrative Work" },
    { number: "85%", label: "Improved Patient Satisfaction" },
    { number: "50%", label: "Cost Reduction" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Doza Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span
                className={`text-2xl font-bold text-slate-900 ${bebasNeue.className}`}
              >
                DOZA
              </span>
            </Link>

            <Link
              href="/registration/center"
              className="px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#017840" }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6">
              <Play size={16} />
              <span className={`text-sm font-medium ${poppins.className}`}>
                Features Tour
              </span>
            </div>

            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight ${bebasNeue.className}`}
            >
              Discover Doza's
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h1>

            <p
              className={`text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
            >
              Explore how Doza transforms healthcare management with
              cutting-edge technology, AI-powered insights, and seamless
              integration for your medical facility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className={`text-4xl md:text-5xl font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
                >
                  {stat.number}
                </div>
                <div className={`text-slate-600 ${poppins.className}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <feature.icon size={28} className="text-blue-600" />
                </div>

                <h3
                  className={`text-2xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`text-slate-600 mb-6 leading-relaxed ${poppins.className}`}
                >
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-2 text-slate-700 ${poppins.className}`}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`text-4xl md:text-5xl font-bold text-white mb-6 ${bebasNeue.className}`}
            >
              Ready to Transform Your Healthcare Facility?
            </h2>

            <p
              className={`text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed ${poppins.className}`}
            >
              Join thousands of healthcare providers who have revolutionized
              their practice with Doza.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registration/center"
                className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
              </Link>

              <Link
                href="/tutorials-library"
                className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Watch Tutorials
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/logo.png"
              alt="Doza Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className={`text-2xl font-bold ${bebasNeue.className}`}>
              DOZA
            </span>
          </div>

          <p
            className={`text-slate-400 max-w-2xl mx-auto mb-8 ${poppins.className}`}
          >
            Transforming healthcare through innovative technology and seamless
            integration for medical professionals and facilities.
          </p>

          <div className={`text-slate-500 text-sm ${poppins.className}`}>
            &copy; 2024 Doza Healthcare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FeaturesTourPage;
