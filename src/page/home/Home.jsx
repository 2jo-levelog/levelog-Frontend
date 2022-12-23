import React from 'react';
import styled from 'styled-components';
import Header from '../../components/common/Header';
import Sidebar from '../sidebar/Sidebar';
import Main from '../main/Main';

export default function Home() {
  // modal의 상태와 함수 호출 , 커스텀 훅

  return (
    <div>
      <Header />
      <StLayout>
        <Sidebar />
        <Main />
      </StLayout>
    </div>
  );
}

const StLayout = styled.div`
  display: flex;
`;
