import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const PageErreur: FC = () => {
  return (
    <div className="erreur">
      <h1 className="erreur__title">404</h1>
      <h2 className="erreur__subtitle">
        Oups ! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/home" className="erreur__linkhome">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default PageErreur;
