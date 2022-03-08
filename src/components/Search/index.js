import React from 'react';
import { SearchContainer, SearchContent, SvgBck, BtnSearch } from './style';
import {
  RiMapPin2Fill,
  RiDoorOpenFill,
  RiLoginBoxLine,
  RiLogoutBoxLine,
  RiSearch2Line,
} from 'react-icons/ri';

const Search = () => {
  return (
    <SearchContainer>
      <SearchContent>
        <SvgBck>
          <RiMapPin2Fill />
        </SvgBck>
        <h3>Location</h3>
        <select>
          <option>teste</option>
        </select>
      </SearchContent>
      <SearchContent>
        <SvgBck>
          <RiLoginBoxLine />
        </SvgBck>
        <h3>Check In</h3>
        <input type='date' />
      </SearchContent>
      <SearchContent>
        <SvgBck>
          <RiLogoutBoxLine />
        </SvgBck>
        <h3>Check Out</h3>
        <input type='date' />
      </SearchContent>
      <SearchContent>
        <SvgBck>
          <RiDoorOpenFill />
        </SvgBck>
        <h3>Bedroom</h3>
        <select>
          <option>1 room</option>
          <option>2 room</option>
          <option>3 room</option>
          <option>4 room</option>
        </select>
      </SearchContent>
      <BtnSearch>
        <RiSearch2Line style={{ color: 'white' }} />
        Search
      </BtnSearch>
    </SearchContainer>
  );
};

export default Search;
