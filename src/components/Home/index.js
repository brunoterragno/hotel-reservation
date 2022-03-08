import React from 'react';
import { HomeContainer, Banner } from './style';
import background from '../../assets/img/background.png';

const Home = () => {
  return (
    <HomeContainer>
      <div style={{ maxWidth: 1080 }}>
        <Banner>
          <img src={background} alt='' />
          <h3>Vacation or Travel Remember Hotel.com</h3>
        </Banner>
      </div>
    </HomeContainer>
  );
};

export default Home;
