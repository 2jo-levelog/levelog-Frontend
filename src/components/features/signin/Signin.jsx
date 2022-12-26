import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../../../redux/modules/userInfo';

const TEMP_DATA = {
  nickName: 'ssori',
  imgUrl:
    'https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2020/02/82879855_2644938848876080_5954685728829997056_o.jpg',
};

export default function Signin({ closeEventHandler }) {
  const dispatch = useDispatch();

  /* dispatch(actioncCreator) */
  const onSignInHandler = () => {
    dispatch(setUserInfo(TEMP_DATA));
    closeEventHandler();
  };
  return (
    <form action="" className="form_field">
      <h4>이메일</h4>
      <div className="flex-column">
        <StSignInContainer className="">
          <input type="text" placeholder="이메일을 입력하세요" />
        </StSignInContainer>
        <StSignInContainer>
          <input type="password" placeholder="비밀번호를 입력하세요" />
        </StSignInContainer>
        <div className="form_btn_container">
          <button type="button" onClick={onSignInHandler}>
            로그인
          </button>
        </div>
      </div>
    </form>
  );
}

const StSignInContainer = styled.div`
  height: 3rem;
  display: flex;
`;
