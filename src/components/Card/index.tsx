import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

interface CardProps {
  cardId: string;
  cardTitle: string;
  cardCover: string;
}

function Card({ cardId, cardTitle, cardCover }: CardProps) {
  return (
    <div className="card">
      <div>
        <img src={cardCover} alt="appartement" className="card__picture" />
      </div>
      <Link to={'/fiche-logement/' + cardId} className="card__title">
        {cardTitle}
      </Link>
    </div>
  );
}

export default Card;
