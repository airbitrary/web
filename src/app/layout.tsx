import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Airbitrary — AI-powered apps that make life playful",
    template: "%s | Airbitrary",
  },
  description:
    "Airbitrary builds delightful iOS apps powered by Apple Intelligence. Discover Spin AI and Imposter AI.",
  metadataBase: new URL("https://airbitrary.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Airbitrary",
    type: "website",
    locale: "en_US",
    title: "Airbitrary — AI-powered apps that make life playful",
    description:
      "Airbitrary builds delightful iOS apps powered by Apple Intelligence. Discover Spin AI and Imposter AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airbitrary — AI-powered apps that make life playful",
    description:
      "Airbitrary builds delightful iOS apps powered by Apple Intelligence. Discover Spin AI and Imposter AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
