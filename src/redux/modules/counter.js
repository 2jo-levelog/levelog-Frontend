import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 0,
};

const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      const currentCount = state.number + action.payload;
      state.number = currentCount;
    },

    minusNumber: (state, action) => {
      const currentCount = state.number - action.payload;
      if (currentCount >= 0) {
        state.number = currentCount;
      }
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = counter.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counter.reducer;
