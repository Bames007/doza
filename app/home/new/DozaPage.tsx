"use client";

import { useRef } from "react";
import DozaHero from "./Hero";
import About from "./About";
import WhatDozaDoes from "./WhatDozaDoes";
import Features from "./Features";
import Safety from "./Safety";
import Contact from "../doza_medic/ContactPage";
import Footer from "../Footer";
import MeetFounder from "./MeetFounder";
import RoleSelector from "./ChooseExperience";

interface DozaMainPageProps {
  onRoleSelect: (role: "user" | "medic" | "center") => void;
}

export default function DozaMainPage({ onRoleSelect }: DozaMainPageProps) {
  const aboutRef = useRef<HTMLElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-white relative">
      <DozaHero
        onRoleSelect={onRoleSelect}
        onExploreClick={scrollToAbout}
        onSeeDifferenceClick={scrollToAbout}
      />

      <section id="about" ref={aboutRef}>
        <About />
      </section>

      <section id="what-we-do">
        <WhatDozaDoes />
      </section>
      <section id="features">
        <Features />
      </section>
      <RoleSelector onSelectRole={onRoleSelect} />

      <MeetFounder />
      <section id="safety">
        <Safety />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
