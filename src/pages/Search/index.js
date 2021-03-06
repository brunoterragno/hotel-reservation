import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import { Container, Content } from './style';
import CardContainer from '../../components/CardContainer';
import api from '../../services/api';
import Maps from '../../components/Maps';

const Search = () => {
  const [hotels, setHotels] = useState([]);
  const [mapview, setMapView] = useState(false);
  const [infoMap, setInfoMap] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getFromApi() {
      const response = await api.get('hotels/search');
      let locationList = [];
      response.data.forEach(({ name, address, location }) =>
        locationList.push({
          name,
          address,
          location: {
            lat: location.coordinates[0],
            lng: location.coordinates[1],
          },
        })
      );
      setHotels(response.data);
      setInfoMap(locationList);
      setIsLoading(false);
    }
    getFromApi();
  }, []);

  return (
    <Container>
      <div style={{ position: 'relative' }}>
        <SearchBar />
      </div>
      <Content>
        <h2>Results for Porto Alegre - 12/3/22 to 14/3/22</h2>
        <button disabled={isLoading} onClick={() => setMapView(!mapview)}>
          {mapview ? 'View list' : 'View map'}
        </button>
      </Content>
      {mapview ? (
        <Maps data={infoMap} />
      ) : (
        <div style={{ margin: '2rem auto' }}>
          <CardContainer data={hotels} isLoading={isLoading} />
        </div>
      )}
    </Container>
  );
};

export default Search;
