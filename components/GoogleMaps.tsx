import { MapPin, Phone, Smartphone, MessageCircle, Mail, ExternalLink } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Head Office",
    value: (
      <>
        Room #3, 1st Floor,
        <br />
        Rafiq Plaza (Near Divine Hotel),
        <br />
        Davis Road, Lahore
      </>
    ),
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "042-36293017",
    href: "tel:04236293017",
  },
  {
    icon: Smartphone,
    label: "Mobile",
    value: "0328-6920284",
    href: "tel:+923286920284",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "0328-6920284",
    href: "https://wa.me/923286920284?text=Hello%20Allied%20Shipping%20Agency,%20I%20would%20like%20to%20know%20more%20about%20your%20freight%20forwarding%20services.",
  },
  {
    icon: Mail,
    label: "Email",
    value: "docs@alliedshippingpk.com",
    href: "mailto:docs@alliedshippingpk.com",
  },
];

const MAP_URL =
  "https://www.google.com/maps?q=Room+%233+1st+Floor+Rafiq+Plaza+Near+Divine+Hotel+8+Davis+Road+Lahore+Pakistan&output=embed";

const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Room+%233+1st+Floor+Rafiq+Plaza+Near+Divine+Hotel+8+Davis+Road+Lahore+Pakistan";

export default function GoogleMaps() {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-20">
      <Container>
        {/* Header */}
        <Reveal>
          <div className="mx-auto mb-12 sm:mb-16 lg:mb-20 max-w-2xl text-center">
            <span className="inline-block w-fit rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-gold">
              Location
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-heading">
              Visit Our Office
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-body">
              We welcome you to visit our head office in Lahore or contact us for
              any freight forwarding and cargo booking inquiries.
            </p>
          </div>
        </Reveal>

        {/* Two-column layout — 60/40 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* Left — Map (3/5 ≈ 60%) */}
          <Reveal type="slide-left" className="lg:col-span-3">
            <div className="overflow-hidden rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <iframe
                title="Allied Shipping Agency Office Location"
                src={MAP_URL}
                width="100%"
                height="500"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </Reveal>

          {/* Right — Contact Card (2/5 ≈ 40%) */}
          <Reveal type="slide-right" delay={100} className="lg:col-span-2">
            <div
              className="rounded-2xl border border-border px-8 py-10 shadow-sm"
              style={{ backgroundColor: "#FFFCF6" }}
            >
              <h3 className="text-xl font-semibold text-heading">
                Get in Touch
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Reach out to us through any of the channels below.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                {CONTACT_ITEMS.map((item) => {
                  const Icon = item.icon;

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-start gap-4 transition-colors group"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8DCC4] transition-colors group-hover:bg-[#DCCFB4]">
                          <Icon
                            className="h-5 w-5 text-navy-primary"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="min-w-0 pt-1">
                          <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-body/60">
                            {item.label}
                          </p>
                          <p className="mt-0.5 text-[15px] font-medium text-heading transition-colors group-hover:text-navy-primary break-words">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    );
                  }

                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8DCC4]">
                        <Icon
                          className="h-5 w-5 text-navy-primary"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="min-w-0 pt-1">
                        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-body/60">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-[15px] font-medium text-heading break-words">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0D2A4D]"
              >
                Open in Google Maps
                <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}