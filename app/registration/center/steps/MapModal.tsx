"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, X, Navigation } from "lucide-react";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";

// Dynamically import Leaflet components to avoid SSR issues
import dynamic from "next/dynamic";
import { useMapEvents } from "react-leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Fix for Leaflet marker icons in Next.js
import L from "leaflet";

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationSelect: (location: {
    address: string;
    lat: number;
    lng: number;
  }) => void;
  initialLocation?: { lat: number; lng: number } | null;
}

// Map events component for handling clicks
const MapEvents: React.FC<{
  onMapClick: (lat: number, lng: number) => void;
}> = ({ onMapClick }) => {
  const MapEventsComponent = () => {
    useMapEvents({
      click: (e) => {
        onMapClick(e.latlng.lat, e.latlng.lng);
      },
    });
    return null;
  };

  return <MapEventsComponent />;
};

const MapModal: React.FC<MapModalProps> = ({
  isOpen,
  onClose,
  onLocationSelect,
  initialLocation,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(initialLocation || null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [currentAddress, setCurrentAddress] = useState("");
  const mapRef = useRef<any>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Default center (Lagos, Nigeria)
  const defaultCenter: [number, number] = [6.5244, 3.3792];

  useEffect(() => {
    if (isOpen) {
      setIsMapLoaded(true);
      // Focus search input when modal opens
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const handleMapClick = async (lat: number, lng: number) => {
    const newLocation = { lat, lng };
    setSelectedLocation(newLocation);
    const address = await reverseGeocode(lat, lng);
    setCurrentAddress(address);
  };

  const reverseGeocode = async (lat: number, lng: number): Promise<string> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
      );
      const data = await response.json();

      if (data && data.display_name) {
        const address = data.display_name;
        setSearchQuery(address);
        return address;
      }
      const fallbackAddress = `Location at ${lat.toFixed(6)}, ${lng.toFixed(
        6
      )}`;
      setSearchQuery(fallbackAddress);
      return fallbackAddress;
    } catch (error) {
      console.error("Reverse geocoding error:", error);
      const fallbackAddress = `Location at ${lat.toFixed(6)}, ${lng.toFixed(
        6
      )}`;
      setSearchQuery(fallbackAddress);
      return fallbackAddress;
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setSearchResults([]);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchQuery
        )}&limit=5`
      );
      const data = await response.json();

      setSearchResults(data);

      if (data && data.length > 0) {
        const firstResult = data[0];
        const lat = parseFloat(firstResult.lat);
        const lng = parseFloat(firstResult.lon);

        const newLocation = { lat, lng };
        setSelectedLocation(newLocation);
        setCurrentAddress(firstResult.display_name);

        // Center map on the result
        if (mapRef.current) {
          mapRef.current.setView([lat, lng], 15);
        }
      }
    } catch (error) {
      console.error("Search error:", error);
      alert("Error searching for location. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleResultClick = (result: any) => {
    const lat = parseFloat(result.lat);
    const lng = parseFloat(result.lon);

    const newLocation = { lat, lng };
    setSelectedLocation(newLocation);
    setSearchQuery(result.display_name);
    setCurrentAddress(result.display_name);
    setSearchResults([]);

    // Center map on the result
    if (mapRef.current) {
      mapRef.current.setView([lat, lng], 15);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const newLocation = { lat: latitude, lng: longitude };
          setSelectedLocation(newLocation);

          // Center map on current location
          if (mapRef.current) {
            mapRef.current.setView([latitude, longitude], 15);
          }

          // Get address for current location
          const address = await reverseGeocode(latitude, longitude);
          setCurrentAddress(address);
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert(
            "Unable to get your current location. Please allow location access or search for a location."
          );
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleConfirmLocation = async () => {
    if (selectedLocation) {
      try {
        // Use current address if available, otherwise get new one
        const address =
          currentAddress ||
          (await reverseGeocode(selectedLocation.lat, selectedLocation.lng));
        onLocationSelect({ ...selectedLocation, address });
      } catch (error) {
        console.error("Geocoding error:", error);
        // Fallback address
        const address = `Location at ${selectedLocation.lat.toFixed(
          6
        )}, ${selectedLocation.lng.toFixed(6)}`;
        onLocationSelect({ ...selectedLocation, address });
      }
    }
    onClose();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-lg flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-purple-900/5 to-blue-900/5 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-black/5 backdrop-blur-2xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col border border-white/20 shadow-2xl"
      >
        {/* Header with glass effect */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/20">
          <h3
            className={`text-xl sm:text-2xl font-bold text-gray-900 ${bebasNeue.className}`}
          >
            Select Location
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X size={20} className="text-gray-600 hover:text-gray-800" />
          </button>
        </div>

        {/* Search Bar - Improved for mobile */}
        <div className="flex flex-col gap-3 mb-4">
          <div className="relative">
            <div className="relative flex items-center">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"
                size={20}
              />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search for address, place, or landmark..."
                className="w-full pl-10 pr-20 text-gray-700 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all duration-300 text-sm sm:text-base"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                >
                  <X size={16} />
                </button>
              )}
              <button
                onClick={handleSearch}
                disabled={isSearching || !searchQuery.trim()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base min-h-[36px]"
              >
                {isSearching ? "..." : "Search"}
              </button>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="absolute z-20 w-full mt-1 bg-white rounded-xl border border-gray-200 shadow-lg max-h-48 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    onClick={() => handleResultClick(result)}
                    className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                  >
                    <div className="font-medium text-gray-900 text-sm">
                      {result.display_name}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={getCurrentLocation}
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-blue-600/90 backdrop-blur-sm text-white rounded-xl hover:bg-blue-700/90 transition-all duration-300 text-sm whitespace-nowrap shadow-lg hover:shadow-blue-500/25 hover:scale-105 border border-blue-500/30 flex-1 min-h-[44px]"
            >
              <Navigation size={16} />
              <span className="hidden sm:inline">Use My Location</span>
              <span className="sm:hidden">My Location</span>
            </button>

            {selectedLocation && (
              <button
                onClick={handleConfirmLocation}
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-emerald-600/90 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-emerald-700/90 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 hover:scale-105 border border-emerald-500/30 flex-1 min-h-[44px] text-sm"
              >
                <MapPin size={16} />
                <span className="hidden sm:inline">Confirm Location</span>
                <span className="sm:hidden">Confirm</span>
              </button>
            )}
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1 relative rounded-2xl border-2 border-white/30 overflow-hidden min-h-[300px] sm:min-h-[400px] bg-white/50 backdrop-blur-sm shadow-inner">
          {/* Leaflet Map Container - Only render when map is loaded */}
          {isMapLoaded && (
            <MapContainer
              center={
                selectedLocation
                  ? [selectedLocation.lat, selectedLocation.lng]
                  : defaultCenter
              }
              zoom={selectedLocation ? 15 : 12}
              style={{ height: "100%", width: "100%" }}
              ref={mapRef}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Map event handler */}
              <MapEvents onMapClick={handleMapClick} />

              {/* Marker for selected location */}
              {selectedLocation && (
                <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
                  <Popup>
                    <div className="text-sm">
                      <strong>Selected Location</strong> <br />
                      {selectedLocation.lat.toFixed(6)},{" "}
                      {selectedLocation.lng.toFixed(6)}
                      {currentAddress && (
                        <>
                          <br />
                          <em>{currentAddress}</em>
                        </>
                      )}
                    </div>
                  </Popup>
                </Marker>
              )}
            </MapContainer>
          )}
        </div>

        {/* Selected Location Info */}
        {selectedLocation && (
          <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-blue-50/80 backdrop-blur-sm rounded-xl border border-blue-200/50 shadow-lg">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600 flex-shrink-0" />
                <p
                  className={`text-sm font-semibold text-blue-800 ${poppins.className}`}
                >
                  Selected Location
                </p>
              </div>
              <div className="text-xs sm:text-sm text-blue-700">
                {selectedLocation.lat.toFixed(6)},{" "}
                {selectedLocation.lng.toFixed(6)}
              </div>
              {currentAddress && (
                <p
                  className="text-xs sm:text-sm text-blue-600 truncate"
                  title={currentAddress}
                >
                  {currentAddress}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Instructions for mobile */}
        <div className="mt-3 text-center">
          <p className="text-xs text-gray-500">
            📍 Tap on the map to select a location or search above
          </p>
        </div>

        {/* Bottom Buttons - Only cancel if no location selected */}
        {!selectedLocation && (
          <div className="flex gap-3 mt-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 sm:px-6 py-3 border-2 border-gray-300/80 backdrop-blur-sm rounded-xl text-gray-600 hover:bg-gray-50/80 hover:border-gray-400/80 transition-all duration-300 font-medium text-sm sm:text-base min-h-[44px]"
            >
              Cancel
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MapModal;
