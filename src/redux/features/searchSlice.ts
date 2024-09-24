import { IMovie, IMovieResponse } from "@/shared/models/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../app/axiosConfig";
import { SEARCH } from "@/shared/constants/endpoints";

interface SearchState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  movies: IMovie[];
}

const initialState: SearchState = {
  loading: "idle",
  error: null,
  movies: [],
};

export const searchMovies = createAsyncThunk(
  "search/searchMovies",
  async (
    {
      searchQuery,
      language = "en-US",
      page = 1,
    }: { searchQuery: string; language?: string; page?: number },
    { rejectWithValue }
  ) => {
    try {
      const params: { [key: string]: any } = { language, page };

      if (searchQuery) {
        params.query = searchQuery;
      }

      const res = await instance.get<IMovieResponse>(SEARCH.MOVIE, { params });
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(searchMovies.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(searchMovies.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });
  },
});

export default searchSlice.reducer;
