import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    darkenOverlay: (state, action) => {
      state.dark = action.payload;
    },
  },
});

export const { darkenOverlay } = navSlice.actions;
export default navSlice.reducer;
