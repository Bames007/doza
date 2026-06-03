"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfUse() {
  return (
    <main className="bg-white min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#336443] hover:text-[#2AB04A] mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-['Bebas_Neue'] text-[#1f2a1d] mb-4">
          Terms of Use
        </h1>
        <p className="text-sm text-[#4b5b47] mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 font-['Poppins'] text-[#1f2a1d]">
          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              By accessing or using Doza (the app, website, or services), you
              agree to be bound by these Terms of Use. If you do not agree,
              please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              2. Description of Service
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              Doza is a digital healthcare platform that connects patients,
              doctors, and medical centres. It offers features such as
              appointment booking, telemedicine, prescription management, health
              records storage, and centre operations tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              3. Eligibility
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              You must be at least 18 years old (or have parental/guardian
              consent) to use Doza as an independent user. Healthcare providers
              must hold valid professional licenses in their jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              4. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#4b5b47]">
              <li>Provide accurate, current, and complete information.</li>
              <li>Maintain the security of your login credentials.</li>
              <li>Comply with all applicable laws and regulations.</li>
              <li>
                Not misuse the platform (e.g., uploading malicious code,
                harassing others).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              5. Medical Disclaimer
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              Doza is a technology platform, not a medical provider. All
              clinical decisions are made by licensed healthcare professionals.
              Doza does not replace professional medical advice, diagnosis, or
              treatment. In an emergency, call your local emergency number.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              6. Telemedicine Consent
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              By using telemedicine features, you acknowledge that remote
              consultations may have limitations compared to in‑person visits.
              You consent to the transmission of your health data for the
              purpose of receiving virtual care.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              7. Intellectual Property
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              All content, logos, and software on Doza are owned by EBCOM
              Technologies or its licensors. You may not copy, modify, or
              reverse engineer any part of the service without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              8. Third Party Links
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              Doza may contain links to external websites. We are not
              responsible for their content or privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              9. Termination
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              We may suspend or terminate your access if you violate these
              Terms, without prior notice. You may delete your account at any
              time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              10. Limitation of Liability
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              To the fullest extent permitted by law, Doza and its parent
              company EBCOM Technologies shall not be liable for indirect,
              incidental, or consequential damages arising from your use of the
              service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              11. Governing Law
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              These Terms are governed by the laws of Nigeria, without regard to
              conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              12. Changes to Terms
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              We may revise these Terms. Continued use after changes constitutes
              acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">13. Contact</h2>
            <p className="text-[#4b5b47] leading-relaxed">
              Questions? Email{" "}
              <a
                href="mailto:legal@dozamedic.com"
                className="text-[#2AB04A] hover:underline"
              >
                legal@dozamedic.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
