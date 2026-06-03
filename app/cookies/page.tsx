"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const bebasNeue = { className: "font-['Bebas_Neue']" };

const sections = [
  {
    id: "what",
    title: "1. What are Cookies?",
    content:
      "Cookies are small text files stored on your device when you visit our platform. They are used to help us recognize your browser, remember your preferences, and maintain the security of your session.",
  },
  {
    id: "how",
    title: "2. How Doza Uses Cookies",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Essential:</strong> Required to enable core features like
          authentication and data security.
        </li>
        <li>
          <strong>Preferences:</strong> Used to remember your language and
          interface settings.
        </li>
        <li>
          <strong>Analytics:</strong> Help us understand how the platform is
          used (e.g., page load speeds, common user paths). All analytics data
          is anonymized.
        </li>
      </ul>
    ),
  },
  {
    id: "control",
    title: "3. Your Control",
    content:
      "You can manage or disable cookies via your browser settings. However, please note that disabling 'Essential' cookies may prevent the platform from functioning correctly, potentially impacting your ability to access your health data.",
  },
  {
    id: "third",
    title: "4. Third-Party Cookies",
    content:
      "We use trusted third-party services (such as performance monitoring tools) that may set cookies. These tools help us ensure our platform is reliable and error-free. We do not permit third-party advertising networks to track you on our platform.",
  },
  {
    id: "changes",
    title: "5. Changes to This Policy",
    content:
      "We may update this policy occasionally. Any changes will be posted on this page with an updated 'Last Updated' date.",
  },
  {
    id: "contact",
    title: "6. Contact",
    content:
      "For any questions regarding our use of cookies, please contact us at privacy@dozamedic.com.",
  },
];

export default function CookiePolicy() {
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
              Cookie Policy
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
                  {typeof s.content === "string" ? (
                    <p>{s.content}</p>
                  ) : (
                    s.content
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
