import { useState, useRef } from 'react';
import { Button } from '@mui/material';
import { createPost } from '../../apis/board';

// Toast 에디터
import '@toast-ui/editor/dist/toastui-editor.css';

import ToastEditor from './ToastEditor';

export default function CreatePost({ type = 'edit' }) {
  const [title, setTitle] = useState('');
  const editorRef = useRef();

  const onSubmit = () => {
    // 에디터 입력창에 입력한 내용을 HTML 태그 형태로 취득
    const content = editorRef.current?.getInstance().getHTML();
    // const content = editorRef.current?.getInstance().getMarkdown();

    // 입력창에 입력한 내용을 MarkDown 형태로 취득 하는 방법도 있음
    // console.log(editorRef.current?.getInstance().getMarkdown());
    // form 데이터 형식
    const formData = new FormData();
    const reqData = { title, content };
    const blob = new Blob([JSON.stringify(reqData)], {
      type: 'application/json',
    });
    formData.append('key', blob);
    // 이미지는 빈값을 넣어준다 null
    formData.append('multipartFile', null);
    createPost(formData);
  };

  return (
    <div>
      <input
        placeholder="타이틀을 입력해주세요"
        value={title}
        onChange={e => {
          setTitle(e.target.value); // TODO: onchangehandler 작성하기
        }}
      />
      <ToastEditor editorRef={editorRef} />
      <Button onClick={onSubmit}>제출하기</Button>
    </div>
  );
}
