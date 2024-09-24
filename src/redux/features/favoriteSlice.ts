import { FAVORITE } from "@/shared/constants/endpoints";
import {
  IFavorite,
  IFavoriteAddResponse,
  IFavoriteResponse,
} from "@/shared/models/favorite";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../app/axiosConfig";

interface FilterOptState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  favorites: IFavorite[];
  success: boolean;
  status_message: string;
}

const initialState: FilterOptState = {
  loading: "idle",
  error: null,
  status_message: "",
  success: false,
  favorites: [],
};

export const getFavorites = createAsyncThunk(
  "favorite/getFavorites",
  async ({
    language = "en-US",
    page = 1,
    sort_by = "created_at.asc",
    favoriteType = "movie",
  }: {
    language?: string;
    page?: number;
    sort_by?: string;
    favoriteType: string;
  }) => {
    const params = {
      language: language,
      page: page,
      sort_by: sort_by,
    };
    const res = await instance.get<IFavoriteResponse>(
      `${FAVORITE.GET}/21518606/favorite/${favoriteType}`,
      { params }
    );
    return res.data;
  }
);

export const addFavorite = createAsyncThunk(
  "favorite/addFavorite",
  async ({
    media_type,
    media_id,
    favorite,
  }: {
    media_type: string;
    media_id: number;
    favorite: boolean;
  }) => {
    const res = await instance.post<IFavoriteAddResponse>(
      `${FAVORITE.GET}/21518606/favorite`,
      {
        media_type: media_type,
        media_id: media_id,
        favorite: favorite,
      }
    );
    return res.data;
  }
);

const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(getFavorites.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getFavorites.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });

    builder.addCase(addFavorite.fulfilled, (state, action) => {
      state.success = action.payload.success;
      state.status_message = action.payload.status_message;
      state.loading = "succeeded";
    });
    builder.addCase(addFavorite.pending, (state) => {
      state.loading = "pending";
      state.success = false;
      state.status_message = "";
    });
    builder.addCase(addFavorite.rejected, (state, action) => {
      state.loading = "failed";
      state.success = false;
      state.status_message = "";
      state.error = action.error.message || "Failed to fetch trending movies";
    });
  },
});

export default favoriteSlice.reducer;
