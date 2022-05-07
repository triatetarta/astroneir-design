import { initialState } from "./model";
import { createSlice } from "@reduxjs/toolkit";

const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    setBackgroundVolume: (state, action) => {
      state.volume.background = action.payload;
    },
    setEffectsVolume: (state, action) => {
      state.volume.effects = action.payload;
    },
    setEffect: (state, action) => {
      state.effect = action.payload;
      state.effectPlaying = true;
    },
    setMute: (state, action) => {
      state.mute = action.payload;
    },
    setTrack: (state, action) => {
      state.track = action.payload;
    },
    setMusic: (state, action) => {
      state.music = action.payload;
    },
    setNewContext: (state, action) => {
      state.newContext = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const {
  setBackgroundVolume,
  setEffectsVolume,
  setEffect,
  setMute,
  setTrack,
  setMusic,
  setNewContext,
  setIsPlaying,
} = soundSlice.actions;

export default soundSlice.reducer;
