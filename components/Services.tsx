import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";

const SERVICES = [
  {
    href: "/services/sea-freight",
    image: "/images/services/sea-freight.jpg",
    title: "Sea Freight",
    description:
      "FCL and LCL cargo booking from Karachi Port and Port Qasim to major international ports with competitive freight solutions.",
  },
  {
    href: "/services/air-freight",
    image: "/images/services/air-freight.jpg",
    title: "Air Freight",
    description:
      "Fast, secure and time-sensitive air cargo booking for urgent import and export shipments through trusted airline partners.",
  },
  {
    href: "/services/truck-freight",
    image: "/images/services/truck-freight.jpg",
    title: "Truck Freight & Supply Chain",
    description:
      "Reliable overland freight and end-to-end supply chain solutions for domestic and cross-border cargo movement.",
  },
  {
    href: "/services/documentation",
    image: "/images/services/documentation.jpg",
    title: "Export Documentation",
    description:
      "Professional preparation of Bills of Lading, Certificates of Origin, and all commercial shipping paperwork.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-12 sm:py-16 lg:py-24">
      <Container>
        {/* Section header */}
        <Reveal type="fade-up">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              What We Offer
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-heading md:text-4xl lg:text-5xl">
              Our Services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-body md:text-lg lg:text-xl">
              Reliable, end-to-end cargo booking solutions tailored for
              exporters and importers across Pakistan.
            </p>
          </div>
        </Reveal>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 xl:gap-12 auto-rows-fr">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} type="fade-up" delay={index * 100}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                <div className="h-[3px] w-full shrink-0 bg-gradient-to-r from-transparent via-gold to-transparent" />

                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={`${service.title} — Allied Shipping Agency`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/35 via-navy-primary/0 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col px-7 py-7 sm:px-8 sm:py-8 lg:px-9 lg:py-9">
                  <h3 className="text-2xl font-semibold tracking-tight text-heading break-words lg:text-[1.75rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-body break-words md:text-[0.95rem] lg:text-base">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-7 inline-flex items-center justify-center gap-2 self-start rounded-full border border-gold/30 bg-navy-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:bg-navy-primary/95 hover:shadow-md hover:shadow-navy-primary/20"
                  >
                    Learn More
                    <ArrowRight size={16} strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
