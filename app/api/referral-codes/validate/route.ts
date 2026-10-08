import { NextRequest, NextResponse } from "next/server";
import { ref, get } from "firebase/database";
import { db } from "@/app/utils/firebaseConfig";
import { rateLimiter } from "@/app/lib/rateLimit";
import { getClientIp } from "@/app/lib/apiHelpers";

// POST /api/referral-codes/validate  { code }
// Public (no auth) — used at signup to preview a referral code.
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (!rateLimiter.check(`referral-validate:${ip}`, 20, 60)) {
      return NextResponse.json(
        { success: false, error: "Too many requests, slow down." },
        { status: 429 },
      );
    }

    const body = await request.json().catch(() => ({}));
    const code = String(body?.code ?? "")
      .trim()
      .toUpperCase();
    if (!code) {
      return NextResponse.json(
        { success: false, error: "Code is required" },
        { status: 400 },
      );
    }

    const refCodes = ref(db, "doza_admin/referralCodes");
    const snapshot = await get(refCodes);

    let found: any = null;
    if (snapshot.exists()) {
      snapshot.forEach((child) => {
        const v = child.val();
        if (v.code === code) found = { id: child.key, ...v };
      });
    }

    if (!found) {
      return NextResponse.json(
        { success: false, error: "Referral code not found" },
        { status: 404 },
      );
    }
    if (found.expiresAt && new Date(found.expiresAt) < new Date()) {
      return NextResponse.json(
        { success: false, error: "Referral code has expired" },
        { status: 400 },
      );
    }
    const usageCount = found.usageCount || 0;
    if (found.usageLimit && usageCount >= found.usageLimit) {
      return NextResponse.json(
        { success: false, error: "Referral code usage limit reached" },
        { status: 400 },
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        id: found.id,
        code: found.code,
        rewardType: found.rewardType,
        rewardValue: found.rewardValue,
        description: found.description || "",
        assignedToType: found.assignedToType,
        assignedToId: found.assignedToId,
        assignedToName: found.assignedToName || "",
        usageCount,
        usageLimit: found.usageLimit ?? null,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Validation failed" },
      { status: 500 },
    );
  }
}
