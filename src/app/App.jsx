import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Layout from "../components/layout/Layout"
import AfaqPlus from "./pages/AfaqPlus"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import ForgotPassword from "./pages/auth/ForgotPassword"
import ResetPassword from "./pages/auth/ResetPassword"
import VerifyEmail from "./pages/auth/VerifyEmail"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/afaq-plus" element={<AfaqPlus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        {/* Add more routes here as needed */}
      </Route>
    </Routes>
  )
}

export default App
