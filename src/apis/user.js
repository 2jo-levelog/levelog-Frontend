import { authInstance } from './axios';

export const getUserInfo = async () => {
  try {
    const data = await authInstance.get(`/api/auth/userInfo`);
    return data;
  } catch (error) {
    return error;
  }
};
