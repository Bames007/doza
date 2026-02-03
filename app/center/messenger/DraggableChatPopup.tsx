// app/center/dashboard/components/DraggableChatPopup.tsx
"use client";

import { useState, useEffect } from "react";
import { X, Paperclip, Smile, Send, MoreVertical } from "lucide-react";

interface Chat {
  id: number;
  name: string;
  avatar: string;
  status: "online" | "offline" | "away";
}

interface DraggableChatPopupProps {
  chat: Chat | null;
  onClose: () => void;
}

export default function DraggableChatPopup({
  chat,
  onClose,
}: DraggableChatPopupProps) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState("");

  const messages = [
    {
      id: 1,
      text: "Hello, how can I help you today?",
      sender: "them",
      time: "2:30 PM",
    },
    {
      id: 2,
      text: "I need to discuss the patient's test results",
      sender: "me",
      time: "2:31 PM",
    },
    {
      id: 3,
      text: "The lab results are ready for review. Everything looks normal.",
      sender: "them",
      time: "2:32 PM",
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle send message
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  if (!chat) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Backdrop Blur */}
      <div className="absolute inset-0 bg-gray bg-opacity-20 backdrop-blur-sm pointer-events-auto" />

      {/* Draggable Chat Window */}
      <div
        className="absolute w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden pointer-events-auto"
        style={{
          left: position.x,
          top: position.y,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {/* Header - Draggable Area */}
        <div
          onMouseDown={handleMouseDown}
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 cursor-grab active:cursor-grabbing"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white font-semibold">
                  {chat.avatar}
                </div>
                <div
                  className={`absolute bottom-0 right-0 w-2 h-2 rounded-full border border-white ${
                    chat.status === "online"
                      ? "bg-green-400"
                      : chat.status === "away"
                      ? "bg-yellow-400"
                      : "bg-gray-400"
                  }`}
                />
              </div>
              <div>
                <h3 className="text-white font-semibold">{chat.name}</h3>
                <p className="text-blue-100 text-sm capitalize">
                  {chat.status}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-white hover:text-blue-200 p-1">
                <MoreVertical className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="text-white hover:text-blue-200 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-80 overflow-y-auto p-4 bg-gray-50">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs rounded-2xl px-4 py-2 ${
                    msg.sender === "me"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.sender === "me" ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
              <Paperclip className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
              <Smile className="w-4 h-4" />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
