import { NextRequest, NextResponse } from "next/server";
import { sendCenterOtpEmail } from "@/app/lib/email/send";
import { rateLimiter } from "@/app/lib/rateLimit";
import { getClientIp } from "@/app/lib/apiHelpers";

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (!rateLimiter.check(`center-otp:${ip}`, 5, 60)) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429 },
      );
    }

    const { otp, email, ownerName, centerName } = await request.json();
    if (!otp || !email) {
      return NextResponse.json(
        { success: false, error: "otp and email are required" },
        { status: 400 },
      );
    }

    await sendCenterOtpEmail({
      to: email,
      ownerName: ownerName || "",
      centerName: centerName || "your center",
      otp,
    });

    return NextResponse.json({ success: true, message: "OTP sent" });
  } catch (error: any) {
    console.error("send-otp-email error", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to send email" },
      { status: 500 },
    );
  }
}
