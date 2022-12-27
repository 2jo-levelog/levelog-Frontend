/* eslint-disable consistent-return */
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  addUser,
  signupCheck,
  emailCheck,
  nickCheck,
} from '../../../redux/modules/signupSlice';
import { authInstance, instance } from '../../../apis/axios';
/* eslint-disable react/jsx-props-no-spreading */

export default function Signup({ setChange }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState({
    preview:
      'https://thumb.photo-ac.com/d3/d3febea04f54d836026652b145854f4d_t.jpeg',
    upload: '',
  });
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkNick, setCheckNick] = useState(false);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('유효하지 않은 이메일입니다.')
      .matches(
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
        {
          message: <p>이메일 양식에 맞게 입력해 주세요.</p>,
        },
      )
      .required('이메일 입력은 필수입니다.'),
    password: yup
      .string()
      .min(8, '비밀번호는 최소 6글자 이상입니다.')
      .max(15, '비밀번호는 최대 15글자 입니다.')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/g,
        {
          message: (
            <p>
              비밀번호는 대문자,소문자,숫자,특수 문자를 조합해서 사용해주세요.
            </p>
          ),
        },
      ),
    checkPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다')
      .required('비밀번호를 한번 더 입력해주세요'),
    nickname: yup
      .string()
      .min(2, '닉네임은 최소 두 글자 이상입니다.')
      .max(12, '닉네임은 최대 12글자 입니다')
      .matches(/^[a-zA-Z0-9가-힣]+$/, {
        message: <p>닉네임은 영어 대소문자,숫자,한글만 사용가능합니다.</p>,
      }),
    /* profileImg: yup
      .mixed()
      .test('required', '프로필 이미지 파일을 선택해주세요!', value => {
        return value && value.length;
      })
      .test(
        'type',
        'png/jpeg/jpg 형식의 파일을 선택해주세요!',
        function (value) {
          return (
            value &&
            value[0] &&
            (value[0].type === 'image/jpeg' ||
              value[0].type === 'image/jpg' ||
              value[0].type === 'image/png')
          );
        },
      ), */
  });

  const {
    register,
    getValues,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      // 초기값 설정
      email: '',
      password: '',
      checkPassword: '',
      profileimg: '',
    },
  });

  const onChangeImgHandler = e => {
    setImgSrc({
      upload: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const emailValue = getValues('email');
  const nickValue = getValues('nickname');

  const handleJoin = ({ email, password, nickname }) => {
    if (checkNick == false || checkEmail == false) {
      return alert('중복확인을 해주세요.');
    }
    const formData = new FormData();
    const file = { email, password, nickname };
    const blob = new Blob([JSON.stringify(file)], {
      type: 'application/json',
    });
    formData.append('key', blob);
    formData.append('multipartFile', imgSrc.upload);

    signupCheck(formData)
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          alert('회원가입이 완료되었습니다.');
          setChange(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onCheckEmailHandler = async () => {
    if (errors.email) return;
    setCheckEmail(true);
    const jsonData = { email: emailValue };
    console.log(jsonData);

    emailCheck(jsonData)
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          alert('사용가능한 이메일입니다.');
          return setCheckNick(true);
        }
        if (response.status == 400) {
          return alert('중복되는 이메일입니다.');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onCheckNickHandler = async () => {
    if (errors.nickname) return;

    const jsonData = { nickname: nickValue };
    console.log(jsonData);
    nickCheck(jsonData)
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          alert('사용가능한 닉네임입니다.');
          return setCheckNick(true);
        }
        if (response.status == 400) {
          return alert('중복되는 닉네임입니다.');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form className="form_field" onSubmit={handleSubmit(handleJoin)}>
      <div>
        <h4>이메일</h4>
        <StInputField>
          <input
            type="email"
            name="email"
            {...register('email', { required: true })}
            autoComplete="off"
          />
          <button type="button" onClick={onCheckEmailHandler}>
            중복확인
          </button>
        </StInputField>

        <StErrorMessage>{errors.email?.message}</StErrorMessage>
      </div>

      <div>
        <h4>비밀번호</h4>
        <input type="password" {...register('password', { required: true })} />
        <StErrorMessage>{errors.password?.message}</StErrorMessage>
      </div>
      <div>
        <h4>비밀번호 확인</h4>
        <input
          type="password"
          {...register('checkPassword', { required: true })}
        />
        <StErrorMessage>{errors.checkPassword?.message}</StErrorMessage>
      </div>
      <div>
        <h4>닉네임</h4>
        <StInputField>
          <input type="text" {...register('nickname', { required: true })} />
          <button type="button" onClick={onCheckNickHandler}>
            중복확인
          </button>
        </StInputField>
        <StErrorMessage>{errors.nickname?.message}</StErrorMessage>
      </div>
      <div>
        <h4>프로필 이미지</h4>
        <StProfile>
          <label htmlFor="input_file">
            <img
              className="profile_image"
              src={imgSrc.preview}
              name="userImg"
              alt=""
            />
          </label>
          <input
            type="file"
            id="input_file"
            {...register('profileImg', {
              required: true,
            })}
            onChange={onChangeImgHandler}
            hidden
          />
        </StProfile>
        <StErrorMessage>{errors.profileImg?.message}</StErrorMessage>
      </div>
      <div className="form_btn_container">
        <button
          type="submit"
          onClick={handleSubmit(handleJoin)}
          disabled={isSubmitting}
        >
          회원가입
        </button>
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
  margin: 3rem 0 5rem;

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
const StErrorMessage = styled.span`
  min-height: 20px;
  font-size: 0.8rem;
  color: #de2626;
  display: flex;
  align-items: center;
  margin: 0;
  p {
    margin: 0;
  }
`;
