// app/center/dashboard/panels/AnalyticsPanel.tsx
"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Activity,
} from "lucide-react";

export default function AnalyticsPanel() {
  const stats = [
    {
      label: "Total Patients",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "blue",
    },
    {
      label: "Monthly Revenue",
      value: "$45.2K",
      change: "+18%",
      icon: DollarSign,
      color: "green",
    },
    {
      label: "Appointments",
      value: "324",
      change: "+8%",
      icon: Calendar,
      color: "purple",
    },
    {
      label: "Staff Active",
      value: "42",
      change: "+5%",
      icon: Activity,
      color: "orange",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Panel Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor your center's performance and key metrics
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
          <BarChart3 className="w-5 h-5 text-green-600" />
          <span className="text-sm font-medium text-gray-700">
            Real-time Data
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-3 rounded-xl ${
                  stat.color === "blue"
                    ? "bg-blue-100"
                    : stat.color === "green"
                    ? "bg-green-100"
                    : stat.color === "purple"
                    ? "bg-purple-100"
                    : "bg-orange-100"
                }`}
              >
                <stat.icon
                  className={`w-6 h-6 ${
                    stat.color === "blue"
                      ? "text-blue-600"
                      : stat.color === "green"
                      ? "text-green-600"
                      : stat.color === "purple"
                      ? "text-purple-600"
                      : "text-orange-600"
                  }`}
                />
              </div>
              <div
                className={`flex items-center text-sm font-semibold ${
                  stat.change.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                <TrendingUp className="w-4 h-4 mr-1" />
                {stat.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </h3>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Rest of your analytics content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Revenue Overview
          </h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-300" />
              <p>Revenue chart will be displayed here</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Patient Statistics
          </h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Users className="w-12 h-12 mx-auto mb-2 text-gray-300" />
              <p>Patient statistics chart will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
