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
  logo: string | File | null;
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

// Type-safe utility types for form handling
export type FormSection = keyof CenterRegistrationData;
export type PrimitiveField = string | number | boolean | null;
export type NestedField =
  | Location
  | RegistrationNumbers
  | OperatingHours
  | Contact
  | OwnerInfo
  | Legal
  | Record<string, string | number | boolean>;
