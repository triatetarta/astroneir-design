import { combineReducers } from "@reduxjs/toolkit";
import { reducer as cursor } from "./components/Cursor";
import { reducer as sound } from "./components/Music";
import { reducer as bio } from "./components/Bio";

const rootReducer = combineReducers({
  cursor,
  sound,
  bio,
});

export default rootReducer;
