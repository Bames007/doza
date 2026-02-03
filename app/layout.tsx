import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doza.com"), // Update with your actual domain
  title: "Doza | AI-Powered Healthcare Platform for Patients, Medics & Centers",
  description:
    "Transform your healthcare experience with Doza's comprehensive platform. Connect patients, medical professionals, and healthcare centers through AI-powered tools, free EMR systems, and seamless healthcare management.",
  keywords:
    "healthcare platform, medical software, EMR systems, patient management, medic network, healthcare centers, AI healthcare, telemedicine, medical appointments",
  authors: [{ name: "Doza Healthcare" }],
  creator: "Doza Healthcare",
  publisher: "Doza Healthcare",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "Doza | AI-Powered Healthcare Platform",
    description:
      "Connect patients, medical professionals, and healthcare centers through our comprehensive AI-powered healthcare platform.",
    images: ["/og-image.png"],
    type: "website",
    locale: "en_US",
    siteName: "Doza Healthcare",
    url: "https://dozamedic.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doza | AI-Powered Healthcare Platform",
    description:
      "Transform your healthcare experience with Doza's comprehensive platform for patients, medics, and centers.",
    images: ["/twitter-image.png"],
    creator: "@dozahealth",
  },
  manifest: "/webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#017840",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${poppins.variable} ${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        {/* Healthcare-themed background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50/70 -z-10" />

        {/* Subtle grid pattern for healthcare/tech feel */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />

        {/* Scrollable content */}
        <div className="relative min-h-screen">{children}</div>
      </body>
    </html>
  );
}
