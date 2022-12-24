import React, { useRef } from 'react';
import styled from 'styled-components';

export default function Signup() {
  const profileImg = useRef();
  return (
    <form action="" className="form_field">
      <div>
        <h4>이메일</h4>
        <StInputField>
          <input type="text" />
          <button type="button">중복확인</button>
        </StInputField>
      </div>

      <div>
        <h4>비밀번호</h4>
        <input type="password" />
      </div>
      <div>
        <h4>비밀번호 확인</h4>
        <input type="password" />
      </div>
      <div>
        <h4>닉네임</h4>
        <StInputField>
          <input type="text" />
          <button type="button">중복확인</button>
        </StInputField>
      </div>
      <div>
        <h4>프로필 이미지</h4>
        <StProfile>
          <label htmlFor="input_file">
            <img
              className="profile_image"
              src="http://file.mk.co.kr/meet/neds/2022/09/image_readtop_2022_826818_16635858705171202.jpg"
              alt=""
            />
          </label>
          <input type="file" id="input_file" ref={profileImg} hidden />
        </StProfile>
      </div>
    </form>
  );
}

const StProfile = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  cursor: pointer;
  align-items: center;
  overflow: hidden;
  .profile_container {
  }
  .profile_image {
    border: 1px solid #989898;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const StInputField = styled.div`
  display: flex;
  height: 3rem;
`;
