import styled from 'styled-components';

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 470px) {
    grid-template-columns: 1fr;
  }
`;
