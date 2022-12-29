import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Button } from '@mui/material';
import { BsArrowLeft } from 'react-icons/bs';
import { createPostApi } from '../../apis/board';

// Toast 에디터
import '@toast-ui/editor/dist/toastui-editor.css';

import ToastEditor from './ToastEditor';

export default function CreatePost({ type = 'edit' }) {
  const [title, setTitle] = useState('');
  const editorRef = useRef();
  const navigate = useNavigate();

  const onSubmit = async () => {
    // 에디터 입력창에 입력한 내용을 HTML 태그 형태로 취득
    // const content = editorRef.current?.getInstance().getHTML();
    // 마크다운 형식
    if (title == '') return;
    const content = editorRef.current?.getInstance().getMarkdown();
    const postData = {
      title,
      content,
    };
    const res = await createPostApi(postData);
    console.log(res);
    navigate('/');
  };
  const onExitHandler = () => {
    navigate(-1);
  };

  const onChangeTitleHandler = e => {
    setTitle(e.target.value);
  };

  return (
    <StMyPageContainer>
      <StTextarea
        placeholder="타이틀을 입력해주세요"
        value={title}
        onChange={onChangeTitleHandler}
      />
      <ToastEditor editorRef={editorRef} />
      <STButtonsWrap>
        <STBackButton onClick={onExitHandler}>
          <StArrowWrap>
            <StArrow />
            <StArrowText>나가기</StArrowText>
          </StArrowWrap>
        </STBackButton>

        <STSubmitButton onClick={onSubmit}>제출하기</STSubmitButton>
      </STButtonsWrap>
    </StMyPageContainer>
  );
}

const StTextarea = styled.textarea`
  background: transparent;
  display: block;
  padding: 0px;
  font-size: 2.75rem;
  width: 100%;
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
  color: #212529;
`;
const STButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px;
  margin: 8px 8px;
`;

const STBackButton = styled.button`
  font-size: 1.124rem;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  -webkit-box-align: center;
  align-items: center;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  display: flex;
  outline: none;
  color: var(--text1);
`;
const StArrowWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StArrow = styled(BsArrowLeft)`
  font-size: 20px;
`;
const StArrowText = styled.span`
  margin-left: 8px;
  font-size: 1.125rem;
`;
const STSubmitButton = styled.button`
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #12b886;
  color: #ffffff;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2.5rem;
  font-size: 1.125rem;
`;

const StMyPageContainer = styled.div`
  /* background-color: lightblue; */
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 768px;
  }
`;
