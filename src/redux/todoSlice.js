import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [{ title: "" }],

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        title: action.payload.title,
      };

      state.push(newTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
