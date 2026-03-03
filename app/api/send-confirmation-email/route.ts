import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, centerName, centerId } = await request.json();

    if (!email || !centerName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Doza <no-reply@doza.com>",
      to: email,
      subject: `Welcome to Doza, ${centerName}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Registration Successful!</h2>
          <p>Thank you for registering <strong>${centerName}</strong> with Doza.</p>
          <p>Your Center ID is:</p>
          <div style="background: #e6f7ff; padding: 16px; font-size: 20px; text-align: center; border-radius: 8px; border-left: 4px solid #1890ff;">
            <code>${centerId || "Not assigned"}</code>
          </div>
          <p>You can now log in to your dashboard and start managing your center.</p>
          <p style="margin-top: 32px;">
            <a href="https://doza.com/dashboard" style="background: #1890ff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
              Go to Dashboard
            </a>
          </p>
          <hr>
          <p style="color: #666; font-size: 12px;">Doza – Empowering healthcare centers.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send confirmation email" },
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
