// app/LoadingScreen.tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PatientHomePage from "./doza_user/page";
import MedicHomePage from "./doza_medic/page";
import CenterHomePage from "./doza_center/page";
import DozaMainPage from "./new/DozaPage";
import BubbleTransition from "../components/BubbleTransition";
import { CenterHeader } from "./doza_center/CenterHeader";
import SplashScreen from "./new/SplashScreen";
import ExperienceChooser from "./new/ExperienceChooser";

type UserRole = "user" | "medic" | "center" | null;
type Stage = "splash" | "choose" | "app";
type TransitionTarget = UserRole | "back" | "explore";

export default function LoadingScreenPage() {
  const [stage, setStage] = useState<Stage>("splash");
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [transitionPhase, setTransitionPhase] = useState<
    "closing" | "opening" | null
  >(null);
  const [pendingRole, setPendingRole] = useState<TransitionTarget>(null);

  // Splash → choose (or app if role is saved)
  useEffect(() => {
    const savedRole = localStorage.getItem("doza-user-role");
    const hasSavedRole = ["user", "medic", "center"].includes(savedRole || "");
    if (hasSavedRole) setSelectedRole(savedRole as UserRole);

    const t = setTimeout(() => {
      setStage(hasSavedRole ? "app" : "choose");
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  const startTransition = (target: TransitionTarget) => {
    setPendingRole(target);
    setTransitionPhase("closing");
  };

  const handleChooseRole = (role: UserRole) => startTransition(role);
  const handleExplore = () => startTransition("explore");
  const handleChangeRoleWithTransition = () => startTransition("back");

  const handleAnimationComplete = () => {
    if (transitionPhase === "closing") {
      if (pendingRole === "back") {
        localStorage.removeItem("doza-user-role");
        setSelectedRole(null);
        setStage("choose");
      } else if (pendingRole === "explore") {
        localStorage.removeItem("doza-user-role");
        setSelectedRole(null);
        setStage("app");
      } else if (
        pendingRole === "user" ||
        pendingRole === "medic" ||
        pendingRole === "center"
      ) {
        setSelectedRole(pendingRole);
        localStorage.setItem("doza-user-role", pendingRole);
        setStage("app");
      }
      setTransitionPhase("opening");
    } else if (transitionPhase === "opening") {
      setTransitionPhase(null);
      setPendingRole(null);
    }
  };

  const showTransition = transitionPhase !== null;

  const getExperienceName = (role: UserRole): string => {
    if (role === "user") return "User";
    if (role === "medic") return "Medic";
    if (role === "center") return "Center";
    return "";
  };

  return (
    <>
      {/* Bubble transition overlay */}
      <AnimatePresence>
        {showTransition && (
          <BubbleTransition
            role={
              pendingRole === "back" || pendingRole === "explore"
                ? null
                : pendingRole
            }
            phase={transitionPhase}
            onAnimationComplete={handleAnimationComplete}
          />
        )}
      </AnimatePresence>

      {/* Splash → Choose (default sync mode keeps them overlapped during fade) */}
      <AnimatePresence>
        {stage === "splash" && <SplashScreen key="splash" />}
        {stage === "choose" && (
          <ExperienceChooser
            key="choose"
            onSelect={handleChooseRole}
            onExplore={handleExplore}
          />
        )}
      </AnimatePresence>

      {/* App */}
      {stage === "app" && (
        <div className="min-h-screen bg-white">
          {/* Floating "Switch Experience" button only on marketing view */}
          {!selectedRole && (
            <button
              onClick={handleChangeRoleWithTransition}
              className="fixed top-4 right-4 z-40 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-full border border-white/20 transition-all"
            >
              ← Experiences
            </button>
          )}

          {!selectedRole ? (
            <DozaMainPage onRoleSelect={handleChooseRole} />
          ) : (
            <>
              <CenterHeader
                onBack={handleChangeRoleWithTransition}
                currentExperience={getExperienceName(selectedRole)}
              />
              <div className="pt-0 sm:pt-0">
                <AnimatePresence mode="wait">
                  {selectedRole === "user" && <PatientHomePage />}
                  {selectedRole === "medic" && <MedicHomePage />}
                  {selectedRole === "center" && <CenterHomePage />}
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
