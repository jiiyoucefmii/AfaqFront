import React, { useState } from 'react';
import CourseCard from '../../components/ui/CourseCard';
import '../../assets/styles/Courses.css';
import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';
import pic4 from '../../assets/images/pic4.png';

// Simple SVG Icons as components
const SearchIcon = () => (
  <svg className="courses-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const ChevronDownIcon = ({ className = "" }) => (
  <div className={`courses-dropdown-arrow ${className}`}></div>
);

const StarIcon = ({ className = "" }) => (
  <svg className={`courses-star-icon ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample course data
  const courses = [
    // Existing courses (updated with local images if desired)
    {
      id: 1,
      title: "دورة المراجعة النهائية رياضيات",
      instructor: "الاستاذ بريك اسامة",
      subject: "رياضيات",
      chapters: 10,
      price: "2500 DA",
      thumbnail: pic1,  // Using local pic1 as example
    },
    {
      id: 2,
      title: "دورة الفيزياء النهائية",
      instructor: "الاستاذ محمد علي",
      subject: "فيزياء",
      chapters: 12,
      price: "3000 DA",
      thumbnail: pic2,
    },
    // New courses
    {
      id: 3,
      title: "دورة الكيمياء الأساسية",
      instructor: "الاستاذ أحمد",
      subject: "كيمياء",
      chapters: 12,
      price: "2200 DA",
      thumbnail: pic3,
    },
    {
      id: 4,
      title: "دورة التاريخ الحديث",
      instructor: "الاستاذة فاطمة",
      subject: "تاريخ",
      chapters: 9,
      price: "1800 DA",
      thumbnail: pic4,
    },
    {
      id: 5,
      title: "دورة اللغة الإنجليزية",
      instructor: "الاستاذ محمد",
      subject: "إنجليزية",
      chapters: 15,
      price: "1500 DA",
      thumbnail: pic1,
    },
    {
      id: 6,
      title: "دورة البرمجة الأساسية",
      instructor: "الدكتور علي",
      subject: "برمجة",
      chapters: 10,
      price: "3000 DA",
      thumbnail: pic2,
    },
    {
      id: 7,
      title: "دورة الرياضيات المتقدمة",
      instructor: "الاستاذة نور",
      subject: "رياضيات",
      chapters: 11,
      price: "2600 DA",
      thumbnail: pic3,
    },
    {
      id: 8,
      title: "دورة العلوم الطبيعية",
      instructor: "الاستاذ خالد",
      subject: "علوم",
      chapters: 13,
      price: "2400 DA",
      thumbnail: pic4,
    },
  ];

  return (
    <div className="courses-container">
      {/* Hero Section */}
      <section className="courses-hero-section">
        <div className="courses-hero-content">
          <h1 className="courses-hero-title">
            انطلق في رحلة تعلمك مع دوراتنا المميزة
          </h1>
          
          <div className="courses-search-container">
            <div className="courses-search-bar">
              <SearchIcon />
              <input 
                type="text"
                placeholder="Search"
                className="courses-search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Filters */}
          <div className="courses-filters-container">
            <div className="courses-filter-group">
              <span className="courses-filter-label">السعر</span>
              <div className="courses-price-slider">
                <div className="courses-price-slider-fill"></div>
                <div className="courses-price-slider-thumb"></div>
              </div>
              <div className="courses-price-labels">
                <span className="courses-price-label">0 DA</span>
                <span className="courses-price-label">5000 DA</span>
              </div>
            </div>
            
            <div className="courses-filter-dropdown-container">
              <span className="courses-filter-label">السنة</span>
              <div className="courses-filter-divider"></div>
              <div className="courses-filter-dropdown">
                <span className="courses-filter-dropdown-text">الكل</span>
                <ChevronDownIcon />
              </div>
            </div>
            
            <div className="courses-filter-dropdown-container">
              <span className="courses-filter-label">المستوى</span>
              <div className="courses-filter-divider"></div>
              <div className="courses-filter-dropdown">
                <span className="courses-filter-dropdown-text">الكل</span>
                <ChevronDownIcon />
              </div>
            </div>
            
            <div className="courses-filter-dropdown-container">
              <span className="courses-filter-label">المجال</span>
              <div className="courses-filter-divider"></div>
              <div className="courses-filter-dropdown">
                <span className="courses-filter-dropdown-text">الكل</span>
                <ChevronDownIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="courses-categories-section">
        <div className="courses-categories-content">
          <div className="courses-categories-grid">
            <div className="courses-category-card courses-category-card-bem">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/aa9b25a4d163661cffb5fc79e7ab43802c67123c?width=522"
                alt="BEM"
                className="courses-category-image courses-category-image-bem"
              />
              <h2 className="courses-category-title courses-category-title-gray">
                دورات شهادة البكالوريا
                <br />
                (شعبة العلوم التجريبية)
              </h2>
              <StarIcon />
              <div className="courses-category-accent-bar"></div>
            </div>
            
            <div className="courses-category-card courses-category-card-secondary">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/aa9b25a4d163661cffb5fc79e7ab43802c67123c?width=522"
                alt="Secondary"
                className="courses-category-image courses-category-image-secondary"
              />
              <h2 className="courses-category-title courses-category-title-white">
                دورات شهادة التعليم المتوسط
              </h2>
            </div>
            
            <div className="courses-category-card courses-category-card-university">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/aa9b25a4d163661cffb5fc79e7ab43802c67123c?width=522"
                alt="University"
                className="courses-category-image courses-category-image-university"
              />
              <h2 className="courses-category-title courses-category-title-gray">
                دورات شهادة الليسانس
              </h2>
              <StarIcon />
              <div className="courses-category-accent-bar"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="courses-section">
        <div className="courses-content">
          <div className="courses-grid">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                instructor={course.instructor}
                subject={course.subject}
                chapters={course.chapters}
                price={course.price}
                thumbnail={course.thumbnail}
                onEnroll={() => console.log(`Enrolling in ${course.title}`)}
              />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="courses-pagination">
            <button className="courses-pagination-button">‹</button>
            <div className="courses-pagination-numbers">
              <button className="courses-pagination-number">1</button>
              <button className="courses-pagination-number">2</button>
              <button className="courses-pagination-number">3</button>
              <span>...</span>
              <button className="courses-pagination-number">10</button>
            </div>
            <button className="courses-pagination-button">›</button>
          </div>
        </div>
      </section>

      {/* AFAQ+ Section */}
      <section className="courses-afaq-section">
        <div className="courses-afaq-content">
          <div className="courses-afaq-grid">
            <div className="courses-afaq-cards-container">
              <div className="courses-afaq-card courses-afaq-card-1"></div>
              <div className="courses-afaq-card courses-afaq-card-2"></div>
              <div className="courses-afaq-card courses-afaq-card-3">
                <div className="courses-afaq-card-content">
                  <div className="courses-afaq-card-icon">
                    <span className="courses-afaq-card-plus">+</span>
                  </div>
                  <h3 className="courses-afaq-card-title">Python from Zero to Hero</h3>
                  <p className="courses-afaq-card-description">
                    ابحث، استكشف وتعلم المهارات التقنية في مجالات التقنية المختلفة
                  </p>
                </div>
              </div>
            </div>
            
            <div className="courses-afaq-text-content">
              <h2 className="courses-afaq-main-title">
                ابحث، استكشف وتعلم المهارات التقنية مع AFAQ+
              </h2>
              <p className="courses-afaq-description">
                في AFAQ+ يمكن لك أن تكتشف في الدورات والمهارات التقنية في مجالات التقنية المختلفة
                ابحث عن الدورة المناسبة لك، وتعلم على المهارات التي تحتاجها في السوق، وحقق أهدافك المهنية.
                ومن تصميم المواقع إلى الذكاء الاصطناعي، ومن تطبيقات الهاتف إلى علم البيانات، كل شيء في متناولك
              </p>
              <button className="courses-afaq-button">
                See More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;