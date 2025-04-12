import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#">
              <span className="logo-text">LeadGen<span className="highlight">Pro</span></span>
            </a>
          </div>

          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#process">Процесс</a></li>
              <li><a href="#testimonials">Отзывы</a></li>
              <li><a href="#case-studies">Кейсы</a></li>
              <li><a href="#pricing">Цены</a></li>
              <li><a href="#contact" className="btn btn-primary btn-sm">Связаться</a></li>
            </ul>
          </nav>

          <div
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
