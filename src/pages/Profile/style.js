import styled, { css, keyframes } from 'styled-components';

export const ProfileContainer = styled.main`
  margin: 0 auto;
  max-width: 108rem;

  & > div {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: 1.5fr 0.5fr;
  padding: 2rem;
  height: 100%;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 2fr;

    & ul {
      grid-column-start: 1;
      grid-row-start: 2;
    }
  }
`;

export const EmptyPage = styled.div`
  margin: auto auto;

  & > a {
    font-size: 2.4rem;
    color: #000;
    border: 0.1rem solid #64c9cf;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    background: #ff6584;
    color: #fff;
    transition: 400ms ease-in;

    :hover {
      background: #64c9cf;
    }
  }
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0.1rem solid #ccc;
  border-radius: 2rem;
  padding: 2rem;
  height: 100%;

  & > img {
    max-height: 20rem;
    max-width: 20rem;
    object-fit: contain;
    align-self: center;
  }

  & > div {
    h2 {
      color: #64c9cf;
      font-weight: 500;
      padding: 1rem 0;
    }
    span {
      font-weight: normal;
      font-size: 1.4rem;
    }
  }

  @media (max-width: 860px) {
    flex-direction: row;
    align-items: center;

    & > img {
      height: 15rem;
      width: 15rem;
    }
  }

  @media (max-width: 580px) {
    & > img {
      height: 10rem;
      width: 10rem;
    }
  }
`;

const animate = keyframes`
 0% {
  width: 0;
} 100% {
  width: 100%;
}
`;

export const Reservations = styled.ul`
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 3;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0 0.1rem 0.7rem 0 rgba(0, 0, 0, 0.25);
    position: relative;
    margin-bottom: 1rem;
    height: 15rem;

    ${(props) =>
      props.loading &&
      css`
        display: block;
        background: linear-gradient(
          90.36deg,
          rgba(196, 196, 196, 0.38) 0.38%,
          rgba(151, 151, 151, 0.87) 99.76%
        );
        animation: ${animate} 2s linear infinite alternate;
      `}

    &:last-child {
      margin-bottom: 0;
    }

    img {
      max-width: 23rem;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 580px) {
    li {
      flex-direction: column;
      height: 25rem;

      img {
        height: 40%;
        min-width: 100%;
      }
    }

    span {
      font-size: 1.4rem;
    }
  }
`;

export const LiContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  padding: 1rem;
  position: relative;

  h3 {
    font-weight: 500;
    padding-bottom: 1rem;
  }
`;

export const Options = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  top: 1rem;
  right: 1rem;
  width: 7rem;
  max-height: 7rem;

  & > button {
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
`;

export const InfoRoom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  min-width: 100%;

  & > div {
    display: flex;
    align-items: flex-start;
    padding-bottom: 0.5rem;

    p {
      padding-right: 1rem;
      font-size: 1.6rem;
      font-weight: 500;
    }

    span {
      font-weight: 300;
      align-self: flex-end;
    }
  }
`;
