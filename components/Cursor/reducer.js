import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./model";

export const cursorSlice = createSlice({
  name: "cursor",
  initialState,
  reducers: {
    setCursor: (state, action) => {
      const { cursorContent, cursorVariant } = action.payload;
      state.cursorContent = cursorContent;
      state.cursorVariant = cursorVariant;
    },
  },
});

export const { setCursor } = cursorSlice.actions;
export default cursorSlice.reducer;
