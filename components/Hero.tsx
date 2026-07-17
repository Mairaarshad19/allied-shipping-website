"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "./Container";

export default function Hero() {
  const [videoError, setVideoError] = useState(false);

  const scrollToCTA = () => {
    const el = document.getElementById("cta-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[560px] md:min-h-[600px] overflow-hidden pt-16 md:pt-20">
      {/* Background video / fallback image */}
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/heroVideo.mp4" type="video/mp4" />
        </video>
      ) : null}

      {/* Fallback image (shown if video fails or before video loads) */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center ${
          videoError ? "block" : "hidden"
        }`}
        style={{ backgroundImage: "url(/images/ShipImage2.jpg)" }}
      />

      {/* Gradient overlay: stronger on mobile for readability, lighter on desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-primary/90 via-navy-primary/70 md:via-navy-primary/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full">
        <Container className="w-full">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Gold badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            >
              <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-gold shadow-[0_0_14px_rgba(201,162,39,0.2)] ring-1 ring-gold/20">
                25+ Years of Experience
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
              className="mt-6 sm:mt-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-white text-shadow-soft"
            >
              Reliable Freight Forwarding & Cargo Booking Solutions
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/85 max-w-xl text-shadow-soft"
            >
              Trusted freight forwarding and cargo booking solutions connecting Pakistan with global markets through reliable sea and air freight.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.55 }}
              className="mt-8 sm:mt-10 flex items-center"
            >
              <button
                type="button"
                onClick={scrollToCTA}
                className="inline-flex items-center gap-2.5 rounded-lg border-2 border-white bg-white px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-navy-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-primary hover:text-white hover:shadow-lg"
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-down">
        <ChevronDown className="h-7 w-7 text-white/60" strokeWidth={1.5} />
      </div>
    </section>
  );
}