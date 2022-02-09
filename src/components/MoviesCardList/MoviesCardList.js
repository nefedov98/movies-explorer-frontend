import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ del }) {

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        <li className="movies-card-list__item" >
          <MoviesCard del />
        </li>
        <li className="movies-card-list__item" >
          <MoviesCard del />
        </li>
        <li className="movies-card-list__item" >
          <MoviesCard />
        </li>
        <li className="movies-card-list__item" >
          <MoviesCard />
        </li>
        <li className="movies-card-list__item" >
          <MoviesCard />
        </li>
        <li className="movies-card-list__item" >
          <MoviesCard />
        </li>
        <li className="movies-card-list__item" >
          <MoviesCard />
        </li>
        <li className="movies-card-list__item" >
          <MoviesCard />
        </li>
        <li className="movies-card-list__item" >
          <MoviesCard />
        </li>
      </ul>
      <div className="load-more">
        <button className="load-more__more-btn" type="button" >Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;