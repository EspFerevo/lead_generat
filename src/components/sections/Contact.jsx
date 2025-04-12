/* eslint-disable */
import React, { useEffect, useState } from 'react';
import './Contact.scss';
import { useForm } from 'react-hook-form';
import AOS from 'aos';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    setIsSubmitting(true);

    // По завершении формы устанавливаем флаг успеха
    // В реальной реализации этот код выполнится после успешной отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();

      // Скрываем сообщение об успехе через 5 секунд
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Свяжитесь с нами</h2>
          <p>Готовы начать привлекать больше клиентов? Оставьте заявку, и мы свяжемся с вами!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-up">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-content">
                <h3>Телефон</h3>
                <p>+7 (999) 123-45-67</p>
                <p>Пн-Пт: 9:00 - 18:00</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>info@leadgenpro.ru</p>
                <p>support@leadgenpro.ru</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h3>Адрес</h3>
                <p>г. Москва, ул. Примерная, 123</p>
                <p>Бизнес-центр &quot;Успех&quot;, офис 456</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="contact-form" data-aos="fade-up">
            {isSuccess ? (
              <div className="success-message">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>Спасибо за вашу заявку!</h3>
                <p>Наши специалисты свяжутся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                action="https://formsubmit.co/sanyhell@gmail.com"
                method="POST"
              >
                {/* Скрытые поля для настройки FormSubmit */}
                <input type="hidden" name="_subject" value="Новая заявка с сайта LeadGenPro" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={window.location.href} />
                <input type="hidden" name="_captcha" value="false" />

                <div className="form-group">
                  <label htmlFor="name">Имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ваше имя"
                    {...register('name', { required: 'Введите ваше имя' })}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="company">Компания</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Название вашей компании"
                    {...register('company', { required: 'Укажите название компании' })}
                    className={errors.company ? 'error' : ''}
                  />
                  {errors.company && <span className="error-message">{errors.company.message}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="ваш@email.com"
                      {...register('email', {
                        required: 'Введите ваш email',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Неверный формат email',
                        }
                      })}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+7 (999) 123-45-67"
                      {...register('phone', { required: 'Введите номер телефона' })}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Интересующая услуга</label>
                  <select
                    id="service"
                    name="service"
                    {...register('service', { required: 'Выберите услугу' })}
                    className={errors.service ? 'error' : ''}
                  >
                    <option value="">Выберите услугу</option>
                    <option value="lead-generation">Лид-генерация</option>
                    <option value="content-marketing">Контент-маркетинг</option>
                    <option value="email-marketing">Email-маркетинг</option>
                    <option value="conversion-funnels">Конверсионные воронки</option>
                    <option value="analytics">Аналитика и оптимизация</option>
                    <option value="other">Другое</option>
                  </select>
                  {errors.service && <span className="error-message">{errors.service.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Сообщение</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Расскажите о вашем проекте и ваших целях"
                    rows="5"
                    {...register('message')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
