// app/center/dashboard/DashboardSidebar.tsx
"use client";

import { useDashboard } from "./DashboardContent";
import Navigation from "./Navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Ad {
  id: number;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  photographer: string;
  photographerUrl: string;
}

export default function DashboardSidebar() {
  const { sidebarCollapsed, center } = useDashboard();
  const [currentAd, setCurrentAd] = useState(0);
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  // Enhanced ads data with working Unsplash images
  const ads: Ad[] = [
    {
      id: 1,
      title: "Premium Medical Supplies",
      description:
        "Get 20% off on all medical equipment and supplies. Limited time offer for healthcare professionals...",
      fullDescription:
        "Upgrade your medical facility with our premium supplies. We offer everything from basic consumables to advanced medical equipment. All products are certified and meet healthcare standards. This limited offer includes free shipping and installation support.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
      photographer: "National Cancer Institute",
      photographerUrl: "https://unsplash.com/@nci",
    },
    {
      id: 2,
      title: "New EHR System",
      description:
        "Streamline your patient records with our advanced Electronic Health Records system. Cloud-based and secure...",
      fullDescription:
        "Our next-generation EHR system helps you manage patient data efficiently with automated workflows, secure cloud storage, and easy integration with existing systems. Features include real-time updates, multi-device access, and comprehensive reporting tools.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
      photographer: "ThisisEngineering",
      photographerUrl: "https://unsplash.com/@thisisengineering",
    },
    {
      id: 3,
      title: "Medical Conference 2024",
      description:
        "Join top healthcare professionals at our annual medical conference. Network and learn from experts...",
      fullDescription:
        "The premier healthcare event of the year featuring keynote speakers from leading medical institutions. Topics include emerging treatments, healthcare technology, and practice management. Earn CME credits and connect with peers in your specialty.",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
      photographer: "Product School",
      photographerUrl: "https://unsplash.com/@productschool",
    },
  ];

  // Initialize loaded images state
  useEffect(() => {
    setImagesLoaded(new Array(ads.length).fill(false));
  }, []);

  // Rotate ads every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [ads.length]);

  // Get center logo or first character
  const getCenterLogo = () => {
    if (center?.logo) {
      return (
        <Image
          src={center.logo}
          alt={center.centerName || "Center"}
          width={36}
          height={36}
          className="rounded-lg object-cover"
        />
      );
    }
    return (
      <span className="text-lg font-bold text-white bg-green-600/20 rounded-lg w-8 h-8 flex items-center justify-center">
        {center?.centerName?.charAt(0) || "C"}
      </span>
    );
  };

  const openAdModal = (ad: Ad) => {
    setSelectedAd(ad);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedAd(null), 300);
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div
      className={`bg-gradient-to-b from-[#29AF45] to-[#1f8a3a] transition-all duration-300 flex flex-col shadow-2xl border-r border-green-600/30 h-screen overflow-hidden ${
        sidebarCollapsed ? "w-20" : "w-80"
      }`}
      style={{
        background:
          "linear-gradient(135deg, #29AF45 0%, #1f8a3a 50%, #16732e 100%)",
      }}
    >
      {/* Sidebar Header - Fixed height */}
      <div className="flex-shrink-0 p-6 border-b border-green-600/30 bg-green-700/20 backdrop-blur-sm">
        <div className="flex items-center justify-center">
          {!sidebarCollapsed ? (
            <div className="flex flex-col space-y-4 w-full">
              {/* Doza Logo and Company Name */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                  <Image
                    src="/logo.png"
                    alt="Doza"
                    width={28}
                    height={28}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-xl font-bold tracking-tight">
                    Doza
                  </h1>
                  <p className="text-green-100 text-sm font-medium">
                    Medical Excellence
                  </p>
                </div>
              </div>

              {/* Center Logo and Name */}
              <div className="flex items-center space-x-3 pl-1 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center border border-white/20">
                  {getCenterLogo()}
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <h2 className="text-white font-semibold text-sm truncate drop-shadow-sm">
                    {center?.centerName || "Medical Center"}
                  </h2>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-lg"></div>
                    <span className="text-green-100 text-xs font-medium">
                      Online
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4 w-full">
              {/* Collapsed Doza Logo */}
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                <Image
                  src="/logo.png"
                  alt="Doza"
                  width={24}
                  height={24}
                  className="rounded-lg"
                />
              </div>

              {/* Collapsed Center Logo */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center border border-white/20">
                  {getCenterLogo()}
                </div>
                <div className="text-center">
                  <p className="text-white text-xs font-semibold text-center leading-tight drop-shadow-sm">
                    {center?.centerName?.split(" ")[0] || "Center"}
                  </p>
                  <div className="flex justify-center mt-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation - Fixed height, no scroll */}
      <div className="flex-shrink-0 py-6">
        <div
          className={
            sidebarCollapsed
              ? "flex flex-col items-center space-y-2 px-2"
              : "px-5 space-y-2"
          }
        >
          <Navigation />
        </div>
      </div>

      {/* Enhanced Ads Section - No overflow */}
      <div className="flex-1 min-h-0 border-t border-green-600/30 bg-green-700/20 backdrop-blur-sm transition-all duration-300 overflow-hidden">
        {!sidebarCollapsed ? (
          <div className="h-full p-5 flex flex-col">
            {/* Ad Header */}
            <div className="flex-shrink-0 flex items-center justify-between mb-4">
              <h3 className="text-white text-sm font-semibold tracking-wide">
                Featured
              </h3>
              <div className="flex space-x-1">
                {ads.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAd(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentAd ? "bg-white shadow-lg" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Ad Content - Properly contained */}
            <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
              <div
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-lg h-full flex flex-col cursor-pointer transform transition-transform duration-200 hover:scale-[1.02] overflow-hidden"
                onClick={() => openAdModal(ads[currentAd])}
              >
                <div className="space-y-4 h-full flex flex-col overflow-hidden">
                  {/* Ad Image with proper sizing */}
                  <div className="flex-shrink-0 w-full h-40 bg-gradient-to-br from-white/10 to-white/5 rounded-xl overflow-hidden border border-white/10 relative">
                    {!imagesLoaded[currentAd] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
                      </div>
                    )}
                    <Image
                      src={ads[currentAd].image}
                      alt={ads[currentAd].title}
                      width={300}
                      height={160}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        imagesLoaded[currentAd] ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => handleImageLoad(currentAd)}
                    />
                  </div>

                  {/* Ad Text with proper overflow handling */}
                  <div className="flex-1 min-h-0 space-y-3 overflow-hidden">
                    <h4 className="text-white font-semibold text-sm line-clamp-2 drop-shadow-sm leading-tight">
                      {ads[currentAd].title}
                    </h4>
                    <p className="text-green-100 text-xs line-clamp-3 leading-relaxed overflow-hidden">
                      {ads[currentAd].description}
                    </p>
                  </div>

                  {/* Removed CTA Button as requested */}
                </div>
              </div>
            </div>

            {/* Ad Footer */}
            <div className="flex-shrink-0 flex items-center justify-between text-xs mt-3">
              <span className="text-green-100/80">Sponsored</span>
              <span className="text-green-100/60 text-xs">Tap for details</span>
            </div>
          </div>
        ) : (
          // Collapsed Ads - Minimal and clean
          <div className="h-full flex flex-col items-center justify-center p-3">
            <div className="flex flex-col items-center space-y-3">
              <div
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-lg cursor-pointer"
                onClick={() => openAdModal(ads[currentAd])}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center">
                  <span className="text-sm text-white">📱</span>
                </div>
              </div>
              <div className="flex space-x-1">
                {ads.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      index === currentAd ? "bg-white shadow-md" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Modal for Ad Details */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm transition-all duration-300"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative">
              {selectedAd && (
                <Image
                  src={selectedAd.image}
                  alt={selectedAd.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              )}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
              {selectedAd && (
                <>
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedAd.title}
                  </h3>

                  <div className="space-y-3">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {selectedAd.fullDescription}
                    </p>

                    {/* Photographer Attribution */}
                    <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">Photo by:</span>
                        <a
                          href={selectedAd.photographerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 font-medium"
                        >
                          {selectedAd.photographer}
                        </a>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Source:</span>
                        <span className="text-gray-700">Unsplash</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <button
                      onClick={closeModal}
                      className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium"
                    >
                      Close
                    </button>
                    <button className="flex-1 py-3 px-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl">
                      Learn More
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
