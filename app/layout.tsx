import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackToTop from "@/components/BackToTop";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://alliedshippingpk.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Allied Shipping Agency | Freight Forwarding & Cargo Booking in Pakistan",
  description:
    "Allied Shipping Agency is a Lahore-based freight forwarding and cargo booking agency with 25+ years of experience in sea freight (FCL/LCL), air freight, and export documentation.",
  keywords: [
    "Freight Forwarding Pakistan",
    "Cargo Booking",
    "Sea Freight",
    "Air Freight",
    "FCL",
    "LCL",
    "Export Documentation",
    "Allied Shipping Agency",
    "Lahore Logistics",
  ],
  authors: [{ name: "Allied Shipping Agency" }],
  openGraph: {
    title: "Allied Shipping Agency | Freight Forwarding & Cargo Booking in Pakistan",
    description:
      "Allied Shipping Agency is a Lahore-based freight forwarding and cargo booking agency with 25+ years of experience in sea freight (FCL/LCL), air freight, and export documentation.",
    url: siteUrl,
    siteName: "Allied Shipping Agency",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/HeroImage.jpg",
        width: 1200,
        height: 630,
        alt: "Allied Shipping Agency - Freight Forwarding & Cargo Booking in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allied Shipping Agency | Freight Forwarding & Cargo Booking in Pakistan",
    description:
      "Allied Shipping Agency is a Lahore-based freight forwarding and cargo booking agency with 25+ years of experience in sea freight (FCL/LCL), air freight, and export documentation.",
    images: ["/images/HeroImage.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="page-loader" />
        <JsonLd />
        <div className="page-content">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
            <BackToTop />
            <FloatingWhatsApp />
          </div>
        </div>
      </body>
    </html>
  );
}
