import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { LayoutGrid } from 'lucide-react'
import { mobileTabs, mobileMorePaths } from '../data/navigation'
import MobileMoreSheet from './MobileMoreSheet'

function MobileBottomNav() {
  const [moreOpen, setMoreOpen] = useState(false)
  const location = useLocation()
  const isMoreActive = mobileMorePaths.includes(location.pathname)

  return (
    <>
      <nav
        className="mobile-bottom-nav fixed inset-x-0 bottom-0 z-50 xl:hidden"
        aria-label="Основная навигация"
      >
        <div className="mx-auto flex max-w-lg items-stretch justify-around px-1 pt-1.5">
          {mobileTabs.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `mobile-tab ${isActive ? 'mobile-tab-active' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={22} strokeWidth={isActive ? 2.25 : 2} />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}

          <button
            type="button"
            onClick={() => setMoreOpen(true)}
            className={`mobile-tab ${isMoreActive ? 'mobile-tab-active' : ''}`}
            aria-expanded={moreOpen}
            aria-haspopup="dialog"
          >
            <LayoutGrid size={22} />
            <span>Ещё</span>
            {isMoreActive ? (
              <span className="absolute right-2 top-1.5 h-2 w-2 rounded-full bg-violet-500 ring-2 ring-white" />
            ) : null}
          </button>
        </div>
      </nav>

      <MobileMoreSheet open={moreOpen} onClose={() => setMoreOpen(false)} />
    </>
  )
}

export default MobileBottomNav
