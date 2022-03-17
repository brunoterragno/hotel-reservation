import React from 'react';
import { BannerContainer, Detail, BannerSection } from './style';
import SearchBar from '../SearchBar';
import { SiCircle } from 'react-icons/si';
import background from '../../assets/img/background.png';

const Banner = () => {
  return (
    <BannerSection>
      <BannerContainer>
        <img src={background} alt='' />
        <h3>Vacation or Travel Remember Hotel.com</h3>
        <Detail>
          <SiCircle />
        </Detail>
      </BannerContainer>
      <SearchBar />
    </BannerSection>
  );
};

export default Banner;
