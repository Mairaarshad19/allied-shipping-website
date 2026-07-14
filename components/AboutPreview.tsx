import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

export default function AboutPreview() {
  return (
    <section className="bg-beige-warm py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — placeholder image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-navy-secondary to-navy-primary shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <svg
                  className="mx-auto mb-4 h-20 w-20 text-white/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 4.5a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V4.5Z"
                    strokeWidth={0.75}
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 9.75h2.25M7.5 12.75h2.25M7.5 15.75h2.25M12 9.75h2.25M12 12.75h2.25M12 15.75h2.25"
                    strokeWidth={0.5}
                  />
                </svg>
                <p className="text-sm text-white/40 font-medium tracking-wider uppercase">
                  Our Office & Team
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
                className="inline-flex items-center gap-2.5 rounded-lg bg-navy-primary px-7 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-navy-secondary hover:shadow-md"
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