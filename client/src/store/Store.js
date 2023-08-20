import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/NavSlice";
import mobNavSlice from "./slices/MobNavSlice";
import mobSearchSlice from "./slices/MobSearchSlice";

const store = configureStore({
  reducer: {
    nav: navSlice,
    mobNav: mobNavSlice,
    mobSearch: mobSearchSlice,
  },
});

export default store;
