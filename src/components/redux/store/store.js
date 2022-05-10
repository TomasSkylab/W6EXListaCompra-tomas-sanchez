import { configureStore } from "@reduxjs/toolkit";
import shopingSlice from "../feature/shopingSlice";

const store = configureStore({
  reducer: {
    items: shopingSlice,
  },
});

export default store;
