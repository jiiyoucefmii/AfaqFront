import React, { useState,useEffect } from 'react';
import { Link,useLocation  } from 'react-router-dom';
import '../../assets/styles/Navbar.css';
import logo from '../../assets/images/LogoFrameBlack.svg';
import afaqPlus_logo from '../../assets/images/afaqplus_logo.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const location = useLocation();
  const isAfaqPlus = location.pathname === "/afaq-plus";

  

  const [scrolled, setScrolled] = useState(false);
   // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`navbar 
        ${isAfaqPlus ? 'afaqplus-navbar' : ''} 
        ${isAfaqPlus && scrolled ? 'blurred' : ''}`}>
      <div className="navbar-container">
        <div className="auth-buttons">
          <Link to="/register" className={`register-button ${isAfaqPlus ? "afaqplus-register-button" : ""}`}>
            تسجيل الدخول
          </Link>
          <Link to="/login" className={`login-button ${isAfaqPlus ? "afaqplus-login-button" : ""}`}>
            إنشاء حساب
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={() => setIsMenuOpen(false)}>
              الرئيسية
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/afaq-plus" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={() => setIsMenuOpen(false)}>
              AFAQ+
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={() => setIsMenuOpen(false)}>
              الدورات
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teachers" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={() => setIsMenuOpen(false)}>
              أساتذتنا
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={() => setIsMenuOpen(false)}>
              عن المنصة
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${isAfaqPlus ? "afaqplus-nav-link" : ""}`} onClick={() => setIsMenuOpen(false)}>
              تواصلو معنا
            </Link>
          </li>
        </ul>
          <Link to={isAfaqPlus ? "/afaq-plus" : "/"} className="navbar-logo">
            <img src={isAfaqPlus ? afaqPlus_logo : logo} alt="logo" className="logo-image" /> 
          </Link>
        
      </div>
    </nav>
  )
}

export default Navbar