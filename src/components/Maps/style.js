import styled from 'styled-components';

export const MapContainer = styled.div`
  padding-bottom: 5rem;

  .marker-label {
    margin-top: -3.5rem;
    font-weight: 500;
    background: #ddd;
    padding: 0.1rem 0.3rem;
    border-radius: 1rem;
  }
`;

export const InfoAddress = styled.div`
  display: flex;
  flex-direction: column;

  p {
    padding: 0.5rem 0;
    font-weight: 500;
  }
`;
