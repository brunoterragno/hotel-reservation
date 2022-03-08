import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Links, BtnLogin } from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Hotel.com</h1>
      <Links>
        <Link to='#'>home</Link>
        <Link to='#'>about us</Link>
        <Link to='#'>pricing</Link>
        <Link to='#'>contact</Link>
      </Links>
      <BtnLogin>Login</BtnLogin>
    </HeaderContainer>
  );
};

export default Header;
