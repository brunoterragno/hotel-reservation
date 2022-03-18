import React, { useState } from 'react';
import Popup from '../Popup';
import { CardContainer } from './style';

const Card = ({ data, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectHotel, setSelectHotel] = useState([]);

  function setPopup(value) {
    const hotel = data.filter((d) => d.id === value);
    setSelectHotel(hotel);
    setIsOpen(true);
  }

  return (
    <>
      {isLoading
        ? [...Array(4)].map((e, i) => {
            return (
              <CardContainer
                key={i}
                style={{
                  background:
                    'linear-gradient(90.36deg, rgba(196, 196, 196, 0.38) 0.38%, rgba(151, 151, 151, 0.87) 99.76%)',
                }}
              ></CardContainer>
            );
          })
        : data.map((hotel) => {
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
