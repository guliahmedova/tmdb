import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "./features/movieSlice";
import searchReducer from "./features/searchSlice";
import filterOptReduce from "./features/filterOptSlice";

export const rootReducer = combineReducers({
  movie: movieReducer,
  search: searchReducer,
  filterOpt: filterOptReduce,
});
