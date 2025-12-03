import Hero from "@/components/Hero";
import PromosGrid from "@/components/PromosGrid";
import DestinationsCarousel from "@/components/DestinationsCarousal";
import FeaturesGrid from "@/components/FeaturesGrid";
import AdventureHighlights from "@/components/AdventureHighlights";

// Force dynamic rendering so API routes are available at runtime
export const dynamic = "force-dynamic";

async function getData() {
  // Use VERCEL_URL in production, localhost in development
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${process.env.PORT || 3000}`;

  const res = await fetch(`${baseUrl}/api/data`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  const hero = data?.hero ?? { eyebrow: "", title: "", cta: "" };
  const promos = data?.promos ?? [];
  const destinations = data?.destinations ?? [];
  const features = data?.features ?? [];
  const adventureHighlights = data?.adventureHighlights ?? [];

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
