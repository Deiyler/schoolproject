import PageHeader from '../components/ui/PageHeader'
import AnimatedSection from '../components/AnimatedSection'
import { newsItems } from '../data/news'

function NewsPage() {
  return (
    <div className="space-y-10">
      <PageHeader badge="Новости" title="Новости ИИ" subtitle="Актуальные события в мире ИИ и рынка труда." />
      <AnimatedSection className="grid gap-6 md:grid-cols-2">
        {newsItems.map((item) => (
          <article key={item.title} className="glass-card-hover overflow-hidden p-0">
            <div className="relative h-44 overflow-hidden">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
              <span className="absolute left-3 top-3 rounded-lg bg-white/90 px-2 py-1 text-xs font-semibold text-violet-700">{item.tag}</span>
            </div>
            <div className="p-5">
              <p className="text-xs text-slate-500">{item.date}</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.excerpt}</p>
            </div>
          </article>
        ))}
      </AnimatedSection>
    </div>
  )
}
export default NewsPage
