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
    <section className="bg-white relative z-10 pb-12 md:pb-16 lg:pb-20">
      <Container className="-mt-14 md:-mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="flex flex-col items-center text-center gap-2 rounded-xl border border-border bg-white px-4 py-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
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