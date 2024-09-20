import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "./features/movieSlice";

export const rootReducer = combineReducers({
  movie: movieReducer,
});
