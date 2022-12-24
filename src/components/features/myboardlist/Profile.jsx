import React from 'react';
import styled from 'styled-components';

export default function Profile() {
  return (
    <div>
      <StProfileContainer>
        <StImg src="https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2020/02/82879855_2644938848876080_5954685728829997056_o.jpg" />
        <StUserId>Sam Fischer</StUserId>
      </StProfileContainer>
      <Divider />
    </div>
  );
}

const StProfileContainer = styled.div`
  width: 736px;
  height: 128px;
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;
const StImg = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
`;
const StUserId = styled.div`
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
`;
const Divider = styled.div`
  background: lightgray;
  width: 100%;
  height: 2px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;
