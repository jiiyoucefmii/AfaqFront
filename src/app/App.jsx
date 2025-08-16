import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Layout from '../components/layout/Layout'
import AfaqPlus from './pages/AfaqPlus'
import Teachers from './pages/Teachers'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/afaq-plus" element={<AfaqPlus />} />
        <Route path="/teachers" element={<Teachers />} />

        {/* Add more routes here as needed */}
      </Route>
    </Routes>
  )
}

export default App