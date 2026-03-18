// app/home/doza_user/PrivacyPage.tsx
"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Mail,
  Phone,
  FileText,
  CheckCircle,
  Globe,
  Lock,
  Eye,
  Database,
  UserCheck,
  Calendar,
  Download,
  Trash2,
  AlertCircle,
} from "lucide-react";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";
import { GrainOverlay } from "@/app/ui/Premium";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Introduction",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            Doza ("Company," "we," "our," "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our mobile application,
            website, and related services (collectively, the "Services").
          </p>
          <p>
            Please read this Privacy Policy carefully.{" "}
            <strong>
              If you do not agree with the terms of this Privacy Policy, please
              do not access the Services.
            </strong>
          </p>
          <p>
            We adhere to applicable data protection laws, including the Health
            Insurance Portability and Accountability Act (HIPAA), the General
            Data Protection Regulation (GDPR), and the California Consumer
            Privacy Act (CCPA), as outlined below.
          </p>
          <p className="text-sm text-slate-400">
            Effective Date: March 18, 2026
          </p>
        </div>
      ),
    },
    {
      title: "2. Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            We collect several types of information from and about users of our
            Services, including:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">
                Personal Identifiable Information (PII):
              </span>{" "}
              Name, email address, mailing address, phone number, date of birth,
              and account credentials (username and password).
            </li>
            <li>
              <span className="font-semibold">
                Protected Health Information (PHI):
              </span>{" "}
              Medical history, diagnostic results, treatment plans, medication
              lists, consultation notes, vital signs, and appointment details.
              This information is considered "sensitive data" under regulations
              like GDPR.
            </li>
            <li>
              <span className="font-semibold">Device and Usage Data:</span> IP
              address, device type, operating system, unique device identifiers,
              browser type, app usage statistics, crash logs, and the dates and
              times of your visits.
            </li>
            <li>
              <span className="font-semibold">Location Information:</span>{" "}
              General location based on IP address or, with your explicit
              consent, precise geolocation from your mobile device to help you
              find nearby healthcare facilities.
            </li>
            <li>
              <span className="font-semibold">Payment and Billing Data:</span>{" "}
              Credit card numbers, billing addresses, and other financial
              information, which is collected and processed by our PCI-compliant
              third-party payment processors. We do not store full payment card
              numbers on our servers.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. How We Use Your Information",
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            We use the information we collect for various purposes, including
            to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide, operate, and maintain our Services.</li>
            <li>
              Facilitate telehealth consultations and connect you with
              healthcare providers.
            </li>
            <li>
              Manage your appointments, send reminders, and track your health
              data.
            </li>
            <li>
              Process transactions and send related information, including
              purchase confirmations and invoices.
            </li>
            <li>
              Improve, personalize, and expand our Services, including analyzing
              usage trends and testing new features.
            </li>
            <li>
              Communicate with you, including sending service updates, security
              alerts, and support messages.
            </li>
            <li>
              Comply with legal obligations and enforce our terms and policies.
            </li>
            <li>
              For research and quality improvement purposes, using de-identified
              or aggregated data.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Legal Basis for Processing (for EEA and UK Users)",
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            If you are located in the European Economic Area (EEA) or the United
            Kingdom (UK), our processing of your personal data is based on the
            following lawful grounds:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Your Consent:</span> We may ask
              for your consent to process your data for specific purposes, such
              as collecting precise location or sending certain marketing
              communications. You have the right to withdraw your consent at any
              time.
            </li>
            <li>
              <span className="font-semibold">Performance of a Contract:</span>{" "}
              Processing is necessary to perform our contractual obligations to
              you, such as providing the healthcare services you request.
            </li>
            <li>
              <span className="font-semibold">Legal Obligations:</span>{" "}
              Processing is necessary to comply with our legal and regulatory
              obligations, such as maintaining medical records as required by
              law.
            </li>
            <li>
              <span className="font-semibold">Legitimate Interests:</span>{" "}
              Processing is necessary for our legitimate interests or the
              legitimate interests of a third party, provided those interests
              are not overridden by your rights and interests. This includes
              improving our Services, ensuring network security, and preventing
              fraud.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "5. Disclosure of Your Information",
      icon: <UserCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            We do not sell, rent, or trade your personal information. We may
            share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">With Healthcare Providers:</span>{" "}
              To facilitate your care, we share your information with the
              healthcare professionals and institutions you engage with through
              our Services.
            </li>
            <li>
              <span className="font-semibold">
                With Third-Party Service Providers:
              </span>{" "}
              We share information with vendors who perform services on our
              behalf, such as cloud hosting, data analytics (e.g., Google
              Analytics), payment processing, and customer support. These
              providers are contractually bound to protect your data.
            </li>
            <li>
              <span className="font-semibold">
                For Legal and Safety Reasons:
              </span>{" "}
              We may disclose information if required to do so by law or in
              response to valid requests by public authorities (e.g., a court or
              government agency). We may also disclose information to protect
              the rights, property, or safety of Doza, our users, or others.
            </li>
            <li>
              <span className="font-semibold">Business Transfers:</span> In the
              event of a merger, acquisition, or sale of all or a portion of our
              assets, your information may be transferred as part of that
              transaction. We will notify you of any such change in ownership or
              control.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "6. Data Security",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            We implement a variety of administrative, technical, and physical
            security measures to protect your personal information.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Encryption:</span> All data
              transmitted between your device and our servers is encrypted using{" "}
              <strong>Transport Layer Security (TLS 1.2+)</strong>. Data stored
              on our servers is encrypted at rest using <strong>AES-256</strong>{" "}
              encryption.
            </li>
            <li>
              <span className="font-semibold">Access Controls:</span> We enforce
              strict role-based access controls, ensuring only authorized
              personnel can access your information for legitimate purposes. We
              also support multi-factor authentication (MFA) for user accounts.
            </li>
            <li>
              <span className="font-semibold">Audit Logs:</span> Our systems
              maintain comprehensive audit logs of all access to and
              modifications of sensitive data.
            </li>
            <li>
              <span className="font-semibold">Regular Audits:</span> We perform
              regular vulnerability scanning and security assessments to
              identify and address potential threats.
            </li>
          </ul>
          <p>
            Despite these measures, no method of transmission over the Internet
            or electronic storage is 100% secure. While we strive to protect
            your information, we cannot guarantee its absolute security.
          </p>
        </div>
      ),
    },
    {
      title: "7. International Data Transfers",
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            Your information may be transferred to, and processed in, countries
            other than the country in which you are resident. These countries
            may have data protection laws that are different from the laws of
            your country.
          </p>
          <p>
            If you are located in the EEA, UK, or other regions with laws
            governing data collection and use, we transfer data subject to
            appropriate safeguards, such as the European Commission's{" "}
            <strong>Standard Contractual Clauses (SCCs)</strong> or a finding of
            adequacy.
          </p>
        </div>
      ),
    },
    {
      title: "8. Data Retention",
      icon: <Calendar className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            We will retain your personal information only for as long as
            necessary to fulfill the purposes we collected it for, including for
            the purposes of satisfying any legal, accounting, or reporting
            requirements. For example, we may need to retain certain PHI for a
            specific period as mandated by healthcare regulations. Data backups
            are performed daily and retained on a rolling schedule.
          </p>
        </div>
      ),
    },
    {
      title: "9. Your Privacy Rights",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Access:</span> You have the right
              to request a copy of the personal information we hold about you.
            </li>
            <li>
              <span className="font-semibold">Correction:</span> You have the
              right to request that we correct inaccurate or incomplete
              information.
            </li>
            <li>
              <span className="font-semibold">Deletion:</span> You have the
              right to request that we delete your personal information, subject
              to certain legal exceptions (e.g., we may need to retain your data
              to comply with healthcare record-keeping laws).
            </li>
            <li>
              <span className="font-semibold">Restriction of Processing:</span>{" "}
              You have the right to request that we restrict the processing of
              your information in certain circumstances.
            </li>
            <li>
              <span className="font-semibold">Data Portability:</span> You have
              the right to receive your personal information in a structured,
              commonly used, and machine-readable format and to transmit that
              data to another controller.
            </li>
            <li>
              <span className="font-semibold">Objection:</span> You have the
              right to object to our processing of your personal information,
              where we are relying on a legitimate interest.
            </li>
            <li>
              <span className="font-semibold">Withdraw Consent:</span> If we are
              processing your information based on your consent, you have the
              right to withdraw that consent at any time.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:legal@dozamedic.com"
              className="text-emerald-600 underline"
            >
              legal@dozamedic.com
            </a>
            . We will respond to your request in accordance with applicable law.
          </p>
        </div>
      ),
    },
    {
      title: "10. HIPAA Compliance (For US Users)",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            Doza may act as a <strong>Business Associate</strong> for healthcare
            providers ("Covered Entities") who are our customers. We enter into{" "}
            <strong>Business Associate Agreements (BAAs)</strong> with these
            providers, as required by HIPAA, which contractually obligate us to
            safeguard Protected Health Information (PHI). When we process PHI on
            behalf of a Covered Entity, we do so in accordance with the terms of
            our BAA and HIPAA regulations.
          </p>
        </div>
      ),
    },
    {
      title: "11. CCPA Privacy Notice (For California Residents)",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            This section provides additional details about the personal
            information we collect about California residents and the rights
            afforded to them under the California Consumer Privacy Act (CCPA).
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">
                Categories of Personal Information Collected:
              </span>{" "}
              We have collected the categories of personal information described
              in Section 2 within the last 12 months.
            </li>
            <li>
              <span className="font-semibold">
                Sale of Personal Information:
              </span>{" "}
              We do not sell your personal information.
            </li>
            <li>
              <span className="font-semibold">Your Rights:</span> California
              residents have the right to request access to and deletion of
              their personal information, as described in Section 9, and to be
              free from discrimination for exercising their CCPA rights.
            </li>
          </ul>
          <p>
            To exercise your CCPA rights, please contact us at{" "}
            <a
              href="mailto:legal@dozamedic.com"
              className="text-emerald-600 underline"
            >
              legal@dozamedic.com
            </a>
            .
          </p>
        </div>
      ),
    },
    {
      title: "12. Children's Privacy",
      icon: <AlertCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            Our Services are not directed to individuals under the age of 13 (or
            16 in the EEA), and we do not knowingly collect personal information
            from children. If we learn we have collected or received personal
            information from a child without verification of parental consent,
            we will delete that information. If you believe we might have any
            information from or about a child, please contact us.
          </p>
        </div>
      ),
    },
    {
      title: "13. Changes to This Privacy Policy",
      icon: <Download className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technologies, legal requirements, or other
            factors. If we make material changes, we will notify you by email
            (sent to the email address specified in your account) or by means of
            a notice on our Services prior to the change becoming effective. We
            encourage you to review this Privacy Policy periodically.
          </p>
        </div>
      ),
    },
  ];

  const summaryPoints = [
    "We collect personal and health data only as necessary to provide our services.",
    "Your data is encrypted in transit and at rest (TLS 1.2+, AES-256).",
    "We never sell your personal information.",
    "You have rights to access, correct, delete, and port your data.",
    "We comply with HIPAA, GDPR, and CCPA where applicable.",
    "For questions, contact us at legal@dozamedic.com or +234 81 2772 8084.",
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] relative">
      <GrainOverlay />
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-200/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-300/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1
            className={`text-5xl md:text-7xl font-bold text-slate-900 mb-4 ${bebasNeue.className}`}
          >
            Privacy <span className="text-emerald-600">Policy</span>
          </h1>
          <p
            className={`text-lg text-slate-500 max-w-2xl mx-auto ${poppins.className}`}
          >
            Your privacy is paramount. Read how we protect and handle your data.
          </p>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-3xl p-6 md:p-8 mb-12 shadow-lg"
        >
          <h2
            className={`text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-2 ${bebasNeue.className}`}
          >
            <Shield className="w-6 h-6 text-emerald-600" />
            Key Points Summary
          </h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {summaryPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className={`text-slate-700 ${poppins.className}`}>
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Sections - Full Legal Text */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 + 0.3 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  {section.icon}
                </div>
                <h3
                  className={`text-2xl font-bold text-slate-900 ${bebasNeue.className}`}
                >
                  {section.title}
                </h3>
              </div>
              <div className={`text-base ${poppins.className}`}>
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white text-center"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${bebasNeue.className}`}
          >
            Questions About Your Privacy?
          </h2>
          <p
            className={`text-slate-300 mb-6 max-w-2xl mx-auto ${poppins.className}`}
          >
            Our Data Protection Officer is ready to assist. Reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:legal@dozamedic.com"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-600 rounded-xl hover:bg-emerald-500 transition-colors"
            >
              <Mail size={18} />
              legal@dozamedic.com
            </a>
            <a
              href="tel:+2348127728084"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
            >
              <Phone size={18} />
              +234 81 2772 8084
            </a>
          </div>
          <p className={`text-xs text-slate-500 mt-6 ${poppins.className}`}>
            Last updated: March 18, 2026
          </p>
        </motion.div>
      </div>
    </div>
  );
}
