import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 99;
  top: 0;
  background: rgba(0, 0, 0, 0.25);

  & > div {
    position: relative;
    width: 40rem;
    min-height: 35rem;

    @media (max-width: 470px) {
      width: 30rem;
    }
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 0.2rem solid #8fc1d4;
  font-weight: 700;
  color: #c10b0b;
  top: -1rem;
  right: -1rem;
  z-index: 9;
  transition: 300ms ease-out;

  &:hover {
    background: #c10b0b;
    border: none;
    color: #fff;
  }
`;

export const Content = styled.div`
  background: #fff;
  min-width: 100%;
  height: 100%;
  border-radius: 2rem;
  padding: 2rem;
  padding-top: 4rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h2 {
    margin: 2rem;
    text-align: center;
    font-weight: 500;

    span {
      font-weight: 700;
      font-size: 2.5rem;
      color: #64c9cf;
    }
  }

  & > span {
    width: 100%;
    top: 0;
    left: 0;
    border-bottom: 0.1rem solid #ccc;
    height: 4rem;
    line-height: 3;
    position: absolute;
    text-align: center;
    font-size: 1.4rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > div {
    border: 0.1rem solid #353535;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;

    label:first-of-type,
    label:nth-child(2) {
      border-bottom: 0.1rem solid #ccc;
    }

    label:last-child {
      border: none;
    }

    label {
      font-size: 1.4rem;
      overflow: hidden;
      padding: 0.5rem 1rem;
      margin: -1px;
      position: relative;

      &:focus-within {
        border: 0.2rem solid #000;
        border-radius: 1rem;
      }
    }

    input {
      width: 100%;
      padding: 0.5rem 0;
      outline: none;
      border: none;
    }
  }

  & > button {
    margin-top: 1rem;
    background: #64c9cf;
    border-radius: 1rem;
    padding: 0.7rem 3rem;
    border: none;
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
  }
`;

export const BtnUser = styled.button`
  align-self: center;
  padding-top: 2rem;
  bottom: 1rem;
  width: 10rem;
  background: none;
  border: none;
  border-bottom: 0.1rem solid #ccc;
`;
