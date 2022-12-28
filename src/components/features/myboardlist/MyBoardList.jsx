// import { set } from 'immer/dist/internal';
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MyCard from './MyCard';
import { getPosts } from '../../../apis/board';

export default function MyBoardList() {
  const [posts, setposts] = useState();
  const userInfo = useSelector(state => state.userInfo);
  console.log('userInfo');
  console.log(userInfo);

  const getMyBoardList = useCallback(async () => {
    const { data } = await getPosts(userInfo.nickName);
    setposts(data.content);
  }, [userInfo.nickName]);

  useEffect(() => {
    getMyBoardList();
  }, [getMyBoardList]);

  return (
    <div>
      <StCardWrapper>
        {posts &&
          posts.map(v => (
            <MyCard
              key={v.id}
              id={v.id}
              title={v.title}
              content={v.content}
              cmtCnt={v.cmtCnt}
              likeCnt={v.likeCnt}
              createdAt={v.createdAt}
            />
          ))}
      </StCardWrapper>
    </div>
  );
}

const StCardWrapper = styled.div`
  width: 100%;
`;
