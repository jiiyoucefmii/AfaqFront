"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import AuthLayout from "../../../components/auth/AuthLayout"
import InputField from "../../../components/ui/InputField"
import Button from "../../../components/ui/Button"
import "../../../assets/styles/Auth.css"

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get("token")

  useEffect(() => {
    if (!token) {
      navigate("/forgot-password")
    }
  }, [token, navigate])

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

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة"
    } else if (formData.password.length < 8) {
      newErrors.password = "كلمة المرور يجب أن تكون 8 أحرف على الأقل"
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "كلمة المرور يجب أن تحتوي على حرف كبير وصغير ورقم"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمة المرور غير متطابقة"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Replace this with your actual API call
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password: formData.password,
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          navigate("/login")
        }, 3000)
      } else {
        const errorData = await response.json()
        setErrors({ submit: errorData.message || "حدث خطأ في إعادة تعيين كلمة المرور" })
      }
    } catch (error) {
      setErrors({ submit: "حدث خطأ في الاتصال بالخادم" })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <AuthLayout title="تم تغيير كلمة المرور" subtitle="تم تحديث كلمة المرور بنجاح" bannerText="تم التحديث">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h3>تم تغيير كلمة المرور بنجاح</h3>
          <p>يمكنك الآن تسجيل الدخول باستخدام كلمة المرور الجديدة</p>
          <p>سيتم توجيهك لصفحة تسجيل الدخول خلال 3 ثوانٍ...</p>

          <div className="auth-actions">
            <Link to="/login" className="back-to-login">
              تسجيل الدخول الآن
            </Link>
          </div>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout title="إعادة تعيين كلمة المرور" subtitle="أدخل كلمة المرور الجديدة" bannerText="كلمة مرور جديدة">
      <form onSubmit={handleSubmit} className="auth-form">
        {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

        <InputField
          type="password"
          name="password"
          placeholder="كلمة المرور الجديدة"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <InputField
          type="password"
          name="confirmPassword"
          placeholder="تأكيد كلمة المرور الجديدة"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        <div className="password-requirements">
          <p>متطلبات كلمة المرور:</p>
          <ul>
            <li className={formData.password.length >= 8 ? "valid" : ""}>8 أحرف على الأقل</li>
            <li className={/(?=.*[a-z])/.test(formData.password) ? "valid" : ""}>حرف صغير واحد على الأقل</li>
            <li className={/(?=.*[A-Z])/.test(formData.password) ? "valid" : ""}>حرف كبير واحد على الأقل</li>
            <li className={/(?=.*\d)/.test(formData.password) ? "valid" : ""}>رقم واحد على الأقل</li>
          </ul>
        </div>

        <Button type="submit" isLoading={isLoading} className="auth-submit-btn">
          {isLoading ? "جاري التحديث..." : "تحديث كلمة المرور"}
        </Button>

        <div className="auth-switch">
          <Link to="/login" className="auth-switch-link">
            ← العودة لتسجيل الدخول
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}

export default ResetPassword
