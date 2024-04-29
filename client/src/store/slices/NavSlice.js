import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: null,
  hide: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setMenuOpen: (state, action) => {
      state.open = action.payload;
    },
    hideCrossIcon: (state, action) => {
      state.hide = action.payload;
    },
  },
});

export const { setMenuOpen, hideCrossIcon } = navSlice.actions;
export default navSlice.reducer;
