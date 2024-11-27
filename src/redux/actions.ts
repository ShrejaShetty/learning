import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  text: string;
  status: string;
}

interface TodosState {
  todos: Todo[];
  error: string;
}

const initialState: TodosState = {
  todos: [],
  error: '',
};

const actions = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string; status: string }>) => {
      const { text, status } = action.payload;
      if (!text.trim()) {
        state.error = 'Please enter the task';
      } else {
        state.error = '';
        state.todos.push({ text, status: status || 'Pending' });
      }
    },
    updateTodo: (state, action: PayloadAction<{ index: number; text: string; status: string }>) => {
      const { index, text, status } = action.payload;
      if (!text.trim()) {
        state.error = 'Please enter the task';
      } else {
        state.error = '';
        state.todos[index] = { text, status };
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
    changeStatus: (state, action: PayloadAction<{ index: number; status: string }>) => {
      const { index, status } = action.payload;
      state.todos[index].status = status;
    },
  },
});

export const { addTodo, updateTodo, removeTodo, changeStatus } = actions.actions;
export default actions.reducer;