import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120rem;
  margin: 0 auto;
  height: 5rem;
  padding: 0 1rem;

  & > h1 {
    font-weight: 700;
    font-size: 2.5rem;
    color: #64c9cf;
  }

  @media (max-width: 580px) {
    & > h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 470px) {
    & > h1 {
      font-size: 1.8rem;
    }
  }
`;

export const Links = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  align-items: center;

  a {
    max-width: 12rem;
    display: inline-flex;
    align-items: center;
    position: relative;
  }

  a > h2 {
    text-transform: capitalize;
    color: #000;
    font-weight: 500;
    font-size: 1.8rem;
  }

  a > h2::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    width: 0;
    height: 0.1rem;
    background: #75a1b2;
    transition: all 300ms ease-in-out;
  }

  a > h2:hover::after {
    width: 90%;
    left: 5%;
  }

  a > button {
    display: none;
  }

  @media (max-width: 740px) {
    a {
      min-width: 2rem;
      justify-content: space-evenly;
    }

    a > h2 {
      display: none;
    }

    a > button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 50%;
      height: 3rem;
      width: 3rem;
    }

    button > svg {
      display: block;
      color: #75a1b2;
      font-size: 1.8rem;
    }
  }

  @media (max-width: 580px) {
    a > button {
      height: 2.3rem;
      width: 2.3rem;
    }

    button > svg {
      font-size: 1.4rem;
    }
  }
`;

export const BtnLogin = styled.button`
  background: #64c9cf;
  border-radius: 0.4rem;
  padding: 0.7rem 3rem;
  border: none;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;

  @media (max-width: 580px) {
    padding: 0.5rem 2rem;
  }

  @media (max-width: 470px) {
    padding: 0.4rem 0.5rem;
    font-size: 1.3rem;
  }
`;
