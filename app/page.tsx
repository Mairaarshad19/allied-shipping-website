import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import ExportMarkets from "@/components/ExportMarkets";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutPreview from "@/components/AboutPreview";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <ExportMarkets />
      <WhyChooseUs />
      <AboutPreview />
      <CTA />
    </>
  );
}
