import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Layout from '../components/layout/Layout'
import AfaqPlus from './pages/AfaqPlus';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/afaq-plus" element={<AfaqPlus />} />
        {/* Add more routes here as needed */}
      </Route>
    </Routes>
  )
}

export default App