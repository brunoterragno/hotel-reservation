import styled from 'styled-components';

export const BannerSection = styled.section`
  position: relative;
  overflow: visible;
  padding: 0 1rem;
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
    flex: 1;
    font-size: 4rem;
    color: #fff;
    max-width: 45rem;
    margin-right: 2rem;
  }

  img {
    object-fit: contain;
    width: 35rem;
    height: 35rem;
    z-index: 1;
  }

  @media (max-width: 860px) {
    h3 {
      font-size: 3.2rem;
    }

    img {
      width: 30rem;
      height: 30rem;
      margin-bottom: -15rem;
    }
  }

  @media (max-width: 580px) {
    height: 20rem;

    h3 {
      font-size: 2.5rem;
      max-width: 27rem;
      margin-right: auto;
    }

    img {
      display: none;
    }
  }
`;

export const Detail = styled.div`
  position: absolute;
  top: 5rem;
  right: 5rem;
  opacity: 0.8;

  svg {
    font-size: 20rem;
    color: #fff;
    transform: rotate(80deg);
  }

  @media (max-width: 860px) {
    top: 10rem;
  }

  @media (max-width: 580px) {
    opacity: 0.2;
    top: 3rem;

    svg {
      font-size: 15rem;
    }
  }
`;
