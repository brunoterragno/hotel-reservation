import React from 'react';
import Card from '../Card';
import { CardsContainer } from './style';

const CardContainer = ({ data }) => {
  return (
    <CardsContainer>
      <Card data={data} />
    </CardsContainer>
  );
};

export default CardContainer;
