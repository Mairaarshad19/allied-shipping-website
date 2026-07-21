import { Globe, FileText, Ship, Clock } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: Globe,
    title: "Global Agent Network",
    description:
      "Trusted logistics partners across multiple countries providing reliable local support and smooth cargo handling at destination.",
  },
  {
    icon: FileText,
    title: "Documentation Expertise",
    description:
      "Accurate preparation of Bills of Lading, Certificates of Origin and all essential shipping documents.",
  },
  {
    icon: Ship,
    title: "FCL & LCL Expertise",
    description:
      "Professional Full Container Load (FCL) and Less than Container Load (LCL) cargo booking solutions through Karachi Port and Port Qasim.",
  },
  {
    icon: Clock,
    title: "25+ Years of Experience",
    description:
      "Over 25 years of trusted freight forwarding experience serving exporters and importers across Pakistan.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-20">
      <Container>
        {/* Section header */}
        <Reveal type="fade-up">
          <div className="mb-6 sm:mb-12 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-heading">
              Why Choose Allied Shipping?
            </h2>
            <p className="mt-3 text-base md:text-lg text-body leading-relaxed">
              Trusted by exporters for reliable cargo booking and professional
              service.
            </p>
          </div>
        </Reveal>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal
                key={feature.title}
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
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-body leading-relaxed break-words">
                      {feature.description}
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