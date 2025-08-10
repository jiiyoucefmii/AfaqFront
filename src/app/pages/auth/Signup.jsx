"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaGraduationCap, FaBook, FaMapMarkerAlt } from "react-icons/fa"
import AuthLayout from "../../../components/auth/AuthLayout"
import InputField from "../../../components/ui/InputField"
import Button from "../../../components/ui/Button"

import "../../../assets/styles/Auth.css"

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    parentPhone: "",
    wilaya: "",
    educationLevel: "",
    studyField: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  // Education levels options in Arabic
  const educationLevels = [
    { value: "ثانوي_1", label: "ثانوي السنة الأولى" },
    { value: "ثانوي_2", label: "ثانوي السنة الثانية" },
    { value: "ثانوي_3_باك", label: "ثانوي السنة الثالثة (باك)" },
    { value: "أخرى", label: "أخرى" },
  ]

  // Study fields options
  const studyFields = [
    { value: "رياضيات", label: "الرياضيات" },
    { value: "تقني_رياضي", label: "تقني رياضي" },
    { value: "علوم_تجريبية", label: "علوم تجريبية" },
    { value: "آداب_وفلسفة", label: "آداب وفلسفة" },
    { value: "تسيير_اقتصاد", label: "تسيير اقتصاد" },
    { value: "لغات_أجنبية", label: "لغات أجنبية" },
    { value: "أخرى", label: "أخرى" },
  ]

  // Algerian Wilayas (58 provinces)
  const wilayas = [
    { value: "01", label: "أدرار" },
    { value: "02", label: "الشلف" },
    { value: "03", label: "الأغواط" },
    { value: "04", label: "أم البواقي" },
    { value: "05", label: "باتنة" },
    { value: "06", label: "بجاية" },
    { value: "07", label: "بسكرة" },
    { value: "08", label: "بشار" },
    { value: "09", label: "البليدة" },
    { value: "10", label: "البويرة" },
    { value: "11", label: "تمنراست" },
    { value: "12", label: "تبسة" },
    { value: "13", label: "تلمسان" },
    { value: "14", label: "تيارت" },
    { value: "15", label: "تيزي وزو" },
    { value: "16", label: "الجزائر" },
    { value: "17", label: "الجلفة" },
    { value: "18", label: "جيجل" },
    { value: "19", label: "سطيف" },
    { value: "20", label: "سعيدة" },
    { value: "21", label: "سكيكدة" },
    { value: "22", label: "سيدي بلعباس" },
    { value: "23", label: "عنابة" },
    { value: "24", label: "قالمة" },
    { value: "25", label: "قسنطينة" },
    { value: "26", label: "المدية" },
    { value: "27", label: "مستغانم" },
    { value: "28", label: "المسيلة" },
    { value: "29", label: "معسكر" },
    { value: "30", label: "ورقلة" },
    { value: "31", label: "وهران" },
    { value: "32", label: "البيض" },
    { value: "33", label: "إليزي" },
    { value: "34", label: "برج بوعريريج" },
    { value: "35", label: "بومرداس" },
    { value: "36", label: "الطارف" },
    { value: "37", label: "تندوف" },
    { value: "38", label: "تيسمسيلت" },
    { value: "39", label: "الوادي" },
    { value: "40", label: "خنشلة" },
    { value: "41", label: "سوق أهراس" },
    { value: "42", label: "تيبازة" },
    { value: "43", label: "ميلة" },
    { value: "44", label: "عين الدفلى" },
    { value: "45", label: "النعامة" },
    { value: "46", label: "عين تموشنت" },
    { value: "47", label: "غرداية" },
    { value: "48", label: "غليزان" },
    { value: "49", label: "تيميمون" },
    { value: "50", label: "برج باجي مختار" },
    { value: "51", label: "أولاد جلال" },
    { value: "52", label: "بني عباس" },
    { value: "53", label: "عين صالح" },
    { value: "54", label: "عين قزام" },
    { value: "55", label: "تقرت" },
    { value: "56", label: "جانت" },
    { value: "57", label: "المغير" },
    { value: "58", label: "المنيعة" },
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "الاسم الأول مطلوب"
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "الاسم الأول يجب أن يكون حرفين على الأقل"
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "اللقب مطلوب"
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "اللقب يجب أن يكون حرفين على الأقل"
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "البريد الإلكتروني مطلوب"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح"
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "رقم الهاتف مطلوب"
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "رقم الهاتف غير صحيح"
    }

    // Parent phone validation (optional)
    if (formData.parentPhone && !validatePhone(formData.parentPhone)) {
      newErrors.parentPhone = "رقم هاتف ولي الأمر غير صحيح"
    }

    // Wilaya validation
    if (!formData.wilaya) {
      newErrors.wilaya = "الولاية مطلوبة"
    }

    // Education level validation
    if (!formData.educationLevel) {
      newErrors.educationLevel = "المستوى التعليمي مطلوب"
    }

    // Study field validation
    if (!formData.studyField) {
      newErrors.studyField = "التخصص الدراسي مطلوب"
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة"
    } else {
      const passwordValidation = validatePassword(formData.password)
      if (!passwordValidation.isValid) {
        newErrors.password = "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير، حرف صغير، ورقم"
      }
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمة المرور غير متطابقة"
    }

    // Terms agreement validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "يجب الموافقة على الشروط والأحكام"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Check if user already exists
      const userCheck = await databaseAPI.checkUserExists(formData.email)
      if (userCheck.exists) {
        setErrors({ submit: "البريد الإلكتروني مسجل بالفعل" })
        setIsLoading(false)
        return
      }

      // Register user in database
      const result = await databaseAPI.signup(formData)

      if (result.success) {
        // Store email for verification page
        localStorage.setItem("verificationEmail", formData.email)
        localStorage.setItem("userId", result.userId)

        // Redirect to email verification page
        navigate("/verify-email", { replace: true })
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
      title="أنشئ حسابك الآن"
      subtitle="ادخل بياناتك بشكل صحيح للحصول على أفضل تجربة داخل الموقع"
      bannerText="أنشئ حسابك"
    >
      <form onSubmit={handleSubmit} className="auth-form">
        {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

        {/* Row 1: First Name & Last Name */}
        <div className="name-fields">
          <InputField
            type="text"
            name="firstName"
            placeholder="الاسم الأول"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <InputField
            type="text"
            name="lastName"
            placeholder="اللقب"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>

        {/* Row 2: Email alone */}
        <InputField
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        {/* Row 3: Phone & Parent Phone */}
        <div className="phone-fields">
          <InputField
            type="tel"
            name="phone"
            placeholder="رقم الهاتف"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <InputField
            type="tel"
            name="parentPhone"
            placeholder="رقم هاتف ولي الأمر (اختياري)"
            value={formData.parentPhone}
            onChange={handleChange}
            error={errors.parentPhone}
          />
        </div>

        {/* Row 4: Wilaya */}
        <div className="select-field">
          <div className="select-wrapper">
            <select
              name="wilaya"
              value={formData.wilaya}
              onChange={handleChange}
              className={`select ${errors.wilaya ? "error" : ""}`}
            >
              <option value="" disabled>
                اختر الولاية
              </option>
              {wilayas.map((wilaya) => (
                <option key={wilaya.value} value={wilaya.value}>
                  {wilaya.label}
                </option>
              ))}
            </select>
            <span className="select-arrow">▼</span>
            <FaMapMarkerAlt className="select-icon" />
          </div>
          {errors.wilaya && <span className="error-text">{errors.wilaya}</span>}
        </div>

        {/* Row 5: Education Level & Study Field */}
        <div className="education-fields">
          <div className="select-field">
            <div className="select-wrapper">
              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                className={`select ${errors.educationLevel ? "error" : ""}`}
              >
                <option value="" disabled>
                  المستوى التعليمي
                </option>
                {educationLevels.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span className="select-arrow">▼</span>
              <FaGraduationCap className="select-icon" />
            </div>
            {errors.educationLevel && <span className="error-text">{errors.educationLevel}</span>}
          </div>

          <div className="select-field">
            <div className="select-wrapper">
              <select
                name="studyField"
                value={formData.studyField}
                onChange={handleChange}
                className={`select ${errors.studyField ? "error" : ""}`}
              >
                <option value="" disabled>
                  اختر الشعبة الدراسية
                </option>
                {studyFields.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span className="select-arrow">▼</span>
              <FaBook className="select-icon" />
            </div>
            {errors.studyField && <span className="error-text">{errors.studyField}</span>}
          </div>
        </div>

        <InputField
          type="password"
          name="password"
          placeholder="كلمة المرور"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <InputField
          type="password"
          name="confirmPassword"
          placeholder="تأكيد كلمة المرور"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        <div className="checkbox-field">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="checkbox-input"
            />
            <span className="checkbox-text">
              أوافق على{" "}
              <Link to="/terms" className="terms-link">
                الشروط والأحكام
              </Link>{" "}
              و{" "}
              <Link to="/privacy" className="terms-link">
                سياسة الخصوصية
              </Link>
            </span>
          </label>
          {errors.agreeToTerms && <span className="error-text">{errors.agreeToTerms}</span>}
        </div>

        <Button type="submit" isLoading={isLoading} className="auth-submit-btn">
          {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
        </Button>

        <div className="auth-switch">
          <span>لديك حساب بالفعل؟ </span>
          <Link to="/login" className="auth-switch-link">
            تسجيل الدخول
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Signup
