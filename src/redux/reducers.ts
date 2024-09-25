import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "./features/movieSlice";
import searchReducer from "./features/searchSlice";
import filterOptReduce from "./features/filterOptSlice";
import favoriteReduce from "./features/favoriteSlice";
import peopleReduce from "./features/peopleSlice";

export const rootReducer = combineReducers({
  movie: movieReducer,
  search: searchReducer,
  filterOpt: filterOptReduce,
  favorite: favoriteReduce,
  people: peopleReduce,
});
