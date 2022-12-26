/* eslint-disable consistent-return */
import { authInstance, instance } from './axios';

export const postSignup = async ({ email, password, nickname, profileImg }) => {
  try {
    const data = await authInstance.post('/api/auth/signUp', {
      email,
      password,
      nickname,
      profileImg,
    });
    return data;
  } catch (error) {
    return console.log(error);
  }
};

export const postLogin = async ({ email, password }) => {
  try {
    const data = await authInstance.post('/api/auth/signIn', {
      email,
      password,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    if (error.response.data.status === 400) {
      alert('옳바른 아이디나 비밀번호를 찾을 수 없습니다.');
    }
  }
};

export const idDupCheck = async email => {
  console.log('id:', email);
  try {
    const data = await instance.post('/api/auth/dupEmail', email);
    return data;
  } catch (error) {
    return error;
  }
};

export const nickDupCheck = async nickname => {
  try {
    const data = await instance.post('/api/auth/dupNick', nickname);
    return data;
  } catch (error) {
    return console.log(error);
  }
};
