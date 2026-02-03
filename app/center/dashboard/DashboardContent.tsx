// dashboard/DashboardContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { DashboardState, User, Center, CenterRegistrationData } from "../type";

interface DashboardContextType extends DashboardState {
  toggleSidebar: () => void;
  setCurrentPage: (page: string) => void;
  activePanel: string;
  setActivePanel: (panel: string) => void;
  setUser: (user: User) => void;
  setCenter: (center: Center) => void;
  logout: () => void;
  hasPermission: (roles: string[]) => boolean;
}
const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

// Default center data based on your type
const defaultCenterData: Partial<CenterRegistrationData> = {
  centerName: "Loading...",
  centerType: "Unknown",
  location: {
    address: "Loading...",
    lat: 0,
    lng: 0,
  },
  contact: {
    phone: "Loading...",
    email: "Loading...",
    website: "",
  },
  operatingHours: {
    opening: "09:00",
    closing: "17:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  registrationNumbers: {
    cac: "",
    state: "",
    federal: "",
  },
  ownerInfo: {
    isOwner: false,
    fullName: "Loading...",
    email: "Loading...",
    phone: "Loading...",
    position: "Loading...",
  },
  specificDetails: {},
  legal: {
    agreed: false,
    signature: "",
    date: "",
  },
  logo: null,
};

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const [activePanel, setActivePanel] = useState("dashboard");
  const [user, setUser] = useState<User | null>(null);
  const [center, setCenter] = useState<Center | null>(null);

  useEffect(() => {
    // Load user data from localStorage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        const userData = parsedData.user;
        const centerData = parsedData.center;

        // Set user with role
        setUser({
          id: userData.id || "1",
          email: userData.email,
          fullName:
            userData.fullName || centerData?.ownerInfo?.fullName || "User",
          role:
            userData.role ||
            (centerData?.ownerInfo?.isOwner
              ? "center_owner"
              : "hospital_admin"),
          position:
            userData.position || centerData?.ownerInfo?.position || "Staff",
          avatar: userData.avatar,
        });

        // Set center with all registration data
        if (centerData) {
          setCenter({
            id: centerData.id || "1",
            ...defaultCenterData,
            ...centerData,
            ownerInfo: {
              ...defaultCenterData.ownerInfo!,
              ...centerData.ownerInfo,
            },
            location: {
              ...defaultCenterData.location!,
              ...centerData.location,
            },
            contact: {
              ...defaultCenterData.contact!,
              ...centerData.contact,
            },
            operatingHours: {
              ...defaultCenterData.operatingHours!,
              ...centerData.operatingHours,
            },
            registrationNumbers: {
              ...defaultCenterData.registrationNumbers!,
              ...centerData.registrationNumbers,
            },
          });
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const hasPermission = (roles: string[]) => {
    return user ? roles.includes(user.role) : false;
  };

  const logout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    setCenter(null);
    window.location.href = "/login";
  };

  return (
    <DashboardContext.Provider
      value={{
        sidebarCollapsed,
        currentPage,
        activePanel,
        user,
        center,
        toggleSidebar,
        setCurrentPage,
        setActivePanel,
        setUser,
        setCenter,
        logout,
        hasPermission,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
