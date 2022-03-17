import styled from 'styled-components';

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
    }
    span {
      font-weight: normal;
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

    &:last-child {
      margin-bottom: 0;
    }

    img {
      max-width: 23rem;
      min-height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 860px) {
    div:first-of-type {
      flex-direction: column;
      align-items: flex-start;
      align-self: flex-start;
      margin: 3rem 0;
    }
  }

  @media (max-width: 580px) {
    img {
      width: 16rem;
    }
  }
`;

export const LiContent = styled.div`
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  padding: 0 1rem;

  h3 {
    font-weight: 500;
  }

  p {
    letter-spacing: 0.3rem;
    font-weight: 700;
    font-size: 2rem;
  }
`;

export const Options = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  bottom: 0.5rem;
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

export const PriceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 12rem;
  border-radius: 2rem;
  border: 0.1rem solid #ccc;
  padding: 2rem;
  grid-column-start: 1;
  grid-column-end: 2;

  button {
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    background: #64c9cf;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.1rem;
    width: 100%;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;
