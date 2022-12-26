import { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../../../redux/modules/userInfo';
import { postLogin } from '../../../apis/auth';

const TEMP_DATA = {
  nickName: 'ssori',
  imgUrl:
    'https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2020/02/82879855_2644938848876080_5954685728829997056_o.jpg',
};

export default function Signin({ closeEventHandler }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSignInHandler = () => {
    postLogin({
      email,
      password,
    })
      .then(res => {
        localStorage.setItem('id', res.headers.authorization);
        alert('로그인 완료');
      })
      .catch(error => console.log(error));
    // TODO: 로그인이 성공시 profile정보를 받아오고 싶어
    // 받아오면 redux에 넣어줄꺼야
    // dispatch(setUserInfo(TEMP_DATA));
    closeEventHandler();
  };

  const onEmailHandler = e => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = e => {
    setPassword(e.target.value);
  };

  return (
    <form action="" className="form_field">
      <h4>이메일</h4>
      <div className="flex-column">
        <StSignInContainer className="">
          <input
            type="text"
            onChange={onEmailHandler}
            placeholder="이메일을 입력하세요"
          />
        </StSignInContainer>
        <StSignInContainer>
          <input
            type="password"
            onChange={onPasswordHandler}
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
