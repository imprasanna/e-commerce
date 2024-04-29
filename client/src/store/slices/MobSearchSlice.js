import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: null,
};

export const mobSearchSlice = createSlice({
  name: "mobSearch",
  initialState,
  reducers: {
    setSearchOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export default mobSearchSlice.reducer;
export const { setSearchOpen } = mobSearchSlice.actions;
