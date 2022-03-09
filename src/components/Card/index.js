import React from 'react';
import { CardContainer } from './style';

const Card = ({ data }) => {
  return (
    <>
      {data.map((hotel) => {
        return (
          <CardContainer key={hotel.name}>
            <img src={hotel.img} alt={hotel.name} />
            <h4>{hotel.name}</h4>
            <p>{hotel.price}</p>
            <span>Night</span>
          </CardContainer>
        );
      })}
    </>
  );
};
export default Card;
