import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Links, BtnLogin } from './style';
import { FaConciergeBell, FaHome, FaHotel } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import Login from '../Login';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <h1>Hotel.com</h1>
        <Links>
          <Link to='/'>
            <button>
              <FaHome />
            </button>
            <h2>Home</h2>
          </Link>
          <Link to='#'>
            <button>
              <FaHotel />
            </button>
            <h2>about us</h2>
          </Link>
          <Link to='#'>
            <button>
              <FaConciergeBell />
            </button>
            <h2>services</h2>
          </Link>
          <Link to='#'>
            <button>
              <GrMail />
            </button>
            <h2>contact</h2>
          </Link>
        </Links>
        <BtnLogin onClick={() => setIsOpen(true)}>Login</BtnLogin>
      </HeaderContainer>

      {isOpen && <Login setIsOpen={setIsOpen} />}
    </>
  );
};

export default Header;
