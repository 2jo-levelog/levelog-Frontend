import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { postLogin } from '../../../apis/auth';
import { getUserInfo } from '../../../apis/user';

export default function Signin({ closeEventHandler }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getUser = useCallback(async () => {
    const { data } = await getUserInfo();
    localStorage.setItem('email', data.email);
    localStorage.setItem('nickName', data.nickName);
    localStorage.setItem('profileImg', data.profileImg);
  }, []);

  const onSignInHandler = async () => {
    // 로그인 정보를 초기화
    localStorage.clear();
    try {
      const res = await postLogin({
        email,
        password,
      });
      localStorage.setItem('id', res.headers.authorization);
      // userInfo redux 저장
      const data = await getUser();
      console.log(data);
      alert('로그인 완료');
      closeEventHandler();
      window.location.reload();
    } catch (error) {
      alert('로그인 실패');
    }
  };

  return (
    <form action="" className="form_field">
      <h4>이메일</h4>
      <div className="flex-column">
        <StSignInContainer className="">
          <input
            // ref={loginIdRef}
            value={email}
            onChange={v => {
              setEmail(v.target.value);
            }}
            type="text"
            placeholder="이메일을 입력하세요"
          />
        </StSignInContainer>
        <StSignInContainer>
          <input
            // ref={loginPwRef}
            value={password}
            onChange={v => {
              setPassword(v.target.value);
            }}
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
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
