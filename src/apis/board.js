import { authInstance, instance } from './axios';

export const getPosts = async userId => {
  try {
    const data = await instance.get(`/api/users/${userId}/posts/`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getPost = async postId => {
  try {
    const data = await authInstance.post(`/api/posts/${postId}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const createPostApi = async postData => {
  try {
    const data = await authInstance.post('/api/posts/write', postData);
    return data;
  } catch (error) {
    return error;
  }
};
