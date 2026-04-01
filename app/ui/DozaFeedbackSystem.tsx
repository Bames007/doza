// components/FeedbackModal.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  X,
  Camera,
  Send,
  User,
  Ghost,
  CheckCircle2,
  StopCircle,
  Star,
  Activity,
  Mail,
  Phone,
  Loader2,
} from "lucide-react";
import html2canvas from "html2canvas";
import { authPost } from "../utils/client-auth";
import { cn } from "@/app/utils/utils";
import { poppins } from "../home/doza_center/constant";

export default function FeedbackModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Removed useUser() hook since users aren't registered yet
  const [step, setStep] = useState(1);
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Manual contact info state
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const recognitionRef = useRef<any>(null);
  const finalTranscriptRef = useRef("");
  const isRecognitionStarted = useRef(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(true);

  // Speech recognition setup (unchanged)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSpeechSupported(false);
      return;
    }
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = "en-US";

    recognitionRef.current.onresult = (event: any) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscriptRef.current += transcript + " ";
        } else {
          interimTranscript += transcript;
        }
      }
      setFeedbackText(finalTranscriptRef.current + interimTranscript);
    };

    recognitionRef.current.onend = () => {
      if (isRecording && isOpen) {
        try {
          recognitionRef.current?.start();
        } catch (e) {
          setIsRecording(false);
        }
      }
    };
  }, [isOpen, isRecording]);

  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
    } else {
      finalTranscriptRef.current = feedbackText + (feedbackText ? " " : "");
      recognitionRef.current?.start();
      setIsRecording(true);
    }
  };

  const captureScreenshot = async () => {
    setIsCapturing(true);
    const modalElement = document.getElementById("doza-feedback-card");
    if (modalElement) modalElement.style.visibility = "hidden";

    try {
      await new Promise((r) => setTimeout(r, 100));
      const canvas = await html2canvas(document.body, {
        scale: 1,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });
      setScreenshot(canvas.toDataURL("image/png"));
    } catch (err) {
      setError("Could not capture screenshot.");
    } finally {
      if (modalElement) modalElement.style.visibility = "visible";
      setIsCapturing(false);
    }
  };

  const handleSubmit = async () => {
    // Validation for manual info
    if (!isAnonymous) {
      if (!contactInfo.name || !contactInfo.email) {
        setError("Please enter your name and email so we can reach out.");
        return;
      }
    }

    if (!feedbackText.trim() && rating === 0) {
      setError("Please provide a rating or feedback.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const payload = {
      rating,
      text: feedbackText,
      screenshot: screenshot || null,
      anonymous: isAnonymous,
      contact: isAnonymous
        ? null
        : {
            name: contactInfo.name,
            email: contactInfo.email,
            phone: contactInfo.phone,
          },
      timestamp: new Date().toISOString(),
      source: "unregistered_landing_page", // Useful for your backend to know where it came from
    };

    try {
      // Using authPost even though unregistered - assuming your backend
      // allows /api/feedback without a JWT or handles it gracefully
      const result = await authPost("/api/feedback", payload);

      if (result.success) {
        setStep(3);
        // Clear text but keep contact info for the session convenience
        setFeedbackText("");
        setScreenshot(null);
      } else {
        setError(result.error || "Submission failed.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setRating(0);
    setFeedbackText("");
    setScreenshot(null);
    setError(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <motion.div
            id="doza-feedback-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={cn(
              "bg-white w-full max-w-[460px] rounded-[32px] shadow-2xl border border-slate-200 overflow-hidden",
              poppins.className,
            )}
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                  <img
                    src="/logo.png"
                    alt="Doza"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-[16px] font-black text-slate-900 uppercase italic leading-none">
                    DOZA
                  </h2>
                  <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-[0.2em] mt-1">
                    Your Personal Medical Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={resetAndClose}
                className="p-2 hover:bg-slate-50 rounded-full text-slate-400"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
              {step === 1 ? (
                <div className="text-center py-4 space-y-4">
                  <Activity size={44} className="text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold text-slate-900">
                    Help Us Build the Future
                  </h3>
                  <p className="text-slate-500 text-sm px-6">
                    Don&apos;t have an account yet? No problem. Your feedback
                    helps us improve the experience for everyone.
                  </p>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all"
                  >
                    Start Feedback
                  </button>
                </div>
              ) : step === 2 ? (
                <div className="space-y-4">
                  {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium">
                      {error}
                    </div>
                  )}

                  {/* Rating */}
                  <div className="flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        onClick={() => setRating(star)}
                        className={cn(
                          "w-8 h-8 cursor-pointer transition-colors",
                          star <= rating
                            ? "fill-emerald-500 text-emerald-500"
                            : "text-slate-300",
                        )}
                      />
                    ))}
                  </div>

                  {/* Manual Contact Form */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                        Contact Information
                      </label>
                      <button
                        onClick={() => setIsAnonymous(!isAnonymous)}
                        className="text-[11px] font-bold text-emerald-600 hover:underline"
                      >
                        {isAnonymous
                          ? "Switch to Public"
                          : "Submit Anonymously?"}
                      </button>
                    </div>

                    {!isAnonymous ? (
                      <div className="grid grid-cols-1 gap-2">
                        <div className="relative">
                          <User
                            className="absolute left-4 top-3.5 text-slate-400"
                            size={14}
                          />
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={contactInfo.name}
                            onChange={(e) =>
                              setContactInfo({
                                ...contactInfo,
                                name: e.target.value,
                              })
                            }
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 text-slate-500 border border-slate-200 rounded-xl text-sm focus:bg-white outline-none focus:border-emerald-500"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="relative">
                            <Mail
                              className="absolute left-4 top-3.5 text-slate-400"
                              size={14}
                            />
                            <input
                              type="email"
                              placeholder="Email Address"
                              value={contactInfo.email}
                              onChange={(e) =>
                                setContactInfo({
                                  ...contactInfo,
                                  email: e.target.value,
                                })
                              }
                              className="w-full pl-11 pr-4 py-3 text-slate-500 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white outline-none"
                            />
                          </div>
                          <div className="relative">
                            <Phone
                              className="absolute left-4 top-3.5 text-slate-400"
                              size={14}
                            />
                            <input
                              type="tel"
                              placeholder="Phone (Optional)"
                              value={contactInfo.phone}
                              onChange={(e) =>
                                setContactInfo({
                                  ...contactInfo,
                                  phone: e.target.value,
                                })
                              }
                              className="w-full pl-11 pr-4 py-3 text-slate-500 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 rounded-2xl bg-slate-50 border border-dashed border-slate-300 flex items-center gap-3">
                        <Ghost className="text-slate-400" />
                        <span className="text-xs font-medium text-slate-500">
                          You are submitting as a guest. No personal data will
                          be saved.
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Feedback Textarea */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 focus-within:bg-white focus-within:border-emerald-500 transition-all">
                    <textarea
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      placeholder="Tell us what you think about Doza..."
                      className="w-full bg-transparent border-none focus:ring-0 text-slate-900 text-sm font-medium min-h-[100px] resize-none"
                    />
                    <div className="flex justify-between items-center mt-2 pt-3 border-t border-slate-100">
                      <div className="flex gap-2">
                        {isSpeechSupported && (
                          <button
                            onClick={toggleRecording}
                            className={cn(
                              "p-2.5 rounded-xl transition-all flex items-center gap-2",
                              isRecording
                                ? "bg-red-500 text-white animate-pulse"
                                : "bg-white text-slate-500 border border-slate-100 shadow-sm",
                            )}
                          >
                            <Mic size={18} />
                            {isRecording && (
                              <span className="text-[10px] font-bold uppercase">
                                Recording...
                              </span>
                            )}
                          </button>
                        )}
                        <button
                          onClick={captureScreenshot}
                          disabled={isCapturing}
                          className={cn(
                            "p-2.5 rounded-xl shadow-sm bg-white border border-slate-100 text-slate-500",
                            screenshot &&
                              "text-emerald-600 border-emerald-200 bg-emerald-50",
                          )}
                        >
                          {isCapturing ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Camera size={18} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold uppercase tracking-widest text-sm shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        Send Feedback <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} className="text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Thank You!
                  </h3>
                  <p className="text-sm text-slate-500 px-6">
                    Your feedback has been sent. We appreciate you taking the
                    time to help us grow.
                  </p>
                  <button
                    onClick={resetAndClose}
                    className="px-10 py-3 bg-slate-900 text-white rounded-full font-bold text-xs uppercase tracking-widest"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
