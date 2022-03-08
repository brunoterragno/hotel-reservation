import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120rem;
  margin: 0 auto;
  height: 5rem;

  h1 {
    font-weight: 700;
    font-size: 2.5rem;
    color: #64c9cf;
  }
`;

export const Links = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  align-items: center;

  a {
    min-width: 8rem;
    text-align: center;
    text-transform: capitalize;
    text-decoration: none;
    color: #000;
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
`;
