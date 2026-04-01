"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import DozaRoleBasedExperience, { UserRole } from "./DozaRoleBasedExperience";
import PatientHomePage from "./doza_user/page";
import MedicHomePage from "./doza_medic/page";
import CenterHomePage from "./doza_center/page";

const LoadingScreenPage = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [showRoleSelection, setShowRoleSelection] = useState(false);

  console.log("🔄 LoadingScreenPage State:", {
    selectedRole,
    showRoleSelection,
  });

  // Check for saved role on component mount
  useEffect(() => {
    console.log("🔍 useEffect running - checking localStorage");
    const savedRole = localStorage.getItem("doza-user-role");
    console.log(
      "📁 Retrieved from localStorage:",
      savedRole,
      "type:",
      typeof savedRole,
    );

    // Fix: Handle the case where savedRole might be the string "null"
    if (
      savedRole &&
      savedRole !== "null" &&
      (savedRole === "user" || savedRole === "medic" || savedRole === "center")
    ) {
      console.log("✅ Found valid saved role:", savedRole);
      setSelectedRole(savedRole as UserRole);
    } else {
      console.log("❌ No valid saved role found, using null");
      setSelectedRole(null);
    }
  }, []);

  const handleRoleSelect = (role: UserRole) => {
    console.log("🎯 Role selected:", role);
    setSelectedRole(role);
    // Fix: Only store if role is not null
    if (role) {
      localStorage.setItem("doza-user-role", role);
      console.log("💾 Saved role to localStorage:", role);
    } else {
      localStorage.removeItem("doza-user-role");
      console.log("🗑️ Removed role from localStorage");
    }
    setShowRoleSelection(false);
  };

  const handleChangeRole = () => {
    console.log("🔄 Change role button clicked");
    setShowRoleSelection(true);
  };

  // Show role selection if no role is saved or user wants to change
  if (showRoleSelection || !selectedRole) {
    console.log(
      "🎪 Rendering Role Selection - showRoleSelection:",
      showRoleSelection,
      "selectedRole:",
      selectedRole,
    );
    return (
      <DozaRoleBasedExperience
        onRoleSelect={handleRoleSelect}
        showBackButton={!!selectedRole}
        onBack={() => {
          console.log("🔙 Back button clicked in role selection");
          setShowRoleSelection(false);
        }}
      />
    );
  }

  // Show role-specific homepage with proper header
  console.log("🏠 Rendering Role-Specific Homepage for:", selectedRole);
  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {selectedRole === "user" && (
          <PatientHomePageWrapper onChangeRole={handleChangeRole} />
        )}
        {selectedRole === "medic" && (
          <MedicHomePageWrapper onChangeRole={handleChangeRole} />
        )}
        {selectedRole === "center" && (
          <CenterHomePageWrapper onChangeRole={handleChangeRole} />
        )}
      </AnimatePresence>
    </div>
  );
};

// Wrapper components for each role with proper header - Optimized for mobile
function PatientHomePageWrapper({
  onChangeRole,
}: {
  onChangeRole: () => void;
}) {
  console.log("👤 PatientHomePageWrapper rendering");
  return (
    <div className="min-h-screen bg-white">
      <PatientHomePage onChangeRole={onChangeRole} />
    </div>
  );
}

function MedicHomePageWrapper({ onChangeRole }: { onChangeRole: () => void }) {
  console.log("👨‍⚕️ MedicHomePageWrapper rendering");
  return (
    <div className="min-h-screen bg-white">
      <MedicHomePage onChangeRole={onChangeRole} />
    </div>
  );
}

function CenterHomePageWrapper({ onChangeRole }: { onChangeRole: () => void }) {
  console.log("🏥 CenterHomePageWrapper rendering");
  return (
    <div className="min-h-screen bg-white">
      <CenterHomePage onChangeRole={onChangeRole} />
    </div>
  );
}

export default LoadingScreenPage;
