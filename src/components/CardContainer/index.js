import React from 'react';
import Card from '../Card';
import { CardsContainer } from './style';

const CardContainer = ({ data, isLoading }) => {
  return (
    <CardsContainer>
      <Card data={data} isLoading={isLoading} />
    </CardsContainer>
  );
};

export default CardContainer;
