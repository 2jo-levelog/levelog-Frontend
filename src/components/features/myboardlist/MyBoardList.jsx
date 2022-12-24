import React from 'react';
import styled from 'styled-components';
import MyCard from './MyCard';

export default function MyBoardList() {
  return (
    <div>
      <StCardWrapper>
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </StCardWrapper>
    </div>
  );
}

const StCardWrapper = styled.div`
  width: 100%;
`;
