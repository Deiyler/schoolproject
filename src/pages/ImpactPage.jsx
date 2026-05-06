import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const cards = [
  {
    title: 'Какие профессии исчезают',
    text: 'Рутинные задачи постепенно автоматизируются: кассиры, операторы ввода данных, часть административных ролей.',
  },
  {
    title: 'Какие профессии появляются',
    text: 'Растёт спрос на специалистов по данным, разработчиков ИИ, инженеров по автоматизации и цифровых наставников.',
  },
  {
    title: 'Плюсы и минусы',
    text: 'Плюсы: рост эффективности и новые карьерные пути. Минусы: риск сокращений и необходимость постоянного обучения.',
  },
]

function ImpactPage() {
  const [active, setActive] = useState(0)

  return (
    <div className="space-y-6 sm:space-y-8">
      <AnimatedSection className="glass-card">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Влияние ИИ на рынок труда</h2>
        <p className="mt-4 max-w-3xl text-current/80">
          Искусственный интеллект не просто заменяет людей - он меняет структуру
          рынка труда. Важнее всего не сопротивляться изменениям, а учиться новым
          навыкам и использовать ИИ как помощника.
        </p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-4 md:grid-cols-3">
        {cards.map((item) => (
          <article key={item.title} className="glass-card">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-current/80">{item.text}</p>
          </article>
        ))}
      </AnimatedSection>

      <AnimatedSection className="glass-card">
        <h3 className="text-xl font-semibold sm:text-2xl">Подробнее (читать далее)</h3>
        <div className="mt-4 space-y-3">
          {[
            {
              title: 'Почему важно развивать soft skills?',
              content:
                'Навыки общения, командной работы и критического мышления сложнее автоматизировать. Они помогают оставаться востребованным специалистом.',
            },
            {
              title: 'Что делать школьнику уже сейчас?',
              content:
                'Осваивать цифровую грамотность, пробовать ИИ-инструменты, изучать английский и базовое программирование, участвовать в проектах.',
            },
            {
              title: 'ИИ заменит всех?',
              content:
                'Скорее нет. ИИ заменяет отдельные функции, но усиливает человека в творческих и аналитических задачах.',
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/20 bg-white/5"
            >
              <button
                type="button"
                onClick={() => setActive(active === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left sm:px-4"
              >
                <span className="text-sm font-medium sm:text-base">{item.title}</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${active === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  active === index ? 'grid-rows-[1fr] pb-3' : 'grid-rows-[0fr]'
                }`}
              >
                <p className="overflow-hidden px-4 text-sm text-current/80">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}

export default ImpactPage
