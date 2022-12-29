import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// Toast-UI Viewer 임포트
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import axios from 'axios';
import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { RiHeartAddFill } from 'react-icons/ri';

import { authInstance, instance } from '../../apis/axios';
import MainReple from '../../components/features/reple/MainReple';
import { setCommentInfo } from '../../redux/modules/commentSlice';

export default function DetailPost() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState('');

  useEffect(() => {
    authInstance.post(`/api/posts/${postId}`).then(response => {
      setPostData(response);
    });
    setCommentInfo();
  }, [dispatch]);
  const d = new Date(postData.data?.createdAt);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;
  console.log(postData);
  const commentValue = useRef();
  function formatDate() {
    if (diff < 60 * 1) {
      // 1분 미만일땐 방금 전 표기
      return '방금 전';
    }
    if (diff < 60 * 60 * 24 * 3) {
      // 3일 미만일땐 시간차이 출력(몇시간 전, 몇일 전)
      return formatDistanceToNow(d, { addSuffix: true, locale: ko });
    }
    return format(d, 'PPP EEE p', { locale: ko }); // 날짜 포맷
  }
  const onSubmitCommentHandler = () => {
    const payload = { comment: commentValue.current.value };
    authInstance
      .post(`/api/posts/${postId}/comments/`, payload)
      .then(res => {
        authInstance.post(`/api/posts/${postId}`).then(response => {
          setPostData(response);
          commentValue.current.value = '';
        });
      })
      .catch(error => console.log(error));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  /*
  해야할 일 
  1. 좋아요 버튼 기능 - 틀 완료, 기능 x
  2. 유저 아이디 비교해서 수정, 삭제 버튼 띄우기 기능
  3. 댓글 기능, 대댓글
 */
  return (
    <StDetailWrapper>
      {/* postData의 초기값은 null null상태에서 Viewer를 불러오면 에러 발생해서 postData가 겟되어진 뒤에 ToastUI를 불러옴 */}
      {postData && (
        <div>
          <div className="main_header">
            <h1>{postData.data.title}</h1>
            <StUtilContainer>
              <button type="button">수정</button>
              <button type="button">삭제</button>
            </StUtilContainer>
            <StBoardInfo>
              <div className="main_userinfo">
                <p className="board_nickname">{postData.data.nickname}</p>·
                {postData.data?.createdAt && (
                  <p>{formatDate(postData.data?.createdAt)}</p>
                )}
              </div>
              <StLikeLabelTab>
                <StLikeBtnTab />
                <span>{postData.data?.likeCnt}</span>
              </StLikeLabelTab>
            </StBoardInfo>
            <StLikesWrapper>
              <StLikesContainer>
                <div className="likes_container_inner">
                  <StLikeLabelBrowser>
                    <StLikeBtnBrowser />
                  </StLikeLabelBrowser>
                  <p className="likeCount">{postData.data?.likeCnt}</p>
                </div>
              </StLikesContainer>
            </StLikesWrapper>
          </div>

          <Viewer initialValue={postData.data.content} />
          <StCommentWrapper>
            <div className="comment_input_field">
              <h4>{postData.data.cmtCnt}개의 댓글</h4>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="댓글을 입력하세요."
                ref={commentValue}
              />
              <StCommentBtnBox>
                <button type="button" onClick={onSubmitCommentHandler}>
                  댓글 작성
                </button>
              </StCommentBtnBox>
            </div>
            <div className="comment_reple_field">
              <div>
                {postData &&
                  postData.data.commentList.map(data => {
                    /* console.log(data); */
                    return <MainReple key={data.id} data={data} />;
                  })}
              </div>
            </div>
          </StCommentWrapper>
        </div>
      )}

      <div />
    </StDetailWrapper>
  );
}

const StDetailWrapper = styled.div`
  width: 768px;
  margin: 0 auto;
  margin-top: 5.5rem;
  padding: 0 10px;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    margin-top: 2rem;
    padding: 0 1rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  .main_header {
    h1 {
      font-size: 3rem;
      margin-top: 0;
      margin-bottom: 2rem;
      margin-bottom: 2rem;
      word-break: keep-all;
    }
  }
`;
const StBoardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .main_header {
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
  }
  .main_userinfo {
    display: flex;
    display: flex;
    align-items: center;
    gap: 0 10px;
    line-height: 1;
    p {
      margin: 0;
    }
  }
  .board_nickname {
    font-weight: 600;
    font-size: 0.9rem;
  }
`;
const StLikesWrapper = styled.div`
  position: relative;
  left: -7rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const StLikesContainer = styled.div`
  position: fixed;

  top: 18rem;
  background: #f8f9fa;
  border: 1px solid #f1f3f5;
  border-radius: 2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  .likes_container_inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .likeCount {
    margin: 0;
  }
`;
const StLikeLabelBrowser = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 1.5rem;
  color: #868e96;
  cursor: pointer;
  z-index: 5;
  &.active {
    color: #ffffff;
    border-radius: 1.5rem;
    background: #20c997;
    border-color: #20c997;
  }
`;
const StLikeLabelTab = styled.button`
  background: #ffffff;
  border: 1px solid #adb5bd;
  padding: 1px 10px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 1.5rem;
  border-radius: 0.75rem;
  outline: none;
  gap: 0 10px;
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }

  &.active {
    border-color: #20c997;
    background: #20c997;
    span {
      color: white;
    }
    StLikeBtnTab {
      color: #fff;
    }
  }
`;
const StLikeBtnBrowser = styled(RiHeartAddFill)`
  font-size: 2rem;
`;
const StLikeBtnTab = styled(RiHeartAddFill)`
  font-size: 1rem;
  color: #495057;
`;
const StUtilContainer = styled.div`
  display: flex;
  gap: 0 10px;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
  button {
    cursor: pointer;
    color: #868e96;
    border: none;
    background: none;
    font-size: 1rem;

    &:hover {
      color: black;
    }
  }
`;
const StBoardUserInfo = styled.div`
  margin-top: 8rem;
  margin-bottom: 3rem;
`;
const StUserImg = styled(Link)`
  border-radius: 50%;
  overflow: hidden;
`;
const StCommentWrapper = styled.div`
  .comment_input_field {
    display: flex;
    flex-direction: column;
  }
  h4 {
    font-size: 1.1rem;
  }
  textarea {
    resize: none;
    height: 70px;
    padding: 1rem 1rem 1.5rem;
    outline: none;
    border: 1px solid #f1f3f5;
    margin-bottom: 1.5rem;
    border-radius: 4px;
    min-height: 6.125rem;
    font-size: 1rem;
    color: #212529;
    line-height: 1.75;
    background: #ffffff;
    &::placeholder {
      color: #bcbdbe;
    }
  }
  .comment_reple_field {
    margin-top: 2.5rem;
  }
`;
const StCommentBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
    background: #12b886;
    color: #fff;
    border-radius: 4px;
    padding: 0px 1.25rem;
    height: 2rem;
    font-size: 1rem;
  }
`;
