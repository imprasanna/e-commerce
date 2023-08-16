import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/NavSlice";

const store = configureStore({
  reducer: { nav: navSlice },
});

export default store;
