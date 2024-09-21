import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../app/axiosConfig";
import { SEARCH } from "@/shared/constants/endpoints";

const searchMovies = createAsyncThunk("searchMovies", async (searchQuery) => {
  const res = await instance.get(SEARCH.MOVIE);
});

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {},
});

export default searchSlice.reducer;
