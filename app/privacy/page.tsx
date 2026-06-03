"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-[#4b5b47] mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 font-['Poppins'] text-[#1f2a1d]">
          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              1. Our Commitment
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              Doza is built on the principle that your health data belongs to
              you, and only you. We never sell, rent, or trade your personal
              information. This policy explains how we collect, use, and protect
              your data in full compliance with HIPAA, GDPR, and local
              healthcare regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#4b5b47]">
              <li>
                <strong>Identity data</strong> – name, date of birth, contact
                details.
              </li>
              <li>
                <strong>Health records</strong> – symptoms, diagnoses,
                prescriptions, lab results, medical history.
              </li>
              <li>
                <strong>Usage data</strong> – app interactions, device info, IP
                address (anonymised where possible).
              </li>
              <li>
                <strong>Communication data</strong> – messages with doctors,
                support inquiries.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              3. How We Use Your Data
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#4b5b47]">
              <li>
                Provide and personalise healthcare services (appointments,
                telemedicine, prescriptions).
              </li>
              <li>
                Enable secure sharing with your chosen doctors and centres.
              </li>
              <li>
                Improve platform safety, performance, and user experience.
              </li>
              <li>Comply with legal obligations and prevent fraud.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              4. Data Sharing & Disclosure
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              We only share your identifiable health information with:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-[#4b5b47]">
              <li>
                Healthcare providers you explicitly authorise (doctors, labs,
                hospitals).
              </li>
              <li>
                Third‑party service providers who help us operate (e.g., cloud
                hosting, analytics) – all bound by strict confidentiality
                agreements.
              </li>
              <li>Regulatory authorities when required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              5. Your Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#4b5b47]">
              <li>
                <strong>Access:</strong> Request a copy of your data at any
                time.
              </li>
              <li>
                <strong>Correction:</strong> Ask us to fix inaccurate
                information.
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your account and
                associated data (subject to legal retention periods).
              </li>
              <li>
                <strong>Portability:</strong> Download your health records in a
                standard format.
              </li>
              <li>
                <strong>Objection:</strong> Opt out of non‑essential data
                processing.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              6. Data Security
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              We use industry‑standard encryption (AES‑256 at rest, TLS 1.3 in
              transit), multi‑factor authentication, and regular security
              audits. Access to your data is strictly logged and monitored.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              7. Children's Privacy
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              Doza is not intended for children under 13 without parental
              consent. If you believe we have collected such data, please
              contact us to delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              8. International Transfers
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              If you use Doza outside your home country, your data may be
              transferred to servers in a different jurisdiction. We ensure
              appropriate safeguards (e.g., Standard Contractual Clauses) to
              protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              9. Changes to This Policy
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              We may update this policy. Significant changes will be notified
              via email or in‑app banner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              10. Contact Us
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              For privacy questions or to exercise your rights, email{" "}
              <a
                href="mailto:privacy@dozamedic.com"
                className="text-[#2AB04A] hover:underline"
              >
                privacy@dozamedic.com
              </a>{" "}
              or call +234 812 772 8084.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
