import Container from "./Container";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    rating: "★★★★★",
    author: "Textile Exporter — Faisalabad",
    text: "Professional communication, competitive freight rates, and timely cargo bookings. A dependable logistics partner.",
  },
  {
    rating: "★★★★★",
    author: "Sports Goods Exporter — Sialkot",
    text: "Documentation was handled efficiently, and our shipments were booked without delays. Highly recommended.",
  },
  {
    rating: "★★★★★",
    author: "Rice Exporter — Karachi",
    text: "Excellent coordination, transparent communication, and reliable service from booking to shipment.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-6 sm:py-10 lg:py-14">
      <Container>
        {/* Section header */}
        <Reveal type="fade-up">
          <div className="mb-6 sm:mb-12 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-heading">
              What Our Clients Say
            </h2>
            <p className="mt-3 text-base md:text-lg text-body leading-relaxed">
              Hear from exporters who trust Allied Shipping for their cargo
              booking needs.
            </p>
          </div>
        </Reveal>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {TESTIMONIALS.map((item, index) => (
            <Reveal
              key={item.author}
              type="fade-up"
              delay={index * 100}
            >
              <div className="flex flex-col gap-3 sm:gap-4 rounded-xl border border-border bg-white px-5 sm:px-6 py-6 sm:py-7 shadow-sm transition-shadow duration-200 hover:shadow-md h-full">
                <span className="text-base tracking-wider text-gold">
                  {item.rating}
                </span>
                <p className="text-sm text-body leading-relaxed break-words">&ldquo;{item.text}&rdquo;</p>
                <span className="text-xs font-semibold text-heading break-words">
                  — {item.author}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}