import { IMovie } from "@/shared/models/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../app/axiosConfig";
import { MOVIE } from "@/shared/constants/endpoints";

interface MovieState {
  trendingMovies: IMovie[];
  popularMovies: IMovie[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

interface ITrendingMovieResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const initialState: MovieState = {
  trendingMovies: [],
  loading: "idle",
  popularMovies: [],
};

export const getTrendingMovies = createAsyncThunk(
  "movie/getTrendingMovies",
  async ({
    time_window,
    language = "en-US",
  }: {
    time_window: string;
    language?: string;
  }) => {
    const res = await instance.get<ITrendingMovieResponse>(
      `${MOVIE.GET_TRENDS}${time_window}?language=${language}`
    );
    return res.data;
  }
);

export const getPopularMovies = createAsyncThunk(
  "movie/getPopularMovies",
  async ({
    query,
    page = 1,
    language = "en-US",
  }: {
    query: string;
    page?: number;
    language?: string;
  }) => {
    const res = await instance.get(
      `${MOVIE.GET_POPULAR}${query}?language=${language}&page=${page}`
    );

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
      state.loading = "succeeded";
    });
    builder.addCase(getTrendingMovies.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getTrendingMovies.rejected, (state) => {
      state.loading = "failed";
    });

    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      state.popularMovies = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(getPopularMovies.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getPopularMovies.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default movieSlice.reducer;
