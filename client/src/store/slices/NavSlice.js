import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: null,
  hide: null,
  dark: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setMenuOpen: (state, action) => {
      state.open = action.payload;
    },
    darkenOverlay: (state, action) => {
      state.dark = action.payload;
    },
    hideCrossIcon: (state, action) => {
      state.hide = action.payload;
    },
  },
});

export const { darkenOverlay, setMenuOpen, hideCrossIcon } = navSlice.actions;
export default navSlice.reducer;
