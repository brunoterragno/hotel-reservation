import React from 'react';
import { NavBar, Btn } from './style';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <NavBar>
      <h3>Here Are Our Recommended Hotels</h3>
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
