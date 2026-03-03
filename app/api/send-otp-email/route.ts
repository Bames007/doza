import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();

    // Validate required fields
    if (!email || !otp) {
      return NextResponse.json(
        { error: "Missing email or OTP" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Doza <no-reply@doza.com>", // Use your verified domain
      to: email,
      subject: "Your OTP Code for Doza Registration",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Doza Center Registration</h2>
          <p>Your One-Time Password (OTP) is:</p>
          <div style="background: #f0f0f0; padding: 20px; font-size: 32px; letter-spacing: 8px; text-align: center; border-radius: 8px;">
            <strong>${otp}</strong>
          </div>
          <p>This code will expire in 10 minutes.</p>
          <p>If you did not request this, please ignore this email.</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Doza – Streamlining healthcare operations.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send OTP email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
