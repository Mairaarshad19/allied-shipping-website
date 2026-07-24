"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import Container from "./Container";

const NAV_LINKS = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Services", sectionId: "services" },
  { label: "Contact", sectionId: "cta-section" },
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="shrink-0 mr-6"
          aria-label="Allied Shipping Agency — Home"
        >
          <Image
            src="/images/logo.jpeg"
            alt="Allied Shipping Agency"
            width={180}
            height={50}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </button>

        {/* Desktop nav + button */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.sectionId}
                type="button"
                onClick={() => {
                  scrollToSection(link.sectionId);
                  closeMenu();
                }}
                className={`text-base font-medium transition-colors duration-200 cursor-pointer ${
                  scrolled
                    ? "text-body hover:text-navy-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4 pl-8 border-l border-border">
            <a
              href="tel:+923004018802"
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-navy-primary hover:text-navy-secondary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <Phone size={16} />
              +92 300 401 8802
            </a>
            <a
              href="https://wa.me/923004018802"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-navy-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#0D2A4F] hover:shadow-md"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`md:hidden flex items-center justify-center h-10 w-10 shrink-0 transition-colors duration-300 ${
            scrolled ? "text-navy-primary" : "text-white"
          }`}
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
                <button
                  key={link.sectionId}
                  type="button"
                  onClick={() => {
                    scrollToSection(link.sectionId);
                    closeMenu();
                  }}
                  className="flex items-center min-h-[44px] w-full text-left text-base font-medium text-body transition-colors hover:text-navy-primary rounded-lg px-3 -mx-3 hover:bg-beige-warm/60 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Contact buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <a
                href="tel:+923004018802"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-primary min-h-[48px] px-4 text-sm font-medium text-navy-primary transition-colors hover:bg-navy-primary hover:text-white"
              >
                <Phone size={18} />
                +92 300 401 8802
              </a>
              <a
                href="https://wa.me/923004018802"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-primary min-h-[48px] px-4 text-sm font-medium text-white transition-all duration-200 hover:bg-[#0D2A4F] hover:shadow-md"
              >
                Contact Us
              </a>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}