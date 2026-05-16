import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react'
import Hero from '../components/home/Hero'
import AnimatedSection from '../components/AnimatedSection'
import { faqItems, timeline, quotes, prosCons } from '../data/homeExtras'

const quickLinks = [
  { to: '/future', label: 'Профессии будущего', icon: TrendingUp, color: 'from-violet-500 to-purple-600' },
  { to: '/tools', label: 'AI инструменты', icon: Zap, color: 'from-cyan-500 to-blue-600' },
  { to: '/quiz', label: 'Пройти тест', icon: Users, color: 'from-fuchsia-500 to-pink-600' },
]

function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <Hero />

      <AnimatedSection>
        <h2 className="section-title">Почему эта тема важна</h2>
        <p className="section-subtitle">
          Искусственный интеллект уже влияет на выбор профессии школьников.
          Понимание изменений помогает заранее развивать нужные навыки,
          уверенно строить карьеру и использовать технологии с пользой.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: 'Новые навыки',
              text: 'Аналитика, креативность и цифровая грамотность становятся базой.',
            },
            {
              title: 'Новые профессии',
              text: 'Появляются роли, связанные с данными, ИИ и автоматизацией.',
            },
            {
              title: 'Новая стратегия',
              text: 'Важно учиться постоянно и адаптироваться к изменениям рынка.',
            },
          ].map((point, i) => (
            <motion.article
              key={point.title}
              whileHover={{ y: -4 }}
              className="glass-card-hover"
            >
              <span className="text-xs font-bold text-violet-500">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{point.text}</p>
            </motion.article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="section-title">Интерактивные разделы</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {quickLinks.map((item) => (
            <Link key={item.to} to={item.to} className="group glass-card-hover block">
              <div
                className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-3 text-white shadow-md`}
              >
                <item.icon size={22} />
              </div>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700">
                {item.label}
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm text-violet-600">
                Открыть <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card">
          <h2 className="text-xl font-bold text-emerald-700">Плюсы ИИ</h2>
          <ul className="mt-4 space-y-2">
            {prosCons.pros.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-card">
          <h2 className="text-xl font-bold text-amber-700">Риски и вызовы</h2>
          <ul className="mt-4 space-y-2">
            {prosCons.cons.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="section-title">Развитие ИИ — краткий timeline</h2>
        <div className="relative mt-8 border-l-2 border-violet-200 pl-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative pb-8"
            >
              <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-violet-500 ring-4 ring-violet-100" />
              <p className="text-sm font-bold text-violet-600">{item.year}</p>
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="glass-card bg-gradient-to-br from-violet-50 to-cyan-50">
        <blockquote className="text-lg font-medium italic text-slate-700 sm:text-xl">
          «{quotes[0].text}»
        </blockquote>
        <p className="mt-3 text-sm text-slate-500">— {quotes[0].author}</p>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="section-title">FAQ</h2>
        <div className="mt-6 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group glass-card cursor-pointer [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex list-none items-center justify-between font-semibold text-slate-900">
                {item.q}
                <span className="text-violet-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-8 text-center text-white shadow-glow sm:p-12">
        <h2 className="text-2xl font-bold sm:text-3xl">Готовы узнать больше?</h2>
        <p className="mx-auto mt-3 max-w-lg text-violet-100">
          Пройдите тест и узнайте, насколько ваша будущая профессия устойчива к
          автоматизации.
        </p>
        <Link
          to="/quiz"
          className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-violet-700 shadow-lg transition hover:scale-105"
        >
          Начать тест <ArrowRight size={18} />
        </Link>
      </AnimatedSection>
    </div>
  )
}

export default HomePage
