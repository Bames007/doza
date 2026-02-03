import React from "react";
import MedicHero from "./MedicHero";
import MedicAbout from "./MedicAbout";
import LoadingScreenPage from "../LoadingScreen";
import FinalCTA from "./FinalCTA";
import ContactPage from "./ContactPage";
import AppDownload from "./AppDownload";
import MedicStories from "./MedicStories";
import MedicFeatures from "./MedicFeatures";
import MedicWhyChoose from "./MedicWhyChoose";
import { CenterHeader } from "../doza_center/CenterHeader";
import Footer from "../Footer";

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
      <CenterHeader onBack={handleBack} currentExperience="Medic" />
      <MedicHero onBack={LoadingScreenPage} />
      <MedicAbout />
      <MedicWhyChoose />
      <MedicFeatures />
      <MedicStories />
      <AppDownload />
      <ContactPage />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default MedicHomePage;
