import { Editor } from '@toast-ui/react-editor';

export default function ToastEditor(props) {
  const { content, editorRef } = props;
  console.log('here');
  return (
    <Editor
      // placeholder="내용을 입력해주세요."
      initialValue={content || ' '}
      ref={editorRef} // DOM 선택용 useRef
      previewStyle="vertical" // 미리보기 스타일 지정
      height="500px" // 에디터 창 높이
      initialEditType="markdown" // 초기 입력모드 설정(디폴트 markdown)
      theme="dark"
      toolbarItems={[
        // 툴바 옵션 설정
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        // ['table', 'image', 'link'], 이미지 업로드 기능이 없어서 주석처리
        ['image'],
        ['code', 'codeblock'],
      ]}
    />
  );
}
