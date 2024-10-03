import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import './Form.scss';

export default function Form({ type }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lsd2vt7',
        'template_ptiijui',
        e.target,
        'rLgQ3Ae2anwIKnqVj'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          alert('Ошибка при отправке формы, пожалуйста, попробуйте снова.');
        }
      );

    e.target.reset();
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="form__container">
      {isSubmitted ? (
        <div className="thank-you-message">
          <p className="title">Спасибо за вашу заявку!</p>
          <button className="form__reset-button" onClick={handleReset}>
            Я хочу отправить еще
          </button>
        </div>
      ) : (
        <form className="form__action" onSubmit={handleSubmit}>
          <p className="form__title title">Форма обратной связи</p>
          {/* Скрытое поле для передачи названия вакансии */}
          <input type="hidden" name="vacancy" value={type} />

          <input
            required
            type="text"
            name="name"
            placeholder="Ваше имя"
            className="form__input"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="E-mail"
            className="form__input"
          />
          <input
            required
            type="tel"
            name="phone"
            placeholder="+375 (00) 000-00-00"
            className="form__input"
          />

          <label className="contact__checkbox">
            <input required type="checkbox" id="consent" name="consent" />
            <span className="description">
              Нажимая на кнопку "Отправить", я даю свое согласие на обработку
              моих персональных данных для получения обратной связи в
              соответствии с
              <a className="contact__checkbox-link" href="#">
                Политикой обработки персональных данных
              </a>
            </span>
          </label>
          <input type="submit" className="form__submit" value="Отправить" />
        </form>
      )}
    </div>
  );
}
