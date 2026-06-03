"use client";
import React from "react";
import CenterAbout from "./CenterAbout";
import CenterWhyChoose from "./CenterWhyChoose";
import CenterStories from "./CenterStories";
import AppDownload from "./AppDownload";
import FinalCTA from "./FinalCTA";
import ContactPage from "./ContactPage";
import CenterFeatures from "./CenterFeature";
import Footer from "../Footer";
import { CenterHeader } from "./CenterHeader";
import CenterHero from "./CenterHero";

interface CenterHomePageProps {
  onChangeRole?: () => void; // receives handleChangeRole from LoadingScreenPage
}

const CenterHomePage: React.FC<CenterHomePageProps> = ({ onChangeRole }) => {
  const handleBack = () => {
    if (onChangeRole) {
      onChangeRole(); // this clears localStorage and resets role
    } else {
      // fallback – shouldn't happen if props are correct
      localStorage.removeItem("doza-user-role");
      window.location.reload();
    }
  };

  return (
    <>
      <CenterHero />
      <CenterAbout />
      <CenterWhyChoose />
      <CenterFeatures />
      <CenterStories />
      <AppDownload />
      <ContactPage />
      <Footer />
    </>
  );
};

export default CenterHomePage;
