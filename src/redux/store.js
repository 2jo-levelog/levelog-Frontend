import { configureStore } from '@reduxjs/toolkit';
import userInfo from './modules/userInfo';
import commentInfo from './modules/commentSlice';

const store = configureStore({
  reducer: { userInfo, commentInfo },
});

export default store;
