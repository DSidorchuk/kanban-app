import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
   name: '@@tasks',
   initialState: {},
   reducers: {
      createTask: (state, {payload}) => {
         if(state?.[payload.boardId]) {
            state[payload.boardId].push(payload.task)
         } else {
            state[payload.boardId] = [payload.task];
         }
      },
      updateTask: (state, {payload}) => {},
      deleteTask: (state, {payload}) => {},
   }
});

export const tasksReducer = tasksSlice.reducer;
export const {createTask, updateTask, deleteTask} = tasksSlice.actions;
export const selectBoardTasks = (state, boardId) => state.tasks[boardId];

