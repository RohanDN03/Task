
type Destination = { id: string; title: string; image: string };

export default function DestinationsCarousal({ destinations }: { destinations: Destination[] }) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-sm font-semibold text-violet-700">Popular Destinations</h3>
        <h2 className="text-4xl font-extrabold text-violet-900 mt-2 mb-6">Bucket list meets bold discoveries</h2>

        <div className="flex gap-6 overflow-x-auto py-4 pb-6 -mx-6 px-6 scrollbar-hide">
          {destinations.map((d) => (
            <article
              key={d.id}
              className="relative min-w-[220px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[360px] h-[420px] rounded-lg flex-shrink-0"
            >
              <img
                src={d.image}
                alt={d.title}
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute inset-0 rounded-lg bg-black/35"></div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md">
                  {d.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
