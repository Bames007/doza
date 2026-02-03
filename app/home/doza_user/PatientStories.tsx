"use client";

import { motion } from "framer-motion";
import { TrendingUp, MapPin, Clock, Pill, Heart, Users } from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import Image from "next/image";

const colors = {
  green: { primary: "#1E8E39", light: "#27AE60", dark: "#1A7A34" },
};

export default function PatientStories() {
  const stories = [
    {
      name: "Chinedu O.",
      age: 42,
      location: "Lagos",
      condition: "Malaria Treatment",
      story:
        "I used to spend hours in traffic going to hospitals in Lagos. With Doza, I found a quality healthcare center just 10 minutes from my office in Ikeja. The doctor already had my medical history when I arrived.",
      result: "Treated in 2 hours instead of all day",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      feature: "hospital-finder",
      icon: MapPin,
    },
    {
      name: "Aisha B.",
      age: 28,
      location: "Kano",
      condition: "Prenatal Care",
      story:
        "As a first-time mother, I was anxious about my pregnancy. Doza helped me track my medication and appointments. When I traveled to visit family in Kaduna, I easily found a trusted hospital for my check-up.",
      result: "Healthy baby delivered at 39 weeks",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      feature: "medication-reminders",
      icon: Clock,
    },
    {
      name: "The Adebayo Family",
      age: "Family Plan",
      location: "Abuja",
      condition: "Family Health Management",
      story:
        "Managing health for my aging parents and two children was overwhelming. Doza's family dashboard lets me track everyone's medications, appointments, and medical history in one place. No more missing doses or forgotten appointments.",
      result: "100% medication adherence for 6 months",
      image:
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=400&fit=crop&crop=face",
      feature: "family-dashboard",
      icon: Users,
    },
    {
      name: "Emeka N.",
      age: 35,
      location: "Port Harcourt",
      condition: "Hypertension Management",
      story:
        "After being diagnosed with high blood pressure, I struggled to remember my medications. Doza's reminders and drug tracking helped me stay consistent. My doctor can now see my complete treatment history during check-ups.",
      result: "BP stabilized from 160/100 to 120/80",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      feature: "drug-tracking",
      icon: Pill,
    },
    {
      name: "Funke A.",
      age: 50,
      location: "Ibadan",
      condition: "Diabetes Care",
      story:
        "Living with diabetes for 10 years, I've seen many hospitals. Doza helped me find specialists covered by my insurance and track my blood sugar levels. The emergency feature gives me peace of mind when traveling.",
      result: "A1C reduced from 8.5 to 6.0 in 4 months",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
      feature: "specialist-finder",
      icon: Heart,
    },
    {
      name: "Mohammed S.",
      age: 60,
      location: "Maiduguri",
      condition: "Emergency Care",
      story:
        "During a sudden chest pain episode, my wife used Doza to find the nearest cardiac center. The hospital had my medical records ready, saving crucial minutes. The doctors said the quick access to my history helped them make faster decisions.",
      result: "Treatment started within 15 minutes of arrival",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      feature: "emergency-care",
      icon: MapPin,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <StoryCard key={story.name} story={story} index={index} />
          ))}
        </div>

        {/* Network Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-green-200 shadow-lg">
            <Heart
              className="w-6 h-6"
              style={{ color: colors.green.primary }}
            />
            <div>
              <div className={`font-bold text-lg ${bebasNeue.className}`}>
                Doza Nigeria Network
              </div>
              <div className={`text-gray-600 text-sm ${poppins.className}`}>
                Connecting you to 500+ hospitals and clinics across Nigeria
              </div>
            </div>
          </div>
        </motion.div>
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
        className={`text-4xl sm:text-5xl font-bold mb-6 ${bebasNeue.className}`}
      >
        Nigerian Stories,{" "}
        <span style={{ color: colors.green.primary }}>Real Results</span>
      </h2>
      <p
        className={`text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
      >
        See how Doza is transforming healthcare across Nigeria—from Lagos to
        Kano, helping Nigerians find quality care faster and manage their health
        better.
      </p>
    </motion.div>
  );
}

function StoryCard({ story, index }: { story: any; index: number }) {
  const IconComponent = story.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 hover:bg-green-50 transition-all duration-300 group hover:transform hover:-translate-y-2 shadow-lg border border-green-100"
    >
      {/* Avatar with Image */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              src={story.image}
              alt={story.name}
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
              <IconComponent
                size={16}
                style={{ color: colors.green.primary }}
              />
            </div>
          </div>
          <div>
            <h3 className={`text-xl font-bold ${bebasNeue.className}`}>
              {story.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>{story.age}</span>
              <span>•</span>
              <span>{story.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Condition Badge */}
      <div
        className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 border"
        style={{
          backgroundColor: `${colors.green.primary}15`,
          color: colors.green.primary,
          borderColor: `${colors.green.primary}30`,
        }}
      >
        {story.condition}
      </div>

      {/* Story */}
      <p className={`text-gray-700 mb-4 leading-relaxed ${poppins.className}`}>
        "{story.story}"
      </p>

      {/* Result */}
      <div className="border-t border-green-100 pt-4 mt-4">
        <div className="flex items-center gap-2">
          <TrendingUp size={16} style={{ color: colors.green.primary }} />
          <span
            className={`font-medium ${poppins.className}`}
            style={{ color: colors.green.primary }}
          >
            {story.result}
          </span>
        </div>
      </div>

      {/* Feature Highlight */}
      <div className="mt-4 pt-4 border-t border-green-100">
        <div
          className={`text-xs uppercase tracking-wider text-gray-500 ${poppins.className}`}
        >
          Doza Feature
        </div>
        <div className={`text-sm font-medium mt-1 ${poppins.className}`}>
          {story.feature === "drug-tracking" && "Complete Medication History"}
          {story.feature === "hospital-finder" && "Smart Hospital Locator"}
          {story.feature === "medication-reminders" && "Medication Reminders"}
          {story.feature === "family-dashboard" && "Family Health Dashboard"}
          {story.feature === "specialist-finder" && "Specialist Finder"}
          {story.feature === "emergency-care" && "Emergency Care Network"}
        </div>
      </div>
    </motion.div>
  );
}
