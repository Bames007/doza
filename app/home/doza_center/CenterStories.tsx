"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Quote, Star } from "lucide-react";
import { bebasNeue, poppins } from "./constant";

const CenterStories: React.FC = () => {
  const stories = [
    {
      logo: "City General Hospital",
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
      quote:
        "Doza transformed our hospital's efficiency. The scheduling alone saved us 200+ staff hours monthly.",
      results: ["47% more admissions", "200+ hours saved", "99% satisfaction"],
    },
    {
      logo: "Metro Pharmacy Chain",
      name: "James Rodriguez",
      role: "Operations Director",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      quote:
        "The EMR and inventory management system revolutionized our 12-location pharmacy chain overnight.",
      results: ["62% faster turnover", "Zero EMR costs", "85% auto-ordering"],
    },
    {
      logo: "Vision Care Specialists",
      name: "Dr. Emily Watson",
      role: "Lead Ophthalmologist",
      image:
        "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=400&q=80",
      quote:
        "Doza's specialized features for vision care made patient management and record tracking seamless.",
      results: ["35% referral growth", "24/7 monitoring", "Integrated records"],
    },
  ];

  return (
    <section
      className={`py-32 bg-white relative overflow-hidden ${poppins.className}`}
    >
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-slate-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2
              className={`text-5xl md:text-8xl font-bold text-slate-900 leading-[0.9] tracking-tighter ${bebasNeue.className}`}
            >
              PROVEN RESULTS <br />
              <span className="text-emerald-600">ACROSS THE NETWORK</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-lg leading-snug border-l-2 border-emerald-500 pl-6">
            Trusted by the clinicians defining the 2026 healthcare standard.
            Here is what they have to say.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-[#2BB14B]/30 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <Quote className="text-[#2BB14B]/20 mb-8" size={48} />
                <p className="text-lg text-slate-600 italic leading-relaxed mb-10 min-h-[120px]">
                  "{story.quote}"
                </p>

                {/* Results List */}
                <div className="space-y-4 mb-10">
                  {story.results.map((res, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-[#2BB14B]" size={18} />
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                        {res}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile Section */}
              <div className="flex items-center gap-4 pt-8 border-t border-slate-100">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-50"
                />
                <div>
                  <h4
                    className={`text-xl font-bold text-slate-900 leading-none ${bebasNeue.className}`}
                  >
                    {story.name}
                  </h4>
                  <p className="text-[10px] font-bold text-[#2BB14B] uppercase tracking-widest mt-1">
                    {story.role}
                  </p>
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
