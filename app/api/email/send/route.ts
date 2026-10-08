import { NextRequest, NextResponse } from "next/server";
import { ref, get, set } from "firebase/database";
import { db } from "@/app/utils/firebaseConfig";
import { sendWelcomeEmail } from "@/app/lib/email/send";
import { rateLimiter } from "@/app/lib/rateLimit";
import { getClientIp } from "@/app/lib/apiHelpers";

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (!rateLimiter.check(`email-send:${ip}`, 10, 60)) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429 },
      );
    }

    const { email, name, userId } = await request.json();
    if (!email || !userId) {
      return NextResponse.json(
        { success: false, error: "email and userId are required" },
        { status: 400 },
      );
    }

    // ── Opt-out check ───────────────────────────────────────
    const prefSnap = await get(ref(db, `doza/emailPreferences/${userId}`));
    const prefs = prefSnap.exists() ? prefSnap.val() : null;
    if (prefs?.marketing === false) {
      return NextResponse.json({
        success: true,
        message: "User opted out — welcome email skipped",
      });
    }

    // ── Send ────────────────────────────────────────────────
    await sendWelcomeEmail({
      to: email,
      name: name || "",
      userId,
    });

    // ── Record for later resend rules / audit ───────────────
    await set(
      ref(db, `doza/users/${userId}/welcomeEmailSentAt`),
      new Date().toISOString(),
    ).catch(() => null);

    return NextResponse.json({ success: true, message: "Welcome email sent" });
  } catch (error: any) {
    console.error("email/send error", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to send email" },
      { status: 500 },
    );
  }
}
