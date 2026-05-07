import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, MoonStar, Sun, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/impact', label: 'Влияние ИИ' },
  { to: '/professions', label: 'Профессии и ИИ' },
  { to: '/advice', label: 'Мои советы' },
]

function Header({ isLight, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-lg ${
        isLight
          ? 'border-slate-300/60 bg-white/70'
          : 'border-white/10 bg-slate-950/60'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-4 md:px-6">
        <Link
          to="/"
          className="max-w-[10rem] bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-base font-bold leading-tight text-transparent sm:max-w-none sm:text-lg"
        >
          AI & Профессии
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${
                  isActive
                    ? isLight
                      ? 'bg-slate-200/90 text-slate-900'
                      : 'bg-white/20 text-white'
                    : ''
                } ${isLight ? 'text-slate-700 hover:bg-slate-200/70 hover:text-slate-900' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className={`rounded-xl border p-2.5 transition hover:scale-105 active:scale-95 ${
              isLight
                ? 'border-slate-300 bg-white/80 hover:bg-slate-200/80'
                : 'border-white/20 bg-white/10 hover:bg-white/20'
            }`}
            aria-label="Переключить тему"
          >
            {isLight ? <MoonStar size={18} /> : <Sun size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={`rounded-xl border p-2.5 active:scale-95 md:hidden ${
              isLight
                ? 'border-slate-300 bg-white/80'
                : 'border-white/20 bg-white/10'
            }`}
            aria-label="Открыть меню"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 z-30 bg-slate-950/40"
            onClick={() => setIsOpen(false)}
            aria-label="Закрыть меню"
          />
          <div
            className={`absolute left-0 right-0 top-full z-40 border-t px-3 pb-5 pt-3 shadow-2xl ${
              isLight
                ? 'border-slate-300/70 bg-white/95'
                : 'border-white/10 bg-slate-950/95'
            }`}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `nav-link py-3 text-base ${
                      isActive
                        ? isLight
                          ? 'bg-slate-200/90 text-slate-900'
                          : 'bg-white/20 text-white'
                        : ''
                    } ${isLight ? 'text-slate-700 hover:bg-slate-200/70 hover:text-slate-900' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Header
