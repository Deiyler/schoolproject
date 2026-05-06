import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'

function HomePage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <AnimatedSection className="glass-card overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-3xl font-extrabold leading-tight text-transparent sm:text-4xl md:text-6xl"
        >
          Влияние искусственного интеллекта на рынок труда
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-5 max-w-3xl text-base text-current/80 md:text-lg"
        >
          Этот сайт - школьный проект о том, как ИИ меняет профессии, создаёт
          новые возможности и почему важно использовать технологии разумно.
        </motion.p>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
          <Link to="/impact" className="primary-btn">
            Изучить влияние ИИ
          </Link>
          <Link
            to="/professions"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/20 sm:w-auto sm:px-5 sm:text-base"
          >
            Профессии и ИИ
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="glass-card">
        <h2 className="text-2xl font-bold sm:text-3xl">Почему эта тема важна</h2>
        <p className="mt-3 text-sm leading-relaxed text-current/80 sm:text-base">
          Искусственный интеллект уже влияет на выбор профессии школьников.
          Понимание изменений помогает заранее развивать нужные навыки,
          уверенно строить карьеру и использовать технологии с пользой.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
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
          ].map((point) => (
            <article
              key={point.title}
              className="rounded-xl border border-white/20 bg-white/5 p-4"
            >
              <h3 className="text-base font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm text-current/75">{point.text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}

export default HomePage
