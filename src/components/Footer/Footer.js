import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__main-text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__rights-content-wrapper">
        <p className="footer__copyrights">&copy; 2022</p>
        <ul className="footer__rights-list">
          <li className="footer__rights-item">
            <a
              href="https://praktikum.yandex.ru/"
              className="footer__rights-link"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__rights-item">
            <a
              href="https://github.com/nefedov98"
              className="footer__rights-link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="footer__rights-item">
            <a
              href="https://t.me/nefiodoveu"
              className="footer__rights-link"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;