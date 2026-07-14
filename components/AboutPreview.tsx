import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

export default function AboutPreview() {
  return (
    <section className="bg-beige-warm py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — placeholder image */}
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
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <p className="text-sm text-white/50 font-medium">
                  Allied Shipping Team
                </p>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-heading">
              About Allied Shipping Agency
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-body">
              Allied Shipping Agency is a trusted cargo booking agency based in
              Lahore, Pakistan. With over 25 years of experience, we provide
              reliable sea freight and air freight solutions for exporters and
              importers.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-body">
              Our expertise covers full documentation support, FCL and LCL
              cargo, and seamless booking through a strong global network of
              shipping partners.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-md bg-navy-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-secondary"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}