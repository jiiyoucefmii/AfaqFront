"use client"

import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import AuthLayout from "../../../components/auth/AuthLayout"
import InputField from "../../../components/ui/InputField"
import Button from "../../../components/ui/Button"
import "../../../assets/styles/Auth.css"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = "البريد الإلكتروني مطلوب"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح"
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة"
    } else if (formData.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Check if user exists and is verified
      const userCheck = await databaseAPI.checkUserExists(formData.email)
      if (!userCheck.exists) {
        setErrors({ submit: "البريد الإلكتروني غير مسجل" })
        setIsLoading(false)
        return
      }

      if (!userCheck.verified) {
        setErrors({ submit: "يرجى التحقق من بريدك الإلكتروني أولاً" })
        setIsLoading(false)
        return
      }

      // Attempt login
      const result = await databaseAPI.login(formData)

      if (result.success) {
        // Store token and user data
        localStorage.setItem("token", result.token)
        localStorage.setItem("user", JSON.stringify(result.user))

        // Redirect to dashboard or previous page
        const from = location.state?.from?.pathname || "/"
        navigate(from, { replace: true })
      } else {
        setErrors({ submit: result.message })
      }
    } catch (error) {
      setErrors({ submit: "حدث خطأ في الاتصال بالخادم" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout
      title="تسجيل الدخول"
      subtitle="ادخل على حسابك بإدخال البريد الإلكتروني و كلمة المرور المسجل بهم من قبل"
      bannerText="سجل دخولك الآن"
    >
      <form onSubmit={handleSubmit} className="auth-form">
        {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

        <InputField
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          type="password"
          name="password"
          placeholder="كلمة المرور"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className="auth-options">
          <Link to="/forgot-password" className="forgot-password-link">
            نسيت كلمة المرور؟
          </Link>
        </div>

        <Button type="submit" isLoading={isLoading} className="auth-submit-btn">
          {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
        </Button>

        <div className="auth-switch">
          <span>لا يوجد لديك حساب؟ </span>
          <Link to="/signup" className="auth-switch-link">
            انشئ حسابك الآن!
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Login
