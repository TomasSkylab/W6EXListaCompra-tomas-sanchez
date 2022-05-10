import { createSlice } from "@reduxjs/toolkit";

const shopingSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    loadItems: (items, action) => [...action.payload],
  },
});

export const { loadItems: loatItemsActionCreator } = shopingSlice.actions;

export default shopingSlice.reducer;
