import React from 'react';
import styled from 'styled-components';

export default function MyCard() {
  return (
    <StContentWrapper>
      <h2>타이틀</h2>
      <p>내용</p>
      <StTagsWrapper>
        <span>약 11시간 전</span>
        <span>1개의 댓글</span>
      </StTagsWrapper>
    </StContentWrapper>
  );
}

const StContentWrapper = styled.div`
  background-color: aquamarine;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: solid lightgrey;
`;
const StTagsWrapper = styled.div`
  width: 100%;
`;
