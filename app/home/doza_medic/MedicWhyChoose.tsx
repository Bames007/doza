"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Clock,
  Award,
  Globe,
  BarChart3,
  MessageSquare,
  FileText,
  Calendar,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";

export default function MedicWhyChoose() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Increased Revenue",
      description:
        "Average 40% revenue growth through optimized scheduling and reduced overhead costs",
      features: [
        "Higher patient volume",
        "Reduced no-shows",
        "Optimized billing",
        "Multiple revenue streams",
      ],
    },
    {
      icon: Zap,
      title: "Time Efficiency",
      description:
        "Save 15+ hours monthly on administrative tasks with our automated systems",
      features: [
        "Automated scheduling",
        "Digital documentation",
        "Streamlined communication",
        "Quick billing",
      ],
    },
    {
      icon: Users,
      title: "Patient Access",
      description:
        "Connect with 500,000+ verified patients actively seeking healthcare providers",
      features: [
        "Pre-screened patients",
        "Insurance verification",
        "Rating system",
        "Telehealth expansion",
      ],
    },
    {
      icon: Shield,
      title: "Risk Management",
      description:
        "Comprehensive malpractice protection and HIPAA-compliant secure platform",
      features: [
        "Malpractice insurance",
        "Secure communications",
        "Data encryption",
        "Compliance tools",
      ],
    },
  ];

  const platformAdvantages = [
    {
      icon: TrendingUp,
      title: "Practice Analytics",
      description:
        "Real-time insights into your practice performance and growth opportunities",
    },
    {
      icon: Globe,
      title: "Telehealth Reach",
      description:
        "Extend your practice beyond geographical limitations with virtual care capabilities",
    },
    {
      icon: Award,
      title: "Professional Development",
      description:
        "Access to continuing education and certification programs to advance your career",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description:
        "Data-driven recommendations to optimize your practice operations and revenue",
    },
  ];

  const successMetrics = [
    { metric: "40%", label: "Average Revenue Increase" },
    { metric: "15+ hrs", label: "Monthly Time Saved" },
    { metric: "95%", label: "Patient Retention Rate" },
    { metric: "4.9/5", label: "Professional Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-x-hidden w-full">
      {/* Header Section */}
      <section className="pt-16 md:pt-20 pb-12 md:pb-16 px-4 sm:px-6 w-full">
        <div className="max-w-6xl mx-auto text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 px-2 ${bebasNeue.className}`}
          >
            Why Choose <span className="text-blue-600">Doza?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2 ${poppins.className}`}
          >
            Doza is designed specifically for healthcare professionals who want
            to grow their practice, reduce administrative burden, and focus on
            patient care.
          </motion.p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-white w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-slate-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 w-full"
              >
                <div className="flex items-start sm:items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6 w-full">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                    <benefit.icon
                      size={16}
                      className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600"
                    />
                  </div>
                  <h3
                    className={`text-lg sm:text-xl md:text-2xl font-bold text-slate-900 ${bebasNeue.className}`}
                  >
                    {benefit.title}
                  </h3>
                </div>
                <p
                  className={`text-slate-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-xs sm:text-sm md:text-base ${poppins.className}`}
                >
                  {benefit.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 md:gap-3 w-full">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1 sm:gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span
                        className={`text-slate-700 text-xs sm:text-sm ${poppins.className}`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-slate-900 w-full">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 md:mb-16 px-2 ${bebasNeue.className}`}
          >
            Proven <span className="text-blue-400">Results</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full px-2">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center w-full"
              >
                <div
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 ${bebasNeue.className}`}
                >
                  {metric.metric}
                </div>
                <div
                  className={`text-blue-200 text-xs sm:text-sm ${poppins.className}`}
                >
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Advantages */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-8 sm:mb-12 md:mb-16 w-full"
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 px-2 ${bebasNeue.className}`}
            >
              Platform <span className="text-green-600">Advantages</span>
            </h2>
            <p
              className={`text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2 ${poppins.className}`}
            >
              Advanced tools and features designed specifically for healthcare
              professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full">
            {platformAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl bg-white shadow-md sm:shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center bg-green-100">
                  <advantage.icon
                    size={18}
                    className="sm:w-5 sm:h-5 md:w-7 md:h-7 text-green-600"
                  />
                </div>
                <h3
                  className={`text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4 ${bebasNeue.className}`}
                >
                  {advantage.title}
                </h3>
                <p
                  className={`text-slate-600 leading-relaxed text-xs sm:text-sm ${poppins.className}`}
                >
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Support */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="w-full"
            >
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 px-2 ${bebasNeue.className}`}
              >
                Comprehensive <span className="text-blue-600">Support</span>
              </h2>
              <p
                className={`text-sm sm:text-base md:text-lg text-slate-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed px-2 ${poppins.className}`}
              >
                Our dedicated support team and professional community ensure you
                have everything you need to succeed.
              </p>

              <div className="space-y-2 sm:space-y-3 md:space-y-4 px-2">
                {[
                  "24/7 technical support",
                  "Professional community forums",
                  "Regular training webinars",
                  "One-on-one onboarding",
                  "Practice optimization consulting",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span
                      className={`text-slate-700 text-sm sm:text-base ${poppins.className}`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 lg:mt-0 w-full px-2"
            >
              {[
                {
                  icon: Clock,
                  label: "Support Response",
                  value: "< 2 mins",
                  color: "text-green-600",
                },
                {
                  icon: Users,
                  label: "Community",
                  value: "10K+ Peers",
                  color: "text-blue-600",
                },
                {
                  icon: Calendar,
                  label: "Training",
                  value: "Weekly",
                  color: "text-purple-600",
                },
                {
                  icon: FileText,
                  label: "Resources",
                  value: "500+",
                  color: "text-orange-600",
                },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="text-center p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl bg-blue-50 border border-blue-200 w-full"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-1 sm:mb-2 md:mb-3" />
                  <div
                    className={`text-base sm:text-lg md:text-lg font-bold text-slate-900 mb-1 ${bebasNeue.className}`}
                  >
                    {item.value}
                  </div>
                  <div
                    className={`text-slate-600 text-xs sm:text-sm ${poppins.className}`}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
