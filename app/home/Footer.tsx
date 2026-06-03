"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAFAFA] border-t border-black/5 py-12 text-[#1f2a1d]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo and tagline */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Doza" className="h-8 w-auto" />
            <span className="text-xl font-['Bebas_Neue'] tracking-tighter">
              DOZA
            </span>
          </div>
          <p className="text-sm text-[#4b5b47] font-['Poppins'] max-w-sm">
            Your personal medical assistant
          </p>

          {/* Legal links only */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#4b5b47] font-['Poppins']">
            <a
              href="/privacy"
              className="hover:text-[#2AB04A] transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-black/20">|</span>
            <a href="/terms" className="hover:text-[#2AB04A] transition-colors">
              Terms of Use
            </a>
            <span className="text-black/20">|</span>
            <a
              href="/cookies"
              className="hover:text-[#2AB04A] transition-colors"
            >
              Cookie Policy
            </a>
          </div>

          {/* Copyright and EBCOM */}
          <div className="text-xs text-[#4b5b47] font-['Poppins']">
            <p>© {new Date().getFullYear()} Doza. All rights reserved.</p>
            <p className="mt-1">
              Built by{" "}
              <a
                href="https://ebcomtechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2AB04A] transition-colors"
              >
                EBCOM Technologies
              </a>
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="text-xs flex items-center gap-1 text-[#336443] hover:text-[#2AB04A] transition-colors group"
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
