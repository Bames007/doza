// app/center/dashboard/pages/PatientsPage.tsx
"use client";

import { motion } from "framer-motion";

export default function PatientsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Patients Management
        </h2>
        <p className="text-gray-600">Patient content goes here...</p>
      </div>
    </motion.div>
  );
}
