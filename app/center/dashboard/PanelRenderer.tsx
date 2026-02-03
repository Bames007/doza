// app/center/dashboard/components/PanelRenderer.tsx
"use client";

import { useDashboard } from "./DashboardContent";
import { motion } from "framer-motion";

// Import your panel components
import DashboardPanel from "./panels/DashboardPanel";
import AnalyticsPanel from "./panels/AnalyticsPanel";
import PatientsPanel from "./panels/PatientsPanel";
import AppointmentsPanel from "./panels/AppointmentsPanel";
import DoctorsPanel from "./panels/DoctorsPanel";
import InventoryPanel from "./panels/InventoryPanel";
import PrescriptionsPanel from "./panels/PrescriptionsPanel";
import LabTestsPanel from "./panels/LabTestsPanel";
import StaffPanel from "./panels/StaffPanel";
import BillingPanel from "./panels/BillingPanel";
import MessagesPanel from "./panels/MessagesPanel";
import SettingsPanel from "./panels/SettingsPanel";
import MedicalRecordsPanel from "./panels/MedicalRecords";
import EmergencyPanel from "./panels/EmergencyPanel";

export default function PanelRenderer() {
  const { activePanel } = useDashboard();

  console.log("Current Active Panel:", activePanel);
  const renderPanel = () => {
    switch (activePanel) {
      case "dashboard-panel":
        return <DashboardPanel />;
      case "analytics-panel":
        return <AnalyticsPanel />;
      case "patients-panel":
        return <PatientsPanel />;
      case "appointments-panel":
        return <AppointmentsPanel />;
      case "doctors-panel":
        return <DoctorsPanel />;
      case "medical-records-panel":
        return <MedicalRecordsPanel />;
      case "emergency-panel":
        return <EmergencyPanel />;
      case "inventory-panel":
        return <InventoryPanel />;
      case "prescriptions-panel":
        return <PrescriptionsPanel />;
      case "lab-tests-panel":
        return <LabTestsPanel />;
      case "staff-panel":
        return <StaffPanel />;
      case "billing-panel":
        return <BillingPanel />;
      case "messages-panel":
        return <MessagesPanel />;
      case "settings-panel":
        return <SettingsPanel />;
      default:
        return <DashboardPanel />;
    }
  };

  return (
    <motion.div
      key={activePanel}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      {renderPanel()}
    </motion.div>
  );
}
