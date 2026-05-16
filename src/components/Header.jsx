import { Link, NavLink } from 'react-router-dom'
import { mainNav } from '../data/navigation'
import AuthorAvatar from './AuthorAvatar'

function Header({ scrolled }) {
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-xl'
          : 'border-b border-transparent bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2 font-bold text-slate-900">
          <AuthorAvatar />
          <span className="truncate gradient-text text-sm sm:text-base">AI & Профессии</span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {mainNav.slice(0, 6).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="group relative">
            <button type="button" className="nav-link">
              Ещё ▾
            </button>
            <div className="invisible absolute right-0 top-full z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="min-w-[180px] rounded-2xl border border-slate-100 bg-white p-2 shadow-card">
                {mainNav.slice(6).map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-2 text-sm ${
                        isActive
                          ? 'bg-violet-50 text-violet-700'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
