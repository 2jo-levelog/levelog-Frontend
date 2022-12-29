import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

export default function Profile() {
  const [userInfo, setUserInfo] = useState();

  const getLocalUserInfo = useCallback(() => {
    const userInfoData = {
      email: localStorage.getItem('email'),
      nickName: localStorage.getItem('nickName'),
      profileImg: localStorage.getItem('profileImg'),
    };
    setUserInfo(userInfoData);
  }, []);

  useEffect(() => {
    getLocalUserInfo();
  }, [getLocalUserInfo]);

  return (
    <div>
      {userInfo && (
        <StProfileContainer>
          <StImg src={userInfo.profileImg} />
          <StUserId>{userInfo.nickName}</StUserId>
        </StProfileContainer>
      )}
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
