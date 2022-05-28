import {createSlice, nanoid} from '@reduxjs/toolkit';
import {logout} from './user';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: text => {
        const id = nanoid();
        let isComplete = false;
        return {payload: {id, isComplete, text}};
      },
    },
  },
  extraReducers: builder => {
    builder.addCase(logout, state => {
      state = [];
    });
  },
});

export const {addTodo} = todosSlice.actions;

export default todosSlice.reducer;
