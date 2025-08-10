"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaEnvelope, FaLock } from "react-icons/fa"
import Button from "../../../components/ui/Button"

import "../../../assets/styles/Auth.css"
import "../../../assets/styles/VerifyEmail.css"

const VerifyEmail = () => {
  const [formData, setFormData] = useState({
    email: "",
    verificationCode: "",
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Get email from localStorage (set during signup)
    const email = localStorage.getItem("verificationEmail")
    if (email) {
      setFormData((prev) => ({ ...prev, email }))
    } else {
      // If no email found, redirect to signup
      navigate("/signup")
    }
  }, [navigate])

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

    if (!formData.verificationCode) {
      newErrors.verificationCode = "رمز التحقق مطلوب"
    } else if (formData.verificationCode.length !== 6) {
      newErrors.verificationCode = "رمز التحقق يجب أن يكون 6 أرقام"
    } else if (!/^\d{6}$/.test(formData.verificationCode)) {
      newErrors.verificationCode = "رمز التحقق يجب أن يحتوي على أرقام فقط"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      const result = await databaseAPI.verifyEmail(formData.email, formData.verificationCode)

      if (result.success) {
        // Store token and user data
        localStorage.setItem("token", result.token)
        localStorage.setItem("user", JSON.stringify(result.user))
        // Remove verification email from storage
        localStorage.removeItem("verificationEmail")
        localStorage.removeItem("userId")

        // Redirect to dashboard
        navigate("/", { replace: true })
      } else {
        setErrors({ submit: result.message })
      }
    } catch (error) {
      setErrors({ submit: "حدث خطأ في الاتصال بالخادم" })
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    setIsResending(true)

    try {
      const result = await databaseAPI.resendVerification(formData.email)

      if (result.success) {
        setErrors({ success: result.message })
        // Clear any previous errors
        if (errors.submit) {
          setErrors((prev) => ({ ...prev, submit: "" }))
        }
      } else {
        setErrors({ submit: result.message })
      }
    } catch (error) {
      setErrors({ submit: "حدث خطأ في الاتصال بالخادم" })
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div className="verify-email-page">
      <div className="verify-email-container">
        <div className="verify-email-content">
          <div className="verify-email-header">
            <div className="logo-container">
              <div className="logo-icon">
                <div className="logo-squares">
                  <div className="logo-square black"></div>
                  <div className="logo-square yellow"></div>
                  <div className="logo-square black"></div>
                  <div className="logo-square yellow"></div>
                </div>
              </div>
            </div>
            <h1 className="verify-email-title">تحقق من بريدك الإلكتروني</h1>
            <p className="verify-email-subtitle">للمتابعة إلى منصة آفاق التعليمية</p>
          </div>

          <form onSubmit={handleSubmit} className="verify-email-form">
            {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}
            {errors.success && <div className="success-message">{errors.success}</div>}

            <div className="email-display">
              <div className="email-input-wrapper">
                <FaEnvelope className="email-icon" />
                <input type="email" name="email" value={formData.email} readOnly className="email-input" />
              </div>
            </div>

            <div className="verify-info">
              <p>أدخل رمز التحقق المرسل إلى عنوان بريدك الإلكتروني</p>
            </div>

            <div className="verification-input-wrapper">
              <FaLock className="verification-icon" />
              <input
                type="text"
                name="verificationCode"
                placeholder="رمز التحقق"
                value={formData.verificationCode}
                onChange={handleChange}
                className={`verification-input ${errors.verificationCode ? "error" : ""}`}
                maxLength="6"
              />
            </div>
            {errors.verificationCode && <span className="error-text">{errors.verificationCode}</span>}

            <Button type="submit" isLoading={isLoading} className="verify-submit-btn">
              {isLoading ? "جاري التحقق..." : "متابعة"}
            </Button>

            <div className="resend-section">
              <p>لم تستلم الرمز؟</p>
              <button type="button" onClick={handleResendCode} disabled={isResending} className="resend-link">
                {isResending ? "جاري الإرسال..." : "إعادة إرسال"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail
