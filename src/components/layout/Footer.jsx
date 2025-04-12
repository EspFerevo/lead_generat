import React from 'react';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-company">
            <h3 className="footer-logo">LeadGen<span>Pro</span></h3>
            <p>Мы помогаем компаниям привлекать целевых клиентов и увеличивать продажи с помощью эффективных стратегий лид-генерации.</p>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Компания</h4>
              <ul>
                <li><a href="#services">Услуги</a></li>
                <li><a href="#process">Как мы работаем</a></li>
                <li><a href="#case-studies">Кейсы</a></li>
                <li><a href="#pricing">Цены</a></li>
              </ul>
            </div>

            <div className="footer-link-group">
              <h4>Поддержка</h4>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Контакты</a></li>
                <li><a href="#policy">Политика конфиденциальности</a></li>
                <li><a href="#terms">Условия использования</a></li>
              </ul>
            </div>

            <div className="footer-link-group">
              <h4>Контакты</h4>
              <ul className="contact-info">
                <li><i className="fas fa-map-marker-alt"></i> г. Москва, ул. Примерная, 123</li>
                <li><i className="fas fa-phone-alt"></i> +7 (999) 123-45-67</li>
                <li><i className="fas fa-envelope"></i> info@leadgenpro.ru</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} LeadGenPro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
