import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

// Toast-UI Viewer 임포트
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import { getPost } from '../../apis/board';

// const MOCK_DATA = {
//   cmtCnt: 0,
//   commentList: [],
//   content:
//     '<h2>easdfasdfa</h2><h3>sdfasfasdf</h3><ul><li><p>dasdfasdf</p></li><li><p>asdfsadfsadf</p></li><li><p>adsfasdfasdfs</p></li></ul>',
//   createdAt: '2022-12-27T14:01:01.260155',
//   id: 19,
//   imageList: [],
//   likeCnt: 0,
//   modifiedAt: '2022-12-27T14:01:01.260155',
//   nickname: '테스트용100',
//   title: '제목입니다',
// };

export default function DetailPost() {
  const { postId } = useParams();
  const [postData, setPostData] = useState();

  const getHtmlContent = useCallback(async () => {
    const { data } = await getPost(postId);
    setPostData(data);
  }, [postId]);

  useEffect(() => {
    getHtmlContent();
  }, [getHtmlContent]);

  return (
    <div>
      {/* postData의 초기값은 null null상태에서 Viewer를 불러오면 에러 발생해서 postData가 겟되어진 뒤에 ToastUI를 불러옴 */}
      {postData && (
        <>
          {/* TODO: 디자인 */}
          <h1>{postData.title}</h1>
          <p>nickname : {postData.nickname}</p>
          <p>createdAt : {postData.createdAt}</p>
          <p>likeCnt : {postData.likeCnt}</p>
          <Viewer initialValue={postData.content} />
          {/* TODO: 수정 삭제 기능 추가 */}
        </>
      )}
      {/* TODO: 댓글관련 작업 */}
    </div>
  );
}
