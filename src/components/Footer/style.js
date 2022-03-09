import styled from 'styled-components';

export const FooterContainer = styled.footer`
  max-width: 120rem;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const MailContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  & > span {
    font-size: 1.8rem;
    max-width: 40rem;
    text-align: start;
    letter-spacing: 0.1rem;
  }

  & > div {
    flex: 1;
    text-align: end;

    input,
    button {
      height: 5rem;
      padding: 0 1rem;
      border-radius: 1rem;
      border: none;
      font-weight: 500;
      font-size: 1.6rem;
      letter-spacing: 0.1rem;
    }

    button {
      background: #121212;
      color: #fff;
      min-width: 30%;
    }

    input {
      min-width: 60%;
      margin-right: 3rem;
      box-shadow: 0 0.2rem 1rem 0 rgba(0, 0, 0, 0.25);
    }
  }

  @media (max-width: 860px) {
    flex-direction: column;

    & > span {
      min-width: 100%;
      padding: 2rem 0;
      text-align: center;
    }

    & > div {
      display: flex;
      justify-content: center;
      width: 90%;

      input {
        width: 100%;
        margin-right: 1rem;
      }

      button {
        min-width: 10rem;
      }

      input,
      button {
        height: 4rem;
      }
    }
  }

  @media (max-width: 580px) {
    & > div {
      min-width: 100%;
    }
  }
`;

export const Infos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  justify-items: center;

  & > div:last-of-type {
    text-align: center;
    align-self: center;

    & > p {
      color: #64c9cf;
      font-size: 3.5rem;
      font-weight: 700;
    }

    & > span {
      color: #121212;
    }
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin: 2rem 0;
  min-width: 27rem;

  & > h4 {
    line-height: 5rem;
    word-spacing: 0.3rem;
    letter-spacing: 0.1rem;
  }

  & > p {
    letter-spacing: 0.1rem;
  }

  & > img {
    height: 4rem;
    object-fit: contain;
  }

  & > img:last-of-type {
    margin-top: 1rem;
  }

  @media (min-width: 861px) {
    &:nth-last-of-type(2) {
      align-items: center;
    }

    &:last-child {
      grid-column-start: 1;
      grid-column-end: 4;
    }
  }

  @media (max-width: 860px) {
    align-items: center;
  }
`;
