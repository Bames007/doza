// app/center/dashboard/panels/PrescriptionsPanel.tsx
"use client";

import { motion } from "framer-motion";
import { FileText, Search, User, Calendar, Pill } from "lucide-react";

export default function PrescriptionsPanel() {
  const prescriptions = [
    {
      id: 1,
      patient: "John Smith",
      medication: "Paracetamol 500mg",
      dosage: "1 tablet every 6 hours",
      doctor: "Dr. Sarah Johnson",
      date: "2024-01-15",
      status: "active",
    },
    {
      id: 2,
      patient: "Emma Wilson",
      medication: "Amoxicillin 250mg",
      dosage: "1 capsule twice daily",
      doctor: "Dr. Michael Chen",
      date: "2024-01-14",
      status: "completed",
    },
    {
      id: 3,
      patient: "Robert Brown",
      medication: "Insulin",
      dosage: "10 units before meals",
      doctor: "Dr. Sarah Johnson",
      date: "2024-01-13",
      status: "active",
    },
    {
      id: 4,
      patient: "Lisa Davis",
      medication: "Ibuprofen 400mg",
      dosage: "1 tablet as needed",
      doctor: "Dr. James Wilson",
      date: "2024-01-12",
      status: "expired",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Prescriptions</h1>
          <p className="text-gray-600">
            Manage and track patient prescriptions
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search prescriptions..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Completed</option>
            <option>Expired</option>
          </select>
        </div>
      </div>

      {/* Prescriptions List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Prescriptions
          </h2>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {prescriptions.map((prescription, index) => (
              <motion.div
                key={prescription.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Pill className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {prescription.patient}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600 mt-1">
                      <p className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{prescription.medication}</span>
                      </p>
                      <p>{prescription.dosage}</p>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {prescription.doctor}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {prescription.date}
                    </span>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      prescription.status === "active"
                        ? "bg-green-100 text-green-800"
                        : prescription.status === "completed"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {prescription.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
