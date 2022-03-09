import React from 'react';
import { Container, BtnCard } from './style';
import { BsCreditCardFill, BsStarFill } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { TiStarburst, TiStarburstOutline } from 'react-icons/ti';

const ServiceCard = () => {
  return (
    <>
      <Container>
        <BtnCard>
          <BsCreditCardFill />
        </BtnCard>
        <p>Easy to Book Tickets and Hotels</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </span>
      </Container>
      <Container>
        <BtnCard>
          <RiCustomerService2Fill />
        </BtnCard>
        <p>24/7 Customer Care</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </span>
      </Container>
      <Container>
        <BtnCard>
          <TiStarburst />
          <span>
            <BsStarFill style={{ color: '#fff', height: '1.6rem' }} />
          </span>
        </BtnCard>
        <p>Many Choices of the Best Products</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </span>
      </Container>
      <Container>
        <BtnCard>
          <TiStarburstOutline />
          <span>
            <FaCheck style={{ height: '1.2rem' }} />
          </span>
        </BtnCard>
        <p>Many Special Promos</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </span>
      </Container>
    </>
  );
};

export default ServiceCard;
