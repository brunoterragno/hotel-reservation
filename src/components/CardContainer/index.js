import React from 'react';
import Card from '../Card';
import { CardsContainer } from './style';
import imgOne from '../../assets/img/image-one.png';
import imgTwo from '../../assets/img/image-two.png';
import imgThree from '../../assets/img/image-three.png';
import imgFour from '../../assets/img/image-four.png';

const DATA = [
  {
    name: 'Hotel  of Sun',
    img: imgOne,
    price: '$30',
  },
  {
    name: 'Summer 4 season',
    img: imgTwo,
    price: '$20',
  },
  {
    name: 'LIght Hotel',
    img: imgThree,
    price: '$60',
  },
  {
    name: 'Hotel  of  Moon',
    img: imgFour,
    price: '$50',
  },
];

const CardContainer = () => {
  return (
    <CardsContainer>
      <Card data={DATA} />
    </CardsContainer>
  );
};

export default CardContainer;
