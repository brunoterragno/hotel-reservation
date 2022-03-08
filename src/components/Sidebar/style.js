import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;

  & h3 {
    font-size: 2.3rem;
    width: 25rem;
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
  cursor: pointer;

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
`;
