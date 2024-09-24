import { FILTER_OPT } from "@/shared/constants/endpoints";
import {
  IProvider,
  IProviderResponse,
  IRegion,
  IRegionResponse,
} from "@/shared/constants/filterOpt";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../app/axiosConfig";

interface FilterOptState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  regions: IRegion[];
  movieProviders: IProvider[];
}

const initialState: FilterOptState = {
  loading: "idle",
  error: null,
  regions: [],
  movieProviders: [],
};

export const getRegions = createAsyncThunk(
  "configuration/getRegions",
  async () => {
    const res = await instance.get<IRegionResponse>(FILTER_OPT.GET_REGIONS);
    return res.data;
  }
);

export const getMovieProviders = createAsyncThunk(
  "configuration/getMovieProviders",
  async ({
    language = "en-US",
    watch_region,
  }: {
    language?: string;
    watch_region: string;
  }) => {
    const res = await instance.get<IProviderResponse>(
      `${FILTER_OPT.GET_MOVIE_PROVIDERS}?language=${language}&watch_region=${watch_region}`
    );
    return res.data;
  }
);

const filterOptSlice = createSlice({
  name: "filterOptSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRegions.fulfilled, (state, action) => {
      state.regions = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(getRegions.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getRegions.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });

    builder.addCase(getMovieProviders.fulfilled, (state, action) => {
      state.movieProviders = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(getMovieProviders.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getMovieProviders.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });
  },
});

export default filterOptSlice.reducer;
