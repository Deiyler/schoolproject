import { motion } from 'framer-motion'
import { Coffee, Keyboard, Zap } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import SafeImage from './ui/SafeImage'

const focusPoints = [
  'Собрать факты про ИИ и профессии — без паники и без мемов в зачётку.',
  'Проверить, что на телефоне всё читается так же хорошо, как на компьютере.',
  'Сдать проект вовремя и не отвлекаться на лишние вкладки в браузере.',
]

function SigmaBearSection() {
  return (
    <AnimatedSection className="glass-card min-w-0 overflow-hidden p-0">
      <figure className="m-0 w-full min-w-0 p-2 sm:p-3">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="w-full min-w-0 overflow-hidden rounded-lg bg-slate-900/5 sm:rounded-xl"
        >
          <SafeImage
            src="/sigma-bear.png"
            alt="Медведь за компьютером — режим полной концентрации при работе над проектом"
            className="mx-auto block h-auto w-full max-w-full object-contain object-center"
            fallbackClassName="min-h-[10rem] w-full sm:min-h-[12rem]"
          />
        </motion.div>
      </figure>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="min-w-0 border-t border-slate-100 bg-gradient-to-br from-slate-50 to-violet-50/80 px-4 py-5 sm:px-8 sm:py-7"
      >
        <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-violet-100 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-violet-700 sm:px-3 sm:text-xs">
          <Zap size={13} className="shrink-0 text-amber-500 sm:h-3.5 sm:w-3.5" aria-hidden />
          Sigma mode
        </span>
        <h3 className="mt-2.5 text-base font-bold leading-snug text-slate-900 sm:mt-3 sm:text-xl">
          Когда дедлайн по проекту близко
        </h3>
        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-slate-600 sm:mt-3 sm:text-base">
          Этот медведь — шутливый символ того, как я работал над сайтом: спокойно, без суеты,
          но с полной отдачей. Пока он «сидит за клавиатурой», на экране — не игры, а разделы
          про искусственный интеллект, профессии будущего и советы для школьников. Такой же
          режим концентрации нужен и тем, кто хочет разобраться, как ИИ меняет рынок труда —
          главное не отвлекаться и доводить дело до конца.
        </p>
        <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
          {focusPoints.map((point) => (
            <li
              key={point}
              className="flex min-w-0 gap-2.5 text-[0.9375rem] leading-snug text-slate-700 sm:gap-3 sm:text-base sm:leading-relaxed"
            >
              <Keyboard
                size={17}
                className="mt-0.5 shrink-0 text-violet-500 sm:h-[18px] sm:w-[18px]"
                aria-hidden
              />
              <span className="min-w-0 break-words">{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex flex-col gap-2 rounded-lg border border-violet-100 bg-white/80 px-3 py-3 text-[0.9375rem] leading-relaxed text-slate-600 sm:mt-5 sm:flex-row sm:items-start sm:gap-2.5 sm:rounded-xl sm:px-4 sm:text-base">
          <Coffee
            size={17}
            className="shrink-0 text-amber-600 sm:mt-0.5 sm:h-[18px] sm:w-[18px]"
            aria-hidden
          />
          <span className="min-w-0 break-words">
            <strong className="text-slate-900">P.S.</strong> Если узнаёте себя в этом медведе
            перед сдачей контрольной или проекта — вы на правильном пути. Осталось только
            нажать «сохранить» и показать работу учителю.
          </span>
        </p>
      </motion.div>
    </AnimatedSection>
  )
}

export default SigmaBearSection
