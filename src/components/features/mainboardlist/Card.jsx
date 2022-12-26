import React from 'react';
import { HiHeart } from 'react-icons/hi';
import styled from 'styled-components';

export default function Card() {
  return (
    <StWrapper>
      <div>
        <img
          className="boardlist_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWZf4TRbKb-gk-fFAWbxCTVUQZIzQOoWcq6Q&usqp=CAU"
          alt=""
        />
      </div>
      <StBoardContent>
        <StBoardInfo>
          <div>
            <h4>타이틀</h4>
            <span>내용</span>
          </div>
          <div>
            <span>시간</span>
            <span>
              <span>0</span>개의 댓글
            </span>
          </div>
        </StBoardInfo>
        <StUserProfile>
          <div className="flex-container">
            <StUserProfileImage>
              <img
                className="profile_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWZf4TRbKb-gk-fFAWbxCTVUQZIzQOoWcq6Q&usqp=CAU"
                alt=""
              />
            </StUserProfileImage>
            <StUserProfileNick>
              <span>by</span>
              <span className="profile_nick">닉네임</span>
            </StUserProfileNick>
          </div>
          <StUserProfileLikes>
            <StLikes />
            <span className="profile_likes">0</span>
          </StUserProfileLikes>
        </StUserProfile>
      </StBoardContent>
    </StWrapper>
  );
}
const StWrapper = styled.div`
  width: 100%;
  .boardlist_img {
    width: 100%;
    max-height: auto;
    object-fit: cover;
    aspect-ratio: 12/7;
  }
`;
const StBoardInfo = styled.div`
  h4 {
    margin: 0;
  }
`;
const StBoardContent = styled.div`
  padding: 1rem;
  background: #fff;
`;
const StLikes = styled(HiHeart)`
  font-size: 1.1rem;
`;
const StUserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
  .flex-container {
    display: flex;
    align-items: center;
    gap: 0 8px;
  }
`;
const StUserProfileImage = styled.div`
  .profile_img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
    background-position: center;
  }
`;
const StUserProfileNick = styled.div`
  display: flex;
  font-size: 0.8rem;
  color: #b5b5b5;
  align-items: center;
  gap: 0 6px;
  min-height: 10px;
  .profile_nick {
    color: #000;
    font-weight: 700;
  }
`;
const StUserProfileLikes = styled.div`
  display: flex;
  gap: 0 2px;
  align-items: center;
  .profile_likes {
    font-size: 0.8rem;
  }
`;
