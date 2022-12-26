import React, { useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../../../redux/modules/userInfo';
import { loginCheck } from '../../../redux/modules/signupSlice';

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
  const loginIdRef = useRef();
  const loginPwRef = useRef();
  const onCheckLoginHandler = async () => {
    const jsonData = {
      email: loginIdRef.current.value,
      password: loginPwRef.current.value,
    };
    console.log(jsonData);

    loginCheck(jsonData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <form action="" className="form_field">
      <h4>이메일</h4>
      <div className="flex-column">
        <StSignInContainer className="">
          <input
            ref={loginIdRef}
            type="text"
            placeholder="이메일을 입력하세요"
          />
        </StSignInContainer>
        <StSignInContainer>
          <input
            ref={loginPwRef}
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
        </StSignInContainer>
        <div className="form_btn_container">
          <button type="button" onClick={onCheckLoginHandler}>
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
