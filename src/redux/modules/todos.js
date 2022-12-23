import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export const {} = todos.actions;
export default todos.reducer;
