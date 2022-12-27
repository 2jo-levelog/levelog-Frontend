import { authInstance } from './axios';

export const postLogin = async ({ email, password }) => {
  try {
    const data = await authInstance.post('/api/auth/signIn', {
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response.data.status === 400) {
      alert('옳바른 아이디나 비밀번호를 찾을 수 없습니다.');
    }
    return error;
  }
};
