import { createSlice } from '@reduxjs/toolkit';
// TODO: 디폴트 값 삭제
const initialState = {
  email: 'test999@test.com',
  nickName: 'ssori',
  profileImg:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sting_in_April_2018.jpg/1200px-Sting_in_April_2018.jpg',
};
/* actionCreator: setUserInfo */
const userInfo = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.email = action.payload.email;
      state.nickName = action.payload.nickName;
      state.profileImg = action.payload.profileImg;
    },
  },
});

export const { setUserInfo } = userInfo.actions;

export default userInfo.reducer;
