"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicy() {
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
          Cookie Policy
        </h1>
        <p className="text-sm text-[#4b5b47] mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 font-['Poppins'] text-[#1f2a1d]">
          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              1. What are Cookies?
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              Cookies are small text files stored on your device when you visit
              a website or use an app. They help us remember your preferences,
              improve performance, and analyse usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              2. How Doza Uses Cookies
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#4b5b47]">
              <li>
                <strong>Essential cookies:</strong> Required for the platform to
                function (e.g., session management, security).
              </li>
              <li>
                <strong>Preference cookies:</strong> Remember your language and
                display settings.
              </li>
              <li>
                <strong>Analytics cookies:</strong> Help us understand how users
                interact with Doza (anonymised).
              </li>
              <li>
                <strong>Performance cookies:</strong> Monitor load times and
                errors.
              </li>
            </ul>
            <p className="text-[#4b5b47] leading-relaxed mt-4">
              We do not use advertising or tracking cookies that share your data
              with third‑party marketers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              3. Your Control
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              You can disable non‑essential cookies in your browser settings or
              via our cookie preference center. Essential cookies cannot be
              disabled because they are necessary for security and basic
              functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              4. Third‑Party Cookies
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              We use trusted third‑party services (e.g., Google Analytics,
              Sentry) that may place their own cookies. These are covered by
              their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">
              5. Changes to This Policy
            </h2>
            <p className="text-[#4b5b47] leading-relaxed">
              We may update this Cookie Policy. Any changes will be posted here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Bebas_Neue'] mb-3">6. Contact</h2>
            <p className="text-[#4b5b47] leading-relaxed">
              If you have questions about our use of cookies, please email{" "}
              <a
                href="mailto:privacy@dozamedic.com"
                className="text-[#2AB04A] hover:underline"
              >
                privacy@dozamedic.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
