"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const bebasNeue = { className: "font-['Bebas_Neue']" };
const poppins = { className: "font-['Poppins']" };

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the Doza platform, website, or mobile applications, you signify that you have read, understood, and agreed to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, you must immediately discontinue your use of the platform.",
  },
  {
    id: "service",
    title: "2. Description of Service",
    content:
      "Doza is a digital health platform designed to facilitate communication and resource management between patients, healthcare providers, and medical facilities. We provide the infrastructure for appointment scheduling, telemedicine, digital record storage, and clinical operations. We are a technology provider, not a healthcare entity.",
  },
  {
    id: "eligibility",
    title: "3. Eligibility",
    content:
      "You must be at least 18 years of age to use the Doza platform. If you are under 18, you may only use the platform with the direct supervision and consent of a parent or legal guardian. Healthcare providers utilizing Doza must maintain valid, active, and unrestricted professional licenses in their respective jurisdictions.",
  },
  {
    id: "responsibilities",
    title: "4. User Responsibilities",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Accuracy:</strong> You agree to provide true, accurate, and
          complete information during registration and usage.
        </li>
        <li>
          <strong>Account Security:</strong> You are solely responsible for
          maintaining the confidentiality of your login credentials. You agree
          to notify us immediately of any unauthorized access.
        </li>
        <li>
          <strong>Compliance:</strong> You agree to use the platform in
          compliance with all local, state, and federal laws.
        </li>
        <li>
          <strong>Conduct:</strong> You shall not transmit viruses, attempt to
          gain unauthorized access to our servers, or harass other users.
        </li>
      </ul>
    ),
  },
  {
    id: "disclaimer",
    title: "5. Medical Disclaimer",
    content:
      "IMPORTANT: DOZA IS NOT A MEDICAL PROVIDER. The platform does not offer medical advice, diagnosis, or treatment. All clinical decisions, prescriptions, and health advice are the sole responsibility of the licensed healthcare professionals you interact with. If you are experiencing a medical emergency, do not use the Doza platform—contact your local emergency services (e.g., 112 or 199) immediately.",
  },
  {
    id: "telemedicine",
    title: "6. Telemedicine Consent",
    content:
      "You acknowledge that telemedicine services have inherent limitations compared to in-person visits, including the absence of physical examination. By using our telemedicine features, you accept that remote assessment is based on the information provided and may not capture the full clinical picture. You consent to the transmission of your health data over digital networks.",
  },
  {
    id: "ip",
    title: "7. Intellectual Property",
    content:
      "All content, software, logos, and features available on Doza—including but not limited to text, graphics, and code—are the exclusive property of EBCOM Technologies or its licensors. You are granted a limited, non-exclusive license to use the platform for personal, non-commercial purposes. You may not reverse-engineer, copy, or distribute our proprietary technology.",
  },
  {
    id: "thirdparty",
    title: "8. Third Party Links",
    content:
      "Our platform may contain links to third-party websites or services (e.g., payment gateways, external health resources). These links are provided for your convenience only. Doza does not endorse and is not responsible for the content, privacy policies, or practices of any third-party websites.",
  },
  {
    id: "termination",
    title: "9. Termination",
    content:
      "We reserve the right, at our sole discretion, to suspend or terminate your account and access to the platform without notice if we believe you have violated these Terms or engaged in conduct harmful to our users or the platform.",
  },
  {
    id: "liability",
    title: "10. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, EBCOM Technologies, its officers, and employees shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the platform. Our total liability to you for any claim arising from these terms shall not exceed the amount paid by you to Doza in the 12 months preceding the claim.",
  },
  {
    id: "governing",
    title: "11. Governing Law",
    content:
      "These Terms of Use shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law principles. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts located in Nigeria.",
  },
  {
    id: "changes",
    title: "12. Changes to Terms",
    content:
      "We reserve the right to modify these Terms at any time. We will provide notice of significant changes via the email address associated with your account or through an in-app notification. Your continued use of the platform following the posting of changes constitutes your acceptance of such changes.",
  },
];

export default function TermsOfUse() {
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

          <div className="flex flex-col border-b border-slate-200 pb-6 md:pb-8">
            <h1
              className={`text-4xl md:text-7xl text-slate-900 mb-4 ${bebasNeue.className}`}
            >
              Terms of Use
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-500 font-['Poppins']">
              <span className="px-3 py-1 bg-slate-100 rounded-full text-slate-600">
                Last updated: June 3, 2026
              </span>
              <span className="hidden md:block">•</span>
              <span>Effective immediately</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <aside className="hidden md:block md:col-span-3">
            <nav className="sticky top-10 space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                On this page
              </p>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm text-slate-600 hover:text-emerald-600 py-1 transition-colors font-['Poppins']"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="md:col-span-9 space-y-12 md:space-y-16 font-['Poppins']">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-10"
              >
                <h2
                  className={`text-2xl md:text-3xl text-slate-900 mb-4 md:mb-6 ${bebasNeue.className}`}
                >
                  {section.title}
                </h2>
                <div className="prose prose-sm md:prose-base prose-slate max-w-none text-slate-600 leading-relaxed">
                  {typeof section.content === "string" ? (
                    <p>{section.content}</p>
                  ) : (
                    section.content
                  )}
                </div>
              </section>
            ))}

            <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100">
              <h3
                className={`text-xl md:text-2xl text-emerald-900 mb-2 ${bebasNeue.className}`}
              >
                Questions?
              </h3>
              <p className="text-emerald-800 text-sm mb-4">
                If you have any questions regarding these terms, please reach
                out to our legal team.
              </p>
              <a
                href="mailto:legal@dozamedic.com"
                className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-emerald-700 transition-colors w-full md:w-auto text-center"
              >
                legal@dozamedic.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
