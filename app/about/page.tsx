import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import VisionMission from "@/components/VisionMission";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us | Allied Shipping Agency",
  description:
    "Learn about Allied Shipping Agency — a trusted freight forwarding and cargo booking agency in Lahore, Pakistan with over 25 years of experience.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16 bg-navy-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/containerImage.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              About Allied Shipping Agency
            </h1>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl mx-auto">
              For over 25 years, we have been Pakistan's trusted partner in
              sea freight, air freight, and cargo documentation — connecting
              businesses to global markets with reliability and integrity.
            </p>
          </div>
        </Container>
      </section>

      {/* Story section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-navy-primary shadow-lg">
              <Image
                src="/images/containerImage.jpg"
                alt="Shipping operations — Allied Shipping Agency"
                fill
                className="image-fade-in object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy-primary/15 to-navy-primary/10" />
            </div>
            <div className="flex flex-col gap-4 sm:gap-5">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-heading">
                Our Story
              </h2>
              <p className="text-base leading-relaxed text-body">
                Founded in Lahore, Allied Shipping Agency has grown from a small
                cargo booking office into a comprehensive freight forwarding
                agency serving exporters and importers across Pakistan. Our deep
                understanding of international shipping regulations, customs
                procedures, and logistics networks allows us to deliver
                seamless, cost-effective solutions.
              </p>
              <p className="text-base leading-relaxed text-body">
                We take pride in our long-standing relationships with global
                shipping lines, airlines, and local transport providers — giving
                our clients the confidence that their cargo is in safe hands
                from pickup to destination.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <Stats />

      {/* Why choose us */}
      <WhyChooseUs />

      {/* Vision & Mission */}
      <VisionMission />

      {/* CTA */}
      <CTA />
    </>
  );
}