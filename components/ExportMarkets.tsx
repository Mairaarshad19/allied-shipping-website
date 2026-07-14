import { Globe, Ship, MapPin, Star } from "lucide-react";
import Container from "./Container";

const MARKETS = [
  {
    icon: Ship,
    title: "Port Klang",
    description: "Malaysia's premier port with reliable connections.",
    highlighted: false,
  },
  {
    icon: MapPin,
    title: "Penang",
    description: "North Malaysia gateway for efficient cargo handling.",
    highlighted: false,
  },
  {
    icon: Globe,
    title: "UAE Sector",
    description: "Dubai and UAE ports with frequent sailings.",
    highlighted: false,
  },
  {
    icon: Globe,
    title: "China & Far East",
    description: "Major Asian trade lanes with competitive rates.",
    highlighted: false,
  },
];

export default function ExportMarkets() {
  return (
    <section className="bg-beige-warm py-12 md:py-16 lg:py-20">
      <Container>
        {/* Section header */}
        <div className="mb-8 md:mb-12 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-heading">
            Specialized Trade Lanes
          </h2>
          <p className="mt-3 text-base md:text-lg text-body leading-relaxed">
            Regular cargo services across Pakistan's busiest import and
            export trade lanes with reliable consolidation options.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {MARKETS.map((market) => {
            const Icon = market.icon;

            return (
              <div
                key={market.title}
                className={`group flex flex-col items-center text-center gap-3 rounded-xl px-5 py-8 shadow-sm transition-all duration-200 hover:shadow-md ${
                  market.highlighted
                    ? "border-2 border-gold/60 bg-white"
                    : "border border-border bg-white"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    market.highlighted
                      ? "bg-gold/10 text-gold"
                      : "bg-navy-primary/5 text-navy-primary"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>

                <span
                  className={`text-lg font-semibold leading-tight ${
                    market.highlighted ? "text-gold" : "text-heading"
                  }`}
                >
                  {market.title}
                </span>

                <span className="text-sm text-body leading-relaxed">
                  {market.description}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}