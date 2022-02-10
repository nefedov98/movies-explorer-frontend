import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies({del}) {
    return (
        <div className="saved-movies">
            <SearchForm />
            <MoviesCardList del Saved/>
        </div>
    );
}

export default SavedMovies;