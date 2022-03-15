import styled from 'styled-components';

export const SearchContainer = styled.nav`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr) 0.5fr;
  align-items: center;
  gap: 1rem;
  padding-left: 2rem;
  height: 10rem;
  bottom: -5rem;
  right: 5rem;
  left: 5rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.3rem 1.5rem rgba(0, 0, 0, 0.25);
  z-index: 2;
  overflow: hidden;

  @media (max-width: 860px) {
    height: 13rem;
    bottom: -7rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 0.5fr;
    padding-right: 2rem;
    justify-items: center;
    justify-content: center;
  }

  @media (max-width: 720px) {
    position: relative;
    right: 0;
    height: 22rem;
    left: 0;
    bottom: -3rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 0.5fr;
    box-shadow: none;
  }
`;

export const SearchContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    width: 100%;
    height: 0.1rem;
    background: #000;
    transition: all 300ms ease-in-out;
  }

  & > select {
    width: 100%;
    padding: 0.3rem 0;
    text-align: center;
    border: none;
    cursor: pointer;
  }

  & > input {
    width: 100%;
    padding: 0.1rem 0;
    text-align: center;
    border: none;
    cursor: pointer;
  }

  h3 {
    font-weight: normal;
  }

  @media (max-width: 840px) {
    max-width: 16rem;
    min-width: 10rem;

    h3 {
      font-size: 1.4rem;
    }
  }
`;

export const SvgBck = styled.button`
  background: #8fc1d4;
  border: none;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    color: #fff;
    font-size: 1.4rem;
  }
`;

export const BtnSearch = styled.button`
  background: #64c9cf;
  border: none;
  height: 4rem;
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  margin: 0 2rem;
  border-radius: 1rem;
  font-weight: 700;
  color: #fff;

  svg {
    margin-right: 0.3rem;
  }

  @media (max-width: 860px) {
    grid-column-start: 1;
    grid-column-end: 5;
    height: 3rem;
    width: 80%;
  }

  @media (max-width: 720px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
