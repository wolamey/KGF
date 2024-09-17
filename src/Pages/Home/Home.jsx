import React, { useEffect, useState } from 'react';
import './Home.scss';
import mainImg from '../../assets/riviera1.jpg';
import img2 from '../../assets/riviera3.jpeg';
import img3 from '../../assets/luch4.jpg';
import task1 from '../../assets/easy1.png';
import task2 from '../../assets/easy2.png';
import task3 from '../../assets/easy3.png';
import task4 from '../../assets/easy4.png';
import cross from '../../assets/cross.png';
import arrow from '../../assets/arrow-slider.png';

import tinkoff1 from '../../assets/tinkoff1.jpg';
import tinkoff2 from '../../assets/tinkoff2.jpg';
import tinkoff3 from '../../assets/tinkoff3.jpg';
import tinkoff4 from '../../assets/tinkoff4.jpg';
import tinkoff5 from '../../assets/tinkoff5.jpg';
import tinkoff6 from '../../assets/tinkoff6.jpg';
import tinkoff7 from '../../assets/tinkoff7.jpg';
import luch1 from '../../assets/luch1.jpg';
import luch2 from '../../assets/luch2.jpg';
import luch3 from '../../assets/luch3.jpg';
import luch4 from '../../assets/luch4.jpg';
import luch5 from '../../assets/luch5.jpg';
import luch6 from '../../assets/luch6.jpg';
import luch7 from '../../assets/luch7.jpg';
import riviera1 from '../../assets/riviera1.jpg';
import riviera2 from '../../assets/riviera2.jpeg';
import riviera3 from '../../assets/riviera3.jpeg';
import development1 from '../../assets/development1.jpg';
import development2 from '../../assets/development2.jpg';
import development3 from '../../assets/development3.jpg';
import development4 from '../../assets/development4.jpg';
import development5 from '../../assets/development5.jpg';
import Slider from '../../Components/Slider/Slider';
import customer1 from '../../assets/customer1.png';
import customer2 from '../../assets/customer2.png';
import customer3 from '../../assets/customer3.png';
import customer4 from '../../assets/customer4.png';
import customer5 from '../../assets/customer5.png';
import customer6 from '../../assets/customer6.png';
import customer7 from '../../assets/customer7.png';
import contact1 from '../../assets/contact1.png';
import contact2 from '../../assets/contact2.png';
import contact3 from '../../assets/contact3.png';
import contact4 from '../../assets/contact4.png';
import contact5 from '../../assets/contact5.png';
import emailjs from 'emailjs-com';
import SertificateSwiper from '../../Components/SertificateSwiper/SertificateSwiper';

export default function Home() {
  const easyBullits = [
    {
      text: 'Гарантия на выполненные работы от 5 лет',
      img: task1,
    },
    {
      text: 'Все работы выполняются по строительным нормам и правилам',
      img: task2,
    },
    {
      text: 'Соблюдение сроков при реализации работ',
      img: task3,
    },
    {
      text: 'Большой опыт работы в высококачественной отделке помещений',
      img: task4,
    },
  ];
  const howWork = [
    'Обсуждение работы с заказчиком',
    'Составление и оформление договора',
    'Согласование и подписание договора',
    'Выполнение работ согласно сроков и стоимости согласно договора',
  ];
  const gallery = [
    {
      name: 'ООО «Тинькофф Центр Разработки»',
      images: [
        tinkoff1,
        tinkoff2,
        tinkoff3,
        tinkoff4,
        tinkoff5,
        tinkoff6,
        tinkoff7,
      ],
    },
    {
      name: 'Офис компании «Луч» на пр. Независимости',
      images: [luch1, luch2, luch3, luch4, luch5, luch6, luch7],
    },

    {
      name: 'SPA-комплекс «Ривьера»',
      images: [riviera1, riviera2, riviera3],
    },

    {
      name: 'A-100 Девелопмент',
      images: [
        development1,
        development2,
        development3,
        development4,
        development5,
      ],
    },
  ];

  const customers = [
    customer1,
    customer2,
    customer3,
    customer4,
    customer5,
    customer6,
    customer7,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [images, setImages] = useState([]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diffX = e.clientX - startX;
    if (diffX > 50) {
      prevSlide();
      handleMouseUp();
    } else if (diffX < -50) {
      nextSlide();
      handleMouseUp();
    }
  };

  const handleSlideClick = (imagesArray) => {
    setImages(imagesArray);
    setIsFullScreen(true);
    document.body.style.overflowY = 'hidden';
  };

  const handleClose = () => {
    setIsFullScreen(false);
    setCurrentIndex(0);
    document.body.style.overflowY = 'auto';
  };

  const [isSubmitted, setIsSubmitted] = useState(false); // Состояние для отслеживания отправки формы

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

    e.target.reset(); // Сбрасывает форму после отправки
  };

  const handleReset = () => {
    setIsSubmitted(false); // Возвращаемся к исходному состоянию формы
  };
  return (
    <div className="home">
      <div className="main">
        <div className="main__text">
          <h1 className="main__title">
            Строительно-монтажные работы. <br /> Отделочные работы любой
            сложности. <br /> Монтаж фасадных систем.
          </h1>
          <p className="main__description">Надежное будущее строим вместе </p>
          <a href="#form" className="main__button">
            Получить консультацию
          </a>
        </div>

        <div className="main__right">
          <div className="main__decoration"></div>
          <Slider images={[mainImg, img2, img3]} />
        </div>
      </div>
      <div id="adventages" className="tasks">
        <p className="tasks__title title">
          Все задачи решаются просто, если обратиться в компанию
          <span className="title__red"> KG fasady</span>
        </p>
        <div className="tasks__wrapper">
          {easyBullits.map(({ text, img }, index) => (
            <div key={index} className="tasks__item">
              <img src={img} className="tasks__item-img" alt="" />
              <p className="tasks__item-deskription description">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="how-work">
        <div className="how-work__filter"></div>
        <div className="how-work__container">
          <div className="how-work__top">
            <div className="how-work__line"></div>
            <p className="how-work__title title">КАК МЫ РАБОТАЕМ</p>
            <div className="how-work__line"></div>
          </div>

          <div className="how-work__wrapper">
            {howWork.map((text, index) => (
              <div key={index} className="how-work__item">
                <p className="how-work__num">0{index + 1}</p>
                <p className="how-work__description description">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="portfolio" className="gallery">
        <div className="gallery__top">
          <div className="gallery__title title">ГАЛЕРЕЯ РАБОТ</div>
        </div>
        <div className="gallery__wrapper">
          {gallery.map(({ name, images }, index) => (
            <div
              key={index}
              className="gallery__item"
              onClick={() => handleSlideClick(images)}
            >
              <div className="gallery__item-border"></div>
              <div className="gallery__name description">{name}</div>
              <img src={images[0]} className="gallery__image-main" alt="" />
            </div>
          ))}
        </div>

        {isFullScreen && (
          <div
            style={{ overflowY: isFullScreen ? 'scroll' : 'hidden' }}
            className="slider-overlay"
            onClick={handleClose}
          >
            <button className="slider__close" onClick={handleClose}>
              <img src={cross} alt="" className="close__img" />
            </button>

            <div
              className="slider-gallery slider__full-home"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div
                className="slider__content"
                style={{ transform: `translateX(-${currentIndex * 100}%) ` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="slider__fullscreen-slide">
                    <img
                      src={image}
                      onClick={(event) => event.stopPropagation()}
                      className="slider__image"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              className="slider__prev"
              onClick={(event) => {
                event.stopPropagation();
                prevSlide();
              }}
            >
              <img
                className="arrow__left-img slider-arrow"
                src={arrow}
                alt=""
              />
            </button>
            <button
              className="slider__next"
              onClick={(event) => {
                event.stopPropagation();
                nextSlide();
              }}
            >
              <img className="slider-arrow" src={arrow} alt="" />
            </button>
          </div>
        )}
      </div>
      <div id="contacts" className="contacts">
        <div className="contacts__filter"></div>
        <div className="contacts__container">
          <div className="contacts__top">
            <div className="contacts__line"></div>
            <p className="contacts__title title">Наши контакты</p>
            <div className="contacts__line"></div>
          </div>
          <div className="contacts__wrapper">
            <div className="contacts__item">
              <img src={contact1} className="contacts__item-img" alt="" />
              <p className="contact__item-description description">
                ООО « КГ Фасады »
              </p>
            </div>
            <div className="contacts__item">
              <img src={contact2} className="contacts__item-img" alt="" />
              <p className="contact__item-description description">
                УНП 192597674
              </p>
            </div>
            <div className="contacts__item">
              <img src={contact3} className="contacts__item-img" alt="" />
              <p className="contact__item-description description">
                220062, г. Минск, пр-т. Победителей, д.141, пом.66
              </p>
            </div>
            <div className="contacts__item">
              <img src={contact4} className="contacts__item-img" alt="" />
              <a
                className="contacts__link description"
                href="mailto:info@kgf.by"
              >
                info@kgf.by
              </a>
            </div>
            <div className="contacts__item">
              <img src={contact5} className="contacts__item-img" alt="" />
              <a
                className="contacts__link description"
                href="tel:+375296909031"
              >
                +375-29-690-90-31
              </a>
            </div>
            <a href="#form" className="contact__button ">
              Свяжитесь со мной
            </a>
          </div>
        </div>
      </div>
      <div className="customers">
        <p id="customers" className="customers__title title">
          Наши заказчики
        </p>
        <div className="customers__wrapper">
          {customers.map((img, index) => (
            <img src={img} key={index} className="customers__img" alt="" />
          ))}
        </div>
      </div>
      <div id="form" className="form">
        <div className="form__filter"></div>
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
                  Нажимая на кнопку "Отправить", я даю свое согласие на
                  обработку моих персональных данных для получения обратной
                  связи в соответствии с
                  <a className="contact__checkbox-link" href="#">
                    Политикой обработки персональных данных
                  </a>
                </span>
              </label>
              <input type="submit" className="form__submit" value="Отправить" />
            </form>
          )}
        </div>
      </div>

      <div className="sertificate">
        <p className="title serfiticate__title">Наши сертификаты</p>
        <SertificateSwiper />
      </div>
    </div>
  );
}
