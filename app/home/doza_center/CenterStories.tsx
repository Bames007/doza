"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle, Quote } from "lucide-react";
import { bebasNeue, poppins } from "./constant";
import { CenterStory } from "./type";

const CenterStories: React.FC = () => {
  const stories: CenterStory[] = [
    {
      logo: "City General Hospital",
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
      stats: "47% increase in patient admissions",
      quote:
        "Doza transformed our hospital's efficiency. The AI-powered scheduling alone saved us 200+ staff hours monthly.",
      results: ["47% more admissions", "200+ hours saved", "99% satisfaction"],
    },
    {
      logo: "Metro Pharmacy Chain",
      name: "James Rodriguez",
      role: "Operations Director",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      stats: "62% faster inventory turnover",
      quote:
        "The free EMR and inventory management system revolutionized our 12-location pharmacy chain.",
      results: ["62% faster turnover", "Zero EMR costs", "85% auto-ordering"],
    },
    {
      logo: "Vision Care Specialists",
      name: "Dr. Emily Watson",
      role: "Lead Ophthalmologist",
      image:
        "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=400&q=80",
      stats: "35% growth in referrals",
      quote:
        "As an eye clinic, Doza's specialized features for vision care made patient management seamless.",
      results: [
        "35% referral growth",
        "24/7 monitoring",
        "Integrated test records",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="mb-16">
          <h2
            className={`text-4xl sm:text-6xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
          >
            SUCCESS STORIES FROM <br />
            <span className="text-[#2BB14B]">OUR NETWORK</span>
          </h2>
          <p
            className={`text-slate-500 max-w-2xl text-sm sm:text-base ${poppins.className}`}
          >
            Real results from world-class institutions using Doza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <Quote className="text-[#2BB14B]/20 mb-6" size={40} />
                <p
                  className={`text-lg text-slate-700 italic mb-8 leading-relaxed ${poppins.className}`}
                >
                  "{story.quote}"
                </p>

                <div className="space-y-3 mb-8">
                  {story.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                        <CheckCircle size={12} className="text-[#2BB14B]" />
                      </div>
                      <span
                        className={`text-xs font-bold text-slate-900 uppercase tracking-tight ${poppins.className}`}
                      >
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-green-100"
                />
                <div>
                  <div
                    className={`font-bold text-slate-900 leading-none mb-1 ${bebasNeue.className} text-xl tracking-wide`}
                  >
                    {story.name}
                  </div>
                  <div className="text-[10px] text-[#2BB14B] font-bold uppercase tracking-widest leading-none">
                    {story.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CenterStories;
