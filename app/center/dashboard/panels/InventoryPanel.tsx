// app/center/dashboard/panels/InventoryPanel.tsx
"use client";

import { motion } from "framer-motion";
import { Package, Plus, AlertTriangle, TrendingUp } from "lucide-react";

export default function InventoryPanel() {
  const inventory = [
    {
      id: 1,
      item: "Paracetamol 500mg",
      category: "Medication",
      quantity: 245,
      lowStock: 50,
      status: "good",
    },
    {
      id: 2,
      item: "Bandages",
      category: "Medical Supplies",
      quantity: 32,
      lowStock: 100,
      status: "low",
    },
    {
      id: 3,
      item: "Antibiotics",
      category: "Medication",
      quantity: 89,
      lowStock: 75,
      status: "warning",
    },
    {
      id: 4,
      item: "Syringes",
      category: "Medical Supplies",
      quantity: 450,
      lowStock: 200,
      status: "good",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
          <p className="text-gray-600">
            Manage medical supplies and medications
          </p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Item</span>
        </button>
      </div>

      {/* Inventory Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">1,248</p>
              <p className="text-sm text-gray-600">Total Items</p>
            </div>
            <Package className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-600">Low Stock</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-yellow-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">45</p>
              <p className="text-sm text-gray-600">Categories</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">$12.4K</p>
              <p className="text-sm text-gray-600">Total Value</p>
            </div>
            <Package className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Inventory List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Current Inventory
          </h2>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {inventory.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      item.status === "good"
                        ? "bg-green-100"
                        : item.status === "warning"
                        ? "bg-yellow-100"
                        : "bg-red-100"
                    }`}
                  >
                    <Package
                      className={`w-6 h-6 ${
                        item.status === "good"
                          ? "text-green-600"
                          : item.status === "warning"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.item}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    {item.quantity} units
                  </p>
                  <p className="text-sm text-gray-500">
                    Low stock: {item.lowStock}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
