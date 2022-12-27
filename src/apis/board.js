import { instance } from './axios';

/* MyBoardList 불러오기 */
export const getPost = async userId => {
  const data = await instance.get(`/api/users/${userId}/posts/`);
  return data;
};
