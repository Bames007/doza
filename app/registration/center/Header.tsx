import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, Shield, Heart, Menu } from "lucide-react";
import { bebasNeue, poppins } from "../../home/doza_center/constant";

const Header: React.FC = () => {
  const handleContactClick = () => {
    window.open("https://wa.me/2348127728084", "_blank");
  };

  return (
    <header className="mb-6 sm:mb-12 bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-emerald-200/60 shadow-lg shadow-emerald-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 py-3 sm:py-4">
          {/* Logo and Brand Section */}
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
                <Image
                  src="/logo.png"
                  alt="DOZA Medic Logo"
                  height={60}
                  width={60}
                  className="object-contain drop-shadow-lg w-full h-full"
                  priority
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center gap-2">
                  <h1
                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight ${bebasNeue.className}`}
                  >
                    DOZA Medic
                  </h1>
                </div>
                {/* Mobile-only subtitle */}
                <p
                  className={`sm:hidden text-xs text-emerald-600 font-medium ${poppins.className} mt-1`}
                >
                  Center Registration
                </p>
              </div>
            </div>

            {/* Mobile menu button (optional - for future expansion) */}
            <button className="sm:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors">
              <Menu size={20} />
            </button>
          </div>

          {/* Contact Button */}
          <div className="w-full sm:w-auto mt-2 sm:mt-0">
            <button
              onClick={handleContactClick}
              className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto justify-center relative overflow-hidden min-h-[44px]"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              {/* Icons and Text */}
              <MessageCircle
                size={18}
                className="sm:w-5 sm:h-5 relative z-10 flex-shrink-0"
              />
              <span className="relative z-10 text-sm sm:text-base whitespace-nowrap">
                Medical Support
              </span>
              <Phone
                size={16}
                className="sm:w-4 sm:h-4 relative z-10 opacity-80 flex-shrink-0"
              />
            </button>

            {/* Mobile contact info */}
            <div className="sm:hidden text-center mt-2">
              <p className={`text-xs text-gray-600 ${poppins.className}`}>
                Tap to chat on WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/60 to-emerald-500/0" />
      </div>

      {/* Mobile bottom border for better visibility */}
      <div className="sm:hidden absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400/40 to-green-400/40" />
    </header>
  );
};

export default Header;
