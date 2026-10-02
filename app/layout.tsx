import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aarogya Dental & Skin Clinic | Bandra West, Mumbai",
  description:
    "Dental and skin care that doesn't feel like a hospital. Bespoke smile design, painless microscopic dentistry, and US-FDA clinical dermatology in Bandra West, Mumbai.",
  keywords: [
    "Dental Clinic Mumbai",
    "Skin Clinic Bandra",
    "Painless Root Canal",
    "Invisible Aligners Mumbai",
    "Aarogya Dental",
    "Dermatology Clinic Bandra",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
