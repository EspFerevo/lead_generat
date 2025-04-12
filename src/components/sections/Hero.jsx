import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Привлекайте <span className="highlight">целевых</span> клиентов<br />в ваш бизнес</h1>
            <p>Мы помогаем компаниям увеличивать продажи с помощью эффективных стратегий лид-генерации и конверсионного маркетинга.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Получить предложение</a>
              <a href="#process" className="btn btn-secondary">Как мы работаем</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">лет опыта</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">довольных клиентов</span>
              </div>
              <div className="stat">
                <span className="stat-number">250+</span>
                <span className="stat-label">успешных проектов</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=1380&t=st=1710873120~exp=1710873720~hmac=dd5859d3bf1e29a2d17a0e90cc1a6d5d0a5fbb77d4bf76ba7e7ee22dc3f14dc8" alt="Lead Generation" />
            <div className="hero-shape"></div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
