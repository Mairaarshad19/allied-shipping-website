"use client";

import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import Container from "./Container";

const QUICK_LINKS = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Services", sectionId: "services" },
  { label: "Contact", sectionId: "cta-section" },
];

const SERVICES = [
  { label: "Sea Freight", sectionId: "services" },
  { label: "Air Freight", sectionId: "services" },
  { label: "FCL & LCL", sectionId: "services" },
  { label: "Documentation", sectionId: "services" },
];

function scrollToSection(sectionId: string) {
  if (sectionId === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-primary">
      {/* Main footer */}
      <Container className="py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="text-xl font-semibold tracking-tight text-white text-left"
            >
              Allied Shipping Agency
            </button>
            <p className="text-sm leading-relaxed text-white/60 break-words">
              Trusted freight forwarding and cargo booking agency based in
              Lahore, Pakistan — serving exporters and importers worldwide.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2 sm:gap-3">
              {QUICK_LINKS.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => scrollToSection(link.sectionId)}
                  className="text-sm text-white/60 transition-colors hover:text-white text-left cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3 — Services */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Services
            </h3>
            <nav className="flex flex-col gap-2 sm:gap-3">
              {SERVICES.map((service) => (
                <button
                  key={service.label}
                  type="button"
                  onClick={() => scrollToSection(service.sectionId)}
                  className="text-sm text-white/60 transition-colors hover:text-white text-left cursor-pointer"
                >
                  {service.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 4 — Contact */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h3>

            <div className="flex items-start gap-3 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
              <span className="leading-relaxed break-words">
                Room #3, 1st Floor, Rafiq Plaza,
                <br />
                Near Divine Hotel,
                <br />
                8 - Davis Road, Lahore
              </span>
            </div>

            <a
              href="tel:04236293017"
              className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
              042-36293017
            </a>

            <a
              href="https://wa.me/923004018802"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
            >
              <MessageCircle className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
              +92 300 401 8802
            </a>

            <a
              href="mailto:arshad@alliedshippingpk.com"
              className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
              <span className="break-all">arshad@alliedshippingpk.com</span>
            </a>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="py-5 sm:py-6">
          <p className="text-center text-sm text-white/40">
            &copy; {currentYear} Allied Shipping Agency. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}