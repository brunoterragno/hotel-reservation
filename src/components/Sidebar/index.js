import React from 'react';
import { NavBar, Btn } from './style';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <NavBar>
      <h3>Berikut Hotel Rekomandasi Kami</h3>
      <div>
        <Btn>
          <AiOutlineArrowLeft />
        </Btn>
        <Btn>
          <AiOutlineArrowRight />
        </Btn>
      </div>
    </NavBar>
  );
};

export default Sidebar;
