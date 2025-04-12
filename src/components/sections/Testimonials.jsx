import React, { useEffect, useState } from 'react';
import './Testimonials.scss';
import AOS from 'aos';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: 'Благодаря LeadGenPro мы увеличили количество лидов на 250% за 3 месяца. Их подход к маркетингу и работа с конверсионными воронками превзошли все наши ожидания!',
      author: 'Александр Иванов',
      position: 'CEO, TechSolutions',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80'
    },
    {
      quote: 'Мы перепробовали много маркетинговых агентств, но только LeadGenPro действительно понимает специфику нашего бизнеса и реально приносит результаты. За первые два месяца сотрудничества ROI составил 320%.',
      author: 'Елена Смирнова',
      position: 'Маркетинг-директор, FashionRetail',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80'
    },
    {
      quote: 'Команда LeadGenPro предоставила нам полное решение для привлечения клиентов – от стратегии до реализации. Мы получили 150 новых клиентов всего за один квартал!',
      author: 'Дмитрий Петров',
      position: 'Владелец, MasterService',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80'
    }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Что говорят клиенты</h2>
          <p>Реальные результаты от наших довольных клиентов</p>
        </div>

        <div className="testimonials-slider" data-aos="fade-up">
          <div className="testimonials-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-item" key={index}>
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="quote">{testimonial.quote}</p>
                  <div className="author-info">
                    <div className="author-avatar">
                      <img src={testimonial.avatar} alt={testimonial.author} />
                    </div>
                    <div className="author-details">
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-navigation">
            <button className="nav-btn prev" onClick={handlePrev}>
              <i className="fas fa-arrow-left"></i>
            </button>
            <div className="dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>
            <button className="nav-btn next" onClick={handleNext}>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
