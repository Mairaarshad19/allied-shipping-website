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

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg shadow-black/5">
      <Container className="flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-xl font-semibold tracking-tight truncate max-w-[55vw] sm:max-w-none text-navy-primary"
          aria-label="Allied Shipping Agency — Home"
        >
          Allied Shipping Agency
        </Link>

        {/* Desktop nav + buttons */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-body hover:text-navy-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 pl-8 border-l border-border">
            <a
              href="tel:04236293017"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-primary px-4 py-2 text-sm font-medium text-navy-primary transition-all hover:bg-navy-primary hover:text-white"
            >
              <Phone size={16} />
              Call
            </a>
            <a
              href="https://wa.me/923286920284"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-navy-primary px-4 py-2 text-sm font-medium text-white transition-all hover:bg-navy-secondary"
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
          className="md:hidden flex items-center justify-center h-10 w-10 shrink-0 text-navy-primary"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile menu overlay — smooth slide + fade */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="border-t border-border bg-white shadow-xl">
          <Container className="py-4 sm:py-6 space-y-4">
            {/* Navigation links */}
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center min-h-[44px] text-base font-medium text-body transition-colors hover:text-navy-primary rounded-lg px-3 -mx-3 hover:bg-beige-warm/60"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <a
                href="tel:04236293017"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-primary min-h-[48px] px-4 text-sm font-medium text-navy-primary transition-colors hover:bg-navy-primary hover:text-white"
              >
                <Phone size={18} />
                042-36293017
              </a>
              <a
                href="https://wa.me/923286920284"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-primary min-h-[48px] px-4 text-sm font-medium text-white transition-colors hover:bg-navy-secondary"
              >
                <MessageCircle size={18} />
                0328-6920284
              </a>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}