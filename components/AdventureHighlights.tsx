export default function AdventureHighlights({ adventureHighlights }: { adventureHighlights: any[] }) {
  return (
    <section className="py-10 bg-[#f8f5f1]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-violet-900 mb-6">
          Small group adventures that bring the world closer
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {adventureHighlights.map((item) => (
            <div key={item.id} className="flex gap-4 items-start">
              <img
                src={item.icon}
                alt="feature icon"
                className="w-12 h-12 object-contain"
              />
              <p className="text-gray-700 text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
