import React, { useEffect, useState } from 'react';
import { HomeContainer } from './style';
import Banner from '../../components/Banner';
import Info from '../../components/Info';
import Sidebar from '../../components/Sidebar';
import CardContainer from '../../components/CardContainer';
import ServicesContainer from '../../components/ServicesContainer';
import api from '../../services/api';

const Home = () => {
  const [hotelList, setHotelList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function dataHotel() {
      const response = await api.get('/hotels/offers');
      setHotelList(response.data);
      setIsLoading(false);
    }
    dataHotel();
  }, []);

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
        <CardContainer data={hotelList} isLoading={isLoading} />
      </div>
      <h3>Why choose our services?</h3>
      <div style={{ maxWidth: '120rem', marginBottom: 70 }}>
        <ServicesContainer />
      </div>
    </HomeContainer>
  );
};

export default Home;
