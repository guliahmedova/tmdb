import { ITrendMovie } from "@/shared/models/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../app/apiConfig";
import { MOVIE } from "@/shared/constants/endpoints";

interface MovieState {
  trendingMovies: ITrendMovie[];
}

interface ITrendingMovieResponse {
  page: number;
  results: ITrendMovie[];
  total_pages: number;
  total_results: number;
}

const initialState: MovieState = {
  trendingMovies: [],
};

export const getTrendingMovies = createAsyncThunk(
  "movie/getTrendingMovies",
  async () => {
    const res = await instance.get<ITrendingMovieResponse>(MOVIE.GET_TRENDS);
    return res.data;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrendingMovies.fulfilled, (state, action) => {
      state.trendingMovies = action.payload.results;
    });
  },
});

export default movieSlice.reducer;
