import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Layout from '../components/layout/Layout'
<<<<<<< HEAD
import Courses from './pages/Courses'
=======
import AfaqPlus from './pages/AfaqPlus'
import Teachers from './pages/Teachers'
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import ForgotPassword from "./pages/auth/ForgotPassword"
import ResetPassword from "./pages/auth/ResetPassword"
import VerifyEmail from "./pages/auth/VerifyEmail"
import Sidenav from '../components/Profile/Sidenav'
import OverviewT from './pages/profile-teacher/OverviewT'
import SettingsT from './pages/profile-teacher/SettingsT'
import QuizT from './pages/profile-teacher/QuizT'
import ProfileT from './pages/profile-teacher/ProfileT'
>>>>>>> ddaa3bbfd07c8ea77a8f8b9935177956bfcca6cf

function App() {
  return (
    <Routes>
      {/* Routes with layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
<<<<<<< HEAD
        {/* Add more routes here as needed */}
        // Add this route to your router configuration
        <Route path="/courses" element={<Courses />} />
=======
        <Route path="afaq-plus" element={<AfaqPlus />} />
        <Route path="teachers" element={<Teachers />} />
        {/* Add more public routes with layout here */}
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="verify-email" element={<VerifyEmail />} />


      <Route path="profile-teacher" element={<Sidenav />}>
        <Route index element={<ProfileT />} />
        <Route path="overview-teacher" element={<OverviewT />} />
        <Route path="quiz-teacher" element={<QuizT />} />
        <Route path="settings-teacher" element={<SettingsT />} />
        {/* Add more profile sub-routes here */}
>>>>>>> ddaa3bbfd07c8ea77a8f8b9935177956bfcca6cf
      </Route>
    </Routes>
  )
}

export default App
