import { IMovie } from "@/shared/models/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../app/apiConfig";
import { MOVIE } from "@/shared/constants/endpoints";

interface MovieState {
  trendingMovies: IMovie[];
}

interface ITrendingMovieResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const initialState: MovieState = {
  trendingMovies: [],
};

export const getTrendingMovies = createAsyncThunk(
  "movie/getTrendingMovies",
  async () => {
    const res = await instance.get<ITrendingMovieResponse>(MOVIE.GET_TRENDS, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTkwMzUxMTU2ZTg0ODI2MDBjMDFiMDFjNTRhM2EyZCIsIm5iZiI6MTcyNjg2MzM0MS4wMDMzMzYsInN1YiI6IjY2ZTUzYzU2ZmIzOTE0ZTI1NWZkNTQ2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s8Vhjr2TLp3SZmMYbiZYlGdD_khIaSyyX6vNPw7xtwE",
      },
    });

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
