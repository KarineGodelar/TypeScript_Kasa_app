import React from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import './index.scss';
import dataTable from '../../data/kasa';

interface CardItem {
  id: string;
  title: string;
  cover: string;
}

function Home() {
  const cardData: CardItem[] = dataTable;

  const cardId: string[] = cardData.map((item) => item.id);
  const cardTitle: string[] = cardData.map((item) => item.title);
  const cardCover: string[] = cardData.map((item) => item.cover);

  console.log(cardId);
  console.log(cardTitle);
  console.log(cardCover);

  return (
    <div className="home-container">
      <Banner />
      <div className="cards-container">
        <Card
          cardId={cardId[17]}
          cardTitle={cardTitle[17]}
          cardCover={cardCover[17]}
        />
        <Card
          cardId={cardId[1]}
          cardTitle={cardTitle[1]}
          cardCover={cardCover[1]}
        />
        <Card
          cardId={cardId[2]}
          cardTitle={cardTitle[2]}
          cardCover={cardCover[2]}
        />
        <div className="cards-container-big-screen">
          <Card
            cardId={cardId[3]}
            cardTitle={cardTitle[3]}
            cardCover={cardCover[3]}
          />
          <Card
            cardId={cardId[4]}
            cardTitle={cardTitle[4]}
            cardCover={cardCover[4]}
          />
          <Card
            cardId={cardId[5]}
            cardTitle={cardTitle[5]}
            cardCover={cardCover[5]}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
