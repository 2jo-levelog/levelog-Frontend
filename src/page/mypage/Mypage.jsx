import React from 'react';
import styled from 'styled-components';
import MyBoardList from '../../components/features/myboardlist/MyBoardList';
import Profile from '../../components/features/myboardlist/Profile';

export default function Mypage() {
  return (
    <StMyPageContainer>
      <ProfileWrapper>
        <Profile />
      </ProfileWrapper>
      <StMyPageWrapper>
        <MyBoardList />
      </StMyPageWrapper>
    </StMyPageContainer>
  );
}
const StMyPageContainer = styled.div`
  /* background-color: lightblue; */
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 768px;
  }
`;
const ProfileWrapper = styled.div`
  /* background-color: lightcyan; */
  width: 100%;
`;

const StMyPageWrapper = styled.div`
  width: 100%;
`;
