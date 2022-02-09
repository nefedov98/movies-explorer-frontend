import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MainLogoLink from '../MainLogoLink/MainLogoLink';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header({ isLoggedIn }) {
    const isMobile = false
    const isOpen = false
    return (
        <header className="header">
            <MainLogoLink />
            {isLoggedIn && isMobile && <button className="menu-btn" type="button" />}
            {!isLoggedIn && (
                <div className="header__nav-wrapper header__nav-wrapper_type_unauth">
                    <Navigation isLoggedIn={isLoggedIn} />
                    <Link className="sign-in-btn" to="/signin">Войти</Link>
                </div>
            )}
            {!isMobile && isLoggedIn && (
                <div className="header__nav-wrapper header__nav-wrapper_type_auth">
                    <Navigation isLoggedIn={isLoggedIn} />
                    <Link to="/profile" className="profile-btn"></Link>
                </div>
            )}
            {isLoggedIn && <BurgerMenu isOpen={isOpen} />}
        </header>);
}

export default Header;

