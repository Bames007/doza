// app/center/dashboard/panels/LabTestsPanel.tsx
"use client";

import { motion } from "framer-motion";
import {
  Microscope,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function LabTestsPanel() {
  const labTests = [
    {
      id: 1,
      patient: "John Smith",
      test: "Blood Count",
      orderedBy: "Dr. Sarah Johnson",
      date: "2024-01-15",
      status: "completed",
      result: "Normal",
    },
    {
      id: 2,
      patient: "Emma Wilson",
      test: "Urine Analysis",
      orderedBy: "Dr. Michael Chen",
      date: "2024-01-14",
      status: "in-progress",
      result: "Pending",
    },
    {
      id: 3,
      patient: "Robert Brown",
      test: "Lipid Profile",
      orderedBy: "Dr. Sarah Johnson",
      date: "2024-01-13",
      status: "pending",
      result: "Pending",
    },
    {
      id: 4,
      patient: "Lisa Davis",
      test: "Liver Function",
      orderedBy: "Dr. James Wilson",
      date: "2024-01-12",
      status: "completed",
      result: "Abnormal",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lab Tests</h1>
          <p className="text-gray-600">Manage laboratory tests and results</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>New Test</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">28</p>
              <p className="text-sm text-gray-600">Tests Today</p>
            </div>
            <Microscope className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">6</p>
              <p className="text-sm text-gray-600">Pending Results</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">22</p>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">3</p>
              <p className="text-sm text-gray-600">Abnormal</p>
            </div>
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
        </div>
      </div>

      {/* Lab Tests List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Lab Tests
          </h2>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {labTests.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      test.status === "completed"
                        ? "bg-green-100"
                        : test.status === "in-progress"
                        ? "bg-yellow-100"
                        : "bg-gray-100"
                    }`}
                  >
                    <Microscope
                      className={`w-6 h-6 ${
                        test.status === "completed"
                          ? "text-green-600"
                          : test.status === "in-progress"
                          ? "text-yellow-600"
                          : "text-gray-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {test.patient}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600 mt-1">
                      <p>
                        <strong>Test:</strong> {test.test}
                      </p>
                      <p>
                        <strong>Ordered by:</strong> {test.orderedBy}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-2">{test.date}</p>
                  <div className="space-y-1">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        test.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : test.status === "in-progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {test.status}
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        test.result === "Normal"
                          ? "bg-green-100 text-green-800"
                          : test.result === "Abnormal"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {test.result}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
