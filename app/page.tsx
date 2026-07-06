import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/experience-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { RegionSection } from "@/components/sections/amenities-section";
import { BookingSection } from "@/components/sections/booking-section";

export default function Home() {
  return (
    <main className="space-y-24 pb-24">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <RegionSection />
      <BookingSection />
    </main>
  );
}
