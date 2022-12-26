import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nickName: 'joon',
  imgUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sting_in_April_2018.jpg/1200px-Sting_in_April_2018.jpg',
};
/* actionCreator: setUserInfo */
const userInfo = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.nickName = action.payload.nickName;
      state.imgUrl = action.payload.imgUrl;
    },
  },
});

export const { setUserInfo } = userInfo.actions;

export default userInfo.reducer;
