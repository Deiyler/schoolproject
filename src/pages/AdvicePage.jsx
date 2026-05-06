import { BookOpenText, BriefcaseBusiness, BrainCircuit } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const tips = [
  {
    icon: BrainCircuit,
    title: 'Как не зависеть от ИИ',
    text: 'Сначала пробуйте решать задачу самостоятельно, а ИИ используйте как проверку и источник идей. Так развивается мышление, а не копирование ответов.',
  },
  {
    icon: BookOpenText,
    title: 'Как использовать для учебы',
    text: 'Просите ИИ объяснять темы простыми словами, составлять план подготовки, карточки для повторения и примеры задач с решениями.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Как использовать для работы',
    text: 'Автоматизируйте рутину: черновики писем, поиск информации, структурирование задач. Главное - проверяйте факты и финальный результат.',
  },
]

function AdvicePage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <AnimatedSection className="glass-card">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Мои советы</h2>
        <p className="mt-4 max-w-3xl text-current/80">
          ИИ - это сильный инструмент. Он приносит максимальную пользу тогда,
          когда человек сохраняет критическое мышление и ответственность.
        </p>
      </AnimatedSection>

      <AnimatedSection className="space-y-3 sm:space-y-4">
        {tips.map((tip) => (
          <article
            key={tip.title}
            className="glass-card flex flex-col items-start gap-3 sm:flex-row sm:gap-4"
          >
            <div className="rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 p-2.5 sm:p-3">
              <tip.icon size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold sm:text-xl">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-current/80">
                {tip.text}
              </p>
            </div>
          </article>
        ))}
      </AnimatedSection>
    </div>
  )
}

export default AdvicePage
