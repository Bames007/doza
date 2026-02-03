// types/dashboard.ts
export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  position: string;
  avatar?: string;
}

export type UserRole =
  | "super_admin"
  | "hospital_admin"
  | "doctor"
  | "nurse"
  | "receptionist"
  | "lab_technician"
  | "pharmacist"
  | "center_owner"
  | "center_head";

export interface Location {
  address: string;
  lat: number;
  lng: number;
}

export interface RegistrationNumbers {
  cac: string;
  state: string;
  federal: string;
}

export interface OperatingHours {
  opening: string;
  closing: string;
  days: string[];
}

export interface Contact {
  phone: string;
  email: string;
  website: string;
}

export interface OwnerInfo {
  isOwner: boolean;
  fullName: string;
  email: string;
  phone: string;
  position: string;
}

export interface Legal {
  agreed: boolean;
  signature: string;
  date: string;
}

export interface CenterRegistrationData {
  centerType: string;
  customType?: string;
  centerName: string;
  logo: string | null;
  location: Location;
  registrationNumbers: RegistrationNumbers;
  operatingHours: OperatingHours;
  contact: Contact;
  ownerInfo: OwnerInfo;
  specificDetails: Record<string, string | number | boolean>;
  legal: Legal;
  createdAt?: string;
  status?: string;
  verified?: boolean;
}

export interface Center extends CenterRegistrationData {
  id: string;
}

export type CenterType =
  | "hospital"
  | "clinic"
  | "diagnostic_lab"
  | "pharmacy"
  | "medical_center"
  | "dental_clinic"
  | "optical_center";

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  roles: UserRole[];
  centerTypes?: CenterType[];
  children?: NavigationItem[];
}

export interface DashboardState {
  sidebarCollapsed: boolean;
  currentPage: string;
  user: User | null;
  center: Center | null;
}
