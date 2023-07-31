import React from 'react';
import star_active from '../../assets/images/star-active.svg';
import star_inactive from '../../assets/images/star-inactive.svg';
import { useParams } from 'react-router-dom';
import dataTable from '../../data/kasa';
import './index.scss';

function Rating() {
  const { logementId } = useParams<{ logementId: string }>();

  const ratingNumber = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.rating)[0];

  return (
    <div className="ratings">
      <img
        className="ratings__star"
        src={parseInt(ratingNumber) >= 1 ? star_active : star_inactive}
        alt="étoile"
      />
      <img
        className="ratings__star"
        src={parseInt(ratingNumber) >= 2 ? star_active : star_inactive}
        alt="étoile"
      />
      <img
        className="ratings__star"
        src={parseInt(ratingNumber) >= 3 ? star_active : star_inactive}
        alt="étoile"
      />
      <img
        className="ratings__star"
        src={parseInt(ratingNumber) >= 4 ? star_active : star_inactive}
        alt="étoile"
      />
      <img
        className="ratings__star"
        src={parseInt(ratingNumber) >= 5 ? star_active : star_inactive}
        alt="étoile"
      />
    </div>
  );
}

export default Rating;
