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
    value: "0328-6920284",
    href: "https://wa.me/923286920284",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "docs@alliedshippingpk.com",
    href: "mailto:docs@alliedshippingpk.com",
  },
];

export default function CTA() {
  return (
    <section className="bg-navy-primary py-16 md:py-24 lg:py-28">
      <Container>
        {/* Section header */}
        <div className="mb-12 md:mb-16 max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Ready to Ship Your Cargo?
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-white/70">
            Contact Allied Shipping Agency today for reliable sea freight, air
            freight, and documentation services.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
          {CONTACTS.map((contact) => {
            const Icon = contact.icon;

            const cardContent = (
              <div className="flex flex-col items-center text-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-10 transition-all duration-200 hover:bg-white/10 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                  <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium tracking-widest uppercase text-white/50">
                  {contact.label}
                </span>
                <span className="text-lg font-semibold text-white">
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