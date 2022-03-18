import React, { useState } from 'react';
import {
  PopupContainer,
  HotelSection,
  InlineInfo,
  GridInfo,
  ImageDiv,
  BtnClose,
  HotelDescription,
  Rooms,
  HotelServices,
  HotelCalendar,
  BtnReservation,
} from './style';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Popup = ({ data, setIsOpen }) => {
  const roomList = data.map((el) => el.rooms)[0];
  const [checkedState, setCheckedState] = useState(
    new Array(roomList.length).fill(false)
  );

  const [price, setPrice] = useState(0);

  const formatedPrice = 'R$ ' + price.toFixed(2);

  function handleChecked(position) {
    const updateCheckedValue = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updateCheckedValue);
    setPrice(calculateRate(updateCheckedValue, roomList));
  }

  const calculateRate = (value, roomList) => {
    return value.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + roomList[index].baseRate;
      }
      return sum;
    }, 0);
  };

  return (
    <PopupContainer>
      <div>
        <BtnClose onClick={() => setIsOpen(false)}>X</BtnClose>
        {data.map((hotel) => {
          return (
            <HotelSection key={hotel.id}>
              <ImageDiv>
                <img src={hotel.image} alt={hotel.name} />
              </ImageDiv>
              <div>
                <InlineInfo>
                  <h4>{hotel.name}</h4>
                  <div>
                    <p>{formatedPrice}</p>
                    <span>Night</span>
                  </div>
                </InlineInfo>
                <GridInfo>
                  <HotelDescription>
                    <p>{hotel.description}</p>
                    <span>
                      Estacionamento: {hotel.parkingIncluded ? 'Sim' : 'Não'}
                    </span>
                  </HotelDescription>
                  <HotelCalendar>
                    <h4>Availability</h4>
                    <Calendar />
                  </HotelCalendar>
                  <Rooms>
                    <h4>Available rooms</h4>
                    {hotel.rooms.map(({ description }, index) => {
                      return (
                        <li key={index}>
                          <p>{description}</p>
                          <input
                            type='checkbox'
                            checked={checkedState[index]}
                            onChange={() => handleChecked(index)}
                          />
                        </li>
                      );
                    })}
                  </Rooms>
                  <HotelServices>
                    <h4>Services included</h4>
                    <span>Algo</span>
                  </HotelServices>
                  <BtnReservation>Reservar</BtnReservation>
                </GridInfo>
              </div>
            </HotelSection>
          );
        })}
      </div>
    </PopupContainer>
  );
};

export default Popup;
