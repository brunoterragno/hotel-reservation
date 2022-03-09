import styled from 'styled-components';

export const InfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1080px;
  height: 12rem;
  margin: 8rem auto;

  & > h3 {
    font-weight: normal;
    width: 35rem;
    font-size: 2.3rem;
    letter-spacing: 0.1rem;
    word-spacing: 0.3rem;
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
`;
