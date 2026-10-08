import { NextRequest, NextResponse } from "next/server";
import { sendCenterConfirmationEmail } from "@/app/lib/email/send";
import { rateLimiter } from "@/app/lib/rateLimit";
import { getClientIp } from "@/app/lib/apiHelpers";

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (!rateLimiter.check(`center-confirm:${ip}`, 10, 60)) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429 },
      );
    }

    const { centerId, centerName, ownerName, ownerEmail } =
      await request.json();

    if (!centerId || !ownerEmail) {
      return NextResponse.json(
        { success: false, error: "centerId and ownerEmail are required" },
        { status: 400 },
      );
    }

    await sendCenterConfirmationEmail({
      to: ownerEmail,
      ownerName: ownerName || "",
      centerName: centerName || "your center",
      centerId,
    });

    return NextResponse.json({ success: true, message: "Confirmation sent" });
  } catch (error: any) {
    console.error("send-confirmation-email error", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to send email" },
      { status: 500 },
    );
  }
}
