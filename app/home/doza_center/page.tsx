import React from "react";
import CenterAbout from "./CenterAbout";
import { CenterHero } from "./CenterHero";
import CenterWhyChoose from "./CenterWhyChoose";
import CenterStories from "./CenterStories";
import AppDownload from "./AppDownload";
import FinalCTA from "./FinalCTA";
import ContactPage from "./ContactPage";
import CenterFeatures from "./CenterFeature";
import Footer from "../Footer";
import { CenterHeader } from "./CenterHeader";

interface CenterHomePageProps {
  onChangeRole?: () => void;
}

const CenterHomePage: React.FC<CenterHomePageProps> = ({ onChangeRole }) => {
  const handleBack =
    onChangeRole ||
    (() => {
      // Fallback if onChangeRole is not provided
      localStorage.removeItem("doza-user-role");
      window.location.reload();
    });

  return (
    <>
      <CenterHeader onBack={handleBack} currentExperience="Center" />
      <CenterHero onBack={handleBack} />
      <CenterAbout />
      <CenterWhyChoose />
      <CenterFeatures />
      <CenterStories />
      <AppDownload />
      <ContactPage />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default CenterHomePage;
