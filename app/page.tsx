import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import ExportMarkets from "@/components/ExportMarkets";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import AboutPreview from "@/components/AboutPreview";
import VisionMission from "@/components/VisionMission";
import CTA from "@/components/CTA";
import GoogleMaps from "@/components/GoogleMaps";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <ExportMarkets />
      <WhyChooseUs />
      <Testimonials />
      <AboutPreview />
      <VisionMission />
      <CTA />
      <GoogleMaps />
    </>
  );
}
