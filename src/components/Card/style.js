import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  max-width: 26rem;
  border-radius: 2rem;
  box-shadow: 0 0.3rem 1.5rem rgba(0, 0, 0, 0.25);

  & > img {
    width: 100%;
    object-fit: contain;
  }

  & > h4 {
    padding: 0.5rem 1rem;
  }

  & > p {
    padding: 1rem;
    letter-spacing: 0.3rem;
    font-weight: 700;
    font-size: 2rem;
  }

  & > span {
    position: absolute;
    bottom: 0;
    padding: 1.2rem;
    right: 2rem;
    color: #64c9cf;
    font-size: 2rem;
  }

  @media (max-width: 860px) {
    max-width: 100%;
  }
`;
