import React from 'react';
import './SearchForm.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm({ onFilterClick, onSearch, isLoading }) {
  const formWithValidation = useFormWithValidation();
  const { searchText } = formWithValidation.values;
  const { handleChange, resetForm } = formWithValidation;
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  // React.useState(() => {
  //   if(isLoading) {
      
  //   }
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      setError('Нужно ввести ключевое слово');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else {
      onSearch(searchText);
    }
  };
  return (
    <form className="search-form" noValidate  onSubmit={handleSubmit}>
      <div className="search-form-box">
        <div className="search-form__search-input-wrapper">
          <div className="search-form__search-input-find"></div>
          <input
            name="searchText"
            className="search-form__text-input"
            type="text"
            placeholder="Фильм"
            required
            value={searchText || ''}
            onChange={handleChange}
            autoComplete="off"
            disabled={isLoading}
          />
          {error && <span className="search-form__error">{error}</span>}
          <button className="search-form__button" type="submit" disabled={isLoading}></button>
          <div className="search-form__line"></div>
        </div>
        <div className="search-form__shorts-wrapper">
          <div className="filter-checkbox">
          <FilterCheckbox onFilterClick={onFilterClick} />
          </div>
          <p className="search-form__shorts-title">Короткометражки</p>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;