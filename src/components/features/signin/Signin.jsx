import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Signin() {
  const submitHandler = async () => {
    /*  await authInstance
      .post('/api/auth/signIn', JSON.stringify({}))
      .then(response => {
        console.log(response);
        if (response.success) {
          console.log('회원가입 성공!');
        } else if (response.status === 400) {
          alert('이미 가입되어 있는 회원입니다.');
        }
      }); */
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
          <button type="button" onClick={submitHandler}>
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
