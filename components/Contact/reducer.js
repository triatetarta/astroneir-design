import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./model";

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    openContact: (state) => {
      state.isContactOpen = true;
    },
    closeContact: (state) => {
      state.isContactOpen = false;
    },
  },
});

export const { openContact, closeContact } = contactSlice.actions;
export default contactSlice.reducer;
