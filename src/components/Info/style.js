import styled from 'styled-components';

export const InfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background: rgba(100, 201, 207, 0.1);
  height: 12rem;
  margin-top: 8rem;

  & > div {
    max-width: 120rem;
    text-align: center;
    font-weight: 700;
  }

  & > h3 {
    font-weight: normal;
    width: 25rem;
    font-size: 2.3rem;
  }

  & > div p {
    font-weight: 700;
    font-size: 5rem;
    line-height: 4rem;
  }

  & > div span {
    font-size: 1.8rem;
  }
`;
