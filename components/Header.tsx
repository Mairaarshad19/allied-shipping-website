"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import Container from "./Container";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      } bg-white`}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-navy-primary"
        >
          Allied Shipping Agency
        </Link>

        {/* Desktop nav + buttons */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-body transition-colors hover:text-navy-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 pl-3 border-l border-border">
            <a
              href="tel:04236293017"
              className="inline-flex items-center gap-2 rounded-md border border-navy-primary px-4 py-2 text-sm font-medium text-navy-primary transition-colors hover:bg-navy-primary hover:text-white"
            >
              <Phone size={16} />
              Call
            </a>
            <a
              href="https://wa.me/923286920284"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-navy-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-secondary"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-navy-primary"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <Container className="py-6 space-y-4">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-body transition-colors hover:text-navy-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-2 border-t border-border">
              <a
                href="tel:04236293017"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-primary px-4 py-3 text-sm font-medium text-navy-primary transition-colors hover:bg-navy-primary hover:text-white"
              >
                <Phone size={16} />
                042-36293017
              </a>
              <a
                href="https://wa.me/923286920284"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-primary px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-secondary"
              >
                <MessageCircle size={16} />
                0328-6920284
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}