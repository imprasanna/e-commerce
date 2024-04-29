import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/NavSlice";
import mobNavSlice from "./slices/MobNavSlice";
import mobSearchSlice from "./slices/MobSearchSlice";
import ProductSlice from "./slices/ProductSlice";

const store = configureStore({
  reducer: {
    nav: navSlice,
    mobNav: mobNavSlice,
    mobSearch: mobSearchSlice,
    product: ProductSlice,
  },
});

export default store;
