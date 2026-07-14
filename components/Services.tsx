import { Anchor, Plane, FileText, ClipboardCheck } from "lucide-react";
import Container from "./Container";

const SERVICES = [
  {
    icon: Anchor,
    title: "Sea Freight",
    description: "FCL & LCL cargo booking solutions.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Professional shipping documentation support.",
  },
  {
    icon: ClipboardCheck,
    title: "Cargo Booking",
    description: "Trusted booking through our global partner network.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <Container>
        {/* Section header */}
        <div className="mb-12 md:mb-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-heading">
            Our Services
          </h2>
          <p className="mt-4 text-base md:text-lg text-body leading-relaxed">
            Reliable cargo booking solutions tailored for exporters and
            importers.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex items-start gap-5 rounded-xl border border-border bg-white px-6 py-7 transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-primary/5">
                  <Icon
                    className="h-6 w-6 text-navy-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-heading">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}