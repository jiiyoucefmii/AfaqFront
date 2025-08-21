import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/LandingPage.css'
import yellowHero from '../../assets/images/yellowHero.png'
import mockupPC from '../../assets/images/MockupPC.png'
import leftImage from '../../assets/images/LeftImage.png'
import midImage from '../../assets/images/MidImage.png'
import rightImage from '../../assets/images/RightImage.png'
import circleImage from '../../assets/images/Circle.png'
import leftStatsDecoration from '../../assets/images/leftstatsec.png'
import rightStatsDecoration from '../../assets/images/rightstatsec.png'
import secStar from '../../assets/images/SecStar.png'
import pic1 from '../../assets/images/pic1.png'
import pic2 from '../../assets/images/pic2.png'
import pic3 from '../../assets/images/pic3.png'
import pic4 from '../../assets/images/pic4.png'
import AfaqPlusLargeSecLeft from '../../assets/images/AfaqPlusLargeSecLeft.png'
import AfaqPlusLogo from '../../assets/images/AfaqPluslogo.svg'
import AfaqPlus from '../../assets/images/AfaqPlus.png'
import Pin from '../../assets/images/pin.svg'; 
import Trail from '../../assets/images/Trail.svg';
import questionmark from '../../assets/images/questionmark.png';
import ArrowUp from '../../assets/images/up.svg';
import ArrowDown from '../../assets/images/down.svg';
import Colad from '../../assets/images/colad.svg';
import ColadEnd from '../../assets/images/coladend.svg';
import Quotes from '../../assets/images/Quotes.svg';
import mdsLogo from '../../assets/images/mds.png';
import ensiaLogo from '../../assets/images/ensia.png';
import baridLogo from '../../assets/images/barid.png';
import telecommLogo from '../../assets/images/telecomm.png';
import leftArrow from '../../assets/images/leftarrow.svg';
import rightArrow from '../../assets/images/rightarrow.svg';


const LandingPage = () => {
  // Remove the counts state and just use static values
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: "أفضل منصة تعليمية تعاملت معها على الإطلاق! الدروس ممتازة، والطريقة التفاعلية تجعل التعلم ممتعاً. جزيل الشكر للفريق القائم على هذا العمل الرائع",
      author: "مهدي بحي",
      avatar: pic1
    },
    {
      id: 2,
      text: "أفضل منصة تعليمية تعاملت معها على الإطلاق! الدروس ممتازة، والطريقة التفاعلية تجعل التعلم ممتعاً. جزيل الشكر للفريق القائم على هذا العمل الرائع",
      author: "مهدي بحي",
      avatar: pic2
    },
    {
      id: 3,
      text: "أفضل منصة تعليمية تعاملت معها على الإطلاق! الدروس ممتازة، والطريقة التفاعلية تجعل التعلم ممتعاً. جزيل الشكر للفريق القائم على هذا العمل الرائع",
      author: "مهدي بحي",
      avatar: pic3
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const prevTestimonial = () => {
     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };
  
  const [activeFaqItem, setActiveFaqItem] = useState(null);
  
  const toggleFaqItem = (index) => {
    setActiveFaqItem(activeFaqItem === index ? null : index);
  };
  
  // Static values instead of animated ones
  const stats = {
    students: "25 062",
    hours: "6 580", 
    teachers: "87",
    courses: "160"
  };

  // Remove the animateCount function and useEffect completely

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-upper">
          <div className="hero-text">
            <h1 className='hero-title'>منصة <span className='highlight-yellow'>آفاق</span> التعليمية</h1>
            <p className="hero-subtext">الخبير في كل شيء كان مبتدئاً في يوم ما</p>
          </div>
          <div className="hero-image">
            <img src={yellowHero} alt="آفاق التعليمية" className="yellow-hero" />
          </div>
        </div>
        
        <div className="hero-lower">
          <div className="mockup-image">
            <img src={mockupPC} alt="جهاز كمبيوتر يعرض منصة آفاق" className="mockup-pc" />
          </div>
          <div className="hero-content">
            <h2>منصة آفاق - تعلم عن بُعد بأسلوب مبتكر</h2>
            <p>منصة آفاق توفر تجربة تعليمية شاملة ومرنة عبر الإنترنت، تجمع بين المتعة والفعالية لتساعدك على التعلم بسهولة وفي الوقت والمكان الذي يناسبك.</p>
          </div>
        </div>
      </div>
      <div className='category-title'> <p>من يستفيد من منصتنا؟</p></div>
      {/* Student Categories Section */}
      <div className="student-categories-section">
        {/* Images Container */}
        <div className="images-container">
          <div className="student-category">
            <div className="student-image-container">
              <img src={circleImage} alt="دائرة خلفية" className="circle-background" />
              <img src={rightImage} alt="طلاب في الجامعة" className="student-image" />
            </div>
          </div>

          <div className="student-category">
            <div className="student-image-container">
              <img src={circleImage} alt="دائرة خلفية" className="circle-background" />
              <img src={midImage} alt="طلاب في المدرسة الثانوية" className="student-image" />
            </div>
          </div>

          <div className="student-category">
            <div className="student-image-container">
              <img src={circleImage} alt="دائرة خلفية" className="circle-background" />
              <img src={leftImage} alt="طلاب مقبلون على امتحان شهادة التعليم المتوسط" className="student-image" />
            </div>
          </div>
        </div>
        
        {/* Text Container Rectangle */}
        <div className="text-rectangle">
          <div className="text-content">
            <div className="text-section">
              <h3 className="category-title">طلاب في الجامعة</h3>
              <p className="category-description">
                دورات وموارد شاملة لكل المواد والتخصصات، منظمة حسب السنة، تشمل شروحات، ملفات، وتمارين.
              </p>
            </div>
            
            <div className="text-section">
              <h3 className="category-title">طلاب في المدرسة الثانوية</h3>
              <p className="category-description">
                ملخصات، اختبارات محلولة، دروس مصورة، ومراجعات مركزة لكل الشعب.
              </p>
            </div>
            
            <div className="text-section">
              <h3 className="category-title">طلاب مقبلون على امتحان شهادة التعليم المتوسط</h3>
              <p className="category-description">
                مراجعات شاملة، دروس مشروحة، ونماذج امتحانات للتحضير لشهادة التعليم المتوسط.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="stats-decoration-left">
          <img src={leftStatsDecoration} alt="Left decoration" className="decoration-image" />
        </div>
        
        <div className="stats-container">
          <div className="stats-content">
            <div className="stat-item">
              <div className="stat-number">+ {stats.courses}</div>
              <div className="stat-label">دورة في AFAQ</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">+ {stats.teachers}</div>
              <div className="stat-label">أستاذ وخبير</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">+ {stats.hours}</div>
              <div className="stat-label">ساعة تعلم مسجلة</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">{stats.students}</div>
              <div className="stat-label">طالب مسجل</div>
            </div>
          </div>
        </div>
        
        <div className="stats-decoration-right">
          <img src={rightStatsDecoration} alt="Right decoration" className="decoration-image" />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-content">
            {/* Left Section */}
            <div className="features-left">
              <h2 className="features-main-title">لماذا آفاق؟</h2>
              <div className="features-text">
                <p className="features-description">
                  نوفر لك تجربة تعليمية حديثة وأكثر كفاءة من الأساليب التقليدية، بمرونة تامة في التعلم من أي مكان وفي أي وقت.
                </p>
                <p className="features-description">
                  ستتمتع في بيئة محفزة على النجاح، مع إمكانية مراجعة الدروس المسجلة في أي وقت، إضافة إلى كتب ومراجع معتمدة مستخدمة داخل التخصص.
                </p>
              </div>
            </div>
            
            {/* Right Section */}
            <div className="features-right">
              <h2 className="features-main-title">ماذا نقدم؟</h2>
              <div className="features-grid">
                <div className="feature-item feature-item-1">
                  <div className="feature-icon">
                    <img src={secStar} alt="نجمة" className="star-icon" />
                  </div>
                  <div className="feature-content">
                    <p className="feature-subtitle">أسعار مناسبة ومتاحة للجميع</p>
                  </div>
                </div>
                
                <div className="feature-item feature-item-2">
                  <div className="feature-icon">
                    <img src={secStar} alt="نجمة" className="star-icon" />
                  </div>
                  <div className="feature-content">
                    <p className="feature-subtitle">إمكانية متابعة الدروس من الهاتف أو الحاسوب</p>
                  </div>
                </div>
                
                <div className="feature-item feature-item-3">
                  <div className="feature-icon">
                    <img src={secStar} alt="نجمة" className="star-icon" />
                  </div>
                  <div className="feature-content">
                    <p className="feature-subtitle">إشراف نخبة من الأساتذة المتخصصين</p>
                  </div>
                </div>
                
                <div className="feature-item feature-item-4">
                  <div className="feature-icon">
                    <img src={secStar} alt="نجمة" className="star-icon" />
                  </div>
                  <div className="feature-content">
                    <p className="feature-subtitle">دروس مباشرة (صوت وصورة) عبر تطبيق Zoom</p>
                  </div>
                </div>
                
                <div className="feature-item feature-item-5">
                  <div className="feature-icon">
                    <img src={secStar} alt="نجمة" className="star-icon" />
                  </div>
                  <div className="feature-content">
                    <p className="feature-subtitle">تعليم عن بُعد لجميع الأطوار التعليمية في الجزائر</p>
                  </div>
                </div>
                
                <div className="feature-item feature-item-6">
                  <div className="feature-icon">
                    <img src={secStar} alt="نجمة" className="star-icon" />
                  </div>
                  <div className="feature-content">
                    <p className="feature-subtitle">تغطية شاملة لجميع المواد والمستويات الدراسية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Courses Section */}
      <section className="courses-section">
        <div className="courses-container">
          <h2 className="courses-title">أحدث دوراتنا</h2>
          <div className="courses-carousel">
            <button className="carousel-arrow carousel-arrow-right">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="courses-grid">
              <div className="course-card">
                <div className="course-image">
                  <img src={pic1} alt="دورة المراجعة النهائية رياضيات" className="course-img" />
                </div>
                <div className="course-content">
                  <h3 className="course-name">دورة المراجعة النهائية رياضيات</h3>
                  <p className="course-instructor">الأستاذ بريك أسامة</p>
                </div>
              </div>
              
              <div className="course-card">
                <div className="course-image">
                  <img src={pic2} alt="دورة الفيزياء المراجعة النهائية" className="course-img" />
                </div>
                <div className="course-content">
                  <h3 className="course-name">دورة الفيزياء المراجعة النهائية</h3>
                  <p className="course-instructor">الأستاذ بريك أسامة</p>
                </div>
              </div>
              
              <div className="course-card">
                <div className="course-image">
                  <img src={pic3} alt="دورة المراجعة النهائية رياضيات" className="course-img" />
                </div>
                <div className="course-content">
                  <h3 className="course-name">دورة المراجعة النهائية رياضيات</h3>
                  <p className="course-instructor">الأستاذ بريك أسامة</p>
                </div>
              </div>
              
              <div className="course-card">
                <div className="course-image">
                  <img src={pic4} alt="دورة النبوي و المراجعة النهائية" className="course-img" />
                </div>
                <div className="course-content">
                  <h3 className="course-name">دورة النبوي و المراجعة النهائية</h3>
                  <p className="course-instructor">الأستاذ بريك أسامة</p>
                </div>
              </div>
            </div>
            
            <button className="carousel-arrow carousel-arrow-left">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="courses-bottom">
            <button className="see-all-btn">عرض الكل</button>
          </div>
        </div>
      </section>
    
      {/* AFAQ+ Section */}
      <section className="afaq-plus-section">
        <div className="afaq-plus-container">
          
          
          <div className="afaq-plus-right">
            <div className="afaq-plus-features">
              <div className="afaq-plus-feature">
                <div className="afaq-plus-feature-icon">
                  <img src={AfaqPlus} alt="Plus" className="plus-icon" />
                </div>
                <div className="afaq-plus-feature-content">
                  <h3 className="afaq-plus-feature-title">محتوى محدث باستمرار</h3>
                  <p className="afaq-plus-feature-text">نواكب أحدث التقنيات البرمجية والتكنولوجيا.</p>
                </div>
              </div>
              
              <div className="afaq-plus-feature">
                <div className="afaq-plus-feature-icon">
                  <img src={AfaqPlus} alt="Plus" className="plus-icon" />
                </div>
                <div className="afaq-plus-feature-content">
                  <h3 className="afaq-plus-feature-title">دورات تقنية عملية</h3>
                  <p className="afaq-plus-feature-text">تعلم من خلال مشارية واقعية وأمثلة تطبيقية.</p>
                </div>
              </div>
              
              <div className="afaq-plus-feature">
                <div className="afaq-plus-feature-icon">
                  <img src={AfaqPlus} alt="Plus" className="plus-icon" />
                </div>
                <div className="afaq-plus-feature-content">
                  <h3 className="afaq-plus-feature-title">مدربون محترفون</h3>
                  <p className="afaq-plus-feature-text">خبراء في مجالاتهم يقدمون لك المعلومة بسلاسة.</p>
                </div>
              </div>
              
              <div className="afaq-plus-feature">
                <div className="afaq-plus-feature-icon">
                  <img src={AfaqPlus} alt="Plus" className="plus-icon" />
                </div>
                <div className="afaq-plus-feature-content">
                  <h3 className="afaq-plus-feature-title">شهادات ومهام عملية</h3>
                  <p className="afaq-plus-feature-text">احصل على شهادة، وطور ملفك الشخصي بمشاريع حقيقية.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="afaq-plus-left">
            <img src={AfaqPlusLargeSecLeft} alt="AFAQ+ Background" className="afaq-plus-bg" />
            <div className="afaq-plus-left-content">
              <div className="afaq-plus-logo-container">
                <img src={AfaqPlusLogo} alt="AFAQ+ Logo" className="afaq-plus-logo" />
                <h2 className="afaq-plus-title">AFAQ+</h2>
              </div>
              <p className="afaq-plus-subtitle">مستقبلك يبدأ من هنا</p>
              <p className="afaq-plus-question">هل تريد تعلم البرمجة؟ الذكاء الاصطناعي؟ التصميم؟</p>
              <div className="afaq-plus-description">
                <p className="afaq-plus-text"><strong>AFAQ+</strong> هي منصتك للمهارات التقنية والمستقبلية.</p>
                <p className="afaq-plus-text">نوفر لك دورات عملية، ومشارية واقعية، بإشراف مدربين محترفين.</p>
                <p className="afaq-plus-text">تعلم بوتيرة مرنة، وكن جاهزاً لسوق العمل.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="program-path-section">
        <h2 className="program-path-title">مسارك للمشاركة في البرنامج</h2>
        <div className="program-path-container">
          <img src={Trail} alt="Trail" className="program-path-trail" />
          <div className="program-path-step step-1">
            
            <div className="program-path-step-content">
            <img src={Pin} alt="Pin" className="program-path-pin" />
            <div className="program-path-step-content">
              
              <div className="program-path-step-title">1 قم بإنشاء حساب</div>
              <div className="program-path-step-desc">قم بالتسجيل وانضم إلى منصتنا التعليمية</div>
            </div>
            </div>
          </div>
          <div className="program-path-step step-2">
            <img src={Pin} alt="Pin" className="program-path-pin" />
            
            <div className="program-path-step-content">
              
              <div className="program-path-step-title">2 اختر الدورات التي تناسبك</div>
              <div className="program-path-step-desc">تصفح المنصة و استفد من دوراتنا المتميزة</div>
            </div>
          </div>
          <div className="program-path-step step-3">
            <img src={Pin} alt="Pin" className="program-path-pin" />
           
            <div className="program-path-step-content">
              
              <div className="program-path-step-title">3 الانضمام إلى الدورة</div>
              <div className="program-path-step-desc">بعد اختيارك للدورة اضغط على زر الاشتراك ستجد طلبك قيد المعالجة</div>
            </div>
          </div>
          <div className="program-path-step step-4">
            <img src={Pin} alt="Pin" className="program-path-pin" />
                          
            <div className="program-path-step-content">
              <div className="program-path-step-title">4 عملية الدفع</div>
              <div className="program-path-step-desc">تواصل معنا على قناة التلغرام و ارسل لنا بنك الدفع و معلوماتك الشخصية</div>
            </div>
          </div>
          <div className="program-path-step step-5">
            <img src={Pin} alt="Pin" className="program-path-pin" />
                         

            <div className="program-path-step-content">
              <div className="program-path-step-title">5 الاستفادة من الدورة</div>
              <div className="program-path-step-desc">بعد معالجة طلب الاشتراك ستصبح الدورة متاحة</div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-image-container">
            <img src={questionmark} alt="Question Mark" className="faq-image" />
          </div>
          <div className="faq-content">
            <h2 className="faq-title">أسئلة شائعة</h2>
            <div className="faq-items">
              <div className={`faq-item ${activeFaqItem === 0 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaqItem(0)}>
                  <span className="faq-toggle">
                    {activeFaqItem === 0 ? <img src={ArrowUp} alt="Up Arrow" /> : <img src={ArrowDown} alt="Down Arrow" />}
                  </span>
                  <span>هل توجد دورات فردية ؟</span>
                </div>
                <div className="faq-answer">
                  <p>نعم، نوفر دورات فردية مخصصة حسب احتياجاتك التعليمية.</p>
                </div>
              </div>
              
              <div className={`faq-item ${activeFaqItem === 1 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaqItem(1)}>
                  <span className="faq-toggle">
                      {activeFaqItem === 1 ? <img src={ArrowUp} alt="Up Arrow" /> : <img src={ArrowDown} alt="Down Arrow" />}
                  </span>
                  <span>هل يمكن الانضمام في أي وقت أم انتظر دورة معينة؟</span>
                </div>
                <div className="faq-answer">
                  <p>يمكنك الانضمام في أي وقت للدورات المسجلة، أما الدورات المباشرة فلها مواعيد محددة.</p>
                </div>
              </div>
              
              <div className={`faq-item ${activeFaqItem === 2 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaqItem(2)}>
                  <span className="faq-toggle">
                                        {activeFaqItem === 2 ? <img src={ArrowUp} alt="Up Arrow" /> : <img src={ArrowDown} alt="Down Arrow" />}
                  </span>
                  <span>ماهو سعر الدورة وهل توجد تخفيضات؟</span>
                </div>
                <div className="faq-answer">
                  <p>تختلف أسعار الدورات حسب المحتوى والمدة، ونقدم تخفيضات للمجموعات والطلاب.</p>
                </div>
              </div>
              
              <div className={`faq-item ${activeFaqItem === 3 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaqItem(3)}>
                  <span className="faq-toggle">
                                        {activeFaqItem === 3 ? <img src={ArrowUp} alt="Up Arrow" /> : <img src={ArrowDown} alt="Down Arrow" />}
                  </span>
                  <span>هل الدروس مسجلة أونلاين ويمكن أن أرجع لها لاحقاً؟</span>
                </div>
                <div className="faq-answer">
                  <p>نعم، جميع الدروس مسجلة ويمكنك الرجوع إليها في أي وقت خلال فترة اشتراكك.</p>
                </div>
              </div>
              
              <div className={`faq-item ${activeFaqItem === 4 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaqItem(4)}>
                  <span className="faq-toggle">
                                        {activeFaqItem === 4 ? <img src={ArrowUp} alt="Up Arrow" /> : <img src={ArrowDown} alt="Down Arrow" />}
                  </span>
                  <span>هل يتوفر تطبيق خاص بالمنصة؟</span>
                </div>
                <div className="faq-answer">
                  <p>يمكنك التسجيل عبر الموقع واختيار طريقة الدفع المناسبة من الخيارات المتاحة.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <img src={Colad} alt="Quote decoration left" className="quote-decoration-left" />
          <img src={ColadEnd} alt="Quote decoration right" className="quote-decoration-right" />
          
          <div className="testimonials-title">ماذا يقول مستخدمو منصتنا؟</div>
          
          <div className="testimonials-carousel">
            <div className="testimonials-content">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`testimonial-card ${
                    index === currentTestimonial ? 'active' : 
                    index === (currentTestimonial - 1 + testimonials.length) % testimonials.length ? 'prev' :
                    index === (currentTestimonial + 1) % testimonials.length ? 'next' : 'hidden'
                  }`}
                >
                  <div className="testimonial-quote">
                    <img src={Quotes} alt="Quote" className="quote-icon" />
                    <p className="testimonial-text">{testimonial.text}</p>
                  </div>
                  
                  {/* Gray divider */}
                  <div style={{width: '100%', height: '1px', background: '#EAEAEA', margin: '1.5rem 0'}}></div>
                  
                  <div className="testimonial-author">
                    <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
                    <span className="author-name">{testimonial.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation container with arrows and dots */}
          <div className="testimonials-navigation">
            <button className="testimonial-arrow testimonial-arrow-right" onClick={nextTestimonial}>
              <img src={rightArrow} alt="Next" width="24" height="24" />
            </button>
            
            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </div>
            <button className="testimonial-arrow testimonial-arrow-left" onClick={prevTestimonial}>
              <img src={leftArrow} alt="Previous" width="24" height="24" />
            </button>
            
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="partners-section">
        <div className="partners-container">
          <h2 className="partners-title">شركاؤنا</h2>
          <div className="partners-grid">
            <div className="partner-item">
              <img src={mdsLogo} alt="MDS" className="partner-logo" />
            </div>
            <div className="partner-item">
              <img src={ensiaLogo} alt="ENSIA" className="partner-logo" />
            </div>
            <div className="partner-item">
              <img src={baridLogo} alt="Barid" className="partner-logo" />
            </div>
            <div className="partner-item">
              <img src={telecommLogo} alt="Telecom" className="partner-logo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage
