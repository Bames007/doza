// app/center/dashboard/panels/AppointmentsPanel.tsx
"use client";

import { motion } from "framer-motion";
import { Calendar, Plus, Clock, User, Stethoscope } from "lucide-react";

export default function AppointmentsPanel() {
  const appointments = [
    {
      id: 1,
      patient: "John Smith",
      doctor: "Dr. Sarah Johnson",
      time: "09:00 AM",
      type: "Checkup",
      status: "confirmed",
    },
    {
      id: 2,
      patient: "Emma Wilson",
      doctor: "Dr. Michael Chen",
      time: "10:30 AM",
      type: "Consultation",
      status: "confirmed",
    },
    {
      id: 3,
      patient: "Robert Brown",
      doctor: "Dr. Sarah Johnson",
      time: "11:15 AM",
      type: "Follow-up",
      status: "pending",
    },
    {
      id: 4,
      patient: "Lisa Davis",
      doctor: "Dr. Michael Chen",
      time: "02:00 PM",
      type: "Emergency",
      status: "confirmed",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600">
            Schedule and manage patient appointments
          </p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>New Appointment</span>
        </button>
      </div>

      {/* Today's Appointments */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-green-600" />
            <span>Today's Appointments</span>
          </h2>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {appointments.map((appointment, index) => (
              <motion.div
                key={appointment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {appointment.patient}
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center space-x-1">
                      <Stethoscope className="w-4 h-4" />
                      <span>{appointment.doctor}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    {appointment.time}
                  </p>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      appointment.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-600">Today's Appointments</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">8</p>
              <p className="text-sm text-gray-600">New Patients</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">45m</p>
              <p className="text-sm text-gray-600">Average Wait Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
