import React from 'react';
import { InfoSection, InfoNum } from './style';

const Info = () => {
  return (
    <InfoSection>
      <h3>We Have Partners Around The World</h3>
      <InfoNum>
        <div>
          <p>10M</p>
          <span>Users</span>
        </div>
        <div>
          <p>100</p>
          <span>Hotels</span>
        </div>
      </InfoNum>
    </InfoSection>
  );
};

export default Info;
