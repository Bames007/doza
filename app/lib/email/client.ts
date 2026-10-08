import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY!);

export const FROM =
  process.env.RESEND_FROM_EMAIL || "Doza Medic <no-reply@dozamedic.com>";

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://users.dozamedic.com";

export const MARKETING_URL =
  process.env.NEXT_PUBLIC_MARKETING_URL || "https://dozamedic.com";

export const LOGO_URL =
  process.env.NEXT_PUBLIC_LOGO_URL || "https://dozamedic.com/logo.png";

export const UNSUBSCRIBE_URL =
  process.env.NEXT_PUBLIC_UNSUBSCRIBE_URL || `${MARKETING_URL}/unsubscribe`;
