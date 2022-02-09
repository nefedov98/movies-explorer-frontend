import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/bio-photo.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="about-me" id="aboutMe-anchor">
      <h1 className="about-me__title">Студент</h1>
      <div className="about-me__bio-wrapper">
        <div className="about-me__bio-information">
          <div className="about-me__bio-information-container">
            <h2 className="about-me__bio-title">Евгений</h2>
            <p className="about-me__bio-subtitle">Фронтенд-разработчик, 22 года</p>
            <p className="about-me__bio-text">
              Родился в Амурской области, на данный момент живу в городе Уфа. Образование среднее-специальное, закончил
              ЧПОУ «Газпром колледж Волгоград» Механический факультет. Люблю путешествия по России, читаю различную литературу, 
              занимаюсь спортом(футбол, тренажерный зал).
              Сейчас я заканчиваю обучение на курсах Яндекс.Практикума и активно прокачиваюсь
              дальше, в планах закрепить имеющиеся знания и изучить TS и Sass. 
            </p>
          </div>
          <div className="about-me__links-container">
            <a
              href="https://t.me/nefiodoveu"
              className="about-me__link"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
            <a
              href="https://github.com/nefedov98"
              className="about-me__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <img src={myPhoto} alt="me" className="about-me__photo" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;