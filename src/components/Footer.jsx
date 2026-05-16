import { Link } from 'react-router-dom'
import { Brain, Code2, Mail } from 'lucide-react'
import { mainNav } from '../data/navigation'

function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/80 bg-white/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white">
                <Brain size={18} />
              </span>
              AI & Профессии
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Школьный проект на тему влияния искусственного интеллекта на рынок
              труда. 10 класс.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Разделы
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-1">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-slate-600 transition hover:text-violet-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Контакты
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com/Deiyler/schoolproject"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-violet-200 hover:text-violet-600"
                aria-label="GitHub"
              >
                <Code2 size={18} />
              </a>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400">
                <Mail size={18} />
              </span>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              © {new Date().getFullYear()} Школьный проект, 10 класс
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


