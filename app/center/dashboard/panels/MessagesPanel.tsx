// app/center/dashboard/panels/MessagesPanel.tsx
"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, User, Clock } from "lucide-react";

export default function MessagesPanel() {
  const conversations = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      lastMessage: "Patient test results are ready",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      name: "Nursing Staff",
      lastMessage: "Room 204 needs assistance",
      time: "10 min ago",
      unread: false,
    },
    {
      id: 3,
      name: "Lab Department",
      lastMessage: "Urgent blood work completed",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 4,
      name: "Pharmacy",
      lastMessage: "Prescription ready for pickup",
      time: "2 hours ago",
      unread: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">Communicate with your team</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Conversations
          </h2>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {conversations.map((conversation, index) => (
              <motion.div
                key={conversation.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {conversation.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-xs text-gray-500 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{conversation.time}</span>
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {conversation.lastMessage}
                  </p>
                </div>

                {conversation.unread && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
