import React from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import dataTable from '../../data/kasa';
import Rating from '../../components/Ratings';
import Carrousel from '../../components/Carrousel';
import Collapse from '../../components/Collapse';

type IdParams = {
  logementId: string;
};

function Fiche() {
  const { logementId } = useParams<IdParams>();

  const fichePictures = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.pictures);

  const ficheTitle = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.title);

  const ficheLocation = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.location);

  const ficheTagsTable = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) =>
      item.tags.map((e) => {
        return <li key={e.toString()}>{e}</li>;
      })
    );

  const ficheHostName = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.host.name);

  const ficheHostPicture = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.host.picture);

  const descriptionTitle = 'Description';

  const equipmentTitle = 'Équipements';

  const descriptionText = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.description);

  const equipmentText = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) =>
      item.equipments.map((e) => {
        return <li key={e.toString()}>{e}</li>;
      })
    );

  return (
    <div className="fiche">
      <div className="fiche__carrousel">
        <Carrousel images={fichePictures} />
      </div>
      <div className="fiche__content">
        <div className="fiche__textntags">
          <div className="fiche__textntags--text">
            <h1 className="fiche__textntags--text--title">{ficheTitle}</h1>
            <h2 className="fiche__textntags--text--location">
              {ficheLocation}
            </h2>
          </div>
          <div className="fiche__textntags--tags"> {ficheTagsTable} </div>
        </div>
        <div className="fiche__hostnrating">
          <div className="fiche__hostnrating--rating">
            <Rating />
          </div>
          <div className="fiche__hostnrating--host">
            <p className="fiche__hostnrating--host-name">{ficheHostName}</p>
            <img
              className="fiche__hostnrating--host-picture"
              src={ficheHostPicture.join()}
              alt="hôte"
            />
          </div>
        </div>
      </div>
      <div className="fiche__details">
        <div className="fiche__details--collapse">
          <Collapse
            titleText={descriptionTitle}
            text={descriptionText.join()}
          />
        </div>
        <div className="fiche__details--collapse">
          <Collapse titleText={equipmentTitle} text={equipmentText.join()} />
        </div>
      </div>
    </div>
  );
}

export default Fiche;
