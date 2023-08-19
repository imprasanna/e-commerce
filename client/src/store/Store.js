import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/NavSlice";
import mobNavSlice from "./slices/MobNavSlice";

const store = configureStore({
  reducer: {
    nav: navSlice,
    mobNav: mobNavSlice,
  },
});

export default store;
