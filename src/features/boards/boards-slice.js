import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   list: [],
   active: null,
}

const boardSlice = createSlice({
   name: '@@boards',
   initialState,
   reducers: {
      createBoard: (state, action) => {state.list.push(action.payload)},
      removeBoard: (state, action) => {
         state.list = state.list.filter((item) => item.board.id !== action.payload);
         state.active = null;
      },
      addToActive: (state, action) => {state.active = action.payload},
      changeBoard: (state, action) => {
         state.list = state.list.map((item) => {
            if(item.board.id === state.active.board.id) {
               item = action.payload
            }
            return item
         })
         state.active = action.payload
      },
   }
})

export const {createBoard, removeBoard, addToActive, changeBoard} = boardSlice.actions;
export const boardsReducer = boardSlice.reducer;
export const selectBoards = (state) => state.boards;
export const selectActiveBoard = (state) => state.boards.active;