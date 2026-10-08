"use client";

import React, { Suspense, useEffect, useState } from "react";
import {
  Loader2,
  MailX,
  CheckCircle2,
  AlertCircle,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { bebasNeue, poppins } from "@/app/home/doza_center/constant";

type Status =
  | "loading"
  | "confirm"
  | "submitting"
  | "success"
  | "error"
  | "already";

function UnsubscribeInner() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("u") ?? "";

  const [status, setStatus] = useState<Status>("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [reason, setReason] = useState("");

  // Load current status on mount
  useEffect(() => {
    if (!userId) {
      setErrorMessage("This unsubscribe link is missing a user id.");
      setStatus("error");
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `/api/unsubscribe?u=${encodeURIComponent(userId)}`,
        );
        const json = await res.json();
        if (cancelled) return;

        if (!res.ok || !json.success) {
          setErrorMessage(json?.error || "We couldn't find your account.");
          setStatus("error");
          return;
        }

        if (json.data.marketing === false) {
          setStatus("already");
        } else {
          setStatus("confirm");
        }
      } catch {
        if (cancelled) return;
        setErrorMessage("Network error. Please try again.");
        setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  const handleUnsubscribe = async () => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, reason }),
      });
      const json = await res.json();

      if (!res.ok || !json.success) {
        setErrorMessage(json?.error || "Failed to unsubscribe.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 ${poppins.className}`}
      style={{
        background:
          "radial-gradient(1400px 700px at 50% -10%, #d1fae5 0%, #ecfdf5 30%, #f6faf8 70%, #f8fafc 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-emerald-900/5 border border-emerald-100/70"
      >
        {/* Loading */}
        {status === "loading" && (
          <div className="text-center py-8">
            <Loader2 className="w-8 h-8 text-emerald-600 animate-spin mx-auto" />
            <p className="mt-4 text-sm text-slate-500">
              Checking your preferences…
            </p>
          </div>
        )}

        {/* Confirm */}
        {status === "confirm" && (
          <>
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-100">
              <MailX className="text-emerald-600 w-8 h-8" />
            </div>
            <h1
              className={`text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-3 ${bebasNeue.className}`}
            >
              UNSUBSCRIBE FROM EMAILS
            </h1>
            <p className="text-center text-sm text-slate-500 mb-6 leading-relaxed">
              We're sorry to see you go. You will no longer receive product
              updates, tips, or wellness emails from Doza Medic.
            </p>

            <div className="bg-emerald-50/60 border border-emerald-100/80 rounded-2xl p-4 mb-6">
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Heads up:</strong> We'll
                still send you essential account emails like password resets and
                appointment confirmations. Only marketing updates stop.
              </p>
            </div>

            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Reason (optional)
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Tell us why you're leaving…"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm resize-none mb-6"
            />

            <div className="flex flex-col gap-3">
              <button
                onClick={handleUnsubscribe}
                className={`w-full bg-slate-900 text-white py-4 rounded-xl font-bold tracking-wide hover:bg-emerald-600 transition-all active:scale-[0.98] ${bebasNeue.className}`}
              >
                YES, UNSUBSCRIBE ME
              </button>
              <Link
                href="/dashboard"
                className="w-full text-center py-3 rounded-xl text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors"
              >
                Never mind, keep me subscribed
              </Link>
            </div>
          </>
        )}

        {/* Submitting */}
        {status === "submitting" && (
          <div className="text-center py-8">
            <Loader2 className="w-8 h-8 text-emerald-600 animate-spin mx-auto" />
            <p className="mt-4 text-sm text-slate-500">
              Updating your preferences…
            </p>
          </div>
        )}

        {/* Success */}
        {status === "success" && (
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-emerald-600 w-8 h-8" />
            </div>
            <h1
              className={`text-3xl sm:text-4xl font-bold text-slate-900 mb-3 ${bebasNeue.className}`}
            >
              YOU'RE UNSUBSCRIBED
            </h1>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
              We've removed you from our marketing list. You won't hear from us
              unless it's something important about your account.
            </p>
            <Link
              href="/dashboard"
              className={`inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:underline ${poppins.className}`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to dashboard
            </Link>
          </div>
        )}

        {/* Already unsubscribed */}
        {status === "already" && (
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-slate-500 w-8 h-8" />
            </div>
            <h1
              className={`text-3xl sm:text-4xl font-bold text-slate-900 mb-3 ${bebasNeue.className}`}
            >
              ALREADY UNSUBSCRIBED
            </h1>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
              You're already off our marketing list. No action needed.
            </p>
            <Link
              href="/dashboard"
              className={`inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:underline ${poppins.className}`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to dashboard
            </Link>
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="text-rose-500 w-8 h-8" />
            </div>
            <h1
              className={`text-3xl sm:text-4xl font-bold text-slate-900 mb-3 ${bebasNeue.className}`}
            >
              SOMETHING WENT WRONG
            </h1>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
              {errorMessage ||
                "We couldn't process your request. Please try again."}
            </p>
            <Link
              href="/"
              className={`inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:underline ${poppins.className}`}
            >
              <ArrowLeft className="w-4 h-4" />
              Go home
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
        </div>
      }
    >
      <UnsubscribeInner />
    </Suspense>
  );
}
