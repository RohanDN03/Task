export default function Hero({ data }: { data: { eyebrow: string; title: string; cta: string } }) {
  return (
    <section className="bg-rose-100 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-violet-700">{data.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-violet-900 mt-2">{data.title}</h1>
        </div>
        <div>
          <button className="px-4 py-2 border border-violet-700 text-violet-700 rounded-md">{data.cta}</button>
        </div>
      </div>
    </section>
  )
}
