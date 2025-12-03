import Hero from "@/components/Hero";
import PromosGrid from "@/components/PromosGrid";
import DestinationsCarousel from "@/components/DestinationsCarousal";
import FeaturesGrid from "@/components/FeaturesGrid";
import AdventureHighlights from "@/components/AdventureHighlights";
import { siteData } from "@/lib/data";

// Data is imported from a shared module that's also used by API routes
// This ensures consistency and avoids fetch issues during SSR

export default function Page() {
  const { hero, promos, destinations, features, adventureHighlights } = siteData;

  return (
    <main className="min-h-screen bg-rose-50">
      <Hero data={hero} />

      <PromosGrid promos={promos} />
      <AdventureHighlights adventureHighlights={adventureHighlights} />
      <DestinationsCarousel destinations={destinations} />

      <FeaturesGrid features={features} />
    </main>
  );
}
