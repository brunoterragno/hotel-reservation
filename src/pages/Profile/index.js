import React, { useEffect, useState } from 'react';
import {
  ProfileContainer,
  Content,
  SideBar,
  PriceContent,
  Reservations,
  Total,
  LiContent,
  Options,
  EmptyPage,
} from './style';
import img from '../../assets/img/profile.svg';
import api from '../../services/api';
import { FaTrash, FaRegWindowRestore } from 'react-icons/fa';
import Popup from '../../components/Popup';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectHotel, setSelectHotel] = useState([]);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function getFromApi() {
      const response = await api.get('hotels/search');
      setHotels(response.data);
    }
    getFromApi();
  }, []);

  function handleChange(value) {
    const hotel = hotels.filter((d) => d.id === value);
    setSelectHotel(hotel);
    setIsOpen(true);
  }

  function handleDelete(value) {
    const hotel = hotels.filter((d) => d.id !== value);
    setHotels(hotel);
  }

  return (
    <ProfileContainer>
      <Content>
        <SideBar>
          <img src={img} alt='' />
          <div>
            <h2>Nome</h2>
            <span>Usuário desde 2016</span>
          </div>
        </SideBar>

        {hotels === null || [] ? (
          <EmptyPage>
            <Link to='/'>Procurar Hotéis</Link>
          </EmptyPage>
        ) : (
          <>
            <Reservations>
              {hotels.map((h) => {
                return (
                  <li key={h.id}>
                    <img src={h.image} alt={h.name} />
                    <LiContent>
                      <h3>{h.name}</h3>
                      <p>{h.rooms[0].baseRate}</p>
                    </LiContent>
                    <Options>
                      <button
                        style={{ border: '1px solid #698f9e' }}
                        onClick={() => handleChange(h.id)}
                      >
                        <FaRegWindowRestore style={{ color: '#698f9e' }} />
                      </button>
                      <button
                        style={{ border: '1px solid #c10b0b' }}
                        onClick={() => handleDelete(h.id)}
                      >
                        <FaTrash style={{ color: '#c10b0b' }} />
                      </button>
                    </Options>
                  </li>
                );
              })}
            </Reservations>
            <PriceContent>
              <Total>
                <h4>Total</h4>
                <span>R$ 0</span>
              </Total>
              <button>Finalizar</button>
            </PriceContent>
          </>
        )}
      </Content>
      {isOpen && (
        <Popup isOpen={isOpen} setIsOpen={setIsOpen} data={selectHotel} />
      )}
    </ProfileContainer>
  );
};

export default Profile;
