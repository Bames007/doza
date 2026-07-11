"use client";
import React from "react";
import MedicHero from "./MedicHero";
import MedicAbout from "./MedicAbout";
import LoadingScreenPage from "../LoadingScreen";
import MedicStories from "./MedicStories";
import MedicFeatures from "./MedicFeatures";
import MedicWhyChoose from "./MedicWhyChoose";
import { CenterHeader } from "../doza_center/CenterHeader";
import Footer from "../Footer";
import AppDownload from "../doza_user/AppDownload";
import ContactPage from "../Contact";
import MedicFinalCTA from "./FinalCTA";

interface MedicHomePageProps {
  onChangeRole?: () => void;
}

const MedicHomePage: React.FC<MedicHomePageProps> = ({ onChangeRole }) => {
  const handleBack =
    onChangeRole ||
    (() => {
      // Fallback if onChangeRole is not provided
      localStorage.removeItem("doza-user-role");
      window.location.reload();
    });

  return (
    <>
      <MedicHero />
      <MedicAbout />
      <MedicWhyChoose />
      <MedicFeatures />
      <MedicStories />
      <AppDownload />
      <MedicFinalCTA />
      <ContactPage />
      <Footer />
    </>
  );
};

export default MedicHomePage;
