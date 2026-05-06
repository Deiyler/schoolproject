import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const professions = [
  {
    title: 'Программисты',
    short: 'Используют ИИ для генерации кода, тестов и ускорения разработки.',
    full: 'ИИ помогает писать шаблонный код, находить ошибки и генерировать документацию. Но важно понимать архитектуру и проверять результат вручную.',
  },
  {
    title: 'Врачи',
    short: 'ИИ помогает анализировать снимки и ускоряет диагностику.',
    full: 'Системы ИИ выявляют аномалии на КТ/МРТ и помогают в прогнозировании заболеваний, но финальное решение остаётся за врачом.',
  },
  {
    title: 'Дизайнеры',
    short: 'Генерируют идеи, макеты и референсы с помощью ИИ.',
    full: 'Нейросети ускоряют поиск визуальных концепций, создают черновые варианты интерфейсов и иллюстраций, а дизайнер дорабатывает стиль.',
  },
  {
    title: 'Учителя',
    short: 'Используют ИИ для подготовки материалов и персонализации обучения.',
    full: 'ИИ помогает создавать тесты, конспекты и адаптированные задания для учеников разного уровня, экономя время учителя.',
  },
]

function ProfessionsPage() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="space-y-6 sm:space-y-8">
      <AnimatedSection className="glass-card">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Как профессии используют ИИ
        </h2>
        <p className="mt-4 max-w-3xl text-current/80">
          Нажмите на карточку, чтобы увидеть подробное описание и понять, как ИИ
          помогает специалистам в реальной работе.
        </p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {professions.map((job) => (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            key={job.title}
            type="button"
            onClick={() => setSelected(job)}
            className="glass-card text-left active:scale-[0.99]"
          >
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="mt-3 text-sm text-current/80">{job.short}</p>
            <span className="mt-5 inline-block text-sm font-semibold text-blue-300">
              Подробнее
            </span>
          </motion.button>
        ))}
      </AnimatedSection>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/75 p-2 sm:items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/20 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl sm:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <h3 className="text-xl font-bold sm:text-2xl">{selected.title}</h3>
              <p className="mt-3 text-sm text-slate-200/90 sm:mt-4 sm:text-base">{selected.full}</p>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="primary-btn mt-6"
              >
                Закрыть
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default ProfessionsPage
