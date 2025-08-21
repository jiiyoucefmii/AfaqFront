import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Layout from '../components/layout/Layout'
import Courses from './pages/Courses'
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
import AddQuiz from './pages/profile-teacher/AddQuiz'
import QuizInfo from './pages/profile-teacher/QuizInfo'


function App() {
  return (
    <Routes>
      {/* Routes with layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        {/* Add more routes here as needed */}
        // Add this route to your router configuration
        <Route path="/courses" element={<Courses />} />

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
        <Route path="quiz-teacher/add-quiz" element={<AddQuiz />} />
        <Route path="quiz-teacher/quiz-info" element={<QuizInfo/>}/>
        <Route path="settings-teacher" element={<SettingsT />} />
        {/* Add more profile sub-routes here */}

      </Route>
    </Routes>
  )
}

export default App
