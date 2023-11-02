import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   showSideBar: true,
   theme: 'light'
};

const viewSlice = createSlice({
   name: '@@view',
   initialState,
   reducers: {
      toggleSideBar: (state, action) => {state.showSideBar = action.payload},
      setTheme: (state, action) => {state.theme = action.payload},
   }
});

export const {toggleSideBar, setTheme} = viewSlice.actions;
export const viewReducer = viewSlice.reducer;
export const selectView = (state) => state.view;