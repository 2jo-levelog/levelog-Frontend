import React from 'react';
import styled from 'styled-components';
import Header from '../../components/common/Header';
import MainBoardList from '../../components/features/mainboardlist/MainBoardList';

export default function Main() {
  return (
    <StMain>
      <Header />
      <MainBoardList />
    </StMain>
  );
}

const StMain = styled.div`
  margin: 0 auto;
  @media (max-width: 1440px) {
    width: 1024px;
  }
  @media (max-width: 1080px) {
    width: calc(100% - 2rem);
  }
`;
