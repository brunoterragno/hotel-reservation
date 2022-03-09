import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;

  & h3 {
    font-size: 2.3rem;
    max-width: 32rem;
    letter-spacing: 0.1rem;
    word-spacing: 0.3rem;
    margin-right: 1rem;
  }

  @media (max-width: 580px) {
    & h3 {
      font-size: 2rem;
    }
  }
  @media (max-width: 470px) {
    & h3 {
      max-width: 20rem;
      font-size: 1.8rem;
    }
  }
`;

export const Btn = styled.button`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 1px solid #64c9cf;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;

  &:first-of-type {
    margin-right: 2rem;
  }

  & svg {
    color: #b9b4b4;
    font-size: 2rem;
  }

  &:active svg {
    color: #64c9cf;
  }

  @media (max-width: 470px) {
    &:first-of-type {
      margin-right: 1rem;
    }
  }
`;
