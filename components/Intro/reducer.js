import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./model";

const introSlice = createSlice({
  name: "intro",
  initialState,
  reducers: {
    setIsLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { setIsLoaded } = introSlice.actions;
export default introSlice.reducer;
