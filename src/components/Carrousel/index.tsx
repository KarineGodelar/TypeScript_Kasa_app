import React from 'react';
import './index.scss';
import arrow_left from '../../assets/images/arrow_backward.svg';
import arrow_right from '../../assets/images/arrow_forward.svg';
import { useState } from 'react';

// images = tableau de pictures du logement
type Image = string;
type Images = Image[][];

interface CarrouselProps {
  images: Images;
}

function Carrousel({ images }: CarrouselProps) {
  const [count, setCount] = useState(0);
  const imageTable: Image[] = [];
  images.forEach((element) => {
    return element.forEach((item) => imageTable.push(item));
  });

  return (
    <div className="carrousel">
      <img
        className="carrousel__image"
        src={imageTable[count]}
        alt="logement"
      />
      <img
        className={imageTable.length === 1 ? 'invisible' : 'arrow arrow--left'}
        src={arrow_left}
        alt="flèche gauche"
        onClick={() => setCount(count > 0 ? count - 1 : imageTable.length - 1)}
      />
      <img
        className={imageTable.length === 1 ? 'invisible' : 'arrow arrow--right'}
        src={arrow_right}
        alt="flèche droite"
        onClick={() => setCount(count < imageTable.length - 1 ? count + 1 : 0)}
      />
      <p className={imageTable.length === 1 ? 'invisible' : 'number'}>
        {count + 1}/{imageTable.length}
      </p>
    </div>
  );
}

export default Carrousel;
