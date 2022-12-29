import React from 'react';
import styled from 'styled-components';

export default function MainReReple() {
  return (
    <StRepleContent>
      <div>
        <StProfile>
          <a href="#">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </a>
          <StCommentInfo>
            <span className="user_name">ssori</span>
            <span className="comment_date">12월 날짜</span>
          </StCommentInfo>
        </StProfile>
        <StCommentContent>
          <span>댓글내용</span>
        </StCommentContent>
      </div>
      <StBtnBox>
        <button type="button">답글 작성하기</button>
      </StBtnBox>
    </StRepleContent>
  );
}

const StProfile = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 0 1rem;
  a {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: inherit;
      height: inherit;
      object-fit: cover;
    }
  }
`;
const StCommentContent = styled.div`
  font-size: 1.125rem;
  color: #212529;
  transition: color 0.125s ease-in 0s;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
  > div {
    padding: 1.5rem 0;
  }
  span {
    display: block;
    margin: 1rem 0;
  }
`;

const StRepleContent = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.02);
  background-color: rgba(0, 0, 0, 0.016);
  padding: 1.5rem;
  border-radius: 4px;
  margin-top: 1.3125rem;
`;
const StCommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0;
  .user_name {
    font-size: 1rem;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
  .comment_date {
    color: #868e96;
    font-size: 0.9rem;
    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
`;
const StBtnBox = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  border-top: 1px solid #ebebeb;

  button {
    margin-top: 1.5rem;
    cursor: pointer;
    height: 2.5rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #12b886;
    display: flex;
    outline: none;
    color: #12b886;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: 600;
    background: #ffffff;
    &:hover {
      background: #12b886;
      color: #ffffff;
    }
  }
`;
