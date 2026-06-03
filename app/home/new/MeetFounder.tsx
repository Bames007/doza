"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Target,
  TrendingUp,
  Users,
  ExternalLink,
} from "lucide-react";

export default function MeetFounder() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen py-20 px-6 md:px-12 selection:bg-[#336443] selection:text-white">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-64 h-64 shrink-0"
          >
            <div className="absolute inset-0 bg-[#336443] rounded-3xl rotate-3 opacity-10" />
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop"
              alt="Eddy Bames"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>

          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.4em] text-[#336443] font-bold uppercase">
              The Founder
            </span>
            <h1 className="text-[clamp(3rem,8vw,5rem)] font-['Bebas_Neue'] leading-[0.9] text-[#1f2a1d]">
              Eddy Bames
              <br />
              <span className="text-[#85AB8B] italic">
                Healthcare Visionary
              </span>
            </h1>
            <p className="text-lg text-[#4b5b47] font-['Poppins'] leading-relaxed max-w-lg">
              Engineer. Believer in a world where geography no longer dictates
              the quality of your care.
            </p>
          </div>
        </div>

        {/* The Story Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="md:col-span-2 bg-white p-10 rounded-[2rem] border border-black/5 shadow-sm">
            <h3 className="text-2xl font-['Bebas_Neue'] mb-6 text-[#1f2a1d]">
              The Genesis
            </h3>
            <p className="text-[#4b5b47] font-['Poppins'] leading-loose mb-6">
              Eddy spent a decade optimizing global logistics, but the true test
              came when his friend&apos;s life depended on a simple MRI. After
              traveling through four hospitals in a single night to find a
              functional machine, he realized the system wasn't broken it was
              disconnected.
            </p>
            <p className="text-[#4b5b47] font-['Poppins'] leading-loose">
              "No one should die because a hospital doesn't talk to another
              hospital." That night, he sold his logistics startup and began
              building Doza.
            </p>
          </div>

          <div className="bg-[#336443] p-10 rounded-[2rem] text-white flex flex-col justify-between">
            <Target size={40} className="mb-4 text-[#85AB8B]" />
            <p className="text-xl font-['Bebas_Neue'] italic">
              Zero fragmentation by 2030.
            </p>
          </div>
        </div>

        {/* Letters Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <LetterCard
            title="To Our Investors"
            icon={TrendingUp}
            content="You're not just funding software. You're funding a future where a mother in a village gets the same speed of care as a CEO in a capital city."
            sign="Eddy Bames"
          />
          <LetterCard
            title="To Our Users"
            icon={Users}
            content="Your health story should follow you. I built Doza for my friend and for every person who has been lost in a maze of referrals, lost records, and lost time."
            sign="— Eddy"
          />
        </div>
      </div>
    </main>
  );
}

function LetterCard({ title, icon: Icon, content, sign }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-10 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl transition-all"
    >
      <Icon className="text-[#2AB04A] mb-6" size={28} />
      <h3 className="text-2xl font-['Bebas_Neue'] mb-4 text-[#1f2a1d]">
        {title}
      </h3>
      <p className="text-[#4b5b47] font-['Poppins'] text-sm leading-relaxed mb-6">
        {content}
      </p>
      <div className="text-[#336443] font-bold text-xs uppercase tracking-widest italic">
        {sign}
      </div>
    </motion.div>
  );
}
