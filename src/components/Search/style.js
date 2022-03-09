import styled from 'styled-components';

export const SearchContainer = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 10rem;
  bottom: -5rem;
  right: 5rem;
  left: 5rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.3rem 1.5rem rgba(0, 0, 0, 0.25);
  z-index: 2;
  overflow: hidden;
`;

export const SearchContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  max-width: 20rem;
  min-width: 16rem;

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
    border: none;
    cursor: pointer;
  }

  & > input {
    width: 100%;
    padding: 0.1rem 0;
    border: none;
    cursor: pointer;
  }

  h3 {
    font-weight: normal;
  }

  @media (max-width: 840px) {
    max-width: 16rem;
    min-width: 10rem;
    padding: 0;

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
  height: 3rem;
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  margin-right: 1rem;
  border-radius: 1rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;

  svg {
    margin-right: 0.3rem;
  }
`;
