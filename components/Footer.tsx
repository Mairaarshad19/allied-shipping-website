import Link from "next/link";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import Container from "./Container";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "Sea Freight", href: "#" },
  { label: "Air Freight", href: "#" },
  { label: "FCL & LCL", href: "#" },
  { label: "Documentation", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-primary">
      {/* Main footer */}
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-white"
            >
              Allied Shipping Agency
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Trusted freight forwarding and cargo booking agency based in
              Lahore, Pakistan — serving exporters and importers worldwide.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Services
            </h3>
            <nav className="flex flex-col gap-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4 — Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h3>

            <div className="flex items-start gap-3 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
              <span className="leading-relaxed">
                Room #3, 1st Floor, Rafiq Plaza,
                <br />
                Near Divine Hotel,
                <br />
                Davis Road, Lahore
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
              href="https://wa.me/923286920284"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
            >
              <MessageCircle className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
              0328-6920284
            </a>

            <a
              href="mailto:docs@alliedshippingpk.com"
              className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
              docs@alliedshippingpk.com
            </a>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="py-6">
          <p className="text-center text-sm text-white/40">
            &copy; {currentYear} Allied Shipping Agency. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}