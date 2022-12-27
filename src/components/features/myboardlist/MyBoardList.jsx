// import { set } from 'immer/dist/internal';
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import MyCard from './MyCard';
import { getPosts } from '../../../apis/board';

export default function MyBoardList() {
  const [posts, setposts] = useState([]);

  const getMyBoardList = useCallback(async () => {
    const { data } = await getPosts(1);
    setposts(data);
  }, []);
  console.log(posts);

  useEffect(() => {
    getMyBoardList();
  }, [getMyBoardList]);

  return (
    <div>
      <StCardWrapper>
        {posts.map(v => (
          <MyCard
            key={v.id}
            id={v.id}
            content={v.content}
            cmtCnt={v.cmtCnt}
            likeCnt={v.likeCnt}
          />
        ))}
      </StCardWrapper>
    </div>
  );
}

const StCardWrapper = styled.div`
  width: 100%;
`;
