// app/center/dashboard/panels/EmergencyPanel.tsx
"use client";

import { motion } from "framer-motion";
import { Ambulance, AlertTriangle, Phone, MapPin } from "lucide-react";

export default function EmergencyPanel() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Emergency</h1>
          <p className="text-gray-600">Emergency services and critical care</p>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Emergency Contacts
            </h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200">
              <span className="font-medium">Emergency Room</span>
              <span className="text-red-600 font-semibold">Ext. 911</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200">
              <span className="font-medium">Ambulance</span>
              <span className="text-red-600 font-semibold">Ext. 912</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200">
              <span className="font-medium">ICU</span>
              <span className="text-red-600 font-semibold">Ext. 913</span>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Ambulance className="w-8 h-8 text-orange-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Quick Actions
            </h2>
          </div>
          <div className="space-y-3">
            <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Emergency Alert
            </button>
            <button className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Call Ambulance
            </button>
            <button className="w-full border border-orange-600 text-orange-600 py-3 px-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Emergency Protocols
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
