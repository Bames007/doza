"use client";

import { motion } from "framer-motion";
import {
  Star,
  Quote,
  Award,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";

export default function MedicStories() {
  const successStories = [
    {
      name: "Dr. Adebayo Ogunlesi",
      specialty: "Cardiologist",
      location: "Lagos, Nigeria",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      story:
        "Doza helped me expand my cardiology practice across Lagos. I now serve patients in 5 different locations and reduced my administrative costs by 40% while increasing patient volume.",
      results: [
        { icon: TrendingUp, value: "75%", label: "Patient Growth" },
        { icon: Users, value: "25hrs", label: "Time Saved/Week" },
        { icon: DollarSign, value: "90%", label: "Revenue Increase" },
      ],
      highlight: "Featured in Nigeria Medical Journal",
    },
    {
      name: "Nurse Chidinma Okoro",
      specialty: "Registered Nurse & Health Educator",
      location: "Abuja, Nigeria",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      story:
        "As a nurse in Abuja, Doza enabled me to start my own health education practice. The platform helped me reach communities across Northern Nigeria through telehealth.",
      results: [
        { icon: Users, value: "500+", label: "Patients Served" },
        { icon: Calendar, value: "98%", label: "Booking Rate" },
        { icon: DollarSign, value: "4x", label: "Income Growth" },
      ],
      highlight: "Healthcare Innovator Award 2023",
    },
    {
      name: "Dr. Femi Alabi",
      specialty: "Orthopedic Surgeon",
      location: "Port Harcourt, Nigeria",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      story:
        "The practice management tools helped me streamline my surgical practice. I've reduced patient wait times by 60% and expanded my services to include virtual consultations.",
      results: [
        { icon: TrendingUp, value: "3", label: "New Locations" },
        { icon: Users, value: "8", label: "Team Members" },
        { icon: DollarSign, value: "3x", label: "Practice Value" },
      ],
      highlight: "Expanded to 3 locations in 12 months",
    },
    {
      name: "Dr. Ngozi Eze",
      specialty: "Dermatologist",
      location: "Enugu, Nigeria",
      image:
        "https://images.unsplash.com/photo-1594824947933-d0501ba2fe65?w=400&h=400&fit=crop&crop=face",
      story:
        "Doza's telehealth platform transformed my dermatology practice in Eastern Nigeria. I can now serve patients across the region, and the mobile app lets me manage my practice anywhere.",
      results: [
        { icon: Users, value: "400%", label: "Patient Reach" },
        { icon: Calendar, value: "55%", label: "Admin Time" },
        { icon: DollarSign, value: "150%", label: "Revenue Growth" },
      ],
      highlight: "Telehealth Pioneer Award Nigeria",
    },
  ];

  const overallStats = [
    { number: "5,000+", label: "Nigerian Healthcare Pros" },
    { number: "50%", label: "Average Revenue Growth" },
    { number: "99%", label: "Satisfaction Rate" },
    { number: "4.8/5", label: "Platform Rating" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
      {/* Header Section */}
      <section className="pt-16 md:pt-20 pb-12 md:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 ${bebasNeue.className}`}
          >
            Nigerian <span className="text-green-600">Success Stories</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Discover how healthcare professionals across Nigeria are
            transforming their practices and achieving remarkable growth with
            Doza Medics.
          </motion.p>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {overallStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center"
              >
                <div
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-1 sm:mb-2 ${bebasNeue.className}`}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-slate-600 text-xs sm:text-sm ${poppins.className}`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Story Header */}
                <div className="p-4 sm:p-6 md:p-8 border-b border-slate-200">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-lg sm:text-xl md:text-2xl font-bold text-slate-900 ${bebasNeue.className}`}
                      >
                        {story.name}
                      </h3>
                      <p
                        className={`text-slate-600 text-sm sm:text-base ${poppins.className}`}
                      >
                        {story.specialty} • {story.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className="sm:w-4 sm:h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-green-200">
                    <div className="flex items-center gap-2">
                      <Award
                        size={16}
                        className="sm:w-5 sm:h-5 text-green-600"
                      />
                      <span
                        className={`text-green-700 font-semibold text-xs sm:text-sm ${poppins.className}`}
                      >
                        {story.highlight}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <Quote
                      size={20}
                      className="sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5"
                    />
                    <p
                      className={`text-slate-700 leading-relaxed italic text-sm sm:text-base ${poppins.className}`}
                    >
                      "{story.story}"
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-6 border-t border-slate-200">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <result.icon
                          size={16}
                          className="sm:w-5 sm:h-5 text-green-600 mx-auto mb-1 sm:mb-2"
                        />
                        <div
                          className={`text-base sm:text-lg font-bold text-slate-900 ${bebasNeue.className}`}
                        >
                          {result.value}
                        </div>
                        <div
                          className={`text-slate-600 text-xs ${poppins.className}`}
                        >
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 ${bebasNeue.className}`}
            >
              Join Our{" "}
              <span className="text-green-400">Nigerian Success Community</span>
            </h2>
            <p
              className={`text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed ${poppins.className}`}
            >
              Become part of the 5,000+ Nigerian healthcare professionals who
              are transforming their practices and achieving their professional
              goals with Doza.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-lg bg-green-600 text-white hover:bg-green-700 transition-all duration-300 hover:scale-105">
                Start Your Success Story
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-lg border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105">
                Read More Stories
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Types Impact */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-8 sm:mb-12 md:mb-16 ${bebasNeue.className}`}
          >
            Impact Across{" "}
            <span className="text-green-600">Nigerian Healthcare</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                specialty: "Doctors",
                impact: "50% revenue growth average",
                count: "3,000+",
              },
              {
                specialty: "Nurses",
                impact: "4x client capacity increase",
                count: "1,200+",
              },
              {
                specialty: "Nutritionists",
                impact: "90% patient retention rate",
                count: "400+",
              },
              {
                specialty: "Therapists",
                impact: "65% time saved on admin",
                count: "400+",
              },
            ].map((item, index) => (
              <motion.div
                key={item.specialty}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1 sm:mb-2 ${bebasNeue.className}`}
                >
                  {item.specialty}
                </div>
                <div
                  className={`text-2xl sm:text-3xl font-bold text-green-600 mb-2 sm:mb-3 ${bebasNeue.className}`}
                >
                  {item.count}
                </div>
                <div
                  className={`text-slate-600 text-xs sm:text-sm ${poppins.className}`}
                >
                  {item.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nigerian Healthcare Impact */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 ${bebasNeue.className}`}
            >
              Transforming{" "}
              <span className="text-green-600">Healthcare in Nigeria</span>
            </h2>
            <p
              className={`text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed ${poppins.className}`}
            >
              Join the movement to improve healthcare access and quality across
              Nigeria through technology and innovation.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
              {[
                { value: "36", label: "States Reached" },
                { value: "500K+", label: "Patients Served" },
                { value: "85%", label: "Rural Reach" },
                { value: "₦0", label: "Upfront Cost" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-lg p-3 sm:p-4 shadow-sm"
                >
                  <div
                    className={`text-green-600 font-bold text-lg sm:text-xl ${bebasNeue.className}`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
