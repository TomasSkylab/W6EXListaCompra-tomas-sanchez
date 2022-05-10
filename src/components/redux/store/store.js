import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    items: projectsSlice,
  },
});

export default store;
