import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "./features/movieSlice";
import searchReducer from "./features/searchSlice";

export const rootReducer = combineReducers({
  movie: movieReducer,
  search: searchReducer,
});
