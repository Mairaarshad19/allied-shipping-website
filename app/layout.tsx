import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
          <BackToTop />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
