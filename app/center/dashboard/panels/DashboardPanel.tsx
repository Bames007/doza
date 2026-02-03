// app/center/dashboard/panels/DashboardPanel.tsx
"use client";

import { motion } from "framer-motion";
import { useDashboard } from "../DashboardContent";
import {
  Building2,
  Users,
  Calendar,
  FileText,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Package,
  DollarSign,
} from "lucide-react";

export default function DashboardPanel() {
  const { user, center } = useDashboard();

  const getRoleStats = () => {
    if (!user) return [];

    const baseStats = {
      hospital_admin: [
        {
          label: "Total Patients",
          value: "1,247",
          change: "+12%",
          icon: Users,
          color: "blue",
        },
        {
          label: "Available Beds",
          value: "34",
          change: "+5%",
          icon: Building2,
          color: "green",
        },
        {
          label: "Staff On Duty",
          value: "56",
          change: "+2%",
          icon: Users,
          color: "purple",
        },
        {
          label: "Monthly Revenue",
          value: "$24.7K",
          change: "+18%",
          icon: DollarSign,
          color: "orange",
        },
      ],
      doctor: [
        {
          label: "Today Appointments",
          value: "12",
          change: "+3%",
          icon: Calendar,
          color: "blue",
        },
        {
          label: "Patients Treated",
          value: "86",
          change: "+8%",
          icon: Users,
          color: "green",
        },
        {
          label: "Prescriptions",
          value: "23",
          change: "+15%",
          icon: FileText,
          color: "purple",
        },
        {
          label: "Available Slots",
          value: "4",
          change: "-2%",
          icon: Calendar,
          color: "orange",
        },
      ],
      center_head: [
        {
          label: "Monthly Revenue",
          value: "$45.2K",
          change: "+18%",
          icon: DollarSign,
          color: "green",
        },
        {
          label: "Total Patients",
          value: "2,148",
          change: "+12%",
          icon: Users,
          color: "blue",
        },
        {
          label: "Staff Count",
          value: "42",
          change: "+5%",
          icon: Users,
          color: "purple",
        },
        {
          label: "Expenses",
          value: "$18.7K",
          change: "+8%",
          icon: DollarSign,
          color: "orange",
        },
      ],
    };

    return (
      baseStats[user.role as keyof typeof baseStats] || baseStats.hospital_admin
    );
  };

  const stats = getRoleStats();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Welcome back, {user?.fullName?.split(" ")[0]}!
            </h2>
            <p className="text-green-100">
              {center?.centerName} • {user?.position}
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl self-start">
            <Building2 className="w-5 h-5" />
            <span className="font-semibold">
              {center?.verified ? "VERIFIED" : "PENDING VERIFICATION"}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-3 rounded-xl ${
                  stat.color === "green"
                    ? "bg-green-100"
                    : stat.color === "blue"
                    ? "bg-blue-100"
                    : stat.color === "purple"
                    ? "bg-purple-100"
                    : "bg-orange-100"
                }`}
              >
                <stat.icon
                  className={`w-6 h-6 ${
                    stat.color === "green"
                      ? "text-green-600"
                      : stat.color === "blue"
                      ? "text-blue-600"
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
                {stat.change.startsWith("+") ? (
                  <ArrowUp className="w-4 h-4 mr-1" />
                ) : stat.change.startsWith("-") ? (
                  <ArrowDown className="w-4 h-4 mr-1" />
                ) : null}
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

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "New Appointment", icon: Calendar, color: "blue" },
            { label: "Add Patient", icon: Users, color: "green" },
            { label: "View Reports", icon: BarChart3, color: "purple" },
            { label: "Inventory", icon: Package, color: "orange" },
          ].map((action, index) => (
            <button
              key={action.label}
              className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200 group"
            >
              <div
                className={`p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform ${
                  action.color === "blue"
                    ? "bg-blue-100 group-hover:bg-blue-200"
                    : action.color === "green"
                    ? "bg-green-100 group-hover:bg-green-200"
                    : action.color === "purple"
                    ? "bg-purple-100 group-hover:bg-purple-200"
                    : "bg-orange-100 group-hover:bg-orange-200"
                }`}
              >
                <action.icon
                  className={`w-6 h-6 ${
                    action.color === "blue"
                      ? "text-blue-600"
                      : action.color === "green"
                      ? "text-green-600"
                      : action.color === "purple"
                      ? "text-purple-600"
                      : "text-orange-600"
                  }`}
                />
              </div>
              <span className="font-semibold text-gray-900 text-sm text-center">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
