import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import SafeImage from './ui/SafeImage'

function SigmaBearSection() {
  return (
    <AnimatedSection className="glass-card p-2 sm:p-3">
      <figure className="m-0 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="w-full overflow-hidden rounded-xl bg-slate-900/5"
        >
          <SafeImage
            src="/sigma-bear.png"
            alt="Медведь за компьютером — режим полной концентрации при работе над проектом"
            className="mx-auto block h-auto w-full max-h-none object-contain object-center"
            fallbackClassName="min-h-[12rem] w-full"
          />
        </motion.div>
      </figure>
    </AnimatedSection>
  )
}

export default SigmaBearSection
