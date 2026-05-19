import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import SafeImage from './ui/SafeImage'

function SigmaBearSection() {
  return (
    <AnimatedSection className="glass-card overflow-hidden p-0">
      <figure className="m-0 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="w-full bg-slate-100"
        >
          <SafeImage
            src="/sigma-bear.png"
            alt="Медведь за компьютером — режим полной концентрации при работе над проектом"
            className="mx-auto block h-auto w-full max-w-full object-contain"
            fallbackClassName="min-h-[12rem] w-full"
          />
        </motion.div>
      </figure>
    </AnimatedSection>
  )
}

export default SigmaBearSection
