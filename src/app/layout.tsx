import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vu Ngoc Khanh Linh — Software Developer",
  description:
    "Software Developer with 1+ year building HR web applications — employee management, LMS, task workflows, and AI-assisted recruitment tools. Based in Ho Chi Minh City, Vietnam.",
  keywords: [
    "Software Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "AI Integration",
    "HR Software",
    "Laravel",
    "JavaScript",
    "Next.js",
    "React",
    "Vietnam",
  ],
  authors: [{ name: "Vu Ngoc Khanh Linh", url: "https://github.com/VuLinh204" }],
  openGraph: {
    title: "Vu Ngoc Khanh Linh — Software Developer",
    description:
      "Building HR web apps & AI-powered recruitment tools in Ho Chi Minh City.",
    type: "website",
    locale: "en_US",
    siteName: "Vu Ngoc Khanh Linh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vu Ngoc Khanh Linh — Software Developer",
    description:
      "Building HR web apps & AI-powered recruitment tools in Ho Chi Minh City.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
