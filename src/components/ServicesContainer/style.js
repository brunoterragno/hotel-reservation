import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;
