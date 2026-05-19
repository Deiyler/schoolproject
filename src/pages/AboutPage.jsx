import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  User,
  GraduationCap,
  School,
  BookOpen,
  Sparkles,
  Heart,
  MapPin,
  ArrowRight,
} from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import AnimatedSection from '../components/AnimatedSection'
import AuthorAvatar from '../components/AuthorAvatar'
import SigmaBearSection from '../components/SigmaBearSection'

const facts = [
  {
    icon: User,
    title: 'Автор проекта',
    text: 'Андрей Гущин — ученик 10 класса, который интересуется технологиями, будущим профессий и тем, как искусственный интеллект меняет мир вокруг нас.',
  },
  {
    icon: School,
    title: 'Образование',
    text: 'Учусь в МБОУ СОШ № 18 города Новокузнецка. Школа даёт прочную базу по информатике, обществознанию и умению работать с информацией — всё это пригодилось при создании сайта.',
  },
  {
    icon: GraduationCap,
    title: 'Научный руководитель',
    text: 'Проект подготовлен и представлен учительнице Лопатневой Марине Валерьевне. Её поддержка, замечания и помощь в оформлении работы помогли довести материал до понятного и аккуратного вида.',
  },
]

const projectPoints = [
  'Изучить, как ИИ влияет на профессии, которые нас окружают сегодня и которые появятся завтра.',
  'Собрать понятные примеры: от программистов и врачей до новых цифровых специальностей.',
  'Показать плюсы и риски технологий без упрощений и запугивания.',
  'Сделать сайт удобным для одноклассников, учителей и всех, кто хочет разобраться в теме.',
]

function AboutPage() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <PageHeader
        badge="Автор"
        title="Обо мне"
        subtitle="Кратко о создателе школьного проекта «Влияние искусственного интеллекта на рынок труда»."
      />

      <AnimatedSection>
        <div className="glass-card overflow-hidden p-0">
          <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-500 px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" aria-hidden />
            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <AuthorAvatar className="h-24 w-24 sm:h-28 sm:w-28" ring />
              <div className="max-w-2xl">
                <p className="text-sm font-medium text-violet-100">Создатель проекта</p>
                <h2 className="mt-1 text-2xl font-bold sm:text-3xl md:text-4xl">Андрей Гущин</h2>
                <p className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm text-violet-100 sm:justify-start">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1">
                    <MapPin size={14} />
                    Новокузнецк
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1">
                    <School size={14} />
                    МБОУ СОШ № 18
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1">
                    10 класс
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 p-6 sm:p-8">
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Меня зовут <strong className="text-slate-900">Андрей Гущин</strong>. Я учусь в{' '}
              <strong className="text-slate-900">МБОУ СОШ № 18</strong> в городе{' '}
              <strong className="text-slate-900">Новокузнецке</strong>. Этот сайт — мой
              индивидуальный школьный проект на тему влияния искусственного интеллекта на рынок
              труда. Я создал его, чтобы наглядно показать, как технологии меняют профессии,
              какие навыки становятся важнее и почему школьникам уже сейчас полезно понимать
              эти процессы.
            </p>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Работу я сдаю своей учительнице —{' '}
              <strong className="text-slate-900">Лопатневой Марине Валерьевне</strong>. Она
              помогала направлять проект, уточнять формулировки и следить, чтобы материал был
              оформлен аккуратно и по требованиям школы. Благодаря её поддержке удалось
              собрать разделы сайта, интерактивные страницы и понятные объяснения для
              одноклассников и всех, кто зайдёт на проект.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <SigmaBearSection />

      <AnimatedSection className="grid gap-4 sm:gap-6">
        {facts.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md">
              <item.icon size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {item.text}
              </p>
            </div>
          </motion.article>
        ))}
      </AnimatedSection>

      <AnimatedSection className="glass-card bg-gradient-to-br from-violet-50 to-cyan-50">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white">
            <BookOpen size={22} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">Зачем я сделал этот сайт</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Тема ИИ и рынка труда кажется сложной, если читать только сухие статьи. Я хотел
              собрать материал в одном месте: с примерами профессий, статистикой, тестом и
              советами — чтобы было интересно и понятно. Сайт помог мне самому глубже
              разобраться в теме и поделиться результатом с классом.
            </p>
          </div>
        </div>
        <ul className="mt-6 space-y-3">
          {projectPoints.map((point) => (
            <li key={point} className="flex gap-3 text-sm text-slate-700 sm:text-base">
              <Sparkles size={18} className="mt-0.5 shrink-0 text-violet-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection className="grid gap-4 sm:grid-cols-2">
        <div className="glass-card">
          <div className="flex items-center gap-2 text-violet-600">
            <Heart size={20} />
            <h3 className="font-bold text-slate-900">Благодарность</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Выражаю благодарность <strong>Лопатневой Марине Валерьевне</strong> за помощь в
            подготовке проекта, внимательное отношение и поддержку на всех этапах работы.
            Также благодарю школу № 18 за возможность представить исследование в таком
            формате.
          </p>
        </div>
        <div className="glass-card flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-900">Посмотреть проект</h3>
            <p className="mt-2 text-sm text-slate-600">
              Перейдите к основным разделам сайта — влияние ИИ, профессии, тест и статистика.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Link to="/impact" className="primary-btn w-full justify-center sm:w-auto">
              Влияние ИИ <ArrowRight size={16} />
            </Link>
            <Link to="/quiz" className="secondary-btn w-full justify-center sm:w-auto">
              Пройти тест
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default AboutPage
