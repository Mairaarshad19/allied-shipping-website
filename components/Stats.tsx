import { Ship, Warehouse, Globe, Mountain } from "lucide-react";
import Container from "./Container";

const STATS = [
  {
    icon: Ship,
    title: "25+",
    description: "Years Experience",
  },
  {
    icon: Warehouse,
    title: "Sea & Air",
    description: "Freight Services",
  },
  {
    icon: Globe,
    title: "China • Malaysia • Dubai",
    description: "Export Lanes",
  },
  {
    icon: Mountain,
    title: "Salt Export",
    description: "Specialist",
  },
];

export default function Stats() {
  return (
    <section className="bg-white pb-16 md:pb-24 lg:pb-28 -mt-6 md:-mt-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="flex flex-col items-center text-center gap-2 rounded-xl border border-border bg-white px-6 py-8 transition-shadow duration-200 hover:shadow-md"
              >
                <Icon className="h-8 w-8 text-navy-primary" strokeWidth={1.5} />
                <span className="text-xl md:text-2xl font-semibold leading-tight text-heading">
                  {stat.title}
                </span>
                <span className="text-sm text-body">{stat.description}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}