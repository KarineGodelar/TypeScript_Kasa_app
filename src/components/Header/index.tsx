import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo_kasa_desktop.svg';
import './index.scss';

function Header() {
  const currentLocation = useLocation();
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo Kasa" />
      <nav className="header__link">
        <Link
          to="/home"
          className={
            currentLocation.pathname === '/home'
              ? ' header__link--underlined '
              : ' header__link--none '
          }
        >
          Accueil
        </Link>
        <Link
          to="/a-propos"
          className={
            currentLocation.pathname === '/a-propos'
              ? ' header__link--underlined '
              : ' header__link--none '
          }
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
