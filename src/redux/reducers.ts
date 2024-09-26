import { combineReducers } from "@reduxjs/toolkit";
import favoriteReducer from "./features/favoriteSlice";
import filterOptReducer from "./features/filterOptSlice";
import movieReducer from "./features/movieSlice";
import peopleReducer from "./features/peopleSlice";
import searchReducer from "./features/searchSlice";
import translationReducer from "./features/translationSlice";
import tvShowReducer from "./features/tvShowSlice";

export const rootReducer = combineReducers({
  movie: movieReducer,
  search: searchReducer,
  filterOpt: filterOptReducer,
  favorite: favoriteReducer,
  people: peopleReducer,
  tvSHow: tvShowReducer,
  translation: translationReducer,
});
