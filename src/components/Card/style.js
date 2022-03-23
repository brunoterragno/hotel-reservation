import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  max-width: 26rem;
  border-radius: 2rem;
  box-shadow: 0 0.3rem 1.5rem rgba(0, 0, 0, 0.25);
  overflow: hidden;
  min-height: 25rem;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > h4 {
    padding: 0.5rem 1rem;
    font-size: 1.8rem;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    padding-top: 0;

    & > p {
      letter-spacing: 0.3rem;
      font-weight: 700;
      font-size: 2rem;
    }

    & > span {
      right: 2rem;
      color: #64c9cf;
      font-size: 2rem;
    }
  }

  @media (max-width: 860px) {
    max-width: 100%;
  }
`;

export const PopupConatiner = styled.div`
  position: relative;
  top: 100%;
  margin: 0 auto;
`;
