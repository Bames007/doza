// app/center/dashboard/components/DynamicPageContent.tsx
"use client";

import { useDashboard } from "./DashboardContent";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface DynamicPageContentProps {
  children: React.ReactNode;
}

export default function DynamicPageContent({
  children,
}: DynamicPageContentProps) {
  const { setCurrentPage } = useDashboard();
  const pathname = usePathname();

  // Update current page based on route when component mounts or route changes
  useEffect(() => {
    const pageTitles: { [key: string]: string } = {
      "/dashboard": "Dashboard",
      "/dashboard/patients": "Patients",
      "/dashboard/appointments": "Appointments",
      "/dashboard/doctors": "Doctors",
      "/dashboard/medical-records": "Medical Records",
      "/dashboard/emergency": "Emergency",
      "/dashboard/inventory": "Inventory",
      "/dashboard/prescriptions": "Prescriptions",
      "/dashboard/sales": "Sales",
      "/dashboard/lab-tests": "Lab Tests",
      "/dashboard/test-results": "Test Results",
      "/dashboard/equipment": "Equipment",
      "/dashboard/procedures": "Dental Procedures",
      "/dashboard/eye-tests": "Eye Tests",
      "/dashboard/analytics": "Analytics",
      "/dashboard/staff": "Staff Management",
      "/dashboard/billing": "Billing",
      "/dashboard/messages": "Messages",
      "/dashboard/settings": "Settings",
    };

    const pageTitle = pageTitles[pathname] || "Dashboard";
    setCurrentPage(pageTitle);
  }, [pathname, setCurrentPage]);

  return <div className="animate-in fade-in duration-300">{children}</div>;
}
