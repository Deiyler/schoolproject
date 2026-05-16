import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ImpactPage from './pages/ImpactPage'
import ProfessionsPage from './pages/ProfessionsPage'
import AdvicePage from './pages/AdvicePage'
import FutureProfessionsPage from './pages/FutureProfessionsPage'
import AiToolsPage from './pages/AiToolsPage'
import QuizPage from './pages/QuizPage'
import StatisticsPage from './pages/StatisticsPage'
import NewsPage from './pages/NewsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="impact" element={<ImpactPage />} />
        <Route path="professions" element={<ProfessionsPage />} />
        <Route path="future" element={<FutureProfessionsPage />} />
        <Route path="tools" element={<AiToolsPage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="stats" element={<StatisticsPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="advice" element={<AdvicePage />} />
      </Route>
    </Routes>
  )
}

export default App
