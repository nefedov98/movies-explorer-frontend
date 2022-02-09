import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form" noValidate >
      <div className="search-form-box">
        <div className="search-form__search-input-wrapper">
          <div className="search-form__search-input-find"></div>
          <input
            name="searchText"
            className="search-form__text-input"
            type="text"
            placeholder="Фильм"
            required
          />
          <button className="search-form__button" type="submit"></button>
          <div className="search-form__line"></div>
        </div>
        <div className="search-form__shorts-wrapper">
          <div className="filter-checkbox">
            <input
              className="filter-checkbox__switcher"
              type="checkbox"
            />
          </div>
          <p className="search-form__shorts-title">Короткометражки</p>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;