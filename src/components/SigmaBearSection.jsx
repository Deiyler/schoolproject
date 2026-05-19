import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import SafeImage from './ui/SafeImage'

function SigmaBearSection() {
  return (
    <AnimatedSection className="glass-card overflow-hidden p-0">
      <figure className="m-0">
        <div className="relative w-full overflow-hidden bg-slate-900">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto aspect-[4/3] max-h-[min(72vh,22rem)] w-full sm:aspect-[16/10] sm:max-h-[28rem] md:max-h-[32rem]"
          >
            <SafeImage
              src="/sigma-bear.png"
              alt="Медведь за компьютером — режим полной концентрации при работе над проектом"
              className="absolute inset-0 h-full w-full object-cover object-[center_40%] sm:object-[center_35%]"
              fallbackClassName="absolute inset-0 min-h-[12rem]"
            />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent px-4 pb-4 pt-16 sm:px-6 sm:pb-5 sm:pt-20"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                <Zap size={14} className="text-amber-300" aria-hidden />
                Sigma mode
              </span>
              <figcaption className="mt-2 max-w-xl text-sm font-medium leading-snug text-white sm:text-base">
                Когда дедлайн по проекту близко — включается режим полной концентрации за
                клавиатурой.
              </figcaption>
            </motion.div>
          </motion.div>
        </div>
      </figure>
    </AnimatedSection>
  )
}

export default SigmaBearSection
