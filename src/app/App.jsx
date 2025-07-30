import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Layout from '../components/layout/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        {/* Add more routes here as needed */}
      </Route>
    </Routes>
  )
}

export default App