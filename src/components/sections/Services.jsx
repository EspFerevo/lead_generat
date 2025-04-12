import React, { useEffect } from 'react';
import './Services.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: 'fas fa-search',
      title: 'Поиск и привлечение клиентов',
      description: 'Находим и привлекаем ваших идеальных клиентов с помощью таргетированной рекламы и маркетинговых стратегий.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Конверсионные воронки',
      description: 'Разрабатываем эффективные воронки продаж, которые преобразуют посетителей в клиентов и увеличивают ваш доход.'
    },
    {
      icon: 'fas fa-envelope-open-text',
      title: 'Email-маркетинг',
      description: 'Создаем автоматизированные email-кампании для нагрева лидов, повышения конверсии и удержания клиентов.'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Контент-маркетинг',
      description: 'Разрабатываем и реализуем контент-стратегии, которые привлекают целевую аудиторию и укрепляют ваш бренд.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Автоматизация маркетинга',
      description: 'Внедряем системы автоматизации маркетинга для оптимизации процессов и повышения эффективности.'
    },
    {
      icon: 'fas fa-analytics',
      title: 'Аналитика и оптимизация',
      description: 'Анализируем данные и оптимизируем маркетинговые кампании для достижения максимальной рентабельности инвестиций.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Наши услуги</h2>
          <p>Комплексные решения для привлечения клиентов и роста вашего бизнеса</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta" data-aos="fade-up">
          <h3>Не нашли нужную услугу?</h3>
          <p>Свяжитесь с нами для обсуждения индивидуального решения для вашего бизнеса.</p>
          <a href="#contact" className="btn btn-primary">Связаться с нами</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
