import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: true,
  search: null,
  cart: null,
  account: null,
};

export const mobNavSlice = createSlice({
  name: "mobNav",
  initialState,
  reducers: {
    setHomeActive: (state, action) => {
      state.home = action.payload;
    },
    setSearchActive: (state, action) => {
      state.search = action.payload;
    },
    setCartActive: (state, action) => {
      state.cart = action.payload;
    },
    setAccountActive: (state, action) => {
      state.account = action.payload;
    },
  },
});

export default mobNavSlice.reducer;
export const {
  setHomeActive,
  setSearchActive,
  setCartActive,
  setAccountActive,
} = mobNavSlice.actions;
