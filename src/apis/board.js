import { authInstance, instance } from './axios';

/* MyBoardList 불러오기 */
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
    const data = await authInstance.post('/api/posts/write', postData, {
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
    });
    return data;
  } catch (error) {
    return error;
  }
};
