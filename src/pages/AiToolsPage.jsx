import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import AnimatedSection from '../components/AnimatedSection'
import SafeImage from '../components/ui/SafeImage'
import { aiTools } from '../data/aiTools'

function AiToolsPage() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="space-y-10">
      <PageHeader
        badge="Инструменты"
        title="AI инструменты"
        subtitle="Популярные сервисы искусственного интеллекта и как их использовать в учёбе и работе."
      />

      <AnimatedSection className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aiTools.map((tool, i) => (
          <motion.article
            key={tool.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="glass-card-hover cursor-pointer overflow-hidden p-0"
            onClick={() => setSelected(tool)}
          >
            <div className="relative h-36">
              <SafeImage
                src={tool.image}
                alt={tool.name}
                className="h-full w-full object-cover"
              />
              <span
                className={`absolute left-3 top-3 rounded-lg bg-gradient-to-r ${tool.color} px-2 py-1 text-xs font-semibold text-white`}
              >
                {tool.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900">{tool.name}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-slate-600">{tool.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-violet-600">
                Подробнее →
              </span>
            </div>
          </motion.article>
        ))}
      </AnimatedSection>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/30 p-0 backdrop-blur-sm sm:items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-44 overflow-hidden sm:h-52">
                <SafeImage
                  src={selected.image}
                  alt={selected.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <span
                  className={`absolute left-4 top-4 rounded-lg bg-gradient-to-r ${selected.color} px-2 py-1 text-xs font-semibold text-white`}
                >
                  {selected.category}
                </span>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-md"
                  aria-label="Закрыть"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 pt-4">
                <h3 className="text-2xl font-bold text-slate-900">{selected.name}</h3>
                <p className="mt-3 text-slate-600">{selected.description}</p>
                <p className="mt-3 text-sm">
                  <span className="font-semibold text-slate-800">Для чего: </span>
                  {selected.purpose}
                </p>
                <ul className="mt-4 space-y-2">
                  {selected.pros.map((pro) => (
                    <li key={pro} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check size={16} className="shrink-0 text-emerald-500" />
                      {pro}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="primary-btn mt-6 w-full"
                >
                  Закрыть
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default AiToolsPage
