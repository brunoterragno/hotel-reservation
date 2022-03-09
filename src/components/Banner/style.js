import styled from 'styled-components';

export const BannerSection = styled.section`
  position: relative;
  overflow: visible;
  max-width: 120rem;
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0 3rem;
  background: #64c9cf;
  border-radius: 1rem;
  overflow: hidden;
  height: 40rem;

  h3 {
    font-size: 4rem;
    color: #fff;
    max-width: 45rem;
  }

  img {
    object-fit: contain;
    width: 40rem;
    height: 40rem;
    z-index: 1;
  }
`;

export const Detail = styled.div`
  position: absolute;
  top: 5rem;
  right: 5rem;

  svg {
    font-size: 20rem;
    color: #fff;
    transform: rotate(80deg);
  }
`;
