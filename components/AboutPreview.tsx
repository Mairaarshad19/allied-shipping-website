"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";

export default function AboutPreview() {
  return (
    <section id="about" className="bg-beige-warm py-10 sm:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left — real image with subtle navy overlay */}
          <Reveal type="slide-left">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-navy-primary shadow-lg group">
              <Image
                src="/images/containerImage.jpg"
                alt="Shipping containers at port — Allied Shipping Agency"
                fill
                className="image-fade-in object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy-primary/15 to-navy-primary/10" />
            </div>
          </Reveal>

          {/* Right — content */}
          <Reveal type="slide-right" delay={150}>
            <div className="flex flex-col gap-4 sm:gap-5">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-heading break-words">
                About Allied Shipping Agency
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-body break-words">
                Allied Shipping Agency is a trusted cargo booking agency based in
                Lahore, Pakistan. With over 25 years of experience, we provide
                reliable sea freight and air freight solutions for exporters and
                importers.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-body break-words">
                Our expertise covers full documentation support, FCL and LCL
                cargo, and seamless booking through a strong global network of
                shipping partners.
              </p>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("about");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2.5 rounded-lg bg-navy-primary px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-navy-secondary hover:shadow-md"
                >
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}