// app/center/dashboard/DashboardHeader.tsx
"use client";

import { useDashboard } from "./DashboardContent";
import {
  Menu,
  Bell,
  User,
  MessageSquare,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  Search,
  Calendar,
  FileText,
  Users,
  Activity,
  Shield,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface DashboardHeaderProps {
  onMessagesToggle: () => void;
}

export default function DashboardHeader({
  onMessagesToggle,
}: DashboardHeaderProps) {
  const { toggleSidebar, user, center, logout, currentPage } = useDashboard();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserDropdownOpen(false);
        setIsNotificationsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    {
      id: 1,
      message: "New appointment scheduled with John Smith",
      time: "5 min ago",
      unread: true,
      type: "appointment",
      icon: Calendar,
      color: "text-blue-600",
    },
    {
      id: 2,
      message: "Lab results are ready for review",
      time: "1 hour ago",
      unread: true,
      type: "lab",
      icon: FileText,
      color: "text-green-600",
    },
    {
      id: 3,
      message: "Patient check-in required for Room 204",
      time: "2 hours ago",
      unread: false,
      type: "patient",
      icon: Users,
      color: "text-purple-600",
    },
    {
      id: 4,
      message: "System maintenance scheduled for tonight",
      time: "4 hours ago",
      unread: false,
      type: "system",
      icon: Shield,
      color: "text-orange-600",
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="bg-gradient-to-r from-white to-gray-50/80 shadow-lg border-b border-gray-100 backdrop-blur-sm flex-shrink-0">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left Side - Current Page Title & Breadcrumb */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="group p-2 rounded-xl bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md border border-gray-100"
          >
            <Menu className="w-5 h-5 text-gray-700 group-hover:text-green-600 transition-colors" />
          </button>

          <div className="flex flex-col">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
              <span>Dashboard</span>
              <span className="text-gray-300">/</span>
              <span className="font-medium text-green-600">{currentPage}</span>
            </div>

            <p className="text-lg text-gray-600 mt-1">
              Welcome back,{" "}
              <span className="font-semibold text-green-700">
                {user?.fullName}
              </span>
            </p>
          </div>
        </div>

        {/* Center - Search Bar */}
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients, records, or settings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 placeholder-gray-500 text-sm shadow-sm"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          {/* Notifications Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                setIsNotificationsOpen(!isNotificationsOpen);
                setIsUserDropdownOpen(false);
              }}
              className="group relative p-2.5 rounded-xl bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md border border-gray-100"
            >
              <Bell className="w-5 h-5 text-gray-700 group-hover:text-green-600 transition-colors" />
              {unreadCount > 0 && (
                <>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                </>
              )}
            </button>

            {isNotificationsOpen && (
              <div className="absolute right-0 mt-3 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200/80 backdrop-blur-sm z-50 transform origin-top-right transition-all duration-200">
                {/* Header */}
                <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Notifications
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {unreadCount} unread messages
                      </p>
                    </div>
                    {unreadCount > 0 && (
                      <button className="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-lg transition-colors duration-200">
                        Mark all read
                      </button>
                    )}
                  </div>
                </div>

                {/* Notifications List */}
                <div className="max-h-96 overflow-y-auto custom-scrollbar">
                  {notifications.map((notification) => {
                    const IconComponent = notification.icon;
                    return (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-50 hover:bg-gray-50/80 cursor-pointer transition-all duration-200 ${
                          notification.unread
                            ? "bg-blue-50/50 border-l-4 border-l-blue-500"
                            : ""
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div
                            className={`p-2 rounded-lg bg-gray-100 ${notification.color}`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 leading-tight">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-500 mt-1.5 flex items-center">
                              <span>{notification.time}</span>
                              {notification.unread && (
                                <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
                  <button className="w-full text-center text-sm font-medium text-green-600 hover:text-green-700 py-2 transition-colors duration-200">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Messages Button */}
          <button
            onClick={onMessagesToggle}
            className="group relative p-2.5 rounded-xl bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md border border-gray-100"
          >
            <MessageSquare className="w-5 h-5 text-gray-700 group-hover:text-green-600 transition-colors" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></span>
          </button>

          {/* User Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                setIsUserDropdownOpen(!isUserDropdownOpen);
                setIsNotificationsOpen(false);
              }}
              className="group flex items-center space-x-3 p-2 rounded-xl bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md border border-gray-100 pl-3 pr-4"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>

              <div className="hidden lg:block text-left">
                <p className="text-sm font-semibold text-gray-900 leading-tight">
                  {user?.fullName}
                </p>
                <p className="text-xs text-gray-600 capitalize">
                  {user?.role?.replace(/_/g, " ")}
                </p>
              </div>

              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  isUserDropdownOpen
                    ? "rotate-180 text-green-600"
                    : "group-hover:text-green-600"
                }`}
              />
            </button>

            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200/80 backdrop-blur-sm z-50 transform origin-top-right transition-all duration-200">
                {/* User Info */}
                <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white rounded-t-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {user?.fullName}
                      </p>
                      <p className="text-xs text-gray-600 truncate">
                        {user?.email}
                      </p>
                      <div className="flex items-center space-x-1 mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600 font-medium">
                          Online
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-2">
                  <button className="flex items-center space-x-3 w-full p-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200 group">
                    <User className="w-4 h-4 text-gray-500 group-hover:text-green-600 transition-colors" />
                    <span>Profile & Account</span>
                  </button>

                  <button className="flex items-center space-x-3 w-full p-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200 group">
                    <Settings className="w-4 h-4 text-gray-500 group-hover:text-green-600 transition-colors" />
                    <span>Settings & Preferences</span>
                  </button>

                  <button className="flex items-center space-x-3 w-full p-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200 group">
                    <Activity className="w-4 h-4 text-gray-500 group-hover:text-green-600 transition-colors" />
                    <span>Activity Log</span>
                  </button>

                  <button className="flex items-center space-x-3 w-full p-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200 group">
                    <HelpCircle className="w-4 h-4 text-gray-500 group-hover:text-green-600 transition-colors" />
                    <span>Help & Support</span>
                  </button>
                </div>

                {/* Sign Out */}
                <div className="p-2 border-t border-gray-100">
                  <button
                    onClick={logout}
                    className="flex items-center space-x-3 w-full p-3 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 group"
                  >
                    <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f9fafb;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d1d5db;
        }
      `}</style>
    </header>
  );
}
