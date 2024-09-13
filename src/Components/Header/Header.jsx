import React from 'react';
import { useState } from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';
import burger from '../../assets/Burger.svg';
export default function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__mobile">
        <div className="header__mobile-default">
          <a href="/" className="header__logo-link">
            <img src={logo} className="header__logo" alt="" />
          </a>
          <button className="header__burger">
            <img src={burger} className="header__burger-img" alt="" />
          </button>
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
          </div>
          <div className="header__phone">
            <a href="tel:+375291010355" className="header__number">
              +375-29-690-90-31
            </a>
            <a href="#form" className="header__get-call">
              Заказать звонок
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
