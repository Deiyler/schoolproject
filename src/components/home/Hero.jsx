import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { heroStats } from '../../data/navigation'
import StatCounter from '../ui/StatCounter'
import SafeImage from '../ui/SafeImage'

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/50 p-6 shadow-soft backdrop-blur-xl sm:p-10 md:p-12">
      <motion.div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" animate={{ scale: [1.1, 1, 1.1] }} transition={{ duration: 7, repeat: Infinity }} />
      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="badge mb-4 inline-flex items-center gap-1"><Sparkles size={14} /> Школьный проект · 10 класс</span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Влияние <span className="gradient-text">искусственного интеллекта</span> на рынок труда
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Этот сайт — школьный проект о том, как ИИ меняет профессии, создаёт новые возможности и почему важно использовать технологии разумно.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/impact" className="primary-btn">Изучить влияние ИИ <ArrowRight size={18} /></Link>
            <Link to="/quiz" className="secondary-btn">Пройти тест</Link>
          </div>
        </motion.div>
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="relative hidden lg:block">
          <div className="img-overlay-card group aspect-[4/3] shadow-glow">
            <SafeImage src="/ai-tools/chatgpt.jpg" alt="ИИ" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 via-transparent to-transparent" />
          </div>
          <motion.div className="absolute -bottom-4 -left-4 glass-card max-w-[200px] p-4 shadow-glow" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <p className="text-xs font-medium text-violet-600">AI + Человек</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">Будущее за совместной работой</p>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="relative mt-10 grid gap-4 sm:grid-cols-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        {heroStats.map((stat) => (
          <StatCounter key={stat.label} end={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </motion.div>
    </section>
  )
}

export default Hero
