import { Globe, Ship, ShieldCheck, Clock } from "lucide-react";
import Container from "./Container";

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
    <section className="bg-white relative z-10 pb-16 md:pb-20 lg:pb-24">
      {/* Visual divider */}
      <div className="mx-auto w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" />

      <Container className="-mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {STATS.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="flex flex-col items-center text-center gap-2 rounded-xl border border-border bg-white px-5 py-8 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
              >
                <Icon className="h-6 w-6 text-navy-primary" strokeWidth={1.5} />
                <span className="text-xl md:text-2xl font-semibold leading-tight text-heading">
                  {stat.title}
                </span>
                <span className="text-xs text-body">{stat.description}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
