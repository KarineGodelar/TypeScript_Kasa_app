import React from 'react';
import './index.scss';
import arrow from '../../assets/images/arrow-top.svg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface CollapseProps {
  titleText: string;
  text: string;
}

function Collapse({ titleText, text }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentLocation = useLocation();
  return (
    <div className="collapse">
      <div
        className={
          currentLocation.pathname === '/a-propos'
            ? 'collapse__dropdown--apropos'
            : 'collapse__dropdown'
        }
      >
        <p>{titleText}</p>
        <img
          id="arrow"
          src={arrow}
          alt="flèche"
          className={
            !isOpen
              ? 'collapse__dropdown--arrow-normal'
              : 'collapse__dropdown--arrow-reverse'
          }
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
      <div
        className={isOpen ? 'collapse__text--open' : 'collapse__text--closed'}
      >
        {text}
      </div>
    </div>
  );
}

export default Collapse;
