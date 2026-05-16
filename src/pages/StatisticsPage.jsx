import PageHeader from '../components/ui/PageHeader'
import AnimatedSection from '../components/AnimatedSection'
import StatCounter from '../components/ui/StatCounter'
import ProgressBar from '../components/ui/ProgressBar'
import { statCards, trends, automationBySector } from '../data/statistics'

function StatisticsPage() {
  const maxTrend = Math.max(...trends.map((t) => t.value))
  return (
    <div className="space-y-10">
      <PageHeader badge="Данные" title="Статистика" subtitle="Ключевые цифры о внедрении ИИ." />
      <AnimatedSection className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((s) => (<StatCounter key={s.label} end={s.value} suffix={s.suffix} label={s.label} />))}
      </AnimatedSection>
      <AnimatedSection className="glass-card">
        <h3 className="text-xl font-bold text-slate-900">Рост внедрения ИИ</h3>
        <div className="mt-6 flex h-48 items-end justify-between gap-3">
          {trends.map((t) => (
            <div key={t.year} className="flex flex-1 flex-col items-center gap-2">
              <div className="w-full min-h-[4px] rounded-t-xl bg-gradient-to-t from-violet-600 to-cyan-400" style={{ height: `${(t.value / maxTrend) * 100}%` }} />
              <span className="text-xs text-slate-600">{t.year}</span>
              <span className="text-sm font-bold text-violet-600">{t.value}%</span>
            </div>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection className="glass-card">
        <h3 className="text-xl font-bold text-slate-900">Автоматизация по отраслям</h3>
        <div className="mt-6 space-y-4">
          {automationBySector.map((r) => (<ProgressBar key={r.sector} label={r.sector} percent={r.percent} />))}
        </div>
      </AnimatedSection>
    </div>
  )
}
export default StatisticsPage
