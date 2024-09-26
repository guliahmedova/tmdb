import { combineReducers } from "@reduxjs/toolkit";
import favoriteReduce from "./features/favoriteSlice";
import filterOptReduce from "./features/filterOptSlice";
import movieReducer from "./features/movieSlice";
import peopleReduce from "./features/peopleSlice";
import searchReducer from "./features/searchSlice";
import tvShowReduce from "./features/tvShowSlice";

export const rootReducer = combineReducers({
  movie: movieReducer,
  search: searchReducer,
  filterOpt: filterOptReduce,
  favorite: favoriteReduce,
  people: peopleReduce,
  tvSHow: tvShowReduce,
});
