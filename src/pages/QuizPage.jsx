import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/ui/PageHeader'
import AnimatedSection from '../components/AnimatedSection'
import ProgressBar from '../components/ui/ProgressBar'
import { quizQuestions, getQuizResult } from '../data/quiz'

function QuizPage() {
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState([])
  const [finished, setFinished] = useState(false)
  const current = quizQuestions[step]
  const avg = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0
  const result = finished ? getQuizResult(avg) : null

  const pick = (score) => {
    const next = [...scores, score]
    setScores(next)
    if (step >= quizQuestions.length - 1) setFinished(true)
    else setStep(step + 1)
  }

  const reset = () => { setStep(0); setScores([]); setFinished(false) }

  return (
    <div className="space-y-8">
      <PageHeader badge="Интерактив" title="Заменит ли ИИ вашу профессию?" subtitle="Ответьте на 5 вопросов и получите оценку риска автоматизации." />
      {!finished ? (
        <AnimatedSection className="glass-card mx-auto max-w-2xl">
          <p className="text-sm font-medium text-violet-600">Вопрос {step + 1} из {quizQuestions.length}</p>
          <ProgressBar label="Прогресс" percent={Math.round(((step + 1) / quizQuestions.length) * 100)} />
          <h3 className="mt-6 text-xl font-bold text-slate-900">{current.question}</h3>
          <div className="mt-6 space-y-3">
            {current.options.map((opt) => (
              <button key={opt.text} type="button" onClick={() => pick(opt.score)} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium transition hover:border-violet-300 hover:bg-violet-50">
                {opt.text}
              </button>
            ))}
          </div>
        </AnimatedSection>
      ) : (
        <AnimatedSection className="glass-card mx-auto max-w-2xl text-center">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-3xl font-bold text-white shadow-glow">
            {result.percent}%
          </motion.div>
          <h3 className="mt-6 text-2xl font-bold">{result.title}</h3>
          <p className="mt-3 text-slate-600">{result.text}</p>
          <ul className="mt-6 space-y-2 text-left text-sm">{result.tips.map((t) => <li key={t} className="rounded-xl bg-violet-50 px-4 py-2">{t}</li>)}</ul>
          <button type="button" onClick={reset} className="primary-btn mt-8">Пройти снова</button>
        </AnimatedSection>
      )}
    </div>
  )
}
export default QuizPage
