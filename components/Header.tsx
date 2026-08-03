"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  const router = useRouter();

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

  /* Track current hash and handle hash navigation after page load */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    setActiveHash(hash);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavigate = (href: string) => {
    closeMenu();

    // Same page with hash — smooth scroll
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (pathname === "/") {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      // On about page, navigate home then scroll
      router.push(href);
      return;
    }

    // Home link — scroll to top if on home, else navigate
    if (href === "/") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/");
      }
      return;
    }

    // About link
    router.push(href);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/about") return pathname === "/about";
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      return pathname === "/" && activeHash === id;
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-2.5 md:py-3" : "py-4 md:py-5"
        }`}
      >
        {/* Logo — left, aligns with hero content via shared Container padding */}
        <button
          type="button"
          onClick={() => handleNavigate("/")}
          className="shrink-0 flex items-center py-1.5"
          aria-label="Allied Shipping Agency — Home"
        >
          <Image
            src={
              scrolled
                ? "/images/white-back.png"
                : "/images/dark-back.png"
            }
            alt="Allied Shipping Agency"
            width={467}
            height={158}
            className="h-[38px] sm:h-[45px] md:h-[50px] w-auto object-contain"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </button>

        {/* Desktop nav + CTA — right */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav className="flex items-center gap-9 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavigate(link.href)}
                className={`text-[15px] lg:text-base font-medium transition-all duration-200 cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-200 hover:after:w-full ${
                  isActive(link.href)
                    ? "text-gold after:w-full"
                    : scrolled
                      ? "text-body hover:text-navy-primary"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          {/* CTA button — premium corporate */}
          <button
            type="button"
            onClick={() => handleNavigate("/#contact")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:bg-[#D4AF37] hover:text-white hover:shadow-lg hover:shadow-black/10 ${
              scrolled
                ? "bg-navy-primary text-white shadow-md shadow-black/10"
                : "bg-white text-navy-primary shadow-sm shadow-black/5"
            }`}
          >
            Get a Quote
          </button>
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
                  key={link.label}
                  type="button"
                  onClick={() => handleNavigate(link.href)}
                  className={`flex items-center min-h-[44px] w-full text-left text-base font-medium rounded-lg px-3 -mx-3 hover:bg-beige-warm/60 cursor-pointer ${
                    isActive(link.href)
                      ? "text-gold font-semibold"
                      : "text-body hover:text-navy-primary"
                  }`}
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