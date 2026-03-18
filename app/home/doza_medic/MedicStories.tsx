"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Users,
  ArrowUpRight,
  ChevronRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { bebasNeue, poppins } from "../doza_center/constant";
import { useRouter } from "next/navigation";

export default function MedicStories() {
  const router = useRouter();
  const [selectedStory, setSelectedStory] = useState<any>(null);

  const successStories = [
    {
      id: 1,
      name: "Dr. Adebayo Ogunlesi",
      specialty: "Cardiologist",
      location: "Lagos",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
      story: "Doza helped me expand my cardiology practice across Lagos.",
      detailedStory:
        "Before Doza, managing patient records across multiple clinics was a nightmare. Doza's unified dashboard allowed me to synchronize consultations across 5 locations, increasing my daily patient capacity by 40%.",
      impact: [
        "Unified Patient Records",
        "Multi-location Sync",
        "40% Revenue Growth",
      ],
      highlight: "Featured in NMJ",
      gridClass: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      name: "Nurse Chidinma",
      specialty: "RN & Educator",
      location: "Abuja",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
      story:
        "Enabled me to start my own telehealth practice reaching Northern Nigeria.",
      detailedStory:
        "I wanted to provide education to rural mothers. Doza provided the encrypted video tools and automated billing that made my 'Mobile Nurse' initiative possible without needing a physical office.",
      impact: ["Zero-overhead Launch", "Automated Billing", "Rural Outreach"],
      highlight: "Innovator Award",
      gridClass: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      name: "Dr. Femi Alabi",
      specialty: "Surgeon",
      location: "PH City",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80",
      story: "Reduced patient wait times by 60% with digital workflow.",
      detailedStory:
        "We replaced our paper-based intake with Doza's digital forms. Patients now check in before they arrive, allowing my surgical team to prep more efficiently and handle more complex cases.",
      impact: [
        "60% Less Wait Time",
        "Paperless Workflow",
        "Increased Efficiency",
      ],
      highlight: "3 New Locations",
      gridClass: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      name: "Dr. Ngozi Eze",
      specialty: "Dermatologist",
      location: "Enugu",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
      story:
        "Transforming skincare in Eastern Nigeria through mobile-first management.",
      detailedStory:
        "Dermatology is visual. Doza's high-res image vault allows me to track patient progress over months, ensuring my treatments are working perfectly even when the patient is miles away.",
      impact: [
        "Visual Progress Tracking",
        "Remote Consultations",
        "High Patient Retention",
      ],
      highlight: "Telehealth Pioneer",
      gridClass: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-[#FDFDFD] pb-20 ${poppins.className} selection:bg-emerald-100 selection:text-emerald-900`}
    >
      {/* Header */}
      <section className="pt-28 pb-12 px-6 text-center">
        <motion.h1
          className={`text-6xl md:text-[10rem] font-bold text-slate-900 leading-[0.85] tracking-tighter pb-4 ${bebasNeue.className}`}
        >
          NIGERIAN <br />
          <span className="text-emerald-600">SUCCESS</span>
        </motion.h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-6 italic">
          Tap on a medic to see how Doza changed their practice.
        </p>
      </section>

      {/* Bento Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[320px]">
          {/* Avatar Stats Card */}
          <div className="md:col-span-1 md:row-span-1 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <Users className="text-emerald-600 mb-4" size={24} />
              <h4
                className={`text-5xl text-slate-900 leading-none ${bebasNeue.className}`}
              >
                5,000+
              </h4>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mt-1 text-balance">
                Medics growing with Doza
              </p>
            </div>
            <div className="flex -space-x-3">
              {successStories.map((s) => (
                <img
                  key={s.id}
                  src={s.image}
                  className="w-10 h-10 rounded-full border-4 border-white object-cover"
                  alt="avatar"
                />
              ))}
            </div>
          </div>

          {/* Story Tiles */}
          {successStories.map((story) => (
            <motion.div
              key={story.id}
              layoutId={`card-${story.id}`}
              onClick={() => setSelectedStory(story)}
              whileHover={{ scale: 0.98 }}
              className={`relative rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-lg ${story.gridClass}`}
            >
              <img
                src={story.image}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <span className="px-3 py-1 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[9px] font-bold rounded-full uppercase tracking-widest mb-3 inline-block">
                  {story.highlight}
                </span>
                <h3
                  className={`text-4xl text-white leading-none ${bebasNeue.className}`}
                >
                  {story.name}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-white/60 text-xs">
                  <span>Read Story</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Detailed Story Modal --- */}
      <AnimatePresence>
        {selectedStory && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStory(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
            />

            <motion.div
              layoutId={`card-${selectedStory.id}`}
              className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]"
            >
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-2/5 relative">
                <img
                  src={selectedStory.image}
                  className="h-full w-full object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent md:hidden" />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <span className="text-emerald-600 font-bold uppercase tracking-widest text-[10px]">
                    {selectedStory.specialty} • {selectedStory.location}
                  </span>
                  <h2
                    className={`text-5xl md:text-6xl text-slate-900 mt-2 leading-none ${bebasNeue.className}`}
                  >
                    {selectedStory.name}
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-slate-400 uppercase text-[10px] font-bold tracking-widest mb-2">
                      The Doza Impact
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {selectedStory.detailedStory}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {selectedStory.impact.map((item: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-3 bg-emerald-50 rounded-2xl border border-emerald-100"
                      >
                        <CheckCircle2 className="text-emerald-600" size={18} />
                        <span className="text-slate-700 text-sm font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => router.push("/registration/medic")}
                  className="mt-10 w-full md:w-max px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 group"
                >
                  Join Like {selectedStory.name.split(" ")[1]}
                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
