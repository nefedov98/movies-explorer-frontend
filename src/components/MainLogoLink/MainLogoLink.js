import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './MainLogoLink.css';

function MainLogoLink() {
  return (
    <Link to="/" target="_self"><img src={logo} className="main-logo-link" alt="логотип" /></Link>
  );
}

export default MainLogoLink;