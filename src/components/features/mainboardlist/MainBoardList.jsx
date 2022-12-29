import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { authInstance, instance } from '../../../apis/axios';
import Card from './Card';

export default function MainBoardList() {
  const [boardList, setBoardList] = useState([]);
  /*  const userInfo = useSelector(state => state.userInfo); */

  useEffect(() => {
    instance.get('/api/main').then(response => {
      setBoardList(response.data.content);
    });
  }, []);

  return (
    <StMainBord>
      <StMainInner>
        {boardList &&
          boardList?.map(data => {
            console.log(data);
            return (
              <Card
                key={data.id}
                id={data.id}
                title={data.title}
                content={data.content}
                nickname={data.nickname}
                likes={data.likeCnt}
                reply={data.cmtCnt}
                createdAt={data.createdAt}
              />
            );
          })}
      </StMainInner>
    </StMainBord>
  );
}

const StMainBord = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const StMainInner = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin: 0 0 1rem 0;
  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 0 1rem 0;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
