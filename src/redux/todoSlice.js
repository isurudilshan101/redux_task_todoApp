import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
     todos:[]
  },

  reducers: {
    addTodo: (state, action) => {
     
      state.todos=[...state.todos, action.payload];
      
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;

