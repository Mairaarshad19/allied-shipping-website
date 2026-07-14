import {
  Clock,
  Network,
  Ship,
  FileText,
  Headphones,
  TrendingDown,
} from "lucide-react";
import Container from "./Container";

const FEATURES = [
  {
    icon: Clock,
    title: "25+ Years of Industry Experience",
  },
  {
    icon: Network,
    title: "Reliable Global Partner Network",
  },
  {
    icon: Ship,
    title: "Sea & Air Freight Solutions",
  },
  {
    icon: FileText,
    title: "Professional Documentation Support",
  },
  {
    icon: Headphones,
    title: "Dedicated Customer Service",
  },
  {
    icon: TrendingDown,
    title: "Competitive Freight Solutions",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <Container>
        {/* Section header */}
        <div className="mb-12 md:mb-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-heading">
            Why Choose Allied Shipping?
          </h2>
          <p className="mt-4 text-base md:text-lg text-body leading-relaxed">
            Trusted by exporters for reliable cargo booking and professional
            service.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-white px-6 py-7 transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-primary/5">
                  <Icon
                    className="h-6 w-6 text-navy-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-semibold text-heading leading-snug">
                    {feature.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}