import { Globe, Star } from "lucide-react";
import Container from "./Container";

const MARKETS = [
  {
    icon: Globe,
    title: "🇨🇳 China",
    description: "Reliable cargo booking solutions.",
    highlighted: false,
  },
  {
    icon: Globe,
    title: "🇲🇾 Malaysia",
    description: "Strong shipping connections.",
    highlighted: false,
  },
  {
    icon: Globe,
    title: "🇦🇪 Dubai",
    description: "Frequent export bookings.",
    highlighted: false,
  },
  {
    icon: Star,
    title: "⭐ Salt Export Specialist",
    description: "Leading salt export logistics from Pakistan.",
    highlighted: true,
  },
];

export default function ExportMarkets() {
  return (
    <section className="bg-beige-warm py-16 md:py-24 lg:py-28">
      <Container>
        {/* Section header */}
        <div className="mb-12 md:mb-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-heading">
            Specialized Export Markets
          </h2>
          <p className="mt-4 text-base md:text-lg text-body leading-relaxed">
            We help Pakistani exporters connect with key international markets.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {MARKETS.map((market) => {
            const Icon = market.icon;

            return (
              <div
                key={market.title}
                className={`group flex flex-col items-center text-center gap-4 rounded-xl px-6 py-12 shadow-sm transition-all duration-200 hover:shadow-md ${
                  market.highlighted
                    ? "border-2 border-gold/60 bg-white"
                    : "border border-border bg-white"
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${
                    market.highlighted
                      ? "bg-gold/10 text-gold"
                      : "bg-navy-primary/5 text-navy-primary"
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                <span
                  className={`text-xl font-semibold leading-tight ${
                    market.highlighted ? "text-gold" : "text-heading"
                  }`}
                >
                  {market.title}
                </span>

                <span className="text-sm text-body leading-relaxed max-w-[180px]">
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