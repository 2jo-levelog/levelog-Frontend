import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authInstance, instance } from '../../apis/axios';

export const commentCheck = createAsyncThunk(
  'getComments',
  async (postId, ThunkAPI) => {
    try {
      const data = authInstance.post(`/api/posts/${postId}`);

      return ThunkAPI.fulfillWithValue(data.data);
      // Promise가 resolve 됬을 경우
    } catch (error) {
      console.log(error);
      return ThunkAPI.rejectWithValue(error);
    }
  },
);

/* export const getLists = createAsyncThunk(
  'getComments',
  async (payload, ThunkAPI) => {
    try {
      authInstance.post(`/api/posts/${postId}`);
      const data = authInstance.post(`/api/posts/${postId}`).then(response => {
        setPostData(response);
      });

      return ThunkAPI.fulfillWithValue(data.data);
      // Promise가 resolve 됬을 경우
    } catch (error) {
      console.log(error);
      return ThunkAPI.rejectWithValue(error);
    }
  },
); */
export const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    setCommentInfo: (state, action) => {
      state.comment = action.payload.comment;
    },
  },
  reducers: {},
  extraReducers: {
    [setCommentInfo.pending]: state => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [setCommentInfo.fulfilled]: (state, action) => {
      console.log(action, state);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comment = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [setCommentInfo.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});
export const { setCommentInfo } = commentSlice.actions;
export default commentSlice.reducer;
