import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({isOpen}) {
  return (
    <div className={`burger-menu ${isOpen ? 'burger-menu_is-open' : ''}`}>
      <button
        className="burger-menu__close-btn"
        type="button"
        tabIndex={0}
      />

      <div className="burger-menu__link-list">
        <NavLink
          exact
          to="/"
          className="burger-menu__link"
          activeClassName="burger-menu__link_is-active"
        >
          Главная
        </NavLink>

        <NavLink
          to="/movies"
          className="burger-menu__link"
          activeClassName="burger-menu__link_is-active"
        >
          Фильмы
        </NavLink>

        <NavLink
          to="/saved-movies"
          className="burger-menu__link"
          activeClassName="burger-menu__link_is-active"
        >
          Сохранённые фильмы
        </NavLink>
      </div>

      <Link to="/profile" className="profile-btn"><div className="profile-btn__image" /></Link>
    </div>
  );
}

export default BurgerMenu;