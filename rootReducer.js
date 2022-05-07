import { combineReducers } from "@reduxjs/toolkit";
import { reducer as cursor } from "./components/Cursor";
import { reducer as sound } from "./components/Music";

const rootReducer = combineReducers({
  cursor,
  sound,
});

export default rootReducer;
