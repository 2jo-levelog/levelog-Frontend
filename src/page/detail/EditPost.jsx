import styled from 'styled-components';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import ToastEditor from './ToastEditor';
// Toast 에디터
import '@toast-ui/editor/dist/toastui-editor.css';
import { getPost, createPostApi, editPostApi } from '../../apis/board';

export default function EditPost() {
  const [title, setTitle] = useState('');
  const [contentData, setcontentData] = useState();
  const navigate = useNavigate();
  const editorRef = useRef();
  const { postId } = useParams();

  const getHtmlContent = useCallback(async () => {
    const { data } = await getPost(postId);
    setcontentData(data.content);
    setTitle(data.title);
  }, [postId]);

  const handleEdit = useCallback(() => {
    // 강제 주입
    editorRef.current.getInstance().setHTML(contentData);
  }, [contentData]);

  const onExitHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    getHtmlContent();
  }, [getHtmlContent]);

  useEffect(() => {
    handleEdit();
  }, [contentData, handleEdit]);

  const onEditSubmitHandler = async () => {
    // 마크다운 형식
    const content = editorRef.current?.getInstance().getMarkdown();
    const postData = {
      title,
      content,
    };
    const { data } = await editPostApi(postData, postId);
    navigate(`/detailpost/${postId}`);
  };
  const onChangeTitleHandler = e => {
    setTitle(e.target.value);
  };

  return (
    <StContainer>
      <StTextarea
        placeholder="타이틀을 입력해주세요"
        value={title}
        onChange={onChangeTitleHandler}
      />
      <ToastEditor content={contentData} editorRef={editorRef} />
      <STButtonsWrap>
        <STBackButton onClick={onExitHandler}>
          <StArrowWrap>
            <StArrow />
            <StArrowText>나가기</StArrowText>
          </StArrowWrap>
        </STBackButton>
        <STSubmitButton onClick={onEditSubmitHandler}>수정하기</STSubmitButton>
      </STButtonsWrap>
    </StContainer>
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
const StContainer = styled.div`
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 768px;
  }
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
