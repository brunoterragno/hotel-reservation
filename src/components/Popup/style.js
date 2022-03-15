import styled from 'styled-components';

export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  z-index: 3;

  & > div {
    position: relative;
    width: 70rem;
    max-height: 80%;
    display: flex;

    @media (max-width: 860px) {
      width: 75%;
    }

    @media (max-width: 580px) {
      width: 85%;
    }
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 0.2rem solid #8fc1d4;
  font-weight: 700;
  color: #c10b0b;
  top: -1rem;
  right: -1rem;
  z-index: 9;
  transition: 300ms ease-out;

  &:hover {
    background: #c10b0b;
    border: none;
    color: #fff;
  }
`;

export const HotelSection = styled.div`
  background: white;
  border-radius: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  & > div:last-of-type {
    overflow-y: scroll;
  }
`;

export const ImageDiv = styled.div`
  height: 20rem;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InlineInfo = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding: 1rem;

  & > h4 {
    flex: 1;
    letter-spacing: 0.1rem;
  }

  & > div {
    display: inline-flex;
    justify-content: space-between;
    min-width: 30%;

    & > p {
      letter-spacing: 0.3rem;
      font-weight: 700;
      font-size: 2rem;
    }

    & > span {
      color: #64c9cf;
      font-size: 2rem;
      padding-left: 2rem;
    }
  }

  @media (max-width: 470px) {
    flex-direction: column;
    align-items: stretch;

    h4 {
      padding-bottom: 1rem;
    }
  }
`;

export const GridInfo = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1fr 0.5fr;
  padding: 1rem;
  gap: 1rem;
  width: 100%;

  h4 {
    color: #64c9cf;
    font-weight: 500;
    font-size: 1.8rem;
    text-align: center;
  }

  @media (min-width: 861px) {
    align-items: center;
    justify-items: center;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 1fr;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 0.5fr) 1fr;

    & > div:first-of-type {
      grid-row-start: 1;
      grid-column-end: 2;
    }

    span {
      font-size: 1.4rem;
    }
  }
`;

export const HotelDescription = styled.div`
  & > p {
    margin: 2rem 0;
    min-height: 7rem;
    align-self: center;
    text-align: justify;
  }

  @media (max-width: 860px) {
    grid-column-start: 1;
    grid-column-end: 3;

    & > p {
      margin-top: 0;
    }
  }
`;

export const Rooms = styled.ul`
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 3;

  & > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;

    input {
      margin-left: 1rem;
    }
  }
`;

export const HotelServices = styled.div``;

export const HotelCalendar = styled.div`
  .react-calendar {
    width: auto;
    max-width: 28rem;
    margin: 1rem auto;
  }

  .react-calendar__navigation {
    display: flex;
    height: 4rem;
    margin-bottom: 0;
  }

  .react-calendar__tile {
    padding: 0.2rem 0;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #64c9cf;
  }

  .react-calendar__tile--now,
  .react-calendar__tile--now:hover {
    background: #8fc1d4;
  }
`;
