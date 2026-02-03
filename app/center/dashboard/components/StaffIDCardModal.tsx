// app/center/dashboard/panels/StaffIDCardModal.tsx
"use client";

import { motion } from "framer-motion";
import {
  X,
  Download,
  RotateCcw,
  MapPin,
  Phone,
  Mail,
  Calendar,
  User as UserIcon,
} from "lucide-react";
import { useRef, useState } from "react";
import jsPDF from "jspdf";
import { useDashboard } from "../DashboardContent";
import Image from "next/image";

// Interface that matches your StaffPanel's StaffMember
interface StaffMember {
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
  metadata: {
    createdBy: string;
    createdAt: string;
    staffId: string;
  };
}

interface StaffIDCardModalProps {
  staff: StaffMember | null;
  onClose: () => void;
}

export default function StaffIDCardModal({
  staff,
  onClose,
}: StaffIDCardModalProps) {
  const idCardRef = useRef<HTMLDivElement>(null);
  const [showBack, setShowBack] = useState(false);
  const { center } = useDashboard();

  // Safe staff data with proper defaults using StaffMember structure
  const safeStaff = staff
    ? {
        id: staff.id,
        name: staff.name,
        role: staff.role,
        email: staff.email,
        phone: staff.phone,
        joinDate: staff.joinDate,
        profilePicture: staff.profilePicture,
        metadata: staff.metadata,
      }
    : null;

  // Get hospital information from the dashboard context
  const hospitalName = center?.centerName || "Healthcare Hospital";
  const hospitalAddress =
    center?.location?.address || "123 Medical Center Drive, City, State 12345";
  const hospitalPhone = center?.contact?.phone || "(555) 123-4567";
  const hospitalEmail = center?.contact?.email || "info@healthcarehospital.org";

  // Safe role formatting function
  const formatRole = (roles: string[]): string => {
    if (!roles || roles.length === 0) return "Staff Member";

    // Return the first role or join them if multiple
    if (roles.length === 1) {
      return roles[0]
        .split("_")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    return roles[0]; // Use first role for display
  };

  // Safe name formatting for initials
  const getInitials = (name: string | undefined): string => {
    if (!name) return "??";
    return name
      .split(" ")
      .map((n) => n.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 3);
  };

  // Generate staff ID from metadata or user ID
  const generateStaffId = (): string => {
    if (!safeStaff) return "STAFF-UNKNOWN";
    return (
      safeStaff.metadata?.staffId ||
      `STAFF-${safeStaff.id.slice(-8).toUpperCase()}`
    );
  };

  // Format join date properly
  const getJoinDate = (): string => {
    if (!safeStaff?.joinDate) {
      return new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }

    try {
      const joinDate = new Date(safeStaff.joinDate);
      return joinDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return safeStaff.joinDate;
    }
  };

  // Get display role safely
  const getDisplayRole = (): string => {
    if (!safeStaff) return "Staff Member";
    return formatRole(safeStaff.role);
  };

  const handleFlip = () => {
    setShowBack(!showBack);
  };

  const downloadPDF = async () => {
    if (!safeStaff) return;

    try {
      const pdf = new jsPDF("p", "mm", [89, 140]);

      // Front of ID Card
      pdf.setFillColor(255, 255, 255);
      pdf.rect(0, 0, 89, 140, "F");

      // Header with gradient
      pdf.setFillColor(41, 175, 69);
      pdf.rect(0, 0, 89, 25, "F");

      // Hospital name
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(255, 255, 255);
      pdf.text(hospitalName.toUpperCase(), 44.5, 10, { align: "center" });

      pdf.setFontSize(7);
      pdf.text("STAFF IDENTIFICATION CARD", 44.5, 16, { align: "center" });

      // Main content
      const contentStartY = 35;

      // Photo area - circular
      pdf.setDrawColor(41, 175, 69);
      pdf.setFillColor(249, 250, 251);
      pdf.circle(44.5, contentStartY + 20, 15, "FD");

      // Staff initials in photo area
      pdf.setFontSize(16);
      pdf.setTextColor(156, 163, 175);
      const initials = getInitials(safeStaff.name);
      pdf.text(initials, 44.5, contentStartY + 22, { align: "center" });

      // Staff details
      pdf.setFontSize(11);
      pdf.setTextColor(0, 0, 0);
      pdf.setFont("helvetica", "bold");
      const fullName = safeStaff.name;
      const nameLines = pdf.splitTextToSize(fullName.toUpperCase(), 80);
      pdf.text(nameLines, 44.5, contentStartY + 50, { align: "center" });

      pdf.setFontSize(8);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(41, 175, 69);
      const displayRole = getDisplayRole();
      pdf.text(displayRole.toUpperCase(), 44.5, contentStartY + 58, {
        align: "center",
      });

      // Details section
      const detailsYStart = contentStartY + 70;
      pdf.setFontSize(6);
      pdf.setTextColor(55, 65, 81);

      pdf.text(`STAFF ID: ${generateStaffId()}`, 10, detailsYStart);
      pdf.text(`EMAIL: ${safeStaff.email}`, 10, detailsYStart + 5);
      pdf.text(`PHONE: ${safeStaff.phone}`, 10, detailsYStart + 10);
      pdf.text(`JOINED: ${getJoinDate()}`, 10, detailsYStart + 15);
      pdf.text(`DEPT: ${displayRole.toUpperCase()}`, 10, detailsYStart + 20);

      // Footer with issue dates
      pdf.setFontSize(5);
      pdf.setTextColor(107, 114, 128);
      pdf.text(`Issued: ${new Date().toLocaleDateString()}`, 10, 130);

      const validThrough = new Date();
      validThrough.setFullYear(validThrough.getFullYear() + 1);
      pdf.text(`Valid Through: ${validThrough.toLocaleDateString()}`, 10, 135);

      // Signature area with cursive style
      pdf.setDrawColor(200, 200, 200);
      pdf.line(50, 125, 85, 125);
      pdf.setFontSize(6);
      pdf.setFont("helvetica", "italic");
      pdf.setTextColor(41, 175, 69);
      pdf.text(safeStaff.name, 67.5, 132, { align: "center" });
      pdf.setFontSize(4);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(107, 114, 128);
      pdf.text("Authorized Signature", 67.5, 135, { align: "center" });

      // Add page for back of ID card
      pdf.addPage();

      // Back of ID Card
      pdf.setFillColor(249, 250, 251);
      pdf.rect(0, 0, 89, 140, "F");

      // Header
      pdf.setFillColor(41, 175, 69);
      pdf.rect(0, 0, 89, 15, "F");
      pdf.setFontSize(8);
      pdf.setTextColor(255, 255, 255);
      pdf.text("IDENTIFICATION CARD - BACK", 44.5, 8, { align: "center" });

      // QR Code area
      pdf.setDrawColor(41, 175, 69);
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(20, 25, 49, 49, 3, 3, "FD");

      // QR code pattern
      pdf.setFillColor(0, 0, 0);
      const qrSize = 35;
      const qrStartX = 20 + (49 - qrSize) / 2;
      const qrStartY = 25 + (49 - qrSize) / 2;

      // Create QR pattern
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
          if (
            i === 0 ||
            i === 6 ||
            j === 0 ||
            j === 6 ||
            (i === 2 && j === 2) ||
            (i === 4 && j === 4)
          ) {
            pdf.rect(qrStartX + i * 5, qrStartY + j * 5, 4, 4, "F");
          }
        }
      }

      // QR code label
      pdf.setFontSize(6);
      pdf.setTextColor(100, 100, 100);
      pdf.text("SCAN FOR HOSPITAL INFORMATION", 44.5, 80, { align: "center" });

      // Information sections
      const infoSections = [
        {
          title: "IF FOUND, PLEASE RETURN TO:",
          content: [
            hospitalName,
            hospitalAddress,
            `Phone: ${hospitalPhone}`,
            `Email: ${hospitalEmail}`,
          ],
        },
        {
          title: "EMERGENCY CONTACT",
          content: ["Hospital Security: (555) 911-911", "Available 24/7"],
        },
        {
          title: "MEDICAL INFORMATION",
          content: [
            "See Electronic Health Record",
            "for complete medical details",
          ],
        },
      ];

      let currentY = 90;
      infoSections.forEach((section) => {
        pdf.setFillColor(255, 255, 255);
        pdf.setDrawColor(200, 200, 200);
        pdf.roundedRect(10, currentY, 69, 12, 2, 2, "FD");

        pdf.setFontSize(5);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(0, 0, 0);
        pdf.text(section.title, 15, currentY + 3);

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(4);
        section.content.forEach((line, index) => {
          pdf.text(line, 15, currentY + 6 + index * 2);
        });

        currentY += 15;
      });

      // Doza branding at bottom
      pdf.setFillColor(41, 175, 69);
      pdf.rect(0, 125, 89, 15, "F");

      // Doza logo area
      pdf.setFillColor(255, 255, 255);
      pdf.circle(20, 132, 3, "F");
      pdf.setFillColor(41, 175, 69);
      pdf.circle(20, 132, 2, "F");

      pdf.setFontSize(6);
      pdf.setTextColor(255, 255, 255);
      pdf.text("Doza Healthcare Solutions", 44.5, 130, { align: "center" });
      pdf.setFontSize(4);
      pdf.text("Secure Staff Identification System", 44.5, 134, {
        align: "center",
      });

      pdf.save(`${safeStaff.name.replace(/\s+/g, "_")}_ID_Card.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      // Fallback PDF
      const fallbackPdf = new jsPDF();
      fallbackPdf.text(`STAFF ID CARD - ${safeStaff.name}`, 20, 20);
      fallbackPdf.text(`Role: ${getDisplayRole()}`, 20, 30);
      fallbackPdf.text(`Staff ID: ${generateStaffId()}`, 20, 40);
      fallbackPdf.save(`${safeStaff.name.replace(/\s+/g, "_")}_ID_Card.pdf`);
    }
  };

  // If no staff data, show error message
  if (!staff || !safeStaff) {
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl border border-gray-100"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Error</h2>
            <p className="text-gray-600 mb-6">
              No staff data available to generate ID card.
            </p>
            <button
              onClick={onClose}
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors font-medium w-full"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const displayRole = getDisplayRole();
  const staffId = generateStaffId();
  const fullName = safeStaff.name;
  const initials = getInitials(safeStaff.name);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-6 w-full max-w-4xl shadow-2xl border border-gray-100 my-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Staff ID Card</h2>
            <p className="text-gray-600 mt-1">
              Preview and download identification card for {fullName}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* ID Card Preview */}
          <div className="flex-1">
            <div className="relative">
              <motion.div
                ref={idCardRef}
                className="relative w-full max-w-md mx-auto h-96 cursor-pointer"
                style={{ perspective: "1200px" }}
                onClick={handleFlip}
              >
                <motion.div
                  className="relative w-full h-full"
                  initial={false}
                  animate={{ rotateY: showBack ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front of ID Card */}
                  <div
                    className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-2xl border-2 border-gray-300 overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Header Gradient */}
                    <div className="bg-gradient-to-r from-[#29AF45] to-[#22c55e] text-white p-6 pb-4">
                      <div className="text-center">
                        <h3 className="font-bold text-xl tracking-tight mb-1">
                          {hospitalName}
                        </h3>
                        <p className="text-green-100 text-sm font-medium">
                          STAFF IDENTIFICATION CARD
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 pt-4">
                      <div className="flex items-start space-x-6">
                        {/* Profile Photo */}
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 border-4 border-green-200 rounded-full flex items-center justify-center shadow-lg">
                            {safeStaff.profilePicture ? (
                              <img
                                src={safeStaff.profilePicture}
                                alt={fullName}
                                className="w-full h-full object-cover rounded-full"
                              />
                            ) : (
                              <div className="text-gray-400 flex flex-col items-center">
                                <UserIcon className="w-10 h-10 mb-2" />
                                <span className="text-sm font-bold">
                                  {initials}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Staff Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-xl text-gray-900 mb-2 leading-tight">
                            {fullName}
                          </h4>
                          <p className="text-[#29AF45] font-semibold text-base mb-4 uppercase tracking-wide">
                            {displayRole}
                          </p>

                          {/* Details */}
                          <div className="space-y-3 text-sm">
                            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                              <span className="text-gray-600 font-medium">
                                Staff ID:
                              </span>
                              <span className="font-mono text-gray-900 font-bold">
                                {staffId}
                              </span>
                            </div>
                            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                              <span className="text-gray-600 font-medium">
                                Joined:
                              </span>
                              <span className="text-gray-900 flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {getJoinDate()}
                              </span>
                            </div>
                            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                              <span className="text-gray-600 font-medium">
                                Email:
                              </span>
                              <span className="text-gray-900 font-medium truncate max-w-[160px]">
                                {safeStaff.email}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600 font-medium">
                                Phone:
                              </span>
                              <span className="text-gray-900 font-medium">
                                {safeStaff.phone}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-50 px-6 py-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-xs text-gray-600">
                            Issued: {new Date().toLocaleDateString()}
                          </div>
                          <div className="text-green-600 font-semibold text-sm">
                            ● ACTIVE STAFF MEMBER
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-400 text-xs mb-1">
                            Authorized Signature
                          </div>
                          <div
                            className="text-[#29AF45] italic text-lg border-t-2 border-gray-300 pt-1"
                            style={{ fontFamily: "'Alex Brush', cursive" }}
                          >
                            {fullName}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of ID Card */}
                  <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl border-2 border-gray-300 overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#29AF45] to-[#22c55e] text-white p-4">
                      <div className="text-center">
                        <h3 className="font-bold text-lg tracking-wide">
                          {hospitalName.toUpperCase()}
                        </h3>
                        <p className="text-green-100 text-xs">
                          IDENTIFICATION CARD - BACK
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* QR Code Area */}
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-6">
                        <div className="text-center mb-4">
                          <h4 className="font-bold text-gray-800 text-lg">
                            SCAN QR CODE
                          </h4>
                          <p className="text-gray-600 text-sm">
                            For hospital information & verification
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-2 border-gray-300 mx-auto max-w-xs">
                          <div className="bg-gray-800 rounded-lg p-6 aspect-square flex items-center justify-center">
                            <div className="grid grid-cols-7 gap-1.5 w-40 h-40">
                              {/* Enhanced QR Code Pattern */}
                              {Array.from({ length: 49 }).map((_, i) => (
                                <div
                                  key={i}
                                  className={`rounded ${
                                    i < 7 ||
                                    i % 7 === 0 ||
                                    i % 7 === 6 ||
                                    i > 41 ||
                                    (i >= 14 && i <= 16) ||
                                    (i >= 28 && i <= 30) ||
                                    (i >= 42 && i <= 44)
                                      ? "bg-gray-900"
                                      : "bg-gray-100"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Information Sections */}
                      <div className="space-y-4">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                          <h4 className="font-bold text-red-800 text-sm mb-3 flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            IF FOUND, PLEASE RETURN TO:
                          </h4>
                          <div className="text-gray-700 text-sm space-y-2">
                            <div className="font-semibold">{hospitalName}</div>
                            <div>{hospitalAddress}</div>
                            <div className="flex items-center">
                              <Phone className="w-4 h-4 mr-2" />
                              {hospitalPhone}
                            </div>
                            <div className="flex items-center">
                              <Mail className="w-4 h-4 mr-2" />
                              {hospitalEmail}
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                          <h4 className="font-bold text-blue-800 text-sm mb-2">
                            EMERGENCY CONTACT
                          </h4>
                          <p className="text-gray-700 text-sm">
                            Hospital Security: (555) 911-911 (Available 24/7)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Doza Branding at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#29AF45] to-[#22c55e] px-6 py-4">
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <Image
                            src="/logo.png"
                            alt="Doza"
                            width={24}
                            height={24}
                            className="rounded"
                          />
                        </div>
                        <div className="text-center">
                          <span className="text-white text-lg font-bold block">
                            Doza Healthcare Solutions
                          </span>
                          <span className="text-green-100 text-sm">
                            Secure Staff Identification System
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Flip Hint */}
              <div className="text-center mt-6">
                <p className="text-gray-500 text-sm bg-gray-50 inline-block px-4 py-2 rounded-full">
                  Click the card to {showBack ? "see front" : "see back"}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons & Info */}
          <div className="flex flex-col space-y-4 lg:w-80">
            <button
              onClick={downloadPDF}
              className="bg-gradient-to-r from-[#29AF45] to-[#22c55e] text-white px-6 py-4 rounded-xl hover:from-[#238a3a] hover:to-[#16a34a] transition-all duration-300 flex items-center justify-center space-x-3 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handleFlip}
              className="bg-gray-900 text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <RotateCcw className="w-5 h-5" />
              <span>{showBack ? "Show Front" : "Show Back"}</span>
            </button>

            <button
              onClick={onClose}
              className="bg-gray-100 text-gray-700 px-6 py-4 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium border border-gray-200"
            >
              Close Preview
            </button>

            {/* Staff Summary */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mt-4">
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                Staff Information
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Full Name:</span>
                  <span className="text-gray-900 font-semibold text-right">
                    {fullName}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Position:</span>
                  <span className="text-gray-900 font-semibold">
                    {displayRole}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Staff ID:</span>
                  <span className="text-gray-900 font-semibold font-mono">
                    {staffId}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Email:</span>
                  <span className="text-gray-900 font-semibold text-xs">
                    {safeStaff.email}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Status:</span>
                  <span className="text-green-600 font-semibold flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
