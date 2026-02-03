// components/dashboard/pages/DashboardPage.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Calendar,
  FileText,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Stethoscope,
  Pill,
  Microscope,
  Smile,
  Eye,
  Package,
  DollarSign,
  Home,
  Settings,
  HelpCircle,
  ClipboardList,
} from "lucide-react";
import { useDashboard } from "../dashboard/DashboardContent";
import { roleDashboards } from "../config/navigation";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";

const DashboardPage: React.FC = () => {
  const { user, center } = useDashboard();

  // Role-specific stats and data
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
      nurse: [
        {
          label: "Patients Assigned",
          value: "8",
          change: "+1%",
          icon: Users,
          color: "blue",
        },
        {
          label: "Tasks Completed",
          value: "24",
          change: "+12%",
          icon: FileText,
          color: "green",
        },
        {
          label: "Medications",
          value: "15",
          change: "+5%",
          icon: Pill,
          color: "purple",
        },
        {
          label: "Vitals Recorded",
          value: "32",
          change: "+8%",
          icon: Stethoscope,
          color: "orange",
        },
      ],
      pharmacist: [
        {
          label: "Prescriptions Filled",
          value: "45",
          change: "+10%",
          icon: Pill,
          color: "blue",
        },
        {
          label: "Low Stock Items",
          value: "12",
          change: "-3%",
          icon: Package,
          color: "red",
        },
        {
          label: "Sales Today",
          value: "$1,240",
          change: "+15%",
          icon: DollarSign,
          color: "green",
        },
        {
          label: "Expiring Soon",
          value: "8",
          change: "+2%",
          icon: FileText,
          color: "orange",
        },
      ],
      lab_technician: [
        {
          label: "Tests Today",
          value: "28",
          change: "+12%",
          icon: Microscope,
          color: "blue",
        },
        {
          label: "Pending Results",
          value: "6",
          change: "-4%",
          icon: FileText,
          color: "green",
        },
        {
          label: "Equipment Active",
          value: "12",
          change: "+0%",
          icon: Microscope,
          color: "purple",
        },
        {
          label: "Turnaround Time",
          value: "2.4h",
          change: "-0.3h",
          icon: Calendar,
          color: "orange",
        },
      ],
      receptionist: [
        {
          label: "Appointments Today",
          value: "34",
          change: "+8%",
          icon: Calendar,
          color: "blue",
        },
        {
          label: "New Patients",
          value: "7",
          change: "+2%",
          icon: Users,
          color: "green",
        },
        {
          label: "Billing Processed",
          value: "28",
          change: "+12%",
          icon: DollarSign,
          color: "purple",
        },
        {
          label: "Phone Calls",
          value: "45",
          change: "+15%",
          icon: Users,
          color: "orange",
        },
      ],
      center_owner: [
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

  const getCenterTypeIcon = () => {
    const type = center?.centerType?.toLowerCase();
    switch (type) {
      case "hospital":
        return Building2;
      case "clinic":
        return Stethoscope;
      case "diagnostic_lab":
        return Microscope;
      case "pharmacy":
        return Pill;
      case "dental_clinic":
        return Smile;
      case "optical_center":
        return Eye;
      default:
        return Building2;
    }
  };

  const CenterTypeIcon = getCenterTypeIcon();
  const stats = getRoleStats();
  const roleConfig = user
    ? roleDashboards[user.role as keyof typeof roleDashboards]
    : null;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h2
              className={`text-2xl sm:text-3xl font-bold mb-2 ${bebasNeue.className}`}
            >
              Welcome back, {user?.fullName?.split(" ")[0]}!
            </h2>
            <p className={`text-green-100 ${poppins.className}`}>
              {center?.centerName} • {user?.position} •{" "}
              {center?.centerType?.replace(/_/g, " ").toUpperCase()}
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl self-start">
            <CenterTypeIcon className="w-5 h-5" />
            <span className={`font-semibold ${poppins.className}`}>
              {center?.verified ? "VERIFIED" : "PENDING VERIFICATION"}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Role-specific Quick Stats */}
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
                    : stat.color === "orange"
                    ? "bg-orange-100"
                    : "bg-red-100"
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
                      : stat.color === "orange"
                      ? "text-orange-600"
                      : "text-red-600"
                  }`}
                />
              </div>
              <div
                className={`flex items-center text-sm font-semibold ${
                  stat.change.startsWith("+") || !stat.change.startsWith("-")
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
            <h3
              className={`text-2xl font-bold text-gray-900 mb-1 ${bebasNeue.className}`}
            >
              {stat.value}
            </h3>
            <p className={`text-gray-600 text-sm ${poppins.className}`}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Role-specific Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Role Features */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
        >
          <h3
            className={`text-xl font-bold text-gray-900 mb-6 ${bebasNeue.className}`}
          >
            Your Responsibilities
          </h3>
          <div className="space-y-3">
            {roleConfig?.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className={`text-gray-700 ${poppins.className}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Center Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
        >
          <h3
            className={`text-xl font-bold text-gray-900 mb-6 ${bebasNeue.className}`}
          >
            Center Information
          </h3>
          <div className="space-y-4">
            <div>
              <p className={`font-semibold text-gray-900 ${poppins.className}`}>
                Center Name
              </p>
              <p className={`text-gray-600 ${poppins.className}`}>
                {center?.centerName}
              </p>
            </div>
            <div>
              <p className={`font-semibold text-gray-900 ${poppins.className}`}>
                Address
              </p>
              <p className={`text-gray-600 ${poppins.className}`}>
                {center?.location.address}
              </p>
            </div>
            <div>
              <p className={`font-semibold text-gray-900 ${poppins.className}`}>
                Contact
              </p>
              <p className={`text-gray-600 ${poppins.className}`}>
                {center?.contact.phone} • {center?.contact.email}
              </p>
            </div>
            <div>
              <p className={`font-semibold text-gray-900 ${poppins.className}`}>
                Operating Hours
              </p>
              <p className={`text-gray-600 ${poppins.className}`}>
                {center?.operatingHours.opening} -{" "}
                {center?.operatingHours.closing}
              </p>
              <p className={`text-gray-500 text-sm ${poppins.className}`}>
                {center?.operatingHours.days?.join(", ")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions based on Role */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
      >
        <h3
          className={`text-xl font-bold text-gray-900 mb-6 ${bebasNeue.className}`}
        >
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {getQuickActions().map((action, index) => (
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
              <span
                className={`font-semibold text-gray-900 text-sm ${poppins.className}`}
              >
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );

  function getQuickActions() {
    if (!user) return [];

    const actions = {
      hospital_admin: [
        { label: "Manage Staff", icon: Users, color: "blue" },
        { label: "View Reports", icon: BarChart3, color: "green" },
        { label: "Inventory", icon: Package, color: "purple" },
        { label: "Billing", icon: DollarSign, color: "orange" },
      ],
      doctor: [
        { label: "My Schedule", icon: Calendar, color: "blue" },
        { label: "Patients", icon: Users, color: "green" },
        { label: "Prescriptions", icon: FileText, color: "purple" },
        { label: "Medical Records", icon: ClipboardList, color: "orange" },
      ],
      nurse: [
        { label: "Patient Care", icon: Users, color: "blue" },
        { label: "Medications", icon: Pill, color: "green" },
        { label: "Vitals", icon: Stethoscope, color: "purple" },
        { label: "Tasks", icon: FileText, color: "orange" },
      ],
      pharmacist: [
        { label: "Dispense", icon: Pill, color: "blue" },
        { label: "Inventory", icon: Package, color: "green" },
        { label: "Sales", icon: DollarSign, color: "purple" },
        { label: "Suppliers", icon: Users, color: "orange" },
      ],
      lab_technician: [
        { label: "New Tests", icon: Microscope, color: "blue" },
        { label: "Results", icon: FileText, color: "green" },
        { label: "Equipment", icon: Microscope, color: "purple" },
        { label: "Quality Control", icon: FileText, color: "orange" },
      ],
    };

    return (
      actions[user.role as keyof typeof actions] || [
        { label: "Dashboard", icon: Home, color: "blue" },
        { label: "Profile", icon: Users, color: "green" },
        { label: "Settings", icon: Settings, color: "purple" },
        { label: "Help", icon: HelpCircle, color: "orange" },
      ]
    );
  }
};

export default DashboardPage;
