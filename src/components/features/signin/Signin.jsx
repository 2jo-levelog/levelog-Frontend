import React from 'react';
import styled from 'styled-components';

export default function Signin() {
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
          <button type="button">로그인</button>
        </div>
      </div>
    </form>
  );
}

const StSignInContainer = styled.div`
  height: 3rem;
  display: flex;
`;
