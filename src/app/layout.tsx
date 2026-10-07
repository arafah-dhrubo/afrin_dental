import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SchemaJsonLd } from "@/components/seo/schema-json-ld";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1f87b8",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://afrindental.com"),
  title: {
    default: "Afrin Laser Dental Surgery | আপনার হাসির জন্য সেরা ডেন্টাল যত্ন",
    template: "%s | Afrin Laser Dental Surgery",
  },
  description:
    "দাঁতের ব্যথা, স্কেলিং, ফিলিং, রুট ক্যানাল বা দাঁত তোলা—সহজ ভাষায় বুঝিয়ে, পরিষ্কার পরিবেশে চিকিৎসা। শাহজাহানপুর, ঢাকায় আধুনিক লেজার ডেন্টাল কেয়ার। কল করুন: 01959-614357।",
  keywords: [
    "Afrin Laser Dental Surgery",
    "আফরিন ডেন্টাল",
    "ডেন্টাল ক্লিনিক ঢাকা",
    "দাঁতের ডাক্তার ঢাকা",
    "শাহজাহানপুর ডেন্টাল",
    "লেজার ডেন্টাল সার্জারি",
    "রুট ক্যানাল ট্রিটমেন্ট",
    "স্কেলিং ও পলিশিং",
    "দাঁতের ফিলিং",
    "dentist shahjahanpur",
    "dental clinic dhaka",
  ],
  authors: [{ name: "ডাঃ আফরিন ইসলাম টুম্পা" }, { name: "Dr. Afrin Islam Tumpa" }, { name: "Afrin Laser Dental Surgery" }],
  creator: "Afrin Laser Dental Surgery",
  publisher: "Afrin Laser Dental Surgery",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://afrindental.com",
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://afrindental.com",
    title: "Afrin Laser Dental Surgery | সেরা ডেন্টাল যত্ন, কোমল স্পর্শে",
    description:
      "দাঁতের ব্যথা, স্কেলিং, ফিলিং, রুট ক্যানাল বা দাঁত তোলা—সহজ ভাষায় বুঝিয়ে, পরিষ্কার পরিবেশে আধুনিক চিকিৎসা। শাহজাহানপুর, ঢাকা।",
    siteName: "Afrin Laser Dental Surgery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afrin Laser Dental Surgery | সেরা ডেন্টাল যত্ন",
    description:
      "শাহজাহানপুর, ঢাকায় উন্নত লেজার ডেন্টাল সার্জারি ও ডেন্টাল কেয়ার। হটলাইন: 01959-614357",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="scroll-smooth">
      <head>
        {/* Fast preconnect to Google Fonts for sub-second font delivery */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Schema.org Structured Data */}
        <SchemaJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#0e3446] antialiased">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
