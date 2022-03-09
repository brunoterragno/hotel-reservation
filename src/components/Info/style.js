import styled from 'styled-components';

export const InfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1080px;
  height: 12rem;
  margin: 9rem auto 4rem auto;

  & > h3 {
    font-weight: normal;
    max-width: 35rem;
    font-size: 2.3rem;
    letter-spacing: 0.1rem;
    word-spacing: 0.3rem;
    margin-right: 1rem;
  }

  @media (max-width: 580px) {
    & > h3 {
      font-size: 2rem;
      max-width: 25rem;
    }
  }

  @media (max-width: 470px) {
    & > h3 {
      font-size: 1.8rem;
    }
  }
`;

export const InfoNum = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;

  & > div {
    text-align: center;
    font-weight: 700;
  }

  & > div:last-of-type {
    margin-left: 20rem;
  }

  & > div p {
    font-size: 5rem;
    line-height: 4rem;
  }

  & > div span {
    font-size: 1.8rem;
  }

  @media (max-width: 860px) {
    & > div:last-of-type {
      margin-left: 8rem;
    }
  }

  @media (max-width: 580px) {
    & > div:last-of-type {
      margin-left: 2rem;
    }

    & > div p {
      font-size: 4rem;
    }
  }

  @media (max-width: 470px) {
    & > div span {
      font-size: 1.5rem;
    }

    & > div p {
      font-size: 2rem;
    }
  }
`;
