import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Layout from '../components/layout/Layout'
import Courses from './pages/Courses'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        {/* Add more routes here as needed */}
        // Add this route to your router configuration
        <Route path="/courses" element={<Courses />} />
      </Route>
    </Routes>
  )
}

export default App