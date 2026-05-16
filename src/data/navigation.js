import {
  Home,
  Sparkles,
  Briefcase,
  ClipboardCheck,
  TrendingUp,
  Wrench,
  BarChart3,
  Newspaper,
  Lightbulb,
  User,
} from 'lucide-react'

export const mainNav = [
  { to: '/', label: 'Главная' },
  { to: '/impact', label: 'Влияние ИИ' },
  { to: '/professions', label: 'Профессии и ИИ' },
  { to: '/future', label: 'Профессии будущего' },
  { to: '/tools', label: 'AI инструменты' },
  { to: '/quiz', label: 'Тест' },
  { to: '/stats', label: 'Статистика' },
  { to: '/news', label: 'Новости' },
  { to: '/advice', label: 'Советы' },
  { to: '/about', label: 'Об авторе' },
]

export const mobileTabs = [
  { to: '/', label: 'Главная', icon: Home },
  { to: '/impact', label: 'Влияние', icon: Sparkles },
  { to: '/professions', label: 'Профессии', icon: Briefcase },
  { to: '/quiz', label: 'Тест', icon: ClipboardCheck },
]

export const mobileMoreLinks = [
  {
    to: '/future',
    label: 'Профессии будущего',
    description: 'Зарплаты и востребованность',
    icon: TrendingUp,
    color: 'from-violet-500 to-purple-600',
  },
  {
    to: '/tools',
    label: 'AI инструменты',
    description: 'ChatGPT, Copilot и другие',
    icon: Wrench,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    to: '/stats',
    label: 'Статистика',
    description: 'Графики и цифры',
    icon: BarChart3,
    color: 'from-fuchsia-500 to-pink-600',
  },
  {
    to: '/news',
    label: 'Новости ИИ',
    description: 'Актуальные события',
    icon: Newspaper,
    color: 'from-amber-500 to-orange-600',
  },
  {
    to: '/advice',
    label: 'Советы',
    description: 'Как учиться с ИИ',
    icon: Lightbulb,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    to: '/about',
    label: 'Об авторе',
    description: 'Андрей Гущин, школа № 18',
    icon: User,
    color: 'from-indigo-500 to-violet-600',
  },
]

export const mobileMorePaths = mobileMoreLinks.map((item) => item.to)

export const heroStats = [
  { value: 40, suffix: '%', label: 'задач можно автоматизировать' },
  { value: 97, suffix: 'M', label: 'новых ролей к 2025 (прогноз)' },
  { value: 85, suffix: '%', label: 'компаний используют ИИ' },
]
