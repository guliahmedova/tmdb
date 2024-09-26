import { ITvShow, ITvShowResponse } from "@/shared/constants/tvShow";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../app/axiosConfig";

interface TvShowState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  tvShows: ITvShow[];
  success: boolean;
}

const initialState: TvShowState = {
  loading: "idle",
  tvShows: [],
  error: null,
  success: false,
};

export const getTvShows = createAsyncThunk(
  "tvShows/getTvShows",
  async (
    {
      with_type,
    }: {
      with_type: string;
    },
    { rejectWithValue }
  ) => {
    const params: { [key: string]: any } = {};

    if (with_type) {
      params.with_type = with_type;
    }

    try {
      const res = await instance.get<ITvShowResponse>("discover/tv", {
        params,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const tvShowSlice = createSlice({
  name: "tvShowSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTvShows.fulfilled, (state, action) => {
      state.success = true;
      state.tvShows = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(getTvShows.pending, (state) => {
      state.loading = "pending";
      state.success = false;
    });
    builder.addCase(getTvShows.rejected, (state, action) => {
      state.loading = "failed";
      state.success = false;
      state.error = action.error.message || "Failed to fetch trending movies";
    });
  },
});

export default tvShowSlice.reducer;
