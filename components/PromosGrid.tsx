import PromoCard from "./PromoCard";

export default function PromosGrid({ promos }: { promos: any[] }) {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {promos.map((p) => (
          <PromoCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  )
}
