import { Globe, Ship, ShieldCheck, Clock } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";

const STATS = [
  {
    icon: Globe,
    title: "50+",
    description: "Countries Served",
  },
  {
    icon: Ship,
    title: "200+",
    description: "Shipments Per Year",
  },
  {
    icon: ShieldCheck,
    title: "Pakistan's Trusted",
    description: "Freight Partner",
  },
  {
    icon: Clock,
    title: "25+",
    description: "Years Experience",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-20">
      {/* Visual divider */}
      <div className="mx-auto w-px h-8 sm:h-10 bg-gradient-to-b from-transparent via-border to-transparent" />

      <Container className="mt-6 sm:mt-8 md:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Reveal
                key={stat.title}
                type="fade-up"
                delay={index * 100}
              >
                <div className="relative flex flex-col items-center text-center gap-3 rounded-xl border border-border bg-white px-6 sm:px-8 py-8 sm:py-10 shadow-lg shadow-black/5 transition-shadow duration-200 hover:shadow-xl h-full overflow-hidden">
                  {/* Gold top accent bar */}
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

                  {/* Icon with gold-tinted background */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold/10 to-gold/5 ring-1 ring-gold/20">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  </div>

                  {/* Number — large and bold */}
                  <span className="text-2xl md:text-3xl font-bold leading-tight text-navy-primary break-words">
                    {stat.title}
                  </span>

                  {/* Label — subtle and smaller */}
                  <span className="text-sm text-body/70 break-words leading-snug">
                    {stat.description}
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