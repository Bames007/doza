// app/api/email/send-medic-welcome/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ref, get, set } from "firebase/database";
import { db } from "@/app/utils/firebaseConfig";
import { sendMedicWelcomeEmail } from "@/app/lib/email/send";
import { rateLimiter } from "@/app/lib/rateLimit";
import { getClientIp } from "@/app/lib/apiHelpers";

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (!rateLimiter.check(`medic-welcome:${ip}`, 10, 60)) {
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

    // Respect opt-outs
    const prefSnap = await get(ref(db, `doza/emailPreferences/${userId}`));
    const prefs = prefSnap.exists() ? prefSnap.val() : null;
    if (prefs?.marketing === false) {
      return NextResponse.json({
        success: true,
        message: "User opted out — skipped",
      });
    }

    await sendMedicWelcomeEmail({
      to: email,
      name: name || "",
      userId,
    });

    await set(
      ref(db, `doza_medics/${userId}/medicWelcomeEmailSentAt`),
      new Date().toISOString(),
    ).catch(() => null);

    return NextResponse.json({ success: true, message: "Medic welcome sent" });
  } catch (error: any) {
    console.error("medic-welcome error", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to send email" },
      { status: 500 },
    );
  }
}
