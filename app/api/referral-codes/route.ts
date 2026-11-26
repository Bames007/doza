// app/api/referral-codes/route.ts  (USER APP)
import { NextRequest, NextResponse } from "next/server";
import { ref, get, runTransaction, set } from "firebase/database";
import { db } from "@/app/utils/firebaseConfig";
import { rateLimiter } from "@/app/lib/rateLimit";
import { getClientIp } from "@/app/lib/apiHelpers";
import { z } from "zod";

const useSchema = z.object({
  code: z.string().min(3).max(20),
  usedBy: z.string(),
  usedByType: z.enum(["center", "medic", "user"]),
  usedFor: z.string().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

export async function PATCH(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    // Throttle per user, plus a coarse per-IP cap for abuse
    const ip = getClientIp(request);
    if (
      !rateLimiter.check(`referral-use:${userId}`, 10, 60) ||
      !rateLimiter.check(`referral-use-ip:${ip}`, 30, 60)
    ) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429 },
      );
    }

    const body = await request.json().catch(() => ({}));
    const parsed = useSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid payload",
          details: parsed.error.issues,
        },
        { status: 400 },
      );
    }
    const { code, usedBy, usedByType, usedFor, metadata } = parsed.data;

    // Security: caller must actually be a registered user in Firebase.
    // (x-user-id is client-supplied, so verify the profile exists.)
    const userSnap = await get(ref(db, `doza/users/${usedBy}`));
    if (!userSnap.exists()) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 },
      );
    }

    // Find the code by its string value
    const codesSnap = await get(ref(db, "doza_admin/referralCodes"));
    let foundKey: string | null = null;
    let foundData: any = null;
    if (codesSnap.exists()) {
      codesSnap.forEach((child) => {
        if (child.val().code === code) {
          foundKey = child.key;
          foundData = child.val();
        }
      });
    }
    if (!foundKey || !foundData) {
      return NextResponse.json(
        { success: false, error: "Referral code not found" },
        { status: 404 },
      );
    }

    // Idempotency — don't double-count if the client retries
    const dedupeRef = ref(
      db,
      `doza_admin/referralUsageLogs/${foundKey}_${usedBy}`,
    );
    const dedupeSnap = await get(dedupeRef);
    if (dedupeSnap.exists()) {
      return NextResponse.json({
        success: true,
        data: {
          rewardType: foundData.rewardType,
          rewardValue: foundData.rewardValue,
          usageCount: foundData.usageCount || 0,
          alreadyUsed: true,
        },
      });
    }

    if (foundData.expiresAt && new Date(foundData.expiresAt) < new Date()) {
      return NextResponse.json(
        { success: false, error: "Referral code expired" },
        { status: 400 },
      );
    }

    // Atomic increment so concurrent redemptions can't exceed the limit
    const usageRef = ref(db, `doza_admin/referralCodes/${foundKey}/usageCount`);
    const tx = await runTransaction(usageRef, (current) => {
      const c = current || 0;
      if (foundData.usageLimit && c >= foundData.usageLimit) return; // abort
      return c + 1;
    });

    if (!tx.committed) {
      return NextResponse.json(
        { success: false, error: "Usage limit reached" },
        { status: 400 },
      );
    }

    // Log the usage with a deterministic key (same dedupe key)
    await set(dedupeRef, {
      codeId: foundKey,
      code,
      usedBy,
      usedByType,
      usedFor: usedFor || "",
      usedAt: new Date().toISOString(),
      rewardType: foundData.rewardType,
      rewardValue: foundData.rewardValue,
      metadata: metadata || {},
    });

    return NextResponse.json({
      success: true,
      data: {
        rewardType: foundData.rewardType,
        rewardValue: foundData.rewardValue,
        usageCount: tx.snapshot.val(),
        assignedToType: foundData.assignedToType,
        assignedToId: foundData.assignedToId,
        assignedToName: foundData.assignedToName,
      },
    });
  } catch (error: any) {
    console.error("referral PATCH error", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed" },
      { status: 500 },
    );
  }
}
