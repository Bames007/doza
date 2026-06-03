"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const bebasNeue = { className: "font-['Bebas_Neue']" };

const sections = [
  {
    id: "commitment",
    title: "1. Our Commitment",
    content:
      "Doza is built on the principle that your health data belongs to you. We are committed to maintaining your privacy and earning your trust. We process all data in compliance with the Nigeria Data Protection Regulation (NDPR) and relevant international standards like GDPR and HIPAA.",
  },
  {
    id: "collect",
    title: "2. Information We Collect",
    content:
      "We collect information you provide directly, including Identity Data (name, DOB, contact details), Health Records (symptoms, history, prescriptions, lab results), and Communication Data (messages with providers). We also collect Usage Data (IP addresses, device info) to optimize performance.",
  },
  {
    id: "use",
    title: "3. How We Use Your Data",
    content:
      "We use your data to: (i) Facilitate the delivery of telemedicine and healthcare services; (ii) Maintain secure medical records; (iii) Verify your identity and prevent fraud; (iv) Communicate appointment updates and health reminders; and (v) Improve the safety and efficacy of our platform.",
  },
  {
    id: "sharing",
    title: "4. Data Sharing & Disclosure",
    content:
      "We do not sell your personal data. We only share information with: (i) Healthcare Providers explicitly authorized by you; (ii) Trusted Service Providers (e.g., cloud hosting, payment gateways) under strict confidentiality agreements; and (iii) Regulatory Authorities only when compelled by law.",
  },
  {
    id: "rights",
    title: "5. Your Rights",
    content:
      "You maintain control over your data. You have the right to: Request access to your personal information; Correct inaccurate data; Request deletion of your account and data (subject to legal retention requirements); Request data portability; and Object to specific processing activities.",
  },
  {
    id: "security",
    title: "6. Data Security",
    content:
      "We implement industry-standard security measures, including AES-256 encryption for data at rest and TLS 1.3 for data in transit. We conduct regular security audits, maintain strict access controls, and use multi-factor authentication for sensitive administrative access.",
  },
  {
    id: "children",
    title: "7. Children's Privacy",
    content:
      "Doza is not intended for use by children under the age of 13 without verifiable parental consent. If we discover we have collected personal information from a child without appropriate authorization, we will take steps to delete that information promptly.",
  },
  {
    id: "transfers",
    title: "8. International Transfers",
    content:
      "If you access Doza from outside your home country, your data may be processed on servers located in different jurisdictions. We ensure that any international transfer of your data is protected by appropriate safeguards and contractual clauses.",
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    content:
      "We may update this policy periodically to reflect changes in legal requirements or our service offerings. We will notify you of material changes via email or an in-app banner before they take effect.",
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content:
      "If you have questions, concerns, or wish to exercise your data rights, please contact our Data Protection Officer at privacy@dozamedic.com.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#FDFDFC] min-h-screen py-8 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-600 transition-colors mb-6 md:mb-8 font-medium text-sm"
          >
            <ArrowLeft size={16} /> Home
          </Link>
          <div className="border-b border-slate-200 pb-6 md:pb-8">
            <h1
              className={`text-4xl md:text-7xl text-slate-900 mb-4 ${bebasNeue.className}`}
            >
              Privacy Policy
            </h1>
            <div className="px-3 py-1 bg-slate-100 rounded-full text-slate-600 text-xs inline-block">
              Last updated: June 3, 2026
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <aside className="hidden md:block md:col-span-3">
            <nav className="sticky top-10 space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Content
              </p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-slate-600 hover:text-emerald-600 py-1 transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="md:col-span-9 space-y-12 md:space-y-16">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-10">
                <h2
                  className={`text-2xl md:text-3xl text-slate-900 mb-4 md:mb-6 ${bebasNeue.className}`}
                >
                  {s.title}
                </h2>
                <div className="prose prose-sm md:prose-base prose-slate max-w-none text-slate-600 leading-relaxed font-['Poppins']">
                  {s.content}
                </div>
              </section>
            ))}

            <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
              <h3
                className={`text-xl md:text-2xl text-emerald-900 mb-2 ${bebasNeue.className}`}
              >
                Questions?
              </h3>
              <p className="text-emerald-800 text-sm mb-4 font-['Poppins']">
                Reach out to our privacy team directly.
              </p>
              <a
                href="mailto:privacy@dozamedic.com"
                className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-emerald-700 transition-colors w-full md:w-auto text-center"
              >
                privacy@dozamedic.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
