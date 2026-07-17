import { Phone, MessageCircle, Mail } from "lucide-react";
import Container from "./Container";

const CONTACTS = [
  {
    icon: Phone,
    label: "Call Now",
    value: "042-36293017",
    href: "tel:04236293017",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "0300-4018802",
    href: "https://wa.me/923004018802",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "arshad.alliedpk@gmail.com",
    href: "mailto:arshad.alliedpk@gmail.com",
  },
];

export default function CTA() {
  return (
    <section id="cta-section" className="bg-navy-primary py-12 md:py-16 lg:py-20">
      <Container>
        {/* Section header */}
        <div className="mb-8 md:mb-12 max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Ready to Ship Your Cargo?
          </h2>
          <p className="mt-3 text-base md:text-lg leading-relaxed text-white/70">
            Contact Allied Shipping Agency today for reliable sea freight, air
            freight, and documentation services.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {CONTACTS.map((contact) => {
            const Icon = contact.icon;

            const cardContent = (
              <div className="flex flex-col items-center text-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-7 transition-all duration-200 hover:bg-white/10 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium tracking-widest uppercase text-white/50">
                  {contact.label}
                </span>
                <span className="text-sm font-semibold text-white break-words max-w-full">
                  {contact.value}
                </span>
              </div>
            );

            if (contact.external) {
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <a key={contact.label} href={contact.href}>
                {cardContent}
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}