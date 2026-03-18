// app/home/doza_user/TermsPage.tsx
"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle,
  UserCheck,
  Shield,
  Scale,
  Ban,
  DollarSign,
  Clock,
  Gavel,
  Globe,
  RefreshCw,
  HeartHandshake,
  BookOpen,
} from "lucide-react";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";
import { GrainOverlay } from "@/app/ui/Premium";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Introduction and Acceptance",
      icon: <BookOpen className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            Welcome to Doza. These Terms of Service ("Terms") constitute a
            legally binding agreement between you ("User," "you," or "your") and
            Doza ("Company," "we," "us," or "our") governing your access to and
            use of our mobile application, website, and related services
            (collectively, the "Services").
          </p>
          <p>
            <strong>
              BY ACCESSING OR USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE
              READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS.
            </strong>{" "}
            If you do not agree, you may not access or use the Services.
          </p>
          <p className="text-sm text-slate-400">Last Updated: March 18, 2026</p>
        </div>
      ),
    },
    {
      title: "2. Eligibility and Account Registration",
      icon: <UserCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            To use our Services, you must be at least 18 years old (or the age
            of majority in your jurisdiction) and have the legal capacity to
            enter into a binding agreement.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Account Creation:</span> You may
              need to create an account and provide accurate, current, and
              complete information, including your name, email address, and, if
              you are a healthcare provider, your professional credentials and
              license information.
            </li>
            <li>
              <span className="font-semibold">Account Credentials:</span> You
              are solely responsible for maintaining the confidentiality of your
              login credentials and for all activities that occur under your
              account.
            </li>
            <li>
              <span className="font-semibold">Account Security:</span> You agree
              to notify us immediately of any unauthorized access to or use of
              your account or any other security breach. We are not liable for
              any loss or damage arising from your failure to protect your
              account credentials.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. License to Use the Services",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            Subject to your compliance with these Terms, we grant you a limited,
            non-exclusive, non-transferable, revocable license to access and use
            the Services for your personal and non-commercial use, or for your
            internal business purposes as a healthcare provider.
          </p>
        </div>
      ),
    },
    {
      title: "4. Acceptable Use Policy",
      icon: <Ban className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            You agree not to use the Services for any unlawful purpose or in any
            way that could harm, disable, overburden, or impair the Services.
            Prohibited activities include, but are not limited to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Violating any applicable law or regulation.</li>
            <li>
              Impersonating any person or entity or misrepresenting your
              affiliation.
            </li>
            <li>
              Uploading, posting, or transmitting any viruses, malware, or other
              harmful code.
            </li>
            <li>
              Attempting to gain unauthorized access to our systems or other
              users' accounts.
            </li>
            <li>
              Using the Services to send unsolicited commercial communications
              (spam).
            </li>
            <li>
              Reverse engineering, decompiling, or disassembling any aspect of
              the Services.
            </li>
            <li>
              Using any robot, spider, or other automated device to access the
              Services for any purpose without our express written permission.
            </li>
          </ul>
          <p>
            Violation of this policy may result in suspension or termination of
            your account.
          </p>
        </div>
      ),
    },
    {
      title: "5. Intellectual Property Rights",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            The Services, including all content, features, and functionality
            (such as text, graphics, logos, images, and software), are owned by
            Doza or our licensors and are protected by copyright, trademark, and
            other intellectual property laws.
          </p>
          <p>
            <span className="font-semibold">Doza Marks:</span> The Doza name,
            logo, and all related names, logos, product and service names,
            designs, and slogans are our trademarks or the trademarks of our
            affiliates. You may not use such marks without our prior written
            permission.
          </p>
        </div>
      ),
    },
    {
      title: "6. Healthcare Provider Responsibilities",
      icon: <HeartHandshake className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            If you are a healthcare provider using our Services to treat
            patients, you are solely responsible for:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Your clinical decisions, diagnoses, and treatment plans.</li>
            <li>Maintaining your own professional liability insurance.</li>
            <li>
              Complying with all applicable laws, regulations, and ethical
              standards governing your profession, including patient
              confidentiality and record-keeping requirements.
            </li>
            <li>Obtaining any necessary patient consents.</li>
            <li>
              The accuracy and completeness of all information you input into
              the Services.
            </li>
          </ul>
          <p>
            <strong>
              THE COMPANY IS NOT A HEALTHCARE PROVIDER AND DOES NOT PROVIDE
              MEDICAL ADVICE.
            </strong>{" "}
            The Services are administrative tools designed to facilitate care
            delivery by licensed professionals.
          </p>
        </div>
      ),
    },
    {
      title: "7. AI-Powered Features",
      icon: <RefreshCw className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            Our Services may include features powered by artificial intelligence
            (e.g., chatbots, clinical decision support). These tools are
            designed to assist you and do not replace professional judgment.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">"As Is" Basis:</span> AI-generated
              outputs are provided "as is" and may contain errors or
              inaccuracies. You should independently verify any information
              before relying on it.
            </li>
            <li>
              <span className="font-semibold">Limitation of Liability:</span> We
              are not liable for any decisions made or actions taken based on
              AI-generated outputs. You are solely responsible for your use of
              these tools.
            </li>
            <li>
              <span className="font-semibold">Data Use:</span> To improve our AI
              models, we may use de-identified or aggregated data. We will not
              share personal or health data with third parties for AI training
              without your explicit consent.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "8. Fees, Payments, and Refunds",
      icon: <DollarSign className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Subscription Fees:</span> You
              agree to pay all applicable fees for your chosen subscription plan
              as described on our website. Fees are non-refundable except as
              expressly provided in these Terms.
            </li>
            <li>
              <span className="font-semibold">Payment Processing:</span>{" "}
              Payments are processed through our third-party payment processors
              (e.g., Stripe). By providing payment information, you authorize us
              and our processors to charge your designated payment method.
            </li>
            <li>
              <span className="font-semibold">Price Changes:</span> We reserve
              the right to change our fees upon reasonable notice.
            </li>
            <li>
              <span className="font-semibold">No Refunds:</span> We do not offer
              refunds for any unused portion of a subscription period, except as
              required by law.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "9. Third-Party Services and Links",
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            The Services may integrate with or contain links to third-party
            websites, applications, or services (e.g., payment processors,
            mapping services). We are not responsible for the content, privacy
            practices, or terms of any third party. Your use of third-party
            services is at your own risk and subject to their terms.
          </p>
        </div>
      ),
    },
    {
      title: "10. Termination",
      icon: <Clock className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            We may terminate or suspend your account and access to the Services
            at any time, with or without cause, with or without notice,
            effective immediately. Grounds for termination may include, but are
            not limited to, a breach of these Terms. You may terminate your
            account at any time by contacting us. Upon termination, your right
            to use the Services will immediately cease, and we may delete your
            account and data, subject to our data retention and legal
            obligations.
          </p>
        </div>
      ),
    },
    {
      title: "11. Disclaimers of Warranties",
      icon: <AlertCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK. THE SERVICES ARE
            PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE FULLEST
            EXTENT PERMITTED BY LAW, WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY
            KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE
            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, TITLE, AND NON-INFRINGEMENT.
          </p>
          <p>
            WE DO NOT WARRANT THAT: (A) THE SERVICES WILL MEET YOUR
            REQUIREMENTS; (B) THE SERVICES WILL BE UNINTERRUPTED, TIMELY,
            SECURE, OR ERROR-FREE; OR (C) THE RESULTS THAT MAY BE OBTAINED FROM
            THE USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE.
          </p>
        </div>
      ),
    },
    {
      title: "12. Limitation of Liability",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL DOZA, ITS
            AFFILIATES, OR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, OR
            AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION,
            LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
            RESULTING FROM (I) YOUR USE OR INABILITY TO USE THE SERVICES; (II)
            ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (III) ANY
            CONTENT OBTAINED FROM THE SERVICES; OR (IV) UNAUTHORIZED ACCESS,
            USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED
            ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER
            LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE
            POSSIBILITY OF SUCH DAMAGE.
          </p>
          <p>
            OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATING
            TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID
            US, IF ANY, DURING THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING
            RISE TO THE LIABILITY.
          </p>
        </div>
      ),
    },
    {
      title: "13. Indemnification",
      icon: <Gavel className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            You agree to indemnify, defend, and hold harmless Doza, its
            affiliates, and their respective officers, directors, employees, and
            agents from and against any and all claims, liabilities, damages,
            losses, costs, expenses, or fees (including reasonable attorneys'
            fees) arising from or related to: (a) your use of the Services; (b)
            your violation of these Terms; (c) your violation of any third-party
            right, including without limitation any copyright, property, or
            privacy right; or (d) any claim that your use of the Services caused
            damage to a third party. This obligation survives the termination of
            these Terms and your use of the Services.
          </p>
        </div>
      ),
    },
    {
      title: "14. Governing Law and Dispute Resolution",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Governing Law:</span> These Terms
              shall be governed by and construed in accordance with the laws of
              the Federal Republic of Nigeria, without regard to its conflict of
              law provisions.
            </li>
            <li>
              <span className="font-semibold">Informal Resolution:</span> Before
              filing a claim, you agree to attempt to resolve the dispute
              informally by contacting us at{" "}
              <a
                href="mailto:legal@dozamedic.com"
                className="text-emerald-600 underline"
              >
                legal@dozamedic.com
              </a>
              . We will attempt to resolve the dispute through negotiation.
            </li>
            <li>
              <span className="font-semibold">Arbitration:</span> If we are
              unable to resolve the dispute within 30 days, you and Doza agree
              to resolve any claims relating to these Terms or the Services
              through final and binding individual arbitration, except that you
              may assert claims in small claims court if your claims qualify.
              You agree that any arbitration will be conducted on an individual
              basis and not as a class, consolidated, or representative action.
            </li>
            <li>
              <span className="font-semibold">Class Action Waiver:</span> YOU
              AND DOZA AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY
              IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR
              CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "15. DMCA Compliance (For US Users)",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            We respect the intellectual property rights of others. If you
            believe that any material available on or through the Services
            infringes upon any copyright you own or control, you may notify our
            Designated Copyright Agent. To be effective, the notification must
            comply with the Digital Millennium Copyright Act (DMCA), 17 U.S.C. §
            512(c)(3), and include the required information. Our Designated
            Copyright Agent for notice of claims of copyright infringement can
            be reached at{" "}
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
      title: "16. Changes to These Terms",
      icon: <RefreshCw className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            We may revise and update these Terms from time to time in our sole
            discretion. All changes are effective immediately when we post them.
            Your continued use of the Services following the posting of revised
            Terms means that you accept and agree to the changes.
          </p>
        </div>
      ),
    },
    {
      title: "17. Miscellaneous",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-3 text-slate-600">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Entire Agreement:</span> These
              Terms, together with our Privacy Policy and any other agreements
              expressly incorporated by reference, constitute the entire
              agreement between you and Doza regarding your use of the Services.
            </li>
            <li>
              <span className="font-semibold">Waiver and Severability:</span>{" "}
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable, the remaining
              provisions will remain in full force and effect.
            </li>
            <li>
              <span className="font-semibold">Assignment:</span> You may not
              assign or transfer these Terms, by operation of law or otherwise,
              without our prior written consent. We may assign these Terms
              without restriction.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const summaryPoints = [
    "You must be 18+ to use Doza.",
    "You are responsible for your account and all activity.",
    "AI tools assist but do not replace professional judgment.",
    "Fees are non-refundable unless stated otherwise.",
    "We provide services 'as is' with no warranties.",
    "Liability is limited to the amount you paid.",
    "Disputes resolved by individual arbitration.",
    "For questions: legal@dozamedic.com or +234 81 2772 8084.",
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
            Terms & <span className="text-emerald-600">Conditions</span>
          </h1>
          <p
            className={`text-lg text-slate-500 max-w-2xl mx-auto ${poppins.className}`}
          >
            Please read these terms carefully. They govern your use of Doza
            services.
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
            <FileText className="w-6 h-6 text-emerald-600" />
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
            Need Clarification?
          </h2>
          <p
            className={`text-slate-300 mb-6 max-w-2xl mx-auto ${poppins.className}`}
          >
            Our legal team is here to help. Reach out with any questions.
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
