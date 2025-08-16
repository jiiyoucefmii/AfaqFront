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

      {/* Auth routes without layout */}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="verify-email" element={<VerifyEmail />} />

      {/* Optional: Catch all route (404) */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App
