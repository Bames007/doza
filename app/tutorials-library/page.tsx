"use client";

import { motion } from "framer-motion";
import {
  Play,
  Star,
  Download,
  BookOpen,
  Video,
  FileText,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";
import { bebasNeue, poppins } from "../home/doza_center/constant";
import Image from "next/image";

const TutorialsLibraryPage = () => {
  const categories = [
    {
      title: "Getting Started",
      count: 12,
      color: "from-blue-500 to-cyan-500",
      icon: Play,
    },
    {
      title: "Patient Management",
      count: 28,
      color: "from-green-500 to-emerald-500",
      icon: BookOpen,
    },
    {
      title: "EMR System",
      count: 35,
      color: "from-purple-500 to-pink-500",
      icon: FileText,
    },
    {
      title: "Advanced Features",
      count: 18,
      color: "from-orange-500 to-red-500",
      icon: Star,
    },
  ];

  const popularTutorials = [
    {
      title: "Setting Up Your Doza Dashboard",
      duration: "15:32",
      level: "Beginner",
      views: "12.4K",
      rating: 4.9,
      thumbnail: "/api/placeholder/300/180",
      instructor: "Doza Training Team",
    },
    {
      title: "Mastering Patient Registration",
      duration: "22:18",
      level: "Intermediate",
      views: "8.7K",
      rating: 4.8,
      thumbnail: "/api/placeholder/300/180",
      instructor: "Dr. Sarah Johnson",
    },
    {
      title: "EMR Customization Guide",
      duration: "28:45",
      level: "Advanced",
      views: "6.2K",
      rating: 4.9,
      thumbnail: "/api/placeholder/300/180",
      instructor: "Tech Support Team",
    },
    {
      title: "AI Analytics Deep Dive",
      duration: "35:12",
      level: "Advanced",
      views: "4.8K",
      rating: 4.7,
      thumbnail: "/api/placeholder/300/180",
      instructor: "AI Specialist Team",
    },
  ];

  const recentResources = [
    {
      title: "Doza User Manual PDF",
      type: "PDF Guide",
      size: "4.2 MB",
      downloads: "3.2K",
      icon: FileText,
    },
    {
      title: "Quick Start Checklist",
      type: "Checklist",
      size: "1.1 MB",
      downloads: "2.8K",
      icon: Download,
    },
    {
      title: "Integration API Docs",
      type: "Documentation",
      size: "2.5 MB",
      downloads: "1.9K",
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-slate-100">
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
              Start Learning
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-6">
              <Video size={16} />
              <span className={`text-sm font-medium ${poppins.className}`}>
                Tutorials Library
              </span>
            </div>

            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight ${bebasNeue.className}`}
            >
              Learn Doza
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Master Your Platform
              </span>
            </h1>

            <p
              className={`text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
            >
              Comprehensive video tutorials, guides, and resources to help you
              maximize Doza&apos;s potential and transform your healthcare
              management.
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
                  placeholder="Search tutorials, guides, or topics..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 border border-slate-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none text-lg"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2
              className={`text-3xl font-bold text-slate-900 ${bebasNeue.className}`}
            >
              Learning Categories
            </h2>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors">
              <Filter size={16} />
              <span className={poppins.className}>Filter</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-r ${category.color} text-white rounded-2xl p-6 cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <category.icon size={24} className="text-white" />
                </div>

                <h3 className={`text-xl font-bold mb-2 ${bebasNeue.className}`}>
                  {category.title}
                </h3>

                <p className={`text-white/80 text-sm ${poppins.className}`}>
                  {category.count} tutorials
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tutorials */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-slate-900 mb-8 text-center ${bebasNeue.className}`}
          >
            Most Popular Tutorials
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200"
              >
                {/* Thumbnail Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-blue-400 relative">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {tutorial.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        tutorial.level === "Beginner"
                          ? "bg-green-100 text-green-700"
                          : tutorial.level === "Intermediate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      } ${poppins.className}`}
                    >
                      {tutorial.level}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold text-slate-900 mb-2 ${bebasNeue.className}`}
                  >
                    {tutorial.title}
                  </h3>

                  <p
                    className={`text-slate-600 text-sm mb-4 ${poppins.className}`}
                  >
                    By {tutorial.instructor}
                  </p>

                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex items-center gap-1 ${poppins.className}`}
                      >
                        <Play size={14} />
                        {tutorial.views}
                      </span>
                      <span
                        className={`flex items-center gap-1 ${poppins.className}`}
                      >
                        <Star
                          size={14}
                          className="text-yellow-500 fill-current"
                        />
                        {tutorial.rating}
                      </span>
                    </div>

                    <button className="text-purple-600 hover:text-purple-700 transition-colors">
                      <Play size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Downloads */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Resources */}
            <div className="lg:col-span-2">
              <h2
                className={`text-3xl font-bold text-slate-900 mb-8 ${bebasNeue.className}`}
              >
                Downloadable Resources
              </h2>

              <div className="space-y-4">
                {recentResources.map((resource, index) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <resource.icon size={24} className="text-green-600" />
                        </div>

                        <div>
                          <h3
                            className={`text-lg font-bold text-slate-900 mb-1 ${bebasNeue.className}`}
                          >
                            {resource.title}
                          </h3>

                          <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span className={poppins.className}>
                              {resource.type}
                            </span>
                            <span className={poppins.className}>
                              {resource.size}
                            </span>
                            <span className={poppins.className}>
                              {resource.downloads} downloads
                            </span>
                          </div>
                        </div>
                      </div>

                      <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                        <Download size={16} />
                        <span className={poppins.className}>Download</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Learning Path */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
              >
                <h3
                  className={`text-xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
                >
                  Learning Path
                </h3>

                <div className="space-y-3">
                  {[
                    { step: "1", title: "Platform Setup", progress: 100 },
                    { step: "2", title: "Patient Management", progress: 75 },
                    { step: "3", title: "EMR Mastery", progress: 25 },
                    { step: "4", title: "Advanced Features", progress: 0 },
                  ].map((path, index) => (
                    <div key={path.step} className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          path.progress === 100
                            ? "bg-green-100 text-green-700"
                            : path.progress > 0
                            ? "bg-blue-100 text-blue-700"
                            : "bg-slate-100 text-slate-400"
                        } ${poppins.className}`}
                      >
                        {path.progress === 100 ? "✓" : path.step}
                      </div>

                      <div className="flex-1">
                        <div
                          className={`font-semibold text-slate-900 mb-1 ${poppins.className}`}
                        >
                          {path.title}
                        </div>

                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              path.progress === 100
                                ? "bg-green-500"
                                : "bg-blue-500"
                            }`}
                            style={{ width: `${path.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white text-center"
              >
                <h3 className={`text-xl font-bold mb-3 ${bebasNeue.className}`}>
                  Start Learning Today
                </h3>

                <p
                  className={`text-purple-100 mb-4 text-sm ${poppins.className}`}
                >
                  Access all tutorials and resources with your Doza account
                </p>

                <Link
                  href="/registration/center"
                  className="block w-full bg-white text-purple-600 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
                >
                  Get Started
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
            Empowering healthcare professionals with comprehensive learning
            resources and training materials.
          </p>

          <div className={`text-slate-500 text-sm ${poppins.className}`}>
            &copy; 2024 Doza Healthcare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TutorialsLibraryPage;
