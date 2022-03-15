import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import { Container, Content } from './style';
import CardContainer from '../../components/CardContainer';
import api from '../../services/api';

const Search = () => {
  const [hoteis, setHoteis] = useState([]);
  const [map, setMap] = useState(false);

  useEffect(() => {
    async function getFromApi() {
      const response = await api.get('hotels/search');
      setHoteis(response.data);
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
        <button onClick={() => setMap(!map)}>
          {map ? 'View list' : 'View map'}
        </button>
      </Content>

      <div style={{ margin: '2rem auto' }}>
        <CardContainer data={hoteis} />
      </div>
    </Container>
  );
};

export default Search;
