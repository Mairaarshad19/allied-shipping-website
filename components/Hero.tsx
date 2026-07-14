import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24 lg:py-32">
        {/* Left content */}
        <div className="flex flex-col gap-6">
          {/* Gold label */}
          <span className="inline-block w-fit rounded-full border border-gold px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gold">
            25+ Years of Experience
          </span>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-heading">
            Reliable Freight Forwarding & Cargo Booking Solutions
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed text-body max-w-lg">
            Allied Shipping Agency is a trusted freight forwarding and cargo
            booking partner based in Lahore, Pakistan. With 25+ years of
            experience, we specialise in sea and air freight across China,
            Malaysia, and Dubai.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="tel:04236293017"
              className="inline-flex items-center gap-2 rounded-md bg-navy-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-secondary"
            >
              <Phone size={18} />
              Call Now
            </Link>
            <Link
              href="https://wa.me/923286920284"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-navy-primary px-6 py-3 text-sm font-medium text-navy-primary transition-colors hover:bg-navy-primary hover:text-white"
            >
              <MessageCircle size={18} />
              WhatsApp
            </Link>
          </div>
        </div>

        {/* Right image placeholder */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-navy-secondary">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <svg
                className="mx-auto mb-4 h-16 w-16 text-white/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
              <p className="text-sm text-white/50 font-medium">
                Cargo Shipping
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}