import { combineReducers } from "@reduxjs/toolkit";
import { reducer as cursor } from "./components/Cursor";
import { reducer as sound } from "./components/Music";
import { reducer as bio } from "./components/Bio";
import { reducer as contact } from "./components/Contact";
import { reducer as intro } from "./components/Intro";

const rootReducer = combineReducers({
  cursor,
  sound,
  bio,
  contact,
  intro,
});

export default rootReducer;
