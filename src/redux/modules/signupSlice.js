import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authInstance, instance } from '../../apis/axios';

export const addUser = createAsyncThunk(
  'api/auth/signUp',
  async (payload, ThunkAPI) => {
    try {
      console.log(payload);
      const data = await authInstance.post('/api/auth/signUp', payload);
      console.log(data);
      return ThunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return ThunkAPI.rejectWithValue(error);
    }
  },
);
export const emailCheck = async email => {
  try {
    const data = await authInstance.post('/api/auth/dupEmail', email);
    return data;
    // 조회되고 처리된 값이 data에 담겨오고,
  } catch (error) {
    return console.log(error);
    // alert("이미 사용중인 ID 입니다.");
  }
};
export const signupCheck = async ({ email, password, nickname }) => {
  try {
    console.log({ email, password, nickname });
    const data = await authInstance.post('/api/auth/signUp', {
      email,
      password,
      nickname,
    });
    console.log(data);
    return data;
    // 조회되고 처리된 값이 data에 담겨오고,
  } catch (error) {
    return console.log(error);
    // alert("이미 사용중인 ID 입니다.");
  }
};

export const nickCheck = async nick => {
  try {
    const data = await authInstance.post('/api/auth/dupNick', nick);
    return data;
    // 조회되고 처리된 값이 data에 담겨오고,
  } catch (error) {
    return console.log(error);
    // alert("이미 사용중인 ID 입니다.");
  }
};
export const signupSlice = createSlice({
  name: 'signUp',
  initialState: {
    user: [],
  },
  reducers: {},
  extraReducers: {
    [addUser.pending]: state => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [addUser.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.user = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [addUser.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});
export const {} = signupSlice.actions;
export default signupSlice.reducer;
