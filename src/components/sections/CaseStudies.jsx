import React, { useEffect } from 'react';
import './CaseStudies.scss';
import AOS from 'aos';

const CaseStudies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const caseStudies = [
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      category: 'E-commerce',
      title: 'Увеличение продаж на 185% для интернет-магазина',
      results: [
        '185% рост продаж за 6 месяцев',
        '250% увеличение трафика',
        '35% снижение стоимости привлечения клиента'
      ],
      description: 'Разработали и внедрили комплексную стратегию лид-генерации для интернет-магазина товаров для дома, включая таргетированную рекламу, email-маркетинг и оптимизацию конверсионной воронки.'
    },
    {
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      category: 'B2B',
      title: 'Привлечение 120+ B2B клиентов для IT-компании',
      results: [
        '120+ новых корпоративных клиентов',
        '320% ROI маркетинговых инвестиций',
        '42% увеличение среднего чека'
      ],
      description: 'Создали эффективную воронку привлечения корпоративных клиентов для IT-компании, включая контент-маркетинг, вебинары и автоматизированные последовательности писем для нагрева лидов.'
    },
    {
      image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      category: 'Услуги',
      title: 'Снижение стоимости привлечения на 45% для сети клиник',
      results: [
        '45% снижение стоимости привлечения клиента',
        '78% рост количества новых пациентов',
        '92% увеличение повторных визитов'
      ],
      description: 'Оптимизировали маркетинговую стратегию для сети медицинских клиник, что привело к значительному снижению стоимости привлечения и увеличению конверсии сайта с 1.8% до 4.5%.'
    }
  ];

  return (
    <section className="case-studies" id="case-studies">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Наши кейсы</h2>
          <p>Реальные результаты наших клиентов</p>
        </div>

        <div className="cases-grid">
          {caseStudies.map((caseStudy, index) => (
            <div className="case-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="case-image">
                <img src={caseStudy.image} alt={caseStudy.title} />
                <div className="case-category">{caseStudy.category}</div>
              </div>
              <div className="case-content">
                <h3>{caseStudy.title}</h3>
                <div className="case-results">
                  {caseStudy.results.map((result, i) => (
                    <div className="result-item" key={i}>
                      <i className="fas fa-check-circle"></i>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
                <p>{caseStudy.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="case-studies-cta" data-aos="fade-up">
          <a href="#contact" className="btn btn-primary">Обсудить ваш проект</a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
