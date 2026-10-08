// app/api/unsubscribe/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ref, get, set } from "firebase/database";
import { db } from "@/app/utils/firebaseConfig";
import { rateLimiter } from "@/app/lib/rateLimit";
import { getClientIp } from "@/app/lib/apiHelpers";

// GET /api/unsubscribe?u=<userId>  → current status
export async function GET(request: NextRequest) {
  try {
    const userId = new URL(request.url).searchParams.get("u");
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Missing user id" },
        { status: 400 },
      );
    }

    const snap = await get(ref(db, `doza/emailPreferences/${userId}`));
    const prefs = snap.exists() ? snap.val() : null;

    return NextResponse.json({
      success: true,
      data: {
        userId,
        marketing: prefs?.marketing !== false, // default: subscribed
        updatedAt: prefs?.updatedAt ?? null,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to load status" },
      { status: 500 },
    );
  }
}

// POST /api/unsubscribe  { userId, reason? }
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (!rateLimiter.check(`unsubscribe:${ip}`, 10, 60)) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429 },
      );
    }

    const { userId, reason } = await request.json().catch(() => ({}));
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Missing user id" },
        { status: 400 },
      );
    }

    // Make sure the user actually exists, prevents junk records
    const userSnap = await get(ref(db, `doza/users/${userId}`));
    if (!userSnap.exists()) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 },
      );
    }

    await set(ref(db, `doza/emailPreferences/${userId}`), {
      marketing: false,
      reason: typeof reason === "string" ? reason.slice(0, 500) : "",
      updatedAt: new Date().toISOString(),
      ip,
    });

    return NextResponse.json({
      success: true,
      message: "You have been unsubscribed",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to unsubscribe" },
      { status: 500 },
    );
  }
}
