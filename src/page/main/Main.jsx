import React from 'react';
import styled from 'styled-components';
import Header from '../../components/common/Header';
import MainBoardList from '../../components/features/mainboardlist/MainBoardList';

export default function Main() {
  return (
    <StMain>
      <MainBoardList />
    </StMain>
  );
}

const StMain = styled.div`
  margin: 0 auto;
`;
