"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Zap,
  Users,
  CheckCircle,
  TrendingUp,
  Coins,
  Handshake,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";

export default function FinalCTA() {
  const benefits = [
    {
      icon: Zap,
      title: "Start Earning Immediately",
      description: "Get set up and start earning revenue in under 24 hours",
    },
    {
      icon: Coins,
      title: "Zero Setup Cost",
      description: "No upfront investment, completely free to join",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal onboarding specialist and 24/7 Nigerian support",
    },
  ];

  const partnershipTiers = [
    {
      name: "Starter Partner",
      price: "₦0",
      period: "",
      description: "Perfect for individual practitioners starting out",
      features: [
        "Up to 100 patients monthly",
        "Basic telehealth features",
        "Appointment scheduling",
        "Patient records",
        "Earn up to ₦500,000 monthly",
      ],
      earningPotential: "₦500K/month",
      highlighted: false,
    },
    {
      name: "Professional Partner",
      price: "₦0",
      period: "",
      description: "Ideal for growing medical practices",
      features: [
        "Unlimited patients",
        "Advanced telehealth",
        "Practice analytics",
        "Billing integration",
        "Priority patient referrals",
        "Earn up to ₦1,500,000 monthly",
      ],
      earningPotential: "₦1.5M/month",
      highlighted: true,
    },
    {
      name: "Enterprise Partner",
      price: "₦0",
      period: "",
      description: "For established practices & medical centers",
      features: [
        "Multiple locations support",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced security features",
        "Premium patient referrals",
        "Unlimited earning potential",
      ],
      earningPotential: "₦3M+/month",
      highlighted: false,
    },
  ];

  const earningStats = [
    { metric: "₦2.5M", label: "Average Monthly Earnings" },
    { metric: "15K+", label: "Active Nigerian Partners" },
    { metric: "₦98B+", label: "Total Partner Earnings" },
    { metric: "4.9/5", label: "Partner Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Main CTA Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-8"
            >
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className="fill-green-600 text-green-600"
                  />
                ))}
              </div>
              <span className={`text-green-800 text-sm ${poppins.className}`}>
                Trusted by 15,000+ Nigerian Healthcare Professionals
              </span>
            </motion.div>

            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 ${bebasNeue.className}`}
            >
              Join Nigeria&apos;s Fastest
              <span className="block bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Growing Medical Network
              </span>
            </h1>

            <p
              className={`text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
            >
              Partner with Doza and join thousands of Nigerian doctors, nurses,
              and healthcare professionals who are earning more, growing their
              practice, and reaching new patients across Nigeria.
            </p>

            {/* Earning Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12"
            >
              {earningStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className={`text-2xl md:text-3xl font-bold text-green-600 mb-2 ${bebasNeue.className}`}
                  >
                    {stat.metric}
                  </div>
                  <div
                    className={`text-slate-600 text-sm ${poppins.className}`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <button
                className="group px-8 py-4 rounded-2xl font-semibold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3"
                style={{
                  background: `linear-gradient(135deg, #10b981, #065f46)`,
                }}
              >
                <Handshake size={20} />
                Become a Partner
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="group px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <TrendingUp size={20} />
                View Earnings Calculator
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <benefit.icon
                    size={32}
                    className="text-green-600 mx-auto mb-4"
                  />
                  <h3
                    className={`text-xl font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
                  >
                    {benefit.title}
                  </h3>
                  <p className={`text-slate-600 text-sm ${poppins.className}`}>
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Tiers Section */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4 ${bebasNeue.className}`}
          >
            Choose Your{" "}
            <span className="text-green-600">Partnership Level</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto ${poppins.className}`}
          >
            All partnerships are completely free. Your earnings grow with your
            practice.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-3xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  tier.highlighted
                    ? "bg-white text-slate-900 border-green-500 shadow-2xl"
                    : "bg-white text-slate-900 border-green-200 shadow-lg"
                }`}
              >
                {tier.highlighted && (
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-500 text-white text-sm font-semibold mb-4">
                    <Star size={16} className="fill-white" />
                    Most Popular
                  </div>
                )}

                <h3
                  className={`text-2xl font-bold mb-2 ${bebasNeue.className}`}
                >
                  {tier.name}
                </h3>
                <p className={`mb-6 text-slate-600 ${poppins.className}`}>
                  {tier.description}
                </p>

                <div className="mb-4">
                  <span
                    className={`text-4xl font-bold text-green-600 ${bebasNeue.className}`}
                  >
                    {tier.price}
                  </span>
                  <span className={`text-slate-600 ${poppins.className}`}>
                    {tier.period}
                  </span>
                </div>

                {/* Earning Potential */}
                <div className="bg-green-50 rounded-xl p-4 mb-6 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={20} className="text-green-600" />
                    <span
                      className={`font-semibold text-green-800 ${poppins.className}`}
                    >
                      Earning Potential
                    </span>
                  </div>
                  <div
                    className={`text-2xl font-bold text-green-700 ${bebasNeue.className}`}
                  >
                    {tier.earningPotential}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                    tier.highlighted
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-green-100 text-green-700 border border-green-300 hover:bg-green-200"
                  }`}
                >
                  {tier.highlighted ? "Start Earning Now" : "Join Partnership"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl md:text-5xl font-bold text-slate-900 mb-6 ${bebasNeue.className}`}
            >
              Nigerian Medical Professionals
              <span className="block text-green-600">Are Earning More</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Adebayo",
                specialty: "Lagos",
                earnings: "₦1.2M/month",
                story: "Increased my patient base by 300% in 3 months",
              },
              {
                name: "Nurse Chioma",
                specialty: "Abuja",
                earnings: "₦850K/month",
                story: "Built a thriving telehealth practice from home",
              },
              {
                name: "Dr. Okafor",
                specialty: "Port Harcourt",
                earnings: "₦2.1M/month",
                story: "Expanded to multiple locations with Doza support",
              },
            ].map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-3xl bg-green-50 border border-green-200"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-green-600" size={24} />
                </div>
                <h3
                  className={`text-xl font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
                >
                  {story.name}
                </h3>
                <p className="text-green-600 font-semibold mb-2">
                  {story.specialty}
                </p>
                <div
                  className={`text-2xl font-bold text-green-700 mb-4 ${bebasNeue.className}`}
                >
                  {story.earnings}
                </div>
                <p className="text-slate-600 text-sm">{story.story}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-8 text-white">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-6 ${bebasNeue.className}`}
              >
                Zero-Risk Partnership
              </h2>
              <p
                className={`text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${poppins.className}`}
              >
                Join Doza completely free. No hidden fees, no commitments. Start
                earning from your first patient and grow your practice with our
                support.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                {[
                  "No setup fees",
                  "Cancel anytime",
                  "Keep 100% of your earnings",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-center gap-2"
                  >
                    <CheckCircle size={20} className="text-white" />
                    <span className={`font-semibold ${poppins.className}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-4xl md:text-5xl font-bold text-slate-900 mb-6 ${bebasNeue.className}`}
            >
              Start Earning Today
            </h2>
            <p
              className={`text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed ${poppins.className}`}
            >
              Join thousands of Nigerian healthcare professionals who are
              growing their income and reaching more patients across the
              country.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="group px-8 py-4 rounded-2xl font-semibold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3"
                style={{
                  background: `linear-gradient(135deg, #10b981, #065f46)`,
                }}
              >
                <Handshake size={20} />
                Start Your Partnership
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="group px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <TrendingUp size={20} />
                Calculate Your Potential
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            <p className={`text-slate-500 mt-6 ${poppins.className}`}>
              Completely free • Start earning immediately • Nigerian support
              team available 24/7
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
