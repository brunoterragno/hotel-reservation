import React from 'react';
import { HomeContainer } from './style';
import Banner from '../Banner';
import Info from '../Info';
import Sidebar from '../Sidebar';
import CardContainer from '../CardContainer';
import ServicesContainer from '../ServicesContainer';
import Footer from '../Footer';

const Home = () => {
  return (
    <HomeContainer>
      <div style={{ maxWidth: 1080 }}>
        <Banner />
      </div>
      <div style={{ background: 'rgba(100, 201, 207, 0.1)' }}>
        <Info />
      </div>
      <div style={{ maxWidth: 1080, marginBottom: 50 }}>
        <Sidebar />
      </div>
      <div style={{ maxWidth: '120rem', marginBottom: 30 }}>
        <CardContainer />
      </div>
      <h3>Why choose our services?</h3>
      <div style={{ maxWidth: '120rem', marginBottom: 70 }}>
        <ServicesContainer />
      </div>
      <div style={{ background: '#f0eef0' }}>
        <Footer />
      </div>
    </HomeContainer>
  );
};

export default Home;
