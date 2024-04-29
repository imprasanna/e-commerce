import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsShow: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    showProductDetails: (state, action) => {
      state.productsShow = action.payload;
    },
  },
});

export default productSlice.reducer;

export const { showProductDetails } = productSlice.actions;
