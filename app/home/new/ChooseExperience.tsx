"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Define fonts locally so they don't cause reference errors
const bebasNeue = { className: "font-['Bebas_Neue']" };
const poppins = { className: "font-['Poppins']" };

export default function RoleSelector({
  onSelectRole,
}: {
  onSelectRole: (role: "user" | "medic" | "center") => void;
}) {
  const [activeRole, setActiveRole] = useState<string | null>(null);

  const roles = [
    {
      id: "user",
      title: "Doza User",
      subtitle: "Personal health companion",
      color: "#2AB04A",
      bg: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "medic",
      title: "Doza Medic",
      subtitle: "Digital clinic",
      color: "#2E98ED",
      bg: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "center",
      title: "Doza Center",
      subtitle: "Hospital OS",
      color: "#85AB8B",
      bg: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  return (
    // UPDATED: h-[110dvh] on mobile gives extra breathing room, md:h-[100dvh] keeps it full screen on desktop
    <section className="h-[130dvh] md:h-[100dvh] w-full bg-[#050505] flex flex-col overflow-hidden">
      {/* HEADER SECTION */}
      <div className="flex-shrink-0 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div className="max-w-3xl">
          <h2
            className={`text-5xl md:text-8xl font-bold leading-[0.9] tracking-[0.01rem] text-white ${bebasNeue.className}`}
          >
            Choose Your <br />
            <span className="text-emerald-600">Experience</span>
          </h2>
        </div>
        <p
          className={`text-slate-500 font-medium max-w-sm text-base md:text-lg leading-relaxed border-l-2 border-emerald-500 pl-6 ${poppins.className}`}
        >
          Tailored tools for every role, zero friction.
        </p>
      </div>

      {/* CARDS CONTAINER */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {roles.map((role) => (
          <motion.div
            key={role.id}
            onClick={() => setActiveRole(role.id)}
            onMouseEnter={() => setActiveRole(role.id)}
            onMouseLeave={() => setActiveRole(null)}
            className={`relative flex flex-col justify-center px-8 md:px-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer border-b md:border-r border-white/5 ${
              activeRole === role.id ? "flex-[2] md:flex-[2.5]" : "flex-1"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <motion.img
                src={role.bg}
                className="w-full h-full object-cover brightness-[0.3]"
                animate={{ scale: activeRole === role.id ? 1.1 : 1 }}
                transition={{ duration: 0.7 }}
              />
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-white">
              <h2 className="text-4xl md:text-6xl font-['Bebas_Neue'] leading-none mb-2">
                {role.title}
              </h2>
              <p
                className="text-xs uppercase tracking-[0.3em] font-medium"
                style={{ color: role.color }}
              >
                {role.subtitle}
              </p>

              {/* Mobile/Desktop CTA */}
              {activeRole === role.id && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectRole(role.id as any);
                  }}
                >
                  Explore <ArrowRight size={16} />
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
