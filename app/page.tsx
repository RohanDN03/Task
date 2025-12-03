import Hero from "@/components/Hero";
import PromosGrid from "@/components/PromosGrid";
import DestinationsCarousel from "@/components/DestinationsCarousal";
import FeaturesGrid from "@/components/FeaturesGrid";
import AdventureHighlights from "@/components/AdventureHighlights";

// Inline data to avoid fetch issues during build
function getData() {
  return {
    hero: {
      eyebrow: 'Black Friday travel deals',
      title: 'Our biggest sale of the year',
      cta: 'Shop the deals'
    },
    promos: [
      { id: 1, title: 'Antarctica Classic in Depth', subtitle: 'Marine - Ushuaia to Ushuaia', days: '13 days', priceFrom: '$8,259', date: 'Dec 01, 2025', image: "https://images.unsplash.com/photo-1670285247150-03442f9ac5e2?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 2, title: 'Torres del Paine - The W Trek', subtitle: 'Active - Puerto Natales to Puerto Natales', days: '6 days', priceFrom: '$2,507', date: 'Apr 18, 2026', image: "https://images.unsplash.com/photo-1648953490889-7de7775ee105?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 3, title: 'Serengeti to Victoria Falls', subtitle: '18-to-thirtysomethings', days: '20 days', priceFrom: '$2,484', date: 'Dec 15, 2025', image: "https://images.unsplash.com/photo-1546149267-3cd7286e4b53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 4, title: 'Temples & Trails', subtitle: 'Japan Highlights', days: '10 days', priceFrom: '$1,299', date: 'May 01, 2026', image: "https://images.unsplash.com/photo-1674382080092-9692db5a797f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ],
    features: [
      { id: 'f1', title: 'Guides so good we call them CEOs', description: 'Our Chief Experience Officers...' },
      { id: 'f2', title: 'Small groups, lots of passports', description: 'Small groups mean big connections...' },
      { id: 'f3', title: 'Immersive experiences are how we roll', description: 'Get hands-on with culture, food...' },
      { id: 'f4', title: 'Doing good has never been so fun', description: 'Travel that helps people, places...' },
      { id: 'f5', title: 'Book with all the confidence in the world', description: 'Flexible policies, guaranteed departures...' },
      { id: 'f6', title: 'As ungrouped as it gets', description: 'The safety of a group, with freedom...' }
    ],
    destinations: [
      { id: "d1", title: "Antarctica", image: "https://images.unsplash.com/photo-1603548746365-0c7a1583d826?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: "d2", title: "Mexico", image: "https://images.unsplash.com/photo-1568402102990-bc541580b59f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: "d3", title: "Peru", image: "https://images.unsplash.com/photo-1532996152552-eaffc4edfc1a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: "d4", title: "Scotland", image: "https://images.unsplash.com/photo-1571936804022-90d128047136?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ],
    adventureHighlights: [
      { id: 1, icon: "/icons/community.svg", text: "Building community and redefining travel since 1990." },
      { id: 2, icon: "/icons/traveller.svg", text: "For every traveller. On every continent. Yup, even Antarctica." },
      { id: 3, icon: "/icons/heart.svg", text: "Uplifting communities everywhere we go. Period." }
    ]
  };
}

export default function Page() {
  const data = getData();

  const hero = data.hero;
  const promos = data.promos;
  const destinations = data.destinations;
  const features = data.features;
  const adventureHighlights = data.adventureHighlights;

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
