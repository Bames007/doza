"use client";
import ContactPage from "../Contact";
import { CenterHeader } from "../doza_center/CenterHeader";
import Footer from "../Footer";
import AppDownload from "./AppDownload";
import FinalCTA from "./FinalCTA";
import PatientAbout from "./PatientAbout";
import PatientFeatures from "./PatientFeatures";
import PatientHero from "./PatientHero";
import PatientStories from "./PatientStories";
import PatientWhyChoose from "./PatientWhyChoose";

interface PatientHomePageProps {
  onChangeRole?: () => void;
}

const PatientHomePage: React.FC<PatientHomePageProps> = ({ onChangeRole }) => {
  const handleBack =
    onChangeRole ||
    (() => {
      // Fallback if onChangeRole is not provided
      localStorage.removeItem("doza-user-role");
      window.location.reload();
    });

  return (
    <>
      <CenterHeader onBack={handleBack} currentExperience="Patient" />
      <PatientHero />
      <PatientAbout />
      <PatientWhyChoose />
      <PatientFeatures />
      <PatientStories />
      <AppDownload />
      <ContactPage />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default PatientHomePage;
