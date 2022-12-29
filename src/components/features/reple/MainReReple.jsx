import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { authInstance } from '../../../apis/axios';
import Modifyarea from './Modifyarea';

export default function MainReReple({
  comment,
  commentsId,
  formatDate,
  setIsTrue,
}) {
  const commentValue = useRef();

  const [handleChange, setHandleChange] = useState(false);

  const { postId } = useParams();

  const onSubmitCommentHandler = () => {
    if (commentValue.current.value == '') return;
    authInstance
      .post(`/api/posts/${postId}/comments/${commentsId}`, {
        comment: commentValue.current.value,
      })
      .then(
        response => setIsTrue(prev => !prev),
        (commentValue.current.value = ''),
      )
      .catch(error => console.log(error));
  };

  return (
    <StRepleContent>
      {comment.length > 0
        ? comment.map(data => {
            console.log(data);
            return (
              <Modifyarea
                key={data.id}
                data={data}
                postId={postId}
                formatDate={formatDate}
                commentsId={commentsId}
                setIsTrue={setIsTrue}
              />
            );
          })
        : ''}
      {handleChange ? (
        <div>
          <StTextarea placeholder="댓글을 작성하세요" ref={commentValue} />
          <div className="buttons-wrapper">
            <StCancleBtn
              type="button"
              onClick={() => setHandleChange(!handleChange)}
            >
              취소
            </StCancleBtn>
            <StSumitBtn type="button" onClick={() => onSubmitCommentHandler()}>
              댓글 작성
            </StSumitBtn>
          </div>
        </div>
      ) : (
        <StBtnBox>
          <button type="button" onClick={() => setHandleChange(!handleChange)}>
            답글 작성하기
          </button>
        </StBtnBox>
      )}
    </StRepleContent>
  );
}

const StRepleContent = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.02);
  background-color: rgba(0, 0, 0, 0.016);
  padding: 1.5rem;
  border-radius: 4px;
  margin-top: 1.3125rem;
  > div {
    padding: 1rem 0;
  }
  .comment_inner + .comment_inner {
    border-top: 1px solid #f1f3f5;
  }
  .buttons-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 0 0.5rem;
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
const StTextarea = styled.textarea`
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid #f1f3f5;
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  color: #212529;
  line-height: 1.75;
  box-sizing: border-box;
  background: #ffffff;
`;
const StSumitBtn = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: #12b886;
  color: #ffffff;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;
`;
const StCancleBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  color: #12b886;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;
`;
