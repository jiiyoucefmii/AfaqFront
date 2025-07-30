import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/LandingPage.css'
import yellowHero from '../../assets/images/yellowHero.png'
import mockupPC from '../../assets/images/MockupPC.png'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-upper">
          <div className="hero-text">
            <h1>منصة آفاق التعليمية</h1>
            <p>الخبير في كل شيء كان مبتدئاً في يوم ما</p>
          </div>
          <div className="hero-image">
            <img src={yellowHero} alt="آفاق التعليمية" className="yellow-hero" />
          </div>
        </div>
        
        <div className="hero-lower">
          <div className="hero-content">
            <h2>منصة آفاق - تعلم عن بُعد بأسلوب مبتكر</h2>
            <p>منصة آفاق توفر تجربة تعليمية شاملة ومميزة عبر الإنترنت، تجمع بين المتعة والفعالية لمساعدتك على التعلم بسهولة وفي الوقت والمكان الذي يناسبك.</p>
            <div className="cta-buttons">
              <Link to="/courses" className="btn btn-primary">استكشف الدورات</Link>
              <Link to="/register" className="btn btn-secondary">ابدأ الآن</Link>
            </div>
          </div>
          <div className="mockup-image">
            <img src={mockupPC} alt="جهاز كمبيوتر يعرض منصة آفاق" className="mockup-pc" />
          </div>
        </div>
      </div>

      
    
    </div>
  )
}

export default LandingPage