// config/navigation.ts
import {
  Home,
  Users,
  Stethoscope,
  FlaskRound,
  Calendar,
  FileText,
  BarChart3,
  Settings,
  MessageSquare,
  ClipboardList,
  Eye,
  Smile,
  DollarSign,
  Package,
  Ambulance,
  Microscope,
} from "lucide-react";
import type { NavigationItem, UserRole, CenterType } from "../type";

export const navigationConfig: NavigationItem[] = [
  // Common for all roles
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
    roles: [
      "super_admin",
      "hospital_admin",
      "doctor",
      "nurse",
      "receptionist",
      "lab_technician",
      "pharmacist",
      "center_owner",
      "center_head",
    ],
  },

  {
    name: "Patients",
    href: "/dashboard/patients",
    icon: Users,
    roles: ["hospital_admin", "doctor", "nurse", "receptionist", "center_head"],
    centerTypes: [
      "hospital",
      "clinic",
      "medical_center",
      "dental_clinic",
      "optical_center",
    ],
  },
  {
    name: "Appointments",
    href: "/dashboard/appointments",
    icon: Calendar,
    roles: ["hospital_admin", "doctor", "nurse", "receptionist", "center_head"],
    centerTypes: [
      "hospital",
      "clinic",
      "medical_center",
      "dental_clinic",
      "optical_center",
    ],
  },
  {
    name: "Doctors",
    href: "/dashboard/doctors",
    icon: Stethoscope,
    roles: ["hospital_admin", "center_owner", "center_head"], // Added center_head
    centerTypes: ["hospital", "clinic", "medical_center"],
  },
  {
    name: "Medical Records",
    href: "/dashboard/medical-records",
    icon: ClipboardList,
    roles: ["hospital_admin", "doctor", "nurse", "center_head"],
    centerTypes: ["hospital", "clinic", "medical_center"],
  },
  {
    name: "Emergency",
    href: "/dashboard/emergency",
    icon: Ambulance,
    roles: ["hospital_admin", "doctor", "nurse", "center_head"],
    centerTypes: ["hospital"],
  },

  // Pharmacy specific
  {
    name: "Inventory",
    href: "/dashboard/inventory",
    icon: Package,
    roles: ["hospital_admin", "pharmacist", "center_owner", "center_head"],
    centerTypes: ["pharmacy", "hospital"],
  },
  {
    name: "Prescriptions",
    href: "/dashboard/prescriptions",
    icon: FileText,
    roles: ["pharmacist", "doctor", "center_head"],
    centerTypes: ["pharmacy", "hospital", "clinic"],
  },
  {
    name: "Sales",
    href: "/dashboard/sales",
    icon: DollarSign,
    roles: ["pharmacist", "center_owner", "center_head"],
    centerTypes: ["pharmacy"],
  },

  // Lab specific
  {
    name: "Lab Tests",
    href: "/dashboard/lab-tests",
    icon: Microscope,
    roles: ["hospital_admin", "lab_technician", "doctor", "center_head"],
    centerTypes: ["diagnostic_lab", "hospital"],
  },
  {
    name: "Test Results",
    href: "/dashboard/test-results",
    icon: FileText,
    roles: ["lab_technician", "doctor", "nurse", "center_head"],
    centerTypes: ["diagnostic_lab", "hospital"],
  },
  {
    name: "Equipment",
    href: "/dashboard/equipment",
    icon: FlaskRound,
    roles: ["lab_technician", "hospital_admin", "center_head"],
    centerTypes: ["diagnostic_lab"],
  },

  // Dental specific
  {
    name: "Dental Procedures",
    href: "/dashboard/procedures",
    icon: Smile, // Changed from SmileIcon to Smile
    roles: ["hospital_admin", "doctor", "center_head"],
    centerTypes: ["dental_clinic"],
  },

  // Optical specific
  {
    name: "Eye Tests",
    href: "/dashboard/eye-tests",
    icon: Eye,
    roles: ["hospital_admin", "doctor", "center_head"],
    centerTypes: ["optical_center"],
  },

  // Admin specific
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
    roles: ["super_admin", "hospital_admin", "center_owner", "center_head"],
  },
  {
    name: "Staff Management",
    href: "/dashboard/staff",
    icon: Users,
    roles: ["super_admin", "hospital_admin", "center_owner", "center_head"],
  },
  {
    name: "Billing",
    href: "/dashboard/billing",
    icon: DollarSign,
    roles: [
      "super_admin",
      "hospital_admin",
      "center_owner",
      "receptionist",
      "center_head",
    ],
  },

  // Common
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquare,
    roles: [
      "super_admin",
      "hospital_admin",
      "doctor",
      "nurse",
      "receptionist",
      "center_owner",
      "center_head",
    ],
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    roles: [
      "super_admin",
      "hospital_admin",
      "doctor",
      "nurse",
      "receptionist",
      "lab_technician",
      "pharmacist",
      "center_owner",
      "center_head",
    ],
  },
];

export const getFilteredNavigation = (
  userRole: UserRole,
  centerType?: string
) => {
  // Map center_owner (from API) to center_head (for navigation consistency)
  const mappedRole = userRole === "center_owner" ? "center_head" : userRole;

  return navigationConfig.filter((item) => {
    const hasRole = item.roles.includes(mappedRole);
    const hasCenterType =
      !item.centerTypes || item.centerTypes.includes(centerType as CenterType);
    return hasRole && hasCenterType;
  });
};

// Role-based dashboard configurations
export const roleDashboards = {
  hospital_admin: {
    features: [
      "Patient Management",
      "Staff Coordination",
      "Financial Reports",
      "Inventory Control",
    ],
    stats: ["Total Beds", "Occupancy Rate", "Staff Count", "Monthly Revenue"],
  },
  doctor: {
    features: [
      "Patient Consultations",
      "Prescription Writing",
      "Medical Records",
      "Appointment Schedule",
    ],
    stats: [
      "Today Appointments",
      "Patients Treated",
      "Prescriptions",
      "Available Slots",
    ],
  },
  nurse: {
    features: [
      "Patient Care",
      "Vital Monitoring",
      "Medication Administration",
      "Patient Education",
    ],
    stats: [
      "Patients Assigned",
      "Tasks Completed",
      "Medications",
      "Vitals Recorded",
    ],
  },
  pharmacist: {
    features: [
      "Drug Dispensing",
      "Inventory Management",
      "Prescription Validation",
      "Supplier Orders",
    ],
    stats: [
      "Prescriptions Filled",
      "Low Stock Items",
      "Sales Today",
      "Expiring Soon",
    ],
  },
  lab_technician: {
    features: [
      "Sample Analysis",
      "Test Reporting",
      "Equipment Maintenance",
      "Quality Control",
    ],
    stats: [
      "Tests Today",
      "Pending Results",
      "Equipment Status",
      "Turnaround Time",
    ],
  },
  receptionist: {
    features: [
      "Appointment Scheduling",
      "Patient Registration",
      "Billing Support",
      "Records Management",
    ],
    stats: [
      "Appointments Today",
      "New Patients",
      "Billing Processed",
      "Phone Calls",
    ],
  },
  center_owner: {
    features: [
      "Business Overview",
      "Financial Management",
      "Staff Supervision",
      "Compliance Monitoring",
    ],
    stats: ["Revenue", "Expenses", "Staff Performance", "Patient Satisfaction"],
  },
  center_head: {
    features: [
      "Business Overview",
      "Financial Management",
      "Staff Supervision",
      "Compliance Monitoring",
    ],
    stats: ["Revenue", "Expenses", "Staff Performance", "Patient Satisfaction"],
  },
};
