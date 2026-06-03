"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PatientHomePage from "./doza_user/page";
import MedicHomePage from "./doza_medic/page";
import CenterHomePage from "./doza_center/page";
import DozaMainPage from "./new/DozaPage";
import BubbleTransition from "../components/BubbleTransition";
import { CenterHeader } from "./doza_center/CenterHeader"; // adjust path

type UserRole = "user" | "medic" | "center" | null;

export default function LoadingScreenPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [transitionPhase, setTransitionPhase] = useState<
    "closing" | "opening" | null
  >(null);
  const [pendingRole, setPendingRole] = useState<UserRole | "back" | null>(
    null,
  );

  // Load saved role from localStorage on mount
  useEffect(() => {
    const savedRole = localStorage.getItem("doza-user-role");
    if (
      savedRole === "user" ||
      savedRole === "medic" ||
      savedRole === "center"
    ) {
      setSelectedRole(savedRole);
    }
  }, []);

  const startTransition = (target: UserRole | "back") => {
    setPendingRole(target);
    setTransitionPhase("closing");
  };

  const handleRoleSelect = (role: UserRole) => {
    startTransition(role);
  };

  const handleChangeRoleWithTransition = () => {
    startTransition("back");
  };

  const handleAnimationComplete = () => {
    if (transitionPhase === "closing") {
      if (pendingRole === "back") {
        localStorage.removeItem("doza-user-role");
        setSelectedRole(null);
      } else if (
        pendingRole === "user" ||
        pendingRole === "medic" ||
        pendingRole === "center"
      ) {
        setSelectedRole(pendingRole);
        localStorage.setItem("doza-user-role", pendingRole);
      }
      setTransitionPhase("opening");
    } else if (transitionPhase === "opening") {
      setTransitionPhase(null);
      setPendingRole(null);
    }
  };

  const showTransition = transitionPhase !== null;

  // Map role to display name for header
  const getExperienceName = (role: UserRole): string => {
    if (role === "user") return "User";
    if (role === "medic") return "Medic";
    if (role === "center") return "Center";
    return "";
  };

  return (
    <>
      <AnimatePresence>
        {showTransition && (
          <BubbleTransition
            role={pendingRole === "back" ? null : pendingRole}
            phase={transitionPhase}
            onAnimationComplete={handleAnimationComplete}
          />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-white">
        {!selectedRole ? (
          <DozaMainPage onRoleSelect={handleRoleSelect} />
        ) : (
          <>
            <CenterHeader
              onBack={handleChangeRoleWithTransition}
              currentExperience={getExperienceName(selectedRole)}
            />
            <div className="pt-0 sm:pt-0">
              {" "}
              <AnimatePresence mode="wait">
                {selectedRole === "user" && <PatientHomePage />}
                {selectedRole === "medic" && <MedicHomePage />}
                {selectedRole === "center" && <CenterHomePage />}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </>
  );
}
