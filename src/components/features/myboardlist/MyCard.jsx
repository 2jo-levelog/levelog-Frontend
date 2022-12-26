import React from 'react';
import styled from 'styled-components';

export default function MyCard() {
  return (
    <div>
      <StContentWrapper>
        <h2>타이틀</h2>
        <p>내용</p>
        <StTagsWrapper>
          <span>약 11시간 전</span>
          <span>1개의 댓글</span>
        </StTagsWrapper>
      </StContentWrapper>
      <Divider />
    </div>
  );
}

const StContentWrapper = styled.div`
  /* background-color: aquamarine; */
  width: 100%;
`;
const StTagsWrapper = styled.div`
  width: 100%;
`;
const Divider = styled.div`
  background: lightgray;
  width: 100%;
  height: 2px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;
