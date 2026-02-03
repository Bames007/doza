// app/center/dashboard/panels/SettingsPanel.tsx
"use client";

import { motion } from "framer-motion";
import { Settings, Bell, Shield, User, Building2, Mail } from "lucide-react";

export default function SettingsPanel() {
  const settingsSections = [
    {
      title: "Profile Settings",
      icon: User,
      items: [
        "Personal Information",
        "Change Password",
        "Notification Preferences",
      ],
    },
    {
      title: "Center Settings",
      icon: Building2,
      items: ["Center Information", "Operating Hours", "Staff Management"],
    },
    {
      title: "Notification Settings",
      icon: Bell,
      items: ["Email Notifications", "SMS Alerts", "Push Notifications"],
    },
    {
      title: "Security Settings",
      icon: Shield,
      items: [
        "Two-Factor Authentication",
        "Session Management",
        "Privacy Settings",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">
            Manage your account and center preferences
          </p>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <section.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                {section.title}
              </h2>
            </div>

            <div className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <div
                  key={item}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <span className="text-gray-700">{item}</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200">
            <User className="w-8 h-8 text-gray-600 mb-2" />
            <span className="font-medium text-gray-900 text-sm">
              Edit Profile
            </span>
          </button>

          <button className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200">
            <Bell className="w-8 h-8 text-gray-600 mb-2" />
            <span className="font-medium text-gray-900 text-sm">
              Notifications
            </span>
          </button>

          <button className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200">
            <Shield className="w-8 h-8 text-gray-600 mb-2" />
            <span className="font-medium text-gray-900 text-sm">Security</span>
          </button>

          <button className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200">
            <Mail className="w-8 h-8 text-gray-600 mb-2" />
            <span className="font-medium text-gray-900 text-sm">Support</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
