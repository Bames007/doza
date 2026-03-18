"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Users,
  MessageSquare,
  TrendingUp,
  Calendar,
  Star,
  Search,
  Filter,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  PlusCircle,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { bebasNeue, poppins } from "../home/doza_center/constant";
import Image from "next/image";

const CommunityForumPage = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const categories = [
    {
      icon: Users,
      title: "Clinical Network",
      desc: "Peer discussions for medical practitioners.",
      threads: "1.2K",
      posts: "45.8K",
    },
    {
      icon: Zap,
      title: "System Ops",
      desc: "Optimizing clinic technical workflows.",
      threads: "856",
      posts: "23.4K",
    },
    {
      icon: TrendingUp,
      title: "Growth & Revenue",
      desc: "Scaling medical business revenue.",
      threads: "543",
      posts: "15.2K",
    },
    {
      icon: Calendar,
      title: "Medical Summits",
      desc: "Exclusive webinars and networking.",
      threads: "234",
      posts: "8.7K",
    },
  ];

  const recentThreads = [
    {
      title: "Optimizing patient flow during peak hours?",
      author: "Dr. Sarah Chen",
      replies: 42,
      views: 1280,
      time: "2h ago",
      cat: "Growth",
    },
    {
      title: "Best practices for AES-256 data encryption",
      author: "MedCenter Admin",
      replies: 31,
      views: 956,
      time: "5h ago",
      cat: "System Ops",
    },
    {
      title: "Upcoming: AI-Driven Diagnosis webinar series",
      author: "Doza Team",
      replies: 18,
      views: 742,
      time: "1d ago",
      cat: "Events",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-[#F9FBFC] text-slate-900 ${poppins.className}`}
    >
      {/* Decorative Blur */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-emerald-400/5 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-9 h-9">
              <Image
                src="/logo.png"
                alt="Doza"
                fill
                className="object-contain"
              />
            </div>
            <span
              className={`text-2xl font-black text-slate-900 tracking-tighter ${bebasNeue.className}`}
            >
              DOZA <span className="text-emerald-600">COMMUNITY</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">
              Discussions
            </Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">
              Experts
            </Link>
          </div>

          <Link href="/registration/center">
            <button className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all">
              JOIN HUB
            </button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8"
            >
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-700 text-[10px] font-black tracking-[0.2em] uppercase">
                Intelligence Hub
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-6xl md:text-9xl font-bold text-slate-900 mb-8 leading-[0.85] tracking-tighter ${bebasNeue.className}`}
            >
              CONNECT. SHARE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                EVOLVE.
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="max-w-2xl mx-auto relative group mb-12"
            >
              <Search
                className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors"
                size={20}
              />
              <input
                type="text"
                placeholder="Search medical insights or verified experts..."
                className="w-full bg-white border border-slate-200 rounded-[2rem] py-7 pl-16 pr-36 outline-none focus:ring-4 focus:ring-emerald-500/5 transition-all text-slate-900 shadow-sm"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-xs transition-all tracking-widest">
                SEARCH
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <div className="grid sm:grid-cols-2 gap-4">
              {categories.map((cat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-4 rounded-2xl bg-slate-50 text-slate-900 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <cat.icon size={26} strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight
                      className="text-slate-200 group-hover:text-emerald-500 transition-colors"
                      size={20}
                    />
                  </div>
                  <h3
                    className={`text-3xl text-slate-900 mb-3 ${bebasNeue.className}`}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                    {cat.desc}
                  </p>
                  <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span className="text-slate-900">
                      {cat.threads} Threads
                    </span>
                    <div className="w-1 h-1 bg-slate-200 rounded-full" />
                    <span>{cat.posts} Posts</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trending Feed */}
            <div className="space-y-4">
              <h2
                className={`text-4xl text-slate-900 mb-8 ${bebasNeue.className}`}
              >
                Active Discussions
              </h2>
              {recentThreads.map((thread, i) => (
                <div
                  key={i}
                  className="group p-7 rounded-3xl bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[9px] font-black text-emerald-600 uppercase tracking-[0.2em] px-2.5 py-1 bg-emerald-50 rounded-md">
                        {thread.cat}
                      </span>
                      <span className="text-[9px] text-slate-400 uppercase font-bold">
                        {thread.time}
                      </span>
                    </div>
                    <h4 className="text-xl text-slate-900 font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                      {thread.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium">
                      By <span className="text-slate-900">{thread.author}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-10">
                    <div className="text-center">
                      <p className="text-slate-900 font-black text-lg">
                        {thread.replies}
                      </p>
                      <p className="text-[9px] text-slate-400 uppercase font-black">
                        Replies
                      </p>
                    </div>
                    <button className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-all flex items-center justify-center">
                      <MessageCircle size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden">
              <div className="relative w-10 h-10 mb-8">
                <Image
                  src="/logo.png"
                  alt="Doza"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <h3 className={`text-4xl text-white mb-8 ${bebasNeue.className}`}>
                Global Network
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { l: "Members", v: "15K+" },
                  { l: "Verified", v: "98%" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="bg-white/5 p-5 rounded-3xl border border-white/10"
                  >
                    <p className="text-white text-2xl font-black mb-1">{s.v}</p>
                    <p className="text-slate-400 text-[9px] uppercase font-black tracking-widest">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
              <Link href="/registration/center">
                <button className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all">
                  JOIN NETWORK
                </button>
              </Link>
            </div>

            <Link
              href="/"
              className="block p-8 rounded-[3rem] border-2 border-dashed border-slate-200 text-center hover:border-emerald-600 transition-colors group"
            >
              <p
                className={`text-2xl text-slate-400 group-hover:text-emerald-600 ${bebasNeue.className}`}
              >
                Return To Home
              </p>
            </Link>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-block relative w-10 h-10 mb-6">
            <Image
              src="/logo.png"
              alt="Doza"
              fill
              className="object-contain opacity-50"
            />
          </Link>
          <h2
            className={`text-4xl text-slate-900 mb-12 ${bebasNeue.className}`}
          >
            DOZA COMMUNITY
          </h2>
          <div className="flex justify-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            <Link href="/" className="hover:text-emerald-600">
              Home
            </Link>
            <Link href="#" className="hover:text-emerald-600">
              Safety
            </Link>
            <Link href="#" className="hover:text-emerald-600">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunityForumPage;
