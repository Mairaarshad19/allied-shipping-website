import Image from "next/image";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";

const SERVICES = [
  {
    image: "/images/services/sea-freight.jpg",
    title: "Sea Freight",
    description:
      "FCL and LCL cargo booking from Karachi Port and Port Qasim to major international ports with competitive freight solutions.",
  },
  {
    image: "/images/services/air-freight.jpg",
    title: "Air Freight",
    description:
      "Fast, secure and time-sensitive air cargo booking for urgent import and export shipments through trusted airline partners.",
  },
  {
    image: "/images/services/truck-freight.jpg",
    title: "Truck Freight & Supply Chain",
    description:
      "Reliable overland freight and end-to-end supply chain solutions for domestic and cross-border cargo movement.",
  },
  {
    icon: FileText,
    title: "Export Documentation",
    description:
      "Professional preparation of Bills of Lading, Certificates of Origin, and all commercial shipping paperwork.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-10 sm:py-16 lg:py-20">
      <Container>
        {/* Section header */}
        <Reveal type="fade-up">
          <div className="mb-8 sm:mb-12 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              What We Offer
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-heading">
              Our Services
            </h2>
            <p className="mt-3 text-base md:text-lg text-body leading-relaxed">
              Reliable, end-to-end cargo booking solutions tailored for
              exporters and importers across Pakistan.
            </p>
          </div>
        </Reveal>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} type="fade-up" delay={index * 100}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10">
                {/* Gold accent line */}
                <div className="h-[3px] w-full shrink-0 bg-gradient-to-r from-transparent via-gold to-transparent" />

                {/* Media — image or premium outline icon */}
                {service.image ? (
                  <div className="relative h-48 sm:h-52 w-full shrink-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} — Allied Shipping Agency`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/50 via-navy-primary/0 to-transparent" />
                  </div>
                ) : (
                  <div className="flex h-48 sm:h-52 w-full shrink-0 items-center justify-center bg-gradient-to-br from-navy-primary/[0.04] to-gold/[0.06]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                      {service.icon && (
                        <service.icon
                          className="h-9 w-9 text-gold"
                          strokeWidth={1.25}
                        />
                      )}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-1 flex-col px-6 py-6 sm:py-7">
                  <h3 className="text-lg font-semibold tracking-tight text-heading break-words">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-body break-words">
                    {service.description}
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all duration-200 group-hover:gap-2.5"
                  >
                    Learn More
                    <ArrowRight size={15} strokeWidth={2} />
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
