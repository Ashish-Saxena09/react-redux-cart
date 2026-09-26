import { configureStore } from "@reduxjs/toolkit";
import reducer from "./cartSlicer";

const store = configureStore({
  reducer: {
    cart: reducer,
  },
});

export default store;
