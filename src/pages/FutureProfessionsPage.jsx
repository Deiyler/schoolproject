import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/ui/PageHeader'
import AnimatedSection from '../components/AnimatedSection'
import ProgressBar from '../components/ui/ProgressBar'
import SafeImage from '../components/ui/SafeImage'
import { futureProfessions, filterCategories } from '../data/futureProfessions'

function FutureProfessionsPage() {
  const [filter, setFilter] = useState('all')

  const list = useMemo(
    () =>
      filter === 'all'
        ? futureProfessions
        : futureProfessions.filter((p) => p.category === filter),
    [filter],
  )

  return (
    <div className="space-y-10">
      <PageHeader
        badge="Карьера"
        title="Профессии будущего"
        subtitle="Профессии, которые активно растут вместе с развитием ИИ."
      />

      <AnimatedSection className="flex flex-wrap gap-2">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === cat.id
                ? 'bg-violet-600 text-white shadow-md'
                : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-violet-300'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((job, i) => (
          <motion.article
            key={job.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card-hover overflow-hidden p-0"
          >
            <div className="relative h-40 overflow-hidden">
              <SafeImage
                src={job.image}
                alt={job.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              <span className="absolute bottom-3 left-3 rounded-lg bg-white/90 px-2 py-1 text-xs font-semibold text-violet-700">
                AI {job.aiLevel}%
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
              <p className="mt-1 text-sm font-medium text-violet-600">{job.salary}</p>
              <p className="mt-2 text-sm text-slate-600">{job.description}</p>
              <div className="mt-4">
                <ProgressBar label="Востребованность" percent={job.demand} />
              </div>
            </div>
          </motion.article>
        ))}
      </AnimatedSection>
    </div>
  )
}

export default FutureProfessionsPage
