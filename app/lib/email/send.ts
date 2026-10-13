import { resend, FROM } from "./client";
import {
  welcomeTemplate,
  medicWelcomeTemplate,
  centerConfirmationTemplate,
  centerOtpTemplate,
} from "./templates";

export async function sendWelcomeEmail(opts: {
  to: string;
  name: string;
  userId: string;
}) {
  const { data, error } = await resend.emails.send({
    from: FROM,
    to: opts.to,
    subject: `Welcome to Doza Medic, ${opts.name || "friend"} 🎉`,
    html: welcomeTemplate(opts.name || "friend", opts.userId),
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function sendMedicWelcomeEmail(opts: {
  to: string;
  name: string;
  userId: string;
}) {
  const { data, error } = await resend.emails.send({
    from: FROM,
    to: opts.to,
    subject: `Welcome to the Doza Medic provider network`,
    html: medicWelcomeTemplate(opts.name || "Doctor", opts.userId),
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function sendCenterConfirmationEmail(opts: {
  to: string;
  ownerName: string;
  centerName: string;
  centerId: string;
}) {
  const { data, error } = await resend.emails.send({
    from: FROM,
    to: opts.to,
    subject: `We received your Doza Medic application — ${opts.centerName}`,
    html: centerConfirmationTemplate({
      ownerName: opts.ownerName,
      centerName: opts.centerName,
      centerId: opts.centerId,
      status: "pending",
    }),
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function sendCenterOtpEmail(opts: {
  to: string;
  ownerName: string;
  centerName: string;
  otp: string;
}) {
  const { data, error } = await resend.emails.send({
    from: FROM,
    to: opts.to,
    subject: `Your Doza Medic verification code`,
    html: centerOtpTemplate({
      ownerName: opts.ownerName,
      centerName: opts.centerName,
      otp: opts.otp,
    }),
  });
  if (error) throw new Error(error.message);
  return data;
}
