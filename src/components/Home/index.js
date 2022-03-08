import React from 'react';
import { HomeContainer } from './style';
import Banner from '../Banner';
import Info from '../Info';
import Sidebar from '../Sidebar';
import CardContainer from '../CardContainer';

const Home = () => {
  return (
    <HomeContainer>
      <div style={{ maxWidth: 1080 }}>
        <Banner />
      </div>
      <div>
        <Info />
      </div>
      <div style={{ maxWidth: 1080, marginTop: 30, marginBottom: 30 }}>
        <Sidebar />
      </div>
      <div style={{ maxWidth: '120rem' }}>
        <CardContainer />
      </div>
    </HomeContainer>
  );
};

export default Home;
