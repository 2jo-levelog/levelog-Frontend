import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiHeart } from 'react-icons/hi';
import styled from 'styled-components';
import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

export default function Card(data) {
  // eslint-disable-next-line react/destructuring-assignment
  const { id, title, content, nickname, likes, cmtCnt, createdAt } = data;
  const navigate = useNavigate();
  const d = new Date(createdAt);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  useEffect(() => {
    formatDate();
  }, []);

  function formatDate() {
    if (diff < 60 * 1) {
      // 1분 미만일땐 방금 전 표기
      return '방금 전';
    }
    if (diff < 60 * 60 * 24 * 3) {
      // 3일 미만일땐 시간차이 출력(몇시간 전, 몇일 전)
      return formatDistanceToNow(d, { addSuffix: true, locale: ko });
    }
    return format(d, 'PPP EEE p', { locale: ko }); // 날짜 포맷
  }

  return (
    <StWrapper onClick={() => navigate(`/detailpost/${id}`)}>
      <div>
        <img
          className="boardlist_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWZf4TRbKb-gk-fFAWbxCTVUQZIzQOoWcq6Q&usqp=CAU"
          alt=""
        />
      </div>
      <StBoardContent>
        <StBoardInfo>
          <div className="board_content">
            <h4>{title}</h4>
            <StMainContent>
              <Viewer initialValue={content} />
            </StMainContent>
          </div>
          <div className="board_util">
            <StUploadTime>{formatDate(diff)}</StUploadTime>·
            <StReplyCount>
              <span>{cmtCnt}</span>개의 댓글
            </StReplyCount>
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
              <span className="profile_nick">{nickname}</span>
            </StUserProfileNick>
          </div>
          <StUserProfileLikes>
            <StLikes />
            <span className="profile_likes">{likes}</span>
          </StUserProfileLikes>
        </StUserProfile>
      </StBoardContent>
    </StWrapper>
  );
}
const StWrapper = styled.div`
  width: 100%;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  cursor: pointer;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    box-shadow: rgb(0 0 0 / 7%) 0px 13px 11px 2px;
    transform: translateY(-5px);
    box-sizing: border-box;
  }

  .boardlist_img {
    width: 100%;
    max-height: auto;
    object-fit: cover;
    aspect-ratio: 12/6;
  }
`;
const StBoardInfo = styled.div`
  padding: 1rem;
  .board_content {
    display: flex;
    flex-direction: column;
  }
  .board_util {
    display: flex;
    gap: 0 5px;
    color: #868e96;
    align-items: center;
    line-height: 1.5;
  }
  h4 {
    margin: 0 0 3px 0;
    line-height: 1.5;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #212529;
  }
`;
const StBoardContent = styled.div`
  background: #fff;
`;
const StLikes = styled(HiHeart)`
  font-size: 1.1rem;
`;
const StUserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  border-top: 1px solid #e6e6e6;
  .flex-container {
    display: flex;
    align-items: center;
    gap: 0 8px;
    line-height: 0.7;
  }
`;
const StMainContent = styled.div`
  color: #495057;
  font-size: 0.88rem;
  height: 4rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 1.5rem;
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

  gap: 0 6px;
  min-height: 10px;
  align-items: stretch;
  .profile_nick {
    color: #000;
    font-weight: 700;
  }
`;
const StUserProfileLikes = styled.div`
  display: flex;
  gap: 0 5px;
  align-items: center;
  .profile_likes {
    font-size: 0.8rem;
  }
`;
const StUploadTime = styled.span`
  color: #868e96;
  font-size: 0.8rem;
`;
const StReplyCount = styled.span`
  color: #868e96;
  font-size: 0.8rem;
`;
