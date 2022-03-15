import styled from 'styled-components';

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & div > nav {
    position: initial;
  }

  & > div {
    margin: 0 auto;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;

  & > h2 {
    font-weight: 500;
  }

  & > button {
    background: #64c9cf;
    border-radius: 0.4rem;
    padding: 0.7rem 2rem;
    border: none;
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
    margin-left: 2rem;
  }

  @media (max-width: 720px) {
    & > h2 {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 520px) {
    button {
      padding: 0.5rem 2rem;
    }
  }
`;
