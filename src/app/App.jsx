import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Layout from '../components/layout/Layout'
import AfaqPlus from './pages/AfaqPlus'
import Teachers from './pages/Teachers'
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import ForgotPassword from "./pages/auth/ForgotPassword"
import ResetPassword from "./pages/auth/ResetPassword"
import VerifyEmail from "./pages/auth/VerifyEmail"
import Sidenav from '../components/Profile/Sidenav'
import Overview from './pages/profile-teacher/Overview'
import Settings from './pages/profile-teacher/Settings'
import Quiz from './pages/profile-teacher/Quiz'
import Profile from './pages/profile-teacher/Profile'

function App() {
  return (
    <Routes>
      {/* Routes with layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="afaq-plus" element={<AfaqPlus />} />
        <Route path="teachers" element={<Teachers />} />
        {/* Add more public routes with layout here */}
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="verify-email" element={<VerifyEmail />} />


      <Route path="profile" element={<Sidenav />}>
        <Route index element={<Profile />} />
        <Route path="overview" element={<Overview />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="settings" element={<Settings />} />
        {/* Add more profile sub-routes here */}
      </Route>
    </Routes>
  )
}

export default App
