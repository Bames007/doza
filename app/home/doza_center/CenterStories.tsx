import React from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { bebasNeue, poppins, colors } from "./constant";
import { CenterStory } from "./type";

const CenterStories: React.FC = () => {
  const stories: CenterStory[] = [
    {
      logo: "City General Hospital",
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      stats: "47% increase in patient admissions",
      quote:
        "Doza transformed our hospital's efficiency. The AI-powered scheduling alone saved us 200+ staff hours monthly.",
      results: [
        "47% more patient admissions",
        "200+ staff hours saved monthly",
        "99% patient satisfaction",
        "30% reduction in wait times",
      ],
    },
    {
      logo: "Metro Pharmacy Chain",
      name: "James Rodriguez",
      role: "Operations Director",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      stats: "62% faster inventory turnover",
      quote:
        "The free EMR and inventory management system revolutionized our 12-location pharmacy chain.",
      results: [
        "62% faster inventory turnover",
        "Zero EMR costs",
        "45% reduction in stockouts",
        "85% automated ordering",
      ],
    },
    {
      logo: "Vision Care Specialists",
      name: "Dr. Emily Watson",
      role: "Lead Ophthalmologist",
      image:
        "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stats: "35% growth in referrals",
      quote:
        "As an eye clinic, Doza's specialized features for vision care made patient management seamless.",
      results: [
        "35% growth in referrals",
        "50% faster patient processing",
        "24/7 remote monitoring",
        "Integrated vision test records",
      ],
    },
  ];

  // Fixed animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-green-600 to-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 ${bebasNeue.className}`}
          >
            Success Stories from
            <span className="block text-green-200">Our Network</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className={`text-base sm:text-lg md:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed ${poppins.className} px-2 sm:px-0`}
          >
            Discover how healthcare centers across the country are transforming
            their operations and patient care with Doza.
          </motion.p>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              className="bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Logo and Stats */}
              <motion.div
                className="mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div
                  className={`text-lg sm:text-xl font-bold text-slate-900 ${bebasNeue.className}`}
                >
                  {story.logo}
                </div>
                <div
                  className="text-sm font-semibold mt-1"
                  style={{ color: colors.green?.primary || "#10b981" }}
                >
                  {story.stats}
                </div>
              </motion.div>

              {/* Quote */}
              <motion.blockquote
                className="text-slate-700 italic mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 * index + 0.1 }}
                viewport={{ once: true }}
              >
                "{story.quote}"
              </motion.blockquote>

              {/* Profile */}
              <motion.div
                className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index + 0.2 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={story.image}
                  alt={story.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                <div className="min-w-0">
                  <div
                    className={`font-bold text-slate-900 text-sm sm:text-base ${bebasNeue.className} truncate`}
                  >
                    {story.name}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 truncate">
                    {story.role}
                  </div>
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                className="border-t border-slate-200 pt-4 sm:pt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2 sm:space-y-3">
                  {story.results.map((result, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2 sm:gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index + 0.4 + idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <CheckCircle
                          size={14}
                          className="sm:w-4 sm:h-4 flex-shrink-0"
                          style={{ color: colors.green?.primary || "#10b981" }}
                        />
                      </motion.div>
                      <span
                        className={`text-xs sm:text-sm text-slate-600 ${poppins.className}`}
                      >
                        {result}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <p
            className={`text-green-200 text-sm sm:text-base ${poppins.className} mb-4`}
          >
            Join these successful healthcare centers
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-xl"
            style={{
              backgroundColor: colors.green?.primary || "#10b981",
              color: "white",
            }}
          >
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CenterStories;
