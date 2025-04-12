import React, { useEffect } from 'react';
import './Pricing.scss';
import AOS from 'aos';

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const pricingPlans = [
    {
      name: 'Стартовый',
      price: '45 000',
      period: 'месяц',
      description: 'Идеально для малого бизнеса и стартапов, которые хотят начать привлекать клиентов через интернет.',
      features: [
        'Аудит текущего маркетинга',
        'Разработка стратегии лид-генерации',
        'Настройка 1 рекламного канала',
        'Создание посадочной страницы',
        'Еженедельные отчеты',
        'Поддержка по email и телефону'
      ],
      primary: false
    },
    {
      name: 'Бизнес',
      price: '95 000',
      period: 'месяц',
      description: 'Оптимальное решение для растущих компаний, которые хотят масштабировать привлечение клиентов.',
      features: [
        'Все включено в тариф "Стартовый"',
        'Настройка 3 рекламных каналов',
        'A/B тестирование рекламных кампаний',
        'Создание и оптимизация воронки продаж',
        'Автоматизация email-маркетинга',
        'Ежедневная оптимизация кампаний',
        'Персональный менеджер'
      ],
      primary: true
    },
    {
      name: 'Премиум',
      price: '175 000',
      period: 'месяц',
      description: 'Комплексное решение для компаний, которые стремятся к максимальным результатам и масштабированию.',
      features: [
        'Все включено в тариф "Бизнес"',
        'Настройка 5+ рекламных каналов',
        'Полноценная аналитика и CRM интеграция',
        'Разработка контент-стратегии',
        'Создание индивидуальной воронки продаж',
        'Ретаргетинг и программы лояльности',
        'Персональный стратег 24/7'
      ],
      primary: false
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Наши тарифы</h2>
          <p>Прозрачное ценообразование без скрытых платежей</p>
        </div>

        <div className="pricing-guarantee" data-aos="fade-up">
          <div className="guarantee-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div className="guarantee-text">
            <h3>Наша гарантия</h3>
            <p>Мы гарантируем положительный ROI в течение первых 3 месяцев сотрудничества или мы вернем вам деньги. Наша цель — помочь вашему бизнесу расти, а не просто тратить бюджет.</p>
          </div>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div
              className={`pricing-card ${plan.primary ? 'primary' : ''}`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="pricing-price">
                  <span className="currency">₽</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <p>{plan.description}</p>
              </div>
              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <i className="fas fa-check"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pricing-action">
                <a href="#contact" className={`btn ${plan.primary ? 'btn-accent' : 'btn-primary'}`}>
                  Выбрать тариф
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-custom" data-aos="fade-up">
          <div className="custom-content">
            <h3>Нужно индивидуальное решение?</h3>
            <p>Свяжитесь с нами для обсуждения вашего проекта и получения персонального предложения.</p>
            <a href="#contact" className="btn btn-secondary">Связаться с нами</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
