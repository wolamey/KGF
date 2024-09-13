import React from 'react';
import logo from '../../assets/logo.png';
import './Footer.scss';
export default function Footer() {
  return (
    <footer className="footer">
      <a href="/" className="footer__logo-link">
        <img src={logo} className="footer__logo-img" alt="" />
      </a>
      <div className="footer__column">
        <a href="tel:+375291010355" className="description footer__link">
          +375-29-690-90-31
        </a>
        <a className="footer__link description" href="mailto:info@kgf.by">
          info@kgf.by
        </a>
        <p className="description footer__item">
          220062, г. Минск, пр-т. Победителей, д.141, пом.66
        </p>
      </div>
      <div className="footer__column">
        <a href="/privacy" className="footer__link">
          Политика конфиденциальности
        </a>
        <a href="/terms" className="footer__link">
          Условия обслуживания
        </a>
        <a href="/cookie-settings" className="footer__link">
          Настройки cookie
        </a>
      </div>
      <div className="footer__column">
        <p className="footer__item description">ООО « КГ Фасады »</p>
        <p className="footer__item description">УНП 192597674</p>
      </div>
    </footer>
  );
}
