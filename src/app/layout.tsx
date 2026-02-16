import type { Metadata } from "next";
import "./globals.css";
// Geist font is configured in CSS via variable, or we can use next/font here
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krushika Vuyyuru | AI & Full-Stack Developer",
  description: "Portfolio of Krushika Vuyyuru, an AI & Full-Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-background)] text-[#eae5ec]`}
      >
        {children}
      </body>
    </html>
  );
}
