// app/center/dashboard/Navigation.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useDashboard } from "./DashboardContent";
import { getFilteredNavigation } from "../config/navigation";

const Navigation: React.FC = () => {
  const {
    sidebarCollapsed,
    setCurrentPage,
    setActivePanel,
    user,
    center,
    activePanel,
  } = useDashboard();

  // Get filtered navigation based on user role and center type
  const navigationItems =
    user && center ? getFilteredNavigation(user.role, center.centerType) : [];

  // Map href to unique panel IDs - Make sure these are UNIQUE
  const hrefToPanelMap: { [key: string]: string } = {
    "/dashboard": "dashboard-panel",
    "/dashboard/analytics": "analytics-panel",
    "/dashboard/patients": "patients-panel",
    "/dashboard/appointments": "appointments-panel",
    "/dashboard/doctors": "doctors-panel",
    "/dashboard/medical-records": "medical-records-panel",
    "/dashboard/emergency": "emergency-panel",
    "/dashboard/inventory": "inventory-panel",
    "/dashboard/prescriptions": "prescriptions-panel",
    "/dashboard/sales": "sales-panel",
    "/dashboard/lab-tests": "lab-tests-panel",
    "/dashboard/test-results": "test-results-panel",
    "/dashboard/equipment": "equipment-panel",
    "/dashboard/procedures": "procedures-panel",
    "/dashboard/eye-tests": "eye-tests-panel",
    "/dashboard/staff": "staff-panel",
    "/dashboard/billing": "billing-panel",
    "/dashboard/messages": "messages-panel",
    "/dashboard/settings": "settings-panel",
  };

  const handleNavigation = (name: string, panelId: string) => {
    console.log("Navigating to:", name, "Panel ID:", panelId); // Debug log
    setCurrentPage(name);
    setActivePanel(panelId);
  };

  if (!user || !center) {
    return (
      <div className="p-4">
        <div className="text-green-200 text-sm text-center">
          Loading navigation...
        </div>
      </div>
    );
  }

  if (navigationItems.length === 0) {
    return (
      <div className="p-4">
        <div className="text-green-200 text-sm text-center">
          No menu items available for {user.role} at {center.centerType}
        </div>
      </div>
    );
  }

  return (
    <nav className="p-2 space-y-1">
      {navigationItems.map((item, index) => {
        const panelId = hrefToPanelMap[item.href] || "dashboard-panel";
        const isActive = activePanel === panelId;
        const Icon = item.icon;

        return (
          <div key={item.name} className="relative">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleNavigation(item.name, panelId)}
              className={`group flex items-center w-full px-2 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-white text-green-700 shadow-md"
                  : "text-green-100 hover:bg-green-700 hover:text-white hover:shadow-sm"
              }`}
            >
              <Icon
                className={`flex-shrink-0 h-4 w-4 ${
                  isActive ? "text-green-600" : "text-green-200"
                }`}
              />

              <motion.span
                initial={false}
                animate={{
                  opacity: sidebarCollapsed ? 0 : 1,
                  marginLeft: sidebarCollapsed ? 0 : 8,
                  width: sidebarCollapsed ? 0 : "auto",
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden whitespace-nowrap font-medium text-sm"
              >
                {item.name}
              </motion.span>

              {sidebarCollapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap shadow-lg">
                  {item.name}
                </div>
              )}
            </motion.button>
          </div>
        );
      })}
    </nav>
  );
};

export default Navigation;
