
export default function FeaturesGrid({ features }: { features: any[] }) {
  return (
    <section className="py-12 bg-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-sm font-semibold text-violet-700">Why travel with G Adventures</h3>
            <h2 className="text-4xl font-extrabold text-violet-900 mt-2">Six reasons you'll love us</h2>
          </div>

          <div>
           
<button className="px-4 py-2 rounded-full border border-violet-700 text-violet-700">Learn more →</button>

          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.id} className="bg-white rounded-lg p-6 border shadow-sm">
              <h4 className="font-semibold text-violet-900">{f.title}</h4>
              <p className="text-sm mt-2 text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
