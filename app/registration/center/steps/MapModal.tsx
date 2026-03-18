"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, X, Navigation, CheckCircle2 } from "lucide-react";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";
import dynamic from "next/dynamic";

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false },
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false },
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

import L from "leaflet";
import { useMapEvents } from "react-leaflet";

// Icon Fix
if (typeof window !== "undefined") {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
}

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

const MapEvents: React.FC<{
  onMapClick: (lat: number, lng: number) => void;
}> = ({ onMapClick }) => {
  useMapEvents({
    click: (e) => onMapClick(e.latlng.lat, e.latlng.lng),
  });
  return null;
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

  const defaultCenter: [number, number] = [6.5244, 3.3792];

  useEffect(() => {
    if (isOpen) setIsMapLoaded(true);
  }, [isOpen]);

  const handleMapClick = async (lat: number, lng: number) => {
    setSelectedLocation({ lat, lng });
    const address = await reverseGeocode(lat, lng);
    setCurrentAddress(address);
  };

  const reverseGeocode = async (lat: number, lng: number): Promise<string> => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18`,
      );
      const data = await res.json();
      const address =
        data?.display_name || `Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`;
      setSearchQuery(address);
      return address;
    } catch {
      return "Unknown Location";
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=3`,
      );
      const data = await res.json();
      setSearchResults(data);
      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];
        const newLoc = { lat: parseFloat(lat), lng: parseFloat(lon) };
        setSelectedLocation(newLoc);
        setCurrentAddress(display_name);
        mapRef.current?.setView([newLoc.lat, newLoc.lng], 15);
      }
    } finally {
      setIsSearching(false);
    }
  };

  const handleConfirm = () => {
    if (selectedLocation) {
      onLocationSelect({
        ...selectedLocation,
        address: currentAddress || searchQuery,
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-[100] p-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200"
      >
        {/* Header - High Contrast */}
        <div className="p-4 flex items-center justify-between border-b border-slate-100">
          <h3
            className={`text-2xl font-bold text-slate-900 ${bebasNeue.className}`}
          >
            PIN LOCATION
          </h3>
          <button
            onClick={onClose}
            className="p-2 bg-slate-100 rounded-full text-slate-900 hover:bg-slate-200"
          >
            <X size={20} strokeWidth={3} />
          </button>
        </div>

        {/* Search - Tight Padding */}
        <div className="p-3 space-y-2">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search address or landmark..."
              className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-bold text-slate-900 placeholder:text-slate-500 outline-none focus:border-emerald-500"
            />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-900"
              size={18}
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase"
            >
              {isSearching ? "..." : "GO"}
            </button>
          </div>

          {/* Action Buttons for Mobile */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {}}
              className="flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase"
            >
              <Navigation size={14} /> My GPS
            </button>
            <button
              disabled={!selectedLocation}
              onClick={handleConfirm}
              className="flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase disabled:opacity-50"
            >
              <CheckCircle2 size={14} /> Confirm
            </button>
          </div>
        </div>

        {/* Map - Maximum Height */}
        <div className="flex-1 min-h-[300px] relative bg-slate-50 border-y border-slate-100">
          {isMapLoaded && (
            <MapContainer
              center={
                selectedLocation
                  ? [selectedLocation.lat, selectedLocation.lng]
                  : defaultCenter
              }
              zoom={13}
              style={{ height: "100%", width: "100%", zIndex: 1 }}
              ref={mapRef}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <MapEvents onMapClick={handleMapClick} />
              {selectedLocation && (
                <Marker
                  position={[selectedLocation.lat, selectedLocation.lng]}
                />
              )}
            </MapContainer>
          )}
        </div>

        {/* Address Display - High Visibility */}
        {selectedLocation && (
          <div className="p-4 bg-slate-900 text-white">
            <div className="flex items-start gap-3">
              <MapPin className="text-emerald-400 shrink-0 mt-1" size={16} />
              <div className="min-w-0">
                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                  Selected Address
                </p>
                <p className="text-xs font-bold leading-tight truncate-2-lines">
                  {currentAddress || searchQuery}
                </p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MapModal;
