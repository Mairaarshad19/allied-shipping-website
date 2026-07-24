"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
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
      <Container className="flex items-center justify-between py-5 md:py-6">
        {/* Logo — left */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="shrink-0"
          aria-label="Allied Shipping Agency — Home"
        >
          <Image
            src="/images/logos.png"
            alt="Allied Shipping Agency"
            width={220}
            height={60}
            className="h-[50px] md:h-[60px] w-auto object-contain"
            priority
          />
        </button>

        {/* Desktop nav — right */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center gap-10 md:gap-12">
            {NAV_LINKS.map((link) => (
              <button
                key={link.sectionId}
                type="button"
                onClick={() => {
                  scrollToSection(link.sectionId);
                  closeMenu();
                }}
                className={`text-[15px] md:text-base font-medium transition-all duration-200 cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-200 hover:after:w-full ${
                  scrolled
                    ? "text-body hover:text-navy-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
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
                  className="flex items-center min-h-[44px] w-full text-left text-base font-medium text-body hover:text-navy-primary rounded-lg px-3 -mx-3 hover:bg-beige-warm/60 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}