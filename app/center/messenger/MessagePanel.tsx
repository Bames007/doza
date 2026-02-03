// app/center/dashboard/components/MessagesPanel.tsx
"use client";

import { useState } from "react";
import { X, Search, MoreVertical, Video, Phone } from "lucide-react";

interface Message {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: boolean;
  status: "online" | "offline" | "away";
}

interface MessagesPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onChatSelect: (chat: any) => void;
}

export default function MessagesPanel({
  isOpen,
  onClose,
  onChatSelect,
}: MessagesPanelProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const messages: Message[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      avatar: "SJ",
      lastMessage: "Patient test results are ready for review",
      time: "2 min ago",
      unread: true,
      status: "online",
    },
    {
      id: 2,
      name: "Nursing Staff",
      avatar: "NS",
      lastMessage: "Room 204 needs immediate assistance",
      time: "10 min ago",
      unread: false,
      status: "online",
    },
    {
      id: 3,
      name: "Lab Department",
      avatar: "LD",
      lastMessage: "Urgent blood work completed and uploaded",
      time: "1 hour ago",
      unread: true,
      status: "away",
    },
    {
      id: 4,
      name: "Pharmacy Team",
      avatar: "PT",
      lastMessage: "Prescription ready for patient pickup",
      time: "2 hours ago",
      unread: false,
      status: "offline",
    },
  ];

  const filteredMessages = messages.filter(
    (message) =>
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col shadow-xl">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Messages</h3>
            <p className="text-sm text-gray-600">
              {filteredMessages.length} conversations
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-white rounded-lg transition-colors">
              <Video className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-white rounded-lg transition-colors">
              <Phone className="w-4 h-4 text-gray-500" />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-gray-200">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-sm"
          />
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto">
        {filteredMessages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-32 text-gray-500">
            <Search className="w-8 h-8 mb-2" />
            <p className="text-sm">No messages found</p>
          </div>
        ) : (
          filteredMessages.map((message) => (
            <div
              key={message.id}
              onClick={() => onChatSelect(message)}
              className="p-3 border-b border-gray-100 cursor-pointer transition-all hover:bg-blue-50 active:bg-blue-100 group"
            >
              <div className="flex items-center space-x-3">
                {/* Avatar with Status */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-sm">
                    {message.avatar}
                  </div>
                  <div
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                      message.status === "online"
                        ? "bg-green-500"
                        : message.status === "away"
                        ? "bg-yellow-500"
                        : "bg-gray-400"
                    }`}
                  />
                </div>

                {/* Message Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-semibold text-gray-900 truncate">
                      {message.name}
                    </h4>
                    <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                      {message.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {message.lastMessage}
                  </p>
                </div>

                {/* Unread Indicator */}
                {message.unread && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-gray-200 bg-gray-50">
        <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
          New Conversation
        </button>
      </div>
    </div>
  );
}
