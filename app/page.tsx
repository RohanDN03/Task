import Hero from "@/components/Hero";
import PromosGrid from "@/components/PromosGrid";
import DestinationsCarousel from "@/components/DestinationsCarousal";
import FeaturesGrid from "@/components/FeaturesGrid";
import AdventureHighlights from "@/components/AdventureHighlights";



async function getData() {
  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  const port = process.env.PORT ?? 3000;
  const base =
    vercelUrl && vercelUrl.length > 0
      ? `https://${vercelUrl}`
      : `http://localhost:${port}`;
  const url = `${base}/api/data`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch /api/data: " + res.statusText);
  }
  return res.json();
}

export default async function Page() 
 {
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
