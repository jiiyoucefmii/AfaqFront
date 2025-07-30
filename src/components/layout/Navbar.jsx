import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Navbar.css';
import logo from '../../assets/images/LogoFrameBlack.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="auth-buttons">
          <Link to="/register" className="register-button">
            تسجيل الدخول
          </Link>
          <Link to="/login" className="login-button">
            إنشاء حساب
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              الرئيسية
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/afaq-plus" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              AFAQ+
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              الدورات
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teachers" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              أساتذتنا
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              عن المنصة
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              تواصلو معنا
            </Link>
          </li>
        </ul>
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="logo" className="logo-image" /> 
          </Link>
        
      </div>
    </nav>
  )
}

export default Navbar