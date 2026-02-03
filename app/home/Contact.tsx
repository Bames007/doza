"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  User,
  Building,
  Heart,
} from "lucide-react";
import { bebasNeue, poppins } from "./doza_center/constant";
import { useState } from "react";

const colors = {
  green: { primary: "#239C3E", light: "#4CAF50", dark: "#1B7930" },
  blue: { primary: "#1D4ED8", light: "#3B82F6", dark: "#1E40AF" },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    userType: "patient",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-green-100 text-green-800"
          >
            <MessageCircle size={16} />
            <span className={`text-sm font-medium ${poppins.className}`}>
              Get in Touch
            </span>
          </motion.div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 ${bebasNeue.className}`}
          >
            We're Here to
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Help You
            </span>
          </h1>

          <p
            className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed ${poppins.className}`}
          >
            Have questions about Doza? Need support with your account? Our team
            is here to help you get the most out of your healthcare experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <ContactInfo />

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      description: "24/7 medical emergency support",
      details: "+1 (555) 123-HEAL",
      color: "green",
      emergency: true,
    },
    {
      icon: Mail,
      title: "General Inquiries",
      description: "We reply within 2 hours",
      details: "care@doza.com",
      color: "blue",
      emergency: false,
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      description: "Meet us in person",
      details: "123 Healthcare Ave, Medical City",
      color: "green",
      emergency: false,
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're here when you need us",
      details: "Mon - Sun: 24/7 Available",
      color: "blue",
      emergency: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {contactMethods.map((method, index) => (
        <motion.div
          key={method.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
            method.emergency
              ? "border-red-200 bg-red-50 hover:border-red-300"
              : "border-slate-200 bg-white hover:border-green-200"
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                method.emergency
                  ? "bg-red-100 text-red-600"
                  : `bg-${method.color}-100 text-${method.color}-600`
              }`}
              style={
                method.emergency
                  ? {}
                  : {
                      backgroundColor: `${
                        colors[method.color as keyof typeof colors].primary
                      }15`,
                      color:
                        colors[method.color as keyof typeof colors].primary,
                    }
              }
            >
              <method.icon size={24} />
            </div>
            <div>
              <h3
                className={`font-bold text-slate-800 mb-1 ${bebasNeue.className}`}
              >
                {method.title}
                {method.emergency && (
                  <span className="ml-2 px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs">
                    Emergency
                  </span>
                )}
              </h3>
              <p className={`text-slate-600 mb-2 ${poppins.className}`}>
                {method.description}
              </p>
              <p
                className={`font-semibold ${
                  method.emergency ? "text-red-600" : "text-slate-800"
                } ${poppins.className}`}
              >
                {method.details}
              </p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Support Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white text-center"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className={`text-2xl font-bold mb-1 ${bebasNeue.className}`}>
              24/7
            </div>
            <div className="text-green-100 text-sm">Support Available</div>
          </div>
          <div>
            <div className={`text-2xl font-bold mb-1 ${bebasNeue.className}`}>
              98%
            </div>
            <div className="text-green-100 text-sm">Satisfaction Rate</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ContactForm({
  formData,
  onChange,
  onSubmit,
}: {
  formData: any;
  onChange: (e: any) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
          <Heart size={24} className="text-green-600" />
        </div>
        <div>
          <h2
            className={`text-2xl font-bold text-slate-800 ${bebasNeue.className}`}
          >
            Send us a Message
          </h2>
          <p className={`text-slate-600 ${poppins.className}`}>
            We'll get back to you as soon as possible
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {/* User Type Selection */}
        <div>
          <label
            className={`block text-sm font-semibold text-slate-700 mb-3 ${poppins.className}`}
          >
            I am a...
          </label>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "patient", label: "Patient", icon: User },
              { value: "medic", label: "Medical Professional", icon: Building },
            ].map((type) => (
              <label
                key={type.value}
                className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  formData.userType === type.value
                    ? "border-green-500 bg-green-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <input
                  type="radio"
                  name="userType"
                  value={type.value}
                  checked={formData.userType === type.value}
                  onChange={onChange}
                  className="sr-only"
                />
                <type.icon
                  size={20}
                  className={
                    formData.userType === type.value
                      ? "text-green-600"
                      : "text-slate-400"
                  }
                />
                <span
                  className={`ml-2 font-medium ${
                    formData.userType === type.value
                      ? "text-green-600"
                      : "text-slate-600"
                  } ${poppins.className}`}
                >
                  {type.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              className={`block text-sm font-semibold text-slate-700 mb-2 ${poppins.className}`}
            >
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              required
              className="w-full px-4 py-3 text-gray-700 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 outline-none"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label
              className={`block text-sm font-semibold text-slate-700 mb-2 ${poppins.className}`}
            >
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              required
              className="w-full px-4 py-3 text-gray-700 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 outline-none"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            className={`block text-sm font-semibold text-slate-700 mb-2 ${poppins.className}`}
          >
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={onChange}
            required
            className="w-full px-4 py-3 text-gray-700 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 outline-none"
            placeholder="What is this regarding?"
          />
        </div>

        {/* Message */}
        <div>
          <label
            className={`block text-sm font-semibold text-slate-700 mb-2 ${poppins.className}`}
          >
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={onChange}
            required
            rows={6}
            className="w-full px-4 py-3 text-gray-700 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 outline-none resize-none"
            placeholder="Please describe your inquiry in detail..."
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 rounded-xl font-semibold text-lg text-white transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-3"
          style={{ backgroundColor: colors.green.primary }}
        >
          <Send size={20} />
          Send Message
        </motion.button>

        {/* Privacy Note */}
        <p
          className={`text-center text-slate-500 text-sm ${poppins.className}`}
        >
          By contacting us, you agree to our Privacy Policy. We respect your
          data and never share it with third parties.
        </p>
      </form>
    </motion.div>
  );
}
