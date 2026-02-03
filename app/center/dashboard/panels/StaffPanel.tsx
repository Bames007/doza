// app/center/dashboard/panels/StaffPanel.tsx
"use client";

import { motion } from "framer-motion";
import {
  Users,
  Plus,
  Mail,
  Phone,
  Calendar,
  Download,
  IdCard,
} from "lucide-react";
import { useState, useEffect } from "react";
import AddStaffModal from "../components/AddStaffModal";
import StaffIDCardModal from "../components/StaffIDCardModal";

// Firebase configuration
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
};

export interface StaffMember {
  id: string;
  name: string;
  role: string[];
  email: string;
  phone: string;
  joinDate: string;
  dateOfBirth?: string;
  address?: string;
  specialization?: string;
  qualifications?: string;
  profilePicture?: string;
  documents?: {
    cv?: string;
    guarantorLetter?: string;
    otherDocuments?: string[];
  };
  metadata: {
    createdBy: string;
    createdAt: string;
    staffId: string;
  };
}

export default function StaffPanel() {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
  const [isIDCardModalOpen, setIsIDCardModalOpen] = useState(false);

  // Mock data - replace with actual Firebase fetch
  useEffect(() => {
    const mockStaff: StaffMember[] = [
      {
        id: "1",
        name: "Dr. Sarah Johnson",
        role: ["Cardiologist", "Doctor"],
        email: "sarah.johnson@hospital.com",
        phone: "+1-555-0101",
        joinDate: "2020-03-15",
        dateOfBirth: "1980-05-15",
        address: "123 Medical Drive, Healthcare City",
        specialization: "Cardiology",
        qualifications: "MD, Board Certified Cardiologist",
        profilePicture: "",
        metadata: {
          createdBy: "admin001",
          createdAt: "2020-03-15T00:00:00Z",
          staffId: "HOS-2020-001",
        },
      },
      {
        id: "2",
        name: "Dr. Michael Chen",
        role: ["Neurologist", "Doctor"],
        email: "michael.chen@hospital.com",
        phone: "+1-555-0102",
        joinDate: "2019-08-22",
        dateOfBirth: "1978-11-30",
        address: "456 Brain Street, Neuro City",
        specialization: "Neurology",
        qualifications: "MD, PhD Neurology",
        profilePicture: "",
        metadata: {
          createdBy: "admin001",
          createdAt: "2019-08-22T00:00:00Z",
          staffId: "HOS-2019-045",
        },
      },
    ];
    setStaff(mockStaff);
  }, []);

  const handleStaffAdded = (newStaff: StaffMember) => {
    setStaff((prev) => [...prev, newStaff]);
  };

  const handleViewIDCard = (staffMember: StaffMember) => {
    setSelectedStaff(staffMember);
    setIsIDCardModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Staff Management</h1>
          <p className="text-gray-600">
            Manage your medical and administrative staff
          </p>
        </div>
        <button
          onClick={() => setIsAddStaffModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Staff</span>
        </button>
      </div>

      {/* Staff Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">{staff.length}</p>
              <p className="text-sm text-gray-600">Total Staff</p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {staff.filter((s) => s.role.includes("Doctor")).length}
              </p>
              <p className="text-sm text-gray-600">Doctors</p>
            </div>
            <Users className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {staff.filter((s) => s.role.includes("Nurse")).length}
              </p>
              <p className="text-sm text-gray-600">Nurses</p>
            </div>
            <Users className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {
                  staff.filter((s) =>
                    s.role.some((r) => !["Doctor", "Nurse"].includes(r))
                  ).length
                }
              </p>
              <p className="text-sm text-gray-600">Support Staff</p>
            </div>
            <Users className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Staff List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Staff Team</h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {member.role.join(", ")}
                    </p>
                    <p className="text-xs text-gray-500">
                      ID: {member.metadata.staffId}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {member.joinDate}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleViewIDCard(member)}
                    className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1"
                  >
                    <IdCard className="w-4 h-4" />
                    <span>ID Card</span>
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                    Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {isAddStaffModalOpen && (
        <AddStaffModal
          onClose={() => setIsAddStaffModalOpen(false)}
          onStaffAdded={handleStaffAdded}
        />
      )}

      {isIDCardModalOpen && selectedStaff && (
        <StaffIDCardModal
          staff={selectedStaff}
          onClose={() => setIsIDCardModalOpen(false)}
        />
      )}
    </div>
  );
}
