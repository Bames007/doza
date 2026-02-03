"use client";

import { motion } from "framer-motion";
import {
  Users,
  MessageSquare,
  TrendingUp,
  Calendar,
  Star,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";
import { bebasNeue, poppins } from "../home/doza_center/constant";
import Image from "next/image";

const CommunityForumPage = () => {
  const categories = [
    {
      icon: Users,
      title: "General Discussion",
      description: "Connect with healthcare professionals worldwide",
      threads: "1.2K",
      posts: "45.8K",
    },
    {
      icon: MessageSquare,
      title: "Technical Support",
      description: "Get help with Doza platform features and issues",
      threads: "856",
      posts: "23.4K",
    },
    {
      icon: TrendingUp,
      title: "Best Practices",
      description: "Share and learn healthcare management strategies",
      threads: "543",
      posts: "15.2K",
    },
    {
      icon: Calendar,
      title: "Events & Webinars",
      description: "Upcoming healthcare events and training sessions",
      threads: "234",
      posts: "8.7K",
    },
  ];

  const recentThreads = [
    {
      title: "How to optimize patient flow during peak hours?",
      author: "Dr. Sarah Chen",
      replies: 42,
      views: 1280,
      lastActivity: "2 hours ago",
      category: "Best Practices",
    },
    {
      title: "EMR integration with existing systems",
      author: "MedCenter Admin",
      replies: 31,
      views: 956,
      lastActivity: "5 hours ago",
      category: "Technical Support",
    },
    {
      title: "Upcoming webinar: AI in Healthcare Management",
      author: "Doza Team",
      replies: 18,
      views: 742,
      lastActivity: "1 day ago",
      category: "Events & Webinars",
    },
    {
      title: "Staff training strategies for new features",
      author: "Nurse Manager",
      replies: 27,
      views: 683,
      lastActivity: "1 day ago",
      category: "General Discussion",
    },
  ];

  const topContributors = [
    { name: "Dr. Michael Rodriguez", role: "Cardiologist", posts: 1245 },
    { name: "HealthCenter Pro", role: "Administrator", posts: 987 },
    { name: "Nurse Jane", role: "Head Nurse", posts: 756 },
    { name: "Tech Support", role: "Doza Team", posts: 642 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Doza Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span
                className={`text-2xl font-bold text-slate-900 ${bebasNeue.className}`}
              >
                DOZA
              </span>
            </Link>

            <Link
              href="/registration/center"
              className="px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#017840" }}
            >
              Join Community
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 mb-6">
              <Users size={16} />
              <span className={`text-sm font-medium ${poppins.className}`}>
                Community Forum
              </span>
            </div>

            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight ${bebasNeue.className}`}
            >
              Doza Healthcare
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Community
              </span>
            </h1>

            <p
              className={`text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
            >
              Connect with thousands of healthcare professionals, share
              experiences, and learn from industry experts in our vibrant
              community.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search discussions, topics, or members..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none text-lg"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Categories */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2
                  className={`text-3xl font-bold text-slate-900 ${bebasNeue.className}`}
                >
                  Forum Categories
                </h2>
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors">
                  <Filter size={16} />
                  <span className={poppins.className}>Filter</span>
                </button>
              </div>

              <div className="grid gap-6 mb-12">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                        <category.icon size={24} className="text-green-600" />
                      </div>

                      <div className="flex-1">
                        <h3
                          className={`text-xl font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
                        >
                          {category.title}
                        </h3>
                        <p
                          className={`text-slate-600 mb-4 ${poppins.className}`}
                        >
                          {category.description}
                        </p>

                        <div className="flex items-center gap-6 text-sm text-slate-500">
                          <span className={poppins.className}>
                            {category.threads} Threads
                          </span>
                          <span className={poppins.className}>
                            {category.posts} Posts
                          </span>
                        </div>
                      </div>

                      <button className="bg-green-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                        Join
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Threads */}
              <h2
                className={`text-3xl font-bold text-slate-900 mb-6 ${bebasNeue.className}`}
              >
                Recent Discussions
              </h2>

              <div className="space-y-4">
                {recentThreads.map((thread, index) => (
                  <motion.div
                    key={thread.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
                        >
                          {thread.title}
                        </h3>

                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                          <span className={poppins.className}>
                            By {thread.author}
                          </span>
                          <span
                            className={`px-2 py-1 bg-slate-100 rounded-full text-xs ${poppins.className}`}
                          >
                            {thread.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-slate-500">
                          <span className={poppins.className}>
                            {thread.replies} replies
                          </span>
                          <span className={poppins.className}>
                            {thread.views} views
                          </span>
                          <span className={poppins.className}>
                            {thread.lastActivity}
                          </span>
                        </div>
                      </div>

                      <button className="text-green-600 hover:text-green-700 transition-colors">
                        <MessageSquare size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Top Contributors */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
              >
                <h3
                  className={`text-xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
                >
                  Top Contributors
                </h3>

                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div
                      key={contributor.name}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {contributor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      <div className="flex-1">
                        <div
                          className={`font-semibold text-slate-900 ${poppins.className}`}
                        >
                          {contributor.name}
                        </div>
                        <div
                          className={`text-sm text-slate-500 ${poppins.className}`}
                        >
                          {contributor.role} • {contributor.posts} posts
                        </div>
                      </div>

                      <Star
                        size={16}
                        className="text-yellow-500 fill-current"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Community Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
              >
                <h3
                  className={`text-xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
                >
                  Community Stats
                </h3>

                <div className="space-y-3">
                  {[
                    { label: "Total Members", value: "15,842" },
                    { label: "Online Now", value: "2,156" },
                    { label: "Discussions", value: "45,823" },
                    { label: "Solutions", value: "38,491" },
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className="flex justify-between items-center"
                    >
                      <span className={`text-slate-600 ${poppins.className}`}>
                        {stat.label}
                      </span>
                      <span
                        className={`font-bold text-slate-900 ${bebasNeue.className}`}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white text-center"
              >
                <h3 className={`text-xl font-bold mb-3 ${bebasNeue.className}`}>
                  Join the Conversation
                </h3>

                <p
                  className={`text-green-100 mb-4 text-sm ${poppins.className}`}
                >
                  Connect with healthcare professionals and share your expertise
                </p>

                <Link
                  href="/registration/center"
                  className="block w-full bg-white text-green-600 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
                >
                  Create Account
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/logo.png"
              alt="Doza Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className={`text-2xl font-bold ${bebasNeue.className}`}>
              DOZA
            </span>
          </div>

          <p
            className={`text-slate-400 max-w-2xl mx-auto mb-8 ${poppins.className}`}
          >
            Connecting healthcare professionals through knowledge sharing and
            community support.
          </p>

          <div className={`text-slate-500 text-sm ${poppins.className}`}>
            &copy; 2024 Doza Healthcare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunityForumPage;
