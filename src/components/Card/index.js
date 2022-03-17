import React, { useState } from 'react';
import Popup from '../Popup';
import { CardContainer } from './style';

const Card = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectHotel, setSelectHotel] = useState([]);

  function setPopup(value) {
    const hotel = data.filter((d) => d.id === value);
    setSelectHotel(hotel);
    setIsOpen(true);
  }

  return (
    <>
      {data.map((hotel) => {
        return (
          <CardContainer key={hotel.id} onClick={() => setPopup(hotel.id)}>
            <img src={hotel.image} alt={hotel.name} />
            <h4>{hotel.name}</h4>
            <div>
              <p>{hotel.rooms[0].baseRate}</p>
              <span>Night</span>
            </div>
          </CardContainer>
        );
      })}

      {isOpen && (
        <Popup isOpen={isOpen} setIsOpen={setIsOpen} data={selectHotel} />
      )}
    </>
  );
};
export default Card;
