import { Globe, Building, MapPin, Ship } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";

const MARKETS = [
  {
    icon: Globe,
    title: "China",
    description: "Major trade lanes connecting Pakistan with Chinese ports.",
  },
  {
    icon: Building,
    title: "Dubai",
    description: "Strategic hub for transshipment and Middle East cargo.",
  },
  {
    icon: MapPin,
    title: "UAE",
    description: "Frequent sailings to UAE ports with reliable schedules.",
  },
  {
    icon: Ship,
    title: "Malaysia",
    description: "Regular services to Malaysian ports for Southeast Asia trade.",
  },
];

export default function ExportMarkets() {
  return (
    <section className="bg-beige-warm py-10 sm:py-16 lg:py-20">
      <Container>
        {/* Section header */}
        <Reveal type="fade-up">
          <div className="mb-6 sm:mb-12 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-heading">
              Specialized Trade Lanes
            </h2>
            <p className="mt-3 text-base md:text-lg text-body leading-relaxed">
              Regular cargo services across Pakistan's busiest import and
              export trade lanes with reliable consolidation options.
            </p>
          </div>
        </Reveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {MARKETS.map((market, index) => {
            const Icon = market.icon;

            return (
              <Reveal
                key={market.title}
                type="fade-up"
                delay={index * 100}
              >
                <div className="group flex flex-col items-center text-center gap-3 rounded-xl border border-border bg-white px-4 sm:px-5 py-6 sm:py-8 shadow-sm transition-all duration-200 hover:shadow-md h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-primary/5 text-navy-primary shrink-0">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>

                  <span className="text-lg font-semibold leading-tight break-words text-heading">
                    {market.title}
                  </span>

                  <span className="text-sm text-body leading-relaxed break-words">
                    {market.description}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}