import { FILTER_OPT } from "@/shared/constants/endpoints";
import {
  IGenre,
  IKeyword,
  IKeywordReponse,
  ILanguage,
  IProvider,
  IProviderResponse,
  IRegion,
  IRegionResponse,
} from "@/shared/models/filterOpt";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../app/axiosConfig";

interface FilterOptState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  regions: IRegion[];
  movieProviders: IProvider[];
  languages: ILanguage[];
  movieGenres: IGenre[];
  keywords: IKeyword[];
}

const initialState: FilterOptState = {
  loading: "idle",
  error: null,
  regions: [],
  movieProviders: [],
  languages: [],
  movieGenres: [],
  keywords: [],
};

export const getRegions = createAsyncThunk("filterOpt/getRegions", async () => {
  const res = await instance.get<IRegionResponse>(FILTER_OPT.GET_REGIONS);
  return res.data;
});

export const getMovieProviders = createAsyncThunk(
  "filterOpt/getMovieProviders",
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

export const getLanguages = createAsyncThunk(
  "filterOpt/getLanguages",
  async () => {
    const res = await instance.get(FILTER_OPT.GET_LANGS);
    return res.data;
  }
);

export const getGenres = createAsyncThunk("filterOpt/getGenres", async () => {
  const res = await instance.get(FILTER_OPT.GET_GENRES);
  return res.data;
});

export const getKeywords = createAsyncThunk(
  "filterOpt/getKeywords",
  async ({ query, page = 1 }: { query: string; page: number }) => {
    const res = await instance.get<IKeywordReponse>(
      `${FILTER_OPT.GET_KEYWORDS}?query=${query}&page=${page}`
    );
    return res.data;
  }
);

const filterOptSlice = createSlice({
  name: "filterOptSlice",
  initialState,
  reducers: {
    searchLanguages: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.languages = state.languages.filter((lang) =>
        lang.english_name.toLowerCase().includes(searchTerm)
      );
    },
  },
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

    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.languages = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getLanguages.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getLanguages.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });

    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.movieGenres = action.payload.genres;
      state.loading = "succeeded";
    });
    builder.addCase(getGenres.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getGenres.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });

    builder.addCase(getKeywords.fulfilled, (state, action) => {
      state.keywords = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(getKeywords.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getKeywords.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });
  },
});

export const { searchLanguages } = filterOptSlice.actions;
export default filterOptSlice.reducer;
