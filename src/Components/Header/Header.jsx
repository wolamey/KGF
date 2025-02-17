import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';
import burger from '../../assets/Burger.svg';
import cross from '../../assets/cross-burg.png';
export default function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__mobile">
        <div className="header__mobile-default">
          <a href="/" className="header__logo-link">
            <img src={logo} className="header__logo" alt="" />
          </a>

          {isBurgerOpen === true ? (
            <button
              onClick={() => setIsBurgerOpen(false)}
              className="header__cross"
            >
              <img src={cross} className="header__cross-img" alt="" />
            </button>
          ) : (
            <button
              onClick={() => setIsBurgerOpen(true)}
              className="header__burger"
            >
              <img src={burger} className="header__burger-img" alt="" />
            </button>
          )}
        </div>
        <div
          className={
            isBurgerOpen === true
              ? 'header__mobile-open active'
              : 'header__mobile-open'
          }
        >
          <div className="header__links header__mobile-links">
            <a
              onClick={() => setIsBurgerOpen(false)}
              href="/#adventages"
              className="header__link header__mobile-link"
            >
              Преимущества
            </a>

            <a
              onClick={() => setIsBurgerOpen(false)}
              href="/#portfolio"
              className="header__link header__mobile-link"
            >
              Портфолио
            </a>
            <a
              onClick={() => setIsBurgerOpen(false)}
              href="/#contacts"
              className="header__link header__mobile-link"
            >
              Контакты
            </a>
            <a
              onClick={() => setIsBurgerOpen(false)}
              href="/#customers"
              className="header__link header__mobile-link"
            >
              Наши заказчики
            </a>
            {/* <a
              onClick={() => setIsBurgerOpen(false)}
              href="/vacancy"
              className="header__link header__mobile-link"
            >
              Вакансии
            </a> */}
          </div>
          <div className="header__phone header__mobile-phone">
            <a
              onClick={() => setIsBurgerOpen(false)}
              href="tel:+375296909031"
              className="header__mobile-number"
            >
              +375-29-690-90-31
            </a>
            <a
              onClick={() => setIsBurgerOpen(false)}
              href="/#form"
              className="header__get-call header__mobile-get-call"
            >
              Заказать звонок
            </a>
          </div>
        </div>
      </div>
      <div className="header__desctop">
        <a href="/" className="header__logo-link">
          <img src={logo} className="header__logo" alt="" />
        </a>
        <div className="header__content">
          <div className="header__links">
            <a href="/#adventages" className="header__link">
              Преимущества
            </a>

            <a href="/#portfolio" className="header__link">
              Портфолио
            </a>
            <a href="/#contacts" className="header__link">
              Контакты
            </a>
            <a href="/#customers" className="header__link">
              Наши заказчики
            </a>
            {/* <a href="/vacancy" className="header__link">
              Вакансии
            </a> */}
          </div>
          <div className="header__phone">
            <a href="tel:+375291010355" className="header__number">
              +375-29-690-90-31
            </a>
            <a href="/#form" className="header__get-call">
              Заказать звонок
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
