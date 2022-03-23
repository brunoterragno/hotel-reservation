import React, { useContext, useEffect, useState } from 'react';
import {
  ProfileContainer,
  Content,
  SideBar,
  Reservations,
  LiContent,
  Options,
  EmptyPage,
  InfoRoom,
} from './style';
import img from '../../assets/img/profile.svg';
import api from '../../services/api';
import { FaTrash, FaRegWindowRestore } from 'react-icons/fa';
import Popup from '../../components/Popup';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/user';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectHotel, setSelectHotel] = useState([]);
  const [userReservation, setUserReservation] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function getReservationsFromApi() {
      const response = await api.get('users/bookings', {
        headers: {
          Authorization: user.token,
        },
      });

      const hotelFullInfo = response.data.map((data) => {
        return getHotelById(data);
      });

      Promise.all(hotelFullInfo).then(
        (values) => setUserReservation(values) || []
      );

      setLoadingPage(false);
    }
    getReservationsFromApi();
  }, [user]);

  async function getHotelById(data) {
    const response = await api.get(`hotels/${data.hotel_id}`);
    return {
      fullInfo: response.data,
      ...data,
    };
  }

  function handleSelect(index) {
    const { fullInfo } = userReservation[index];
    setSelectHotel([fullInfo]);
    setIsOpen(!isOpen);
  }

  function handleDelete(index) {
    const hotel = userReservation.filter((d, i) => i !== index);
    setUserReservation(hotel);
  }

  return (
    <ProfileContainer>
      <Content>
        <SideBar>
          <img src={img} alt='' />
          <div>
            <h2>{user.name}</h2>
            <span>Usuário desde 2016</span>
          </div>
        </SideBar>
        {loadingPage ? (
          <Reservations loading={loadingPage ? 1 : 0}>
            <li></li>
          </Reservations>
        ) : userReservation.length === 0 ? (
          <EmptyPage>
            <Link to='/'>Procurar Hotéis</Link>
          </EmptyPage>
        ) : (
          <>
            <Reservations>
              {userReservation.map((h, i) => {
                return (
                  <li key={i}>
                    <img src={h.fullInfo.image} alt={h.fullInfo.name} />
                    <LiContent>
                      <h3>{h.fullInfo.name}</h3>
                      <Options>
                        <button
                          style={{ border: '1px solid #698f9e' }}
                          onClick={() => handleSelect(i)}
                        >
                          <FaRegWindowRestore style={{ color: '#698f9e' }} />
                        </button>
                        <button
                          style={{ border: '1px solid #c10b0b' }}
                          onClick={() => handleDelete(i)}
                        >
                          <FaTrash style={{ color: '#c10b0b' }} />
                        </button>
                      </Options>
                      <InfoRoom>
                        <div>
                          <p>Data:</p>
                          <span>
                            {h.check_in} - {h.check_out}
                          </span>
                        </div>

                        <div>
                          <p>Sobre:</p>
                          <span>{h.rooms[0].description}</span>
                        </div>

                        <div>
                          <p>Valor:</p>
                          <span>{h.rooms[0].baseRate}</span>
                        </div>
                      </InfoRoom>
                    </LiContent>
                  </li>
                );
              })}
            </Reservations>
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
