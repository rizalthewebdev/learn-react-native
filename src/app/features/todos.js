import {createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import {logout} from './user';

const todosApiUrl = 'https://jsonplaceholder.typicode.com/todos?userId=1';

export const fetchTodosFromApi = createAsyncThunk(
  'todos/fetchTodosFromApi',
  async () => {
    const response = await axios.get(todosApiUrl);
    return response.data;
  },
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: title => {
        const id = nanoid();
        let completed = false;
        return {payload: {id, completed, title}};
      },
    },
    deleteTodo: (state, action) => {
      const todo = state.find(toDo => toDo.id === action.payload);
      if (todo) {
        state.splice(state.indexOf(todo), 1);
      }
    },
    resetTodo: state => {
      state.splice(0, state.length);
    },
    toggleComplete: (state, action) => {
      const todo = state.find(toDo => toDo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
  extraReducers: builder => {
    builder.addCase(logout, state => (state = []));
    builder.addCase(fetchTodosFromApi.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export const {addTodo, toggleComplete, deleteTodo, resetTodo} =
  todosSlice.actions;

export default todosSlice.reducer;
