import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: block;

  & > div {
    margin: 0 auto;
  }
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0 3rem;
  background: #64c9cf;
  border-radius: 1rem;
  overflow: hidden;

  h3 {
    font-size: 4rem;
    color: #fff;
    max-width: 45rem;
  }

  img {
    overflow: hidden;
  }
`;
