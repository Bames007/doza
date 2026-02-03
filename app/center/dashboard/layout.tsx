// app/center/dashboard/layout.tsx
"use client";

import { DashboardProvider } from "./DashboardContent";
import DashboardSidebar from "./DashboardSideBar";
import DashboardHeader from "./DashboardHeader";
import MessagesPanel from "../messenger/MessagePanel";
import DraggableChatPopup from "../messenger/DraggableChatPopup";
import PanelRenderer from "./PanelRenderer";
import { useDashboard } from "./DashboardContent";
import { useState } from "react";

// Inner component that uses the dashboard context
function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
  const { user, center } = useDashboard();
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState<any>(null);

  const handleMessagesToggle = () => {
    setIsMessagesOpen(!isMessagesOpen);
  };

  const handleChatSelect = (chat: any) => {
    setSelectedChat(chat);
    setIsMessagesOpen(false);
  };

  const closeChatPopup = () => {
    setSelectedChat(null);
  };

  if (!user || !center) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader onMessagesToggle={handleMessagesToggle} />

        {/* Main Content and Messages Panel */}
        <div className="flex-1 flex overflow-hidden">
          {/* Panel Content - No routing, just panel switching */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
            <PanelRenderer />
          </main>

          {/* Messages Panel */}
          <MessagesPanel
            isOpen={isMessagesOpen}
            onClose={() => setIsMessagesOpen(false)}
            onChatSelect={handleChatSelect}
          />
        </div>
      </div>

      {/* Draggable Chat Popup */}
      <DraggableChatPopup chat={selectedChat} onClose={closeChatPopup} />
    </div>
  );
}

// Outer layout component that provides the context
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </DashboardProvider>
  );
}
