import React from 'react';
import './MoviesCard.css';

function MoviesCard({del}) {

  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <div className="movie-card__meta-container">
          <h4 className="movie-card__title">Название</h4>
          <p className="movie-card__duration">1 45</p>
        </div>
        <div className={del ? 'movie-card__delete' : 'movie-card__no-save'}></div>
      </div>
      <a className="movie-card__link" href="https://www.calend.ru/img/content/i1/1725.jpg" target="_blank" rel="noopener noreferrer">
        <img
          className="movie-card__image"
          src="https://www.calend.ru/img/content/i1/1725.jpg"
          alt={`Фотография к фильму название`}
        />
      </a>
    </div>
  );
}

export default MoviesCard;