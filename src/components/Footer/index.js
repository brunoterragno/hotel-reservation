import React from 'react';
import { FooterContainer, MailContent, Infos, Content } from './style';
import one from '../../assets/img/image 1.png';
import two from '../../assets/img/image 2.png';

const Footer = () => {
  return (
    <div style={{ background: '#f0eef0' }}>
      <FooterContainer>
        <MailContent>
          <span>
            Want to receive exclusive hotel offers? Come subscribe to our
            newsletter!
          </span>
          <div>
            <input type='text' placeholder='Email Address' />
            <button>Customer</button>
          </div>
        </MailContent>
        <Infos>
          <Content>
            <h4>About Us</h4>
            <p>How to Order</p>
            <p>Contact us</p>
            <p>Help Center</p>
            <p>Career</p>
            <p>Instalment</p>
            <p>About Us</p>
          </Content>
          <Content>
            <h4>Help</h4>
            <p>Help Center</p>
            <p>Group Booking</p>
            <p>Privacy</p>
            <p>Policy Terms and conditions</p>
            <p>Register Your Hotel</p>
          </Content>
          <Content>
            <h4>Download Hotel App</h4>
            <img src={one} alt='' />
            <img src={two} alt='' />
          </Content>
          <Content>
            <p>Hotel.com</p>
            <span>Copyright 2021 Hotel | Semua hak dilindungi.</span>
          </Content>
        </Infos>
      </FooterContainer>
    </div>
  );
};

export default Footer;
