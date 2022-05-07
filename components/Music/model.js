export const initialState = {
  bgMusic: "",
  bgVolume: 0.25,
  volume: {
    background: 0.25,
    effects: 0.25,
  },
  track: undefined,
  newContext: false,
  isPlaying: false,
  mute: false,
  formats: ["webm", "mp3"],
  music: [],
  effects: {},
  effect: "",
  effectPlaying: false,
};
