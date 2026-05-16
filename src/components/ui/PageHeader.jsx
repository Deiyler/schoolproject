import { motion } from 'framer-motion'

function PageHeader({ badge, title, subtitle, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 sm:mb-10"
    >
      {badge ? <span className="badge mb-3">{badge}</span> : null}
      <h1 className="section-title">{title}</h1>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      {children}
    </motion.div>
  )
}

export default PageHeader
