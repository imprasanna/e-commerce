import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    darkenOverlay: (state) => {
      state.dark = true;
    },
  },
});

export default navSlice.reducer;
export const { darkenOverlay } = navSlice.actions;
