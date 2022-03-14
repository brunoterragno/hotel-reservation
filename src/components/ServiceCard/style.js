import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 0.3rem 1.5rem 0 rgba(0, 0, 0, 0.25);
  padding: 4rem 1rem;
  border-radius: 1.5rem;

  & > p {
    padding: 1.5rem 0;
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
  }

  & > span {
    font-size: 1.5rem;
  }
`;

export const BtnCard = styled.button`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #f0eef0;

  svg {
    height: 4rem;
    width: 4rem;
    color: #64c9cf;
  }

  & > span {
    position: absolute;
  }
`;
