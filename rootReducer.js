import { combineReducers } from "@reduxjs/toolkit";
import { reducer as cursor } from "./components/Cursor";

const rootReducer = combineReducers({
  cursor,
});

export default rootReducer;
