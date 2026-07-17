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
    <section className="bg-white relative z-10 pb-12 sm:pb-16 lg:pb-24">
      {/* Visual divider */}
      <div className="mx-auto w-px h-10 sm:h-12 bg-gradient-to-b from-transparent via-border to-transparent" />

      <Container className="mt-10 sm:mt-16 md:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-8">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Reveal
                key={stat.title}
                type="fade-up"
                delay={index * 100}
              >
                <div className="flex flex-col items-center text-center gap-2 rounded-xl border border-border bg-white px-4 sm:px-5 py-6 sm:py-8 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
                  <Icon className="h-6 w-6 text-navy-primary" strokeWidth={1.5} />
                  <span className="text-xl md:text-2xl font-semibold leading-tight text-heading break-words">
                    {stat.title}
                  </span>
                  <span className="text-xs text-body break-words">{stat.description}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}