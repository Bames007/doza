import React from "react";
import {
  DollarSign,
  Clock,
  MapPin,
  Languages,
  Home,
  Video,
  User,
} from "lucide-react";
import { MedicRegistrationData } from "../type";

interface PracticeInfoProps {
  formData: MedicRegistrationData;
  updateFormData: (updates: Partial<MedicRegistrationData>) => void;
  onBack: () => void;
  onNext: () => void;
  getLocationFromMap: () => void;
}

const PracticeInfo: React.FC<PracticeInfoProps> = ({
  formData,
  updateFormData,
  onBack,
  onNext,
  getLocationFromMap,
}) => {
  const commonLanguages = [
    "English",
    "Yoruba",
    "Hausa",
    "Igbo",
    "Ibibio",
    "Arabic",
    "Hindi",
    "Portuguese",
  ];

  const toggleLanguage = (language: string) => {
    const currentLanguages = formData.practiceInfo.languages;
    const updatedLanguages = currentLanguages.includes(language)
      ? currentLanguages.filter((l) => l !== language)
      : [...currentLanguages, language];

    updateFormData({
      practiceInfo: {
        ...formData.practiceInfo,
        languages: updatedLanguages,
      },
    });
  };

  const toggleConsultationType = (
    type: keyof typeof formData.practiceInfo.consultationTypes,
  ) => {
    updateFormData({
      practiceInfo: {
        ...formData.practiceInfo,
        consultationTypes: {
          ...formData.practiceInfo.consultationTypes,
          [type]: !formData.practiceInfo.consultationTypes[type],
        },
      },
    });
  };

  const toggleDay = (day: string) => {
    const currentDays = formData.practiceInfo.availability.days;
    const updatedDays = currentDays.includes(day)
      ? currentDays.filter((d) => d !== day)
      : [...currentDays, day];

    updateFormData({
      practiceInfo: {
        ...formData.practiceInfo,
        availability: {
          ...formData.practiceInfo.availability,
          days: updatedDays,
        },
      },
    });
  };

  const isFormValid =
    formData.practiceInfo.hourlyRate > 0 &&
    formData.location.address.trim() !== "" &&
    formData.location.city.trim() !== "" &&
    formData.location.state.trim() !== "" &&
    formData.location.country.trim() !== "" &&
    Object.values(formData.practiceInfo.consultationTypes).some(
      (value) => value,
    ) &&
    formData.practiceInfo.availability.days.length > 0;

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
      <div className="text-center mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <DollarSign className="text-purple-600" size={24} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
          Practice & Availability
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Set up your practice details and availability
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {/* Consultation Types */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Consultation Types *
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label
              className={`flex flex-col items-center p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all ${
                formData.practiceInfo.consultationTypes.inPerson
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-gray-50 hover:border-blue-400"
              }`}
            >
              <User size={20} className="mb-1 sm:mb-2 text-gray-600" />
              <span className="font-medium text-gray-700 text-sm sm:text-base">
                In-Person
              </span>
              <input
                type="checkbox"
                checked={formData.practiceInfo.consultationTypes.inPerson}
                onChange={() => toggleConsultationType("inPerson")}
                className="hidden"
              />
            </label>

            <label
              className={`flex flex-col items-center p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all ${
                formData.practiceInfo.consultationTypes.online
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-gray-50 hover:border-blue-400"
              }`}
            >
              <Video size={20} className="mb-1 sm:mb-2 text-gray-600" />
              <span className="font-medium text-gray-700 text-sm sm:text-base">
                Online
              </span>
              <input
                type="checkbox"
                checked={formData.practiceInfo.consultationTypes.online}
                onChange={() => toggleConsultationType("online")}
                className="hidden"
              />
            </label>

            <label
              className={`flex flex-col items-center p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all ${
                formData.practiceInfo.consultationTypes.homeVisit
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-gray-50 hover:border-blue-400"
              }`}
            >
              <Home size={20} className="mb-1 sm:mb-2 text-gray-600" />
              <span className="font-medium text-gray-700 text-sm sm:text-base">
                Home Visit
              </span>
              <input
                type="checkbox"
                checked={formData.practiceInfo.consultationTypes.homeVisit}
                onChange={() => toggleConsultationType("homeVisit")}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Hourly Rate */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Consultation Rate *
          </h3>
          <div className="relative max-w-xs">
            <DollarSign
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="number"
              min="0"
              step="5"
              value={formData.practiceInfo.hourlyRate}
              onChange={(e) =>
                updateFormData({
                  practiceInfo: {
                    ...formData.practiceInfo,
                    hourlyRate: parseInt(e.target.value) || 0,
                  },
                })
              }
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
              placeholder="Hourly rate in USD"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
              / hr
            </span>
          </div>
        </div>

        {/* Availability */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Availability *
          </h3>

          {/* Days */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-sm sm:text-base">
              Available Days
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday",
                "sunday",
              ].map((day) => (
                <label
                  key={day}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border cursor-pointer transition-all text-xs sm:text-sm ${
                    formData.practiceInfo.availability.days.includes(day)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-100 text-gray-700 border-gray-300 hover:border-blue-400"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.practiceInfo.availability.days.includes(
                      day,
                    )}
                    onChange={() => toggleDay(day)}
                    className="hidden"
                  />
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
                Start Time
              </label>
              <div className="relative">
                <Clock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="time"
                  value={formData.practiceInfo.availability.hours.start}
                  onChange={(e) =>
                    updateFormData({
                      practiceInfo: {
                        ...formData.practiceInfo,
                        availability: {
                          ...formData.practiceInfo.availability,
                          hours: {
                            ...formData.practiceInfo.availability.hours,
                            start: e.target.value,
                          },
                        },
                      },
                    })
                  }
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
                End Time
              </label>
              <div className="relative">
                <Clock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="time"
                  value={formData.practiceInfo.availability.hours.end}
                  onChange={(e) =>
                    updateFormData({
                      practiceInfo: {
                        ...formData.practiceInfo,
                        availability: {
                          ...formData.practiceInfo.availability,
                          hours: {
                            ...formData.practiceInfo.availability.hours,
                            end: e.target.value,
                          },
                        },
                      },
                    })
                  }
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
                />
              </div>
            </div>
          </div>

          {/* Emergency Availability */}
          <label className="flex items-center gap-2 mt-3 sm:mt-4">
            <input
              type="checkbox"
              checked={formData.practiceInfo.availability.emergencyAvailable}
              onChange={(e) =>
                updateFormData({
                  practiceInfo: {
                    ...formData.practiceInfo,
                    availability: {
                      ...formData.practiceInfo.availability,
                      emergencyAvailable: e.target.checked,
                    },
                  },
                })
              }
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-600"
            />
            <span className="text-gray-700 text-sm sm:text-base">
              Available for emergency consultations
            </span>
          </label>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Languages Spoken
          </h3>
          <div className="flex flex-wrap gap-2">
            {commonLanguages.map((language) => (
              <label
                key={language}
                className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border cursor-pointer transition-all text-xs sm:text-sm ${
                  formData.practiceInfo.languages.includes(language)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:border-blue-400"
                }`}
              >
                <Languages size={14} />
                <input
                  type="checkbox"
                  checked={formData.practiceInfo.languages.includes(language)}
                  onChange={() => toggleLanguage(language)}
                  className="hidden"
                />
                {language}
              </label>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Practice Location *
          </h3>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
                Street Address
              </label>
              <div className="relative">
                <MapPin
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  value={formData.location.address}
                  onChange={(e) =>
                    updateFormData({
                      location: {
                        ...formData.location,
                        address: e.target.value,
                      },
                    })
                  }
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
                  placeholder="Enter your practice address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
                  City
                </label>
                <input
                  type="text"
                  value={formData.location.city}
                  onChange={(e) =>
                    updateFormData({
                      location: {
                        ...formData.location,
                        city: e.target.value,
                      },
                    })
                  }
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
                  State
                </label>
                <input
                  type="text"
                  value={formData.location.state}
                  onChange={(e) =>
                    updateFormData({
                      location: {
                        ...formData.location,
                        state: e.target.value,
                      },
                    })
                  }
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
                  placeholder="State"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
                  Country
                </label>
                <input
                  type="text"
                  value={formData.location.country}
                  onChange={(e) =>
                    updateFormData({
                      location: {
                        ...formData.location,
                        country: e.target.value,
                      },
                    })
                  }
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm sm:text-base"
                  placeholder="Country"
                />
              </div>
            </div>

            {/* Service Radius */}
            {formData.practiceInfo.consultationTypes.homeVisit && (
              <div>
                <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
                  Home Visit Service Radius (km)
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={formData.location.serviceRadius}
                  onChange={(e) =>
                    updateFormData({
                      location: {
                        ...formData.location,
                        serviceRadius: parseInt(e.target.value),
                      },
                    })
                  }
                  className="w-full"
                />
                <div className="text-center text-gray-600 mt-1 text-sm">
                  Up to {formData.location.serviceRadius} kilometers
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={getLocationFromMap}
              className="flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base"
            >
              <MapPin size={16} />
              Select location on map
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-6 sm:mt-8">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-xl text-sm sm:text-base text-gray-600 hover:bg-gray-50 transition-colors order-2 sm:order-1"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!isFormValid}
          className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors order-1 sm:order-2"
        >
          Continue to Documents
        </button>
      </div>
    </div>
  );
};

export default PracticeInfo;
