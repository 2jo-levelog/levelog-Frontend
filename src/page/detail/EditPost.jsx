import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';

// Toast 에디터
import '@toast-ui/editor/dist/toastui-editor.css';

import ToastEditor from './ToastEditor';

// npm i -S @toast-ui/editor

export default function EditPost({ type = 'edit' }) {
  const [content, setcontent] = useState();

  const editorRef = useRef();

  const getHtmlContent = useCallback(() => {
    const tmpContent = localStorage.getItem('content');
    setcontent(tmpContent);
  }, []);

  useEffect(() => {
    if (type === 'edit') {
      getHtmlContent();
    }
  }, [getHtmlContent, type]);

  const handleRegisterButton = () => {
    // 입력창에 입력한 내용을 HTML 태그 형태로 취득
    console.log(editorRef.current?.getInstance().getHTML());
    // 입력창에 입력한 내용을 MarkDown 형태로 취득
    console.log(editorRef.current?.getInstance().getMarkdown());
    // 테스트를 위해 로컬 스토리지 저장
    localStorage.setItem('content', editorRef.current?.getInstance().getHTML());
    console.log(editorRef);
  };

  // 강제 주입
  const handleEdit = () => {
    editorRef.current.getInstance().setHTML(content);
  };

  return (
    <div>
      <h1>Text Editor</h1>
      <ToastEditor content={content} editorRef={editorRef} />
      <Button onClick={handleRegisterButton}>제출하기</Button>
      <Button onClick={handleEdit}>수정하기</Button>
    </div>
  );
}
