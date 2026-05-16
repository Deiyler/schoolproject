import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import MobileBottomNav from './MobileBottomNav'
import ScrollProgress from './ScrollProgress'
import CursorGlow from './CursorGlow'

function Layout() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="relative min-h-screen pb-[calc(4.75rem+env(safe-area-inset-bottom))] xl:pb-0">
      <ScrollProgress />
      <CursorGlow />
      <Header scrolled={scrolled} />
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-4 sm:px-6 sm:pt-6 sm:pb-12 lg:px-8 xl:pb-16 xl:pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  )
}

export default Layout
