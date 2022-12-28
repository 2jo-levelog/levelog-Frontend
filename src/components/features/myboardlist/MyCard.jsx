import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { HiHeart } from 'react-icons/hi';

import { Link } from 'react-router-dom';

export default function MyCard({
  id,
  title,
  content,
  cmtCnt,
  createdAt,
  likeCnt,
}) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  console.log(id);
  const d = new Date(createdAt);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  const formatDate = useCallback(() => {
    if (diff < 60 * 1) {
      // 1분 미만일땐 방금 전 표기
      return '방금 전';
    }
    if (diff < 60 * 60 * 24 * 3) {
      // 3일 미만일땐 시간차이 출력(몇시간 전, 몇일 전)
      return formatDistanceToNow(d, { addSuffix: true, locale: ko });
    }
    return format(d, 'PPP EEE p', { locale: ko }); // 날짜 포맷
  }, [d, diff]);

  useEffect(() => {
    formatDate();
  }, [formatDate]);

  return (
    <StCardLink to={`/detailpost/${id}`}>
      <StContentWrapper>
        <h2>{title}</h2>
        <p>{content}</p>
        <StTagsWrapper>
          <span>{formatDate(createdAt)}</span>
          <span>·</span>
          <span>{`${cmtCnt}개의 댓글`}</span>
          <span>·</span>
          <StikesWrap>
            <StLikes />
            <span className="profile_likes">{likeCnt}</span>
          </StikesWrap>
        </StTagsWrapper>
      </StContentWrapper>
      <Divider />
    </StCardLink>
  );
}

const StContentWrapper = styled.div`
  /* background-color: aquamarine; */
  width: 100%;
`;
const StTagsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 6px;
`;
const Divider = styled.div`
  background: lightgray;
  width: 100%;
  height: 2px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

const StLikes = styled(HiHeart)`
  font-size: 1.1rem;
`;

const StCardLink = styled(Link)`
  text-decoration-line: none;
  color: black;
`;

const StikesWrap = styled.span`
  display: flex;
  gap: 0 5px;
  align-items: center;
  .profile_likes {
    font-size: 0.8rem;
  }
`;
