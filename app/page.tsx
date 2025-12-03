import Hero from "@/components/Hero";
import PromosGrid from "@/components/PromosGrid";
import DestinationsCarousel from "@/components/DestinationsCarousal";
import FeaturesGrid from "@/components/FeaturesGrid";
import AdventureHighlights from "@/components/AdventureHighlights";

async function getData() {
  // Use VERCEL_URL (provided by Vercel in production) — do NOT rely on NEXT_PUBLIC_*
  const vercelHost = process.env.VERCEL_URL;
  const port = process.env.PORT ?? 3000;

  // Build absolute base URL:
  // - On Vercel: https://<VERCEL_URL>
  // - Locally: http://localhost:<port>
  const base = vercelHost ? `https://${vercelHost}` : `http://localhost:${port}`;
  const url = `${base}/api/data`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    // Throw a helpful error (includes status and body) so server logs show the real reason
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText} ${text}`);
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
