// app/api/email/send-medic-welcome/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ref, get, set } from "firebase/database";
import { db } from "@/app/utils/firebaseConfig";
import { sendMedicWelcomeEmail } from "@/app/lib/email/send";
import { rateLimiter } from "@/app/lib/rateLimit";
import { getClientIp } from "@/app/lib/apiHelpers";

// FIX: verify the caller's Firebase ID token via the Identity Toolkit REST
// API. This avoids pulling in firebase-admin and uses the public API key that
// the client already ships with. It rejects tampered/expired tokens.
async function verifyIdToken(
  idToken: string,
): Promise<{ uid: string; email: string } | null> {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!apiKey) {
    console.error("NEXT_PUBLIC_FIREBASE_API_KEY is not set");
    return null;
  }

  const res = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    },
  );

  if (!res.ok) return null;

  const data = await res.json();
  const user = data?.users?.[0];
  if (!user?.localId) return null;

  return { uid: user.localId as string, email: user.email as string };
}

export async function POST(request: NextRequest) {
  try {
    // 1. Rate limit before doing anything expensive.
    const ip = getClientIp(request);
    if (!rateLimiter.check(`medic-welcome:${ip}`, 10, 60)) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429 },
      );
    }

    // 2. Authenticate the caller.
    const authHeader = request.headers.get("authorization") || "";
    const idToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
    if (!idToken) {
      return NextResponse.json(
        { success: false, error: "Missing authorization" },
        { status: 401 },
      );
    }

    const verified = await verifyIdToken(idToken);
    if (!verified) {
      return NextResponse.json(
        { success: false, error: "Invalid or expired token" },
        { status: 401 },
      );
    }

    const { uid, email } = verified;

    // 3. Confirm the medic record exists. Prevents writing to arbitrary keys.
    const medicSnap = await get(ref(db, `doza_medics/${uid}`));
    if (!medicSnap.exists()) {
      return NextResponse.json(
        { success: false, error: "Medic not found" },
        { status: 404 },
      );
    }

    const medic = medicSnap.val();
    const name = (medic?.personalInfo?.firstName as string) || "";

    // 4. Respect opt-outs. Check both the per-medic record and the shared
    //    email preferences map (the old code only checked the latter, which
    //    medics never populate).
    const prefSnap = await get(ref(db, `doza/emailPreferences/${uid}`));
    const prefs = prefSnap.exists() ? prefSnap.val() : null;
    if (medic?.emailOptOut === true || prefs?.marketing === false) {
      return NextResponse.json({
        success: true,
        message: "User opted out — skipped",
      });
    }

    // 5. Send.
    await sendMedicWelcomeEmail({ to: email, name, userId: uid });

    // 6. Record the send on the medic's own record.
    await set(
      ref(db, `doza_medics/${uid}/medicWelcomeEmailSentAt`),
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
