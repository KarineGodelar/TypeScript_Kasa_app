import React from 'react';
import './index.scss';
import { useLocation } from 'react-router';

function Banner() {
  const currentLocation = useLocation();
  return (
    <div
      className={
        currentLocation.pathname === '/a-propos'
          ? 'banner banner__apropos'
          : 'banner banner__home'
      }
    >
      <h1
        className={
          currentLocation.pathname === '/a-propos'
            ? 'banner__apropos--text'
            : 'banner__home--text'
        }
      >
        Chez vous, partout et ailleurs
      </h1>
    </div>
  );
}

export default Banner;
