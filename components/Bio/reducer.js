import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./model";

const bioSlice = createSlice({
  name: "bio",
  initialState,
  reducers: {
    openBio: (state) => {
      state.isBioOpen = true;
    },
    closeBio: (state) => {
      state.isBioOpen = false;
    },
  },
});

export const { openBio, closeBio } = bioSlice.actions;
export default bioSlice.reducer;
