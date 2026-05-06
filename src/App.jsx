import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ImpactPage from './pages/ImpactPage'
import ProfessionsPage from './pages/ProfessionsPage'
import AdvicePage from './pages/AdvicePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="impact" element={<ImpactPage />} />
        <Route path="professions" element={<ProfessionsPage />} />
        <Route path="advice" element={<AdvicePage />} />
      </Route>
    </Routes>
  )
}

export default App
