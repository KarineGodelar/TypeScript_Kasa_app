import React from 'react';
import logo from '../../assets/images/logo_kasa_blanc.svg';
import './index.scss';

function Footer() {
  return (
    <div className="footer">
      <img className="footer__logo" src={logo} alt="logo Kasa" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
