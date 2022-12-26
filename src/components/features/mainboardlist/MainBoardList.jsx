import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { authInstance, instance } from '../../../apis/axios';
import Card from './Card';

export default function MainBoardList() {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    instance.get('/api/main').then(response => {
      setBoardList(response.data);
    });
  }, []);

  return (
    <StMainBord>
      <StMainInner>
        {boardList &&
          boardList?.map(data => {
            return <Card key={data.id} />;
          })}
      </StMainInner>
    </StMainBord>
  );
}

const StMainBord = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;
const StMainInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`;
