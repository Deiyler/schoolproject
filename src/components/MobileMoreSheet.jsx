import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { mobileMoreLinks } from '../data/navigation'

function MobileMoreSheet({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm xl:hidden"
            onClick={onClose}
            aria-label="Закрыть меню"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Дополнительные разделы"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="fixed inset-x-0 bottom-0 z-[70] max-h-[85vh] overflow-hidden rounded-t-3xl border border-slate-200 bg-white shadow-2xl xl:hidden"
            style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
          >
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.y > 80 || info.velocity.y > 400) onClose()
              }}
              className="flex flex-col"
            >
              <div className="flex justify-center pt-3 pb-1">
                <span className="h-1 w-10 rounded-full bg-slate-200" />
              </div>

              <div className="flex items-center justify-between border-b border-slate-100 px-5 pb-4 pt-1">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Разделы</h2>
                  <p className="text-sm text-slate-500">Выберите страницу</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600"
                  aria-label="Закрыть"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="overflow-y-auto px-4 pb-4 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  {mobileMoreLinks.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `mobile-nav-card ${isActive ? 'mobile-nav-card-active' : ''}`
                      }
                    >
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-md`}
                      >
                        <item.icon size={22} strokeWidth={2} />
                      </span>
                      <span className="mt-3 block text-sm font-semibold leading-tight text-slate-900">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-xs leading-snug text-slate-500">
                        {item.description}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
}

export default MobileMoreSheet
