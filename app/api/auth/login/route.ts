// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";

const mockUsers = [
  {
    id: "1",
    fullName: "Sarah Johnson",
    centerName: "Doza Medic",
    centerId: "MMC-001",
    otp: "123456",
    role: "center_owner",
    centerData: {
      centerType: "Hospital",
      customType: "",
      centerName: "Metro Medical Center",
      logo: null,
      location: {
        address: "123 Medical Drive, Healthcare City, NY 10001",
        lat: 40.7128,
        lng: -74.006,
      },
      registrationNumbers: {
        cac: "CAC-123456789",
        state: "NY-MED-2024-001",
        federal: "FED-HLTH-987654",
      },
      operatingHours: {
        opening: "08:00",
        closing: "20:00",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      contact: {
        phone: "+1-555-0123",
        email: "info@metromedical.com",
        website: "https://metromedical.example.com",
      },
      ownerInfo: {
        isOwner: true,
        fullName: "Sarah Johnson",
        email: "sarah.johnson@metromedical.com",
        phone: "+1-555-0124",
        position: "Owner",
      },
      specificDetails: {
        numberOfBeds: 150,
        specialties: "Cardiology, Emergency, Pediatrics, Surgery",
        icuBeds: 25,
        ambulances: 5,
      },
      legal: {
        agreed: true,
        signature: "Sarah Johnson",
        date: "2024-01-15T10:30:00.000Z",
      },
      createdAt: "2024-01-15T10:30:00.000Z",
      status: "active",
      verified: true,
    },
  },
  {
    id: "2",
    fullName: "Michael Chen",
    centerName: "City Eye Care",
    centerId: "CEC-002",
    otp: "654321",
    role: "center_owner",
    centerData: {
      centerType: "eye-center",
      customType: "",
      centerName: "City Eye Care Specialists",
      logo: null,
      location: {
        address: "456 Vision Street, Downtown, NY 10002",
        lat: 40.7282,
        lng: -73.9942,
      },
      registrationNumbers: {
        cac: "CAC-987654321",
        state: "NY-EYE-2024-002",
        federal: "FED-OPTH-123456",
      },
      operatingHours: {
        opening: "09:00",
        closing: "18:00",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      contact: {
        phone: "+1-555-0456",
        email: "appointments@cityeyecare.com",
        website: "https://cityeyecare.example.com",
      },
      ownerInfo: {
        isOwner: true,
        fullName: "Dr. Michael Chen",
        email: "michael.chen@cityeyecare.com",
        phone: "+1-555-0457",
        position: "Medical Director",
      },
      specificDetails: {
        ophthalmologists: 8,
        optometrists: 12,
        surgeryRooms: 3,
        laserMachines: 2,
      },
      legal: {
        agreed: true,
        signature: "Dr. Michael Chen",
        date: "2024-01-20T14:20:00.000Z",
      },
      createdAt: "2024-01-20T14:20:00.000Z",
      status: "active",
      verified: true,
    },
  },
  {
    id: "3",
    fullName: "Emily Rodriguez",
    centerName: "Community Dental",
    centerId: "CDC-003",
    otp: "100196",
    role: "doctor",
    centerData: {
      centerType: "dental-clinic",
      customType: "Family Dental Center",
      centerName: "Community Dental Care",
      logo: null,
      location: {
        address: "789 Smile Avenue, Queens, NY 10003",
        lat: 40.7505,
        lng: -73.8452,
      },
      registrationNumbers: {
        cac: "CAC-456789123",
        state: "NY-DENT-2024-003",
        federal: "FED-DENT-456789",
      },
      operatingHours: {
        opening: "08:30",
        closing: "17:30",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      contact: {
        phone: "+1-555-0789",
        email: "hello@communitydental.com",
        website: "https://communitydental.example.com",
      },
      ownerInfo: {
        isOwner: false,
        fullName: "Emily Rodriguez",
        email: "emily.rodriguez@communitydental.com",
        phone: "+1-555-0790",
        position: "Clinic Manager",
      },
      specificDetails: {
        dentalChairs: 6,
        dentists: 4,
        hygienists: 8,
        xrayMachines: 2,
      },
      legal: {
        agreed: true,
        signature: "Emily Rodriguez",
        date: "2024-02-01T09:15:00.000Z",
      },
      createdAt: "2024-02-01T09:15:00.000Z",
      status: "pending",
      verified: false,
    },
  },
];

export async function POST(request: NextRequest) {
  try {
    const { fullName, centerName, otp } = await request.json();

    // Simulate database lookup
    const user = mockUsers.find(
      (u) =>
        (u.fullName.toLowerCase() === fullName.toLowerCase() ||
          u.centerId.toLowerCase() === centerName.toLowerCase()) &&
        (u.centerName.toLowerCase().includes(centerName.toLowerCase()) ||
          u.centerData.centerName
            .toLowerCase()
            .includes(centerName.toLowerCase()))
    );

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid credentials. Please check your name and center details.",
          attemptsLeft: 2,
        },
        { status: 401 }
      );
    }

    // Check OTP (in production, this would be time-based)
    if (user.otp !== otp) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid OTP. Please check today's code and try again.",
          attemptsLeft: 2,
        },
        { status: 401 }
      );
    }

    // Successful login
    return NextResponse.json({
      success: true,
      message: "Login successful",
      data: {
        user: {
          id: user.id,
          fullName: user.fullName,
          role: user.role,
          centerName: user.centerName,
        },
        center: user.centerData,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
