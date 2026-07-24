import { Rocket, Crosshair } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";

export default function VisionMission() {
  return (
    <section className="bg-beige-warm py-6 sm:py-10 lg:py-14">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Left — text */}
          <Reveal type="slide-left">
            <div className="flex flex-col gap-4 sm:gap-5">
              <span className="inline-block w-fit rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                Our Purpose
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-heading break-words">
                Driven by Trust. Focused on Your Success.
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-body break-words">
                Allied Shipping Agency is committed to providing reliable freight
                forwarding and cargo booking solutions that help businesses move
                goods across borders with confidence. We believe in building
                long-term relationships through transparency, professionalism and
                a genuine focus on our clients&rsquo; success.
              </p>
            </div>
          </Reveal>

          {/* Right — stacked cards */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Vision card */}
            <Reveal type="slide-right" delay={100}>
              <div className="rounded-2xl border border-border bg-white px-5 sm:px-7 py-6 sm:py-8 shadow-sm">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-primary/5">
                    <Rocket
                      className="h-6 w-6 text-navy-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-heading">
                      Vision
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-relaxed text-body break-words">
                      To become one of Pakistan&rsquo;s most trusted freight
                      forwarding and cargo booking partners by delivering
                      dependable logistics solutions and building long-term
                      relationships.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Mission card */}
            <Reveal type="slide-right" delay={200}>
              <div className="rounded-2xl border border-border bg-white px-5 sm:px-7 py-6 sm:py-8 shadow-sm">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-primary/5">
                    <Crosshair
                      className="h-6 w-6 text-navy-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-heading">
                      Mission
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-relaxed text-body break-words">
                      To provide efficient sea freight, air freight, cargo booking
                      and documentation services through professionalism,
                      transparency and a customer-first approach.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}