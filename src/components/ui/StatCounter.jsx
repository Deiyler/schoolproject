import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'

function StatCounter({ end, suffix = '', label, duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (isInView) setStart(true)
  }, [isInView])

  return (
    <motion.div ref={ref} className="glass-card text-center">
      <p className="text-3xl font-bold gradient-text sm:text-4xl">
        {start ? <CountUp end={end} duration={duration} suffix={suffix} /> : `0${suffix}`}
      </p>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </motion.div>
  )
}

export default StatCounter
