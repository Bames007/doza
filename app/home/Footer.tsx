"use client";

const bebasNeue = { className: "font-['Bebas_Neue']" };
const poppins = { className: "font-['Poppins']" };

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 md:py-16 text-slate-600">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Logo and tagline */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Doza" className="h-8 w-auto" />
            <span
              className={`text-xl font-bold tracking-tighter text-slate-800 ${bebasNeue.className}`}
            >
              DOZA
            </span>
          </div>
          <p className={`text-sm text-slate-500 max-w-sm ${poppins.className}`}>
            Your personal medical assistant
          </p>

          {/* Legal links – responsive wrapping */}
          <div
            className={`flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium ${poppins.className}`}
          >
            <a
              href="/privacy"
              className="text-slate-500 hover:text-emerald-600 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="/terms"
              className="text-slate-500 hover:text-emerald-600 transition-colors"
            >
              Terms of Use
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="/cookies"
              className="text-slate-500 hover:text-emerald-600 transition-colors"
            >
              Cookie Policy
            </a>
          </div>

          {/* Copyright and EBCOM */}
          <div className={`text-xs text-slate-500 ${poppins.className}`}>
            <p>© {new Date().getFullYear()} Doza. All rights reserved.</p>
            <p className="mt-1">
              Built by{" "}
              <a
                href="https://ebcomtechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
              >
                EBCOM Technologies
              </a>
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-emerald-600 transition-colors"
          >
            <span>Back to top</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform group-hover:-translate-y-0.5"
            >
              <path
                d="M6 10V2m0 0L2 6m4-4 4 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
