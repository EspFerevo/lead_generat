import React, { useEffect } from 'react';
import './Process.scss';
import AOS from 'aos';

const Process = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Анализ и исследование',
      description: 'Мы изучаем ваш бизнес, конкурентов и целевую аудиторию, чтобы разработать эффективную стратегию.'
    },
    {
      number: '02',
      title: 'Разработка стратегии',
      description: 'На основе анализа создаем уникальную стратегию лид-генерации, адаптированную к вашему бизнесу.'
    },
    {
      number: '03',
      title: 'Настройка каналов',
      description: 'Настраиваем оптимальные каналы привлечения клиентов и создаем высококонверсионные воронки продаж.'
    },
    {
      number: '04',
      title: 'Запуск и оптимизация',
      description: 'Запускаем маркетинговые кампании и постоянно оптимизируем их для достижения наилучших результатов.'
    },
    {
      number: '05',
      title: 'Аналитика и отчетность',
      description: 'Предоставляем детальные отчеты о результатах и рекомендации по дальнейшему улучшению.'
    }
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Как мы работаем</h2>
          <p>Наш проверенный процесс привлечения клиентов для вашего бизнеса</p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div className="process-step" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process-image" data-aos="fade-up">
          <img src="https://img.freepik.com/free-vector/gradient-infographic-steps-template_23-2149155175.jpg?w=1380&t=st=1710873320~exp=1710873920~hmac=3d7ba907093dd3a2faadfc5c3e63b5b97a89a6e599edf7fd4e40a21de4b4ad5c" alt="Процесс работы" />
        </div>

        <div className="process-cta" data-aos="fade-up">
          <a href="#contact" className="btn btn-primary">Начать сотрудничество</a>
        </div>
      </div>
    </section>
  );
};

export default Process;
