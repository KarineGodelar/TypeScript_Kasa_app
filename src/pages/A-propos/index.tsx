import React from 'react';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import './index.scss';

function Apropos() {
  const title1: string = 'Fiabilité';
  const title2: string = 'Respect';
  const title3: string = 'Service';
  const title4: string = 'Sécurité';
  const text1: string = `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.`;
  const text2: string = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`;
  const text3: string = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`;
  const text4: string = `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`;

  return (
    <div className="apropos">
      <Banner />
      <div className="apropos__collapse">
        <Collapse titleText={title1} text={text1} />
        <Collapse titleText={title2} text={text2} />
        <Collapse titleText={title3} text={text3} />
        <Collapse titleText={title4} text={text4} />
      </div>
    </div>
  );
}

export default Apropos;
