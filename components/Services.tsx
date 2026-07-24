import { Anchor, Plane, Truck, FileText } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Anchor,
    title: "Sea Freight",
    description:
      "FCL and LCL cargo booking from Karachi Port and Port Qasim to major international ports with competitive freight solutions.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "Fast, secure and time-sensitive air cargo booking for urgent import and export shipments through trusted airline partners.",
  },
  {
    icon: Truck,
    title: "Truck Freight / Supply Chain Solutions",
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
    <section id="services" className="bg-white py-6 sm:py-10 lg:py-14">
      <Container>
        {/* Section header */}
        <Reveal type="fade-up">
          <div className="mb-6 sm:mb-12 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-heading">
              Our Services
            </h2>
            <p className="mt-3 text-base md:text-lg text-body leading-relaxed">
              Reliable cargo booking solutions tailored for exporters and
              importers.
            </p>
          </div>
        </Reveal>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.title}
                type="fade-up"
                delay={index * 100}
              >
                <div className="flex items-start gap-3 sm:gap-4 rounded-xl border border-border bg-white px-5 sm:px-6 py-6 sm:py-7 shadow-sm transition-shadow duration-200 hover:shadow-md h-full">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-primary/5">
                    <Icon
                      className="h-5 w-5 text-navy-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-heading break-words">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-body leading-relaxed break-words">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}