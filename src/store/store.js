import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo/todo.slice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
