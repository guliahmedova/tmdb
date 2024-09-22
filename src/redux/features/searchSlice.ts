import { createSlice } from "@reduxjs/toolkit";

// const searchMovies = createAsyncThunk("searchMovies", async (searchQuery) => {
//   const res = await instance.get(SEARCH.MOVIE);
// });

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {},
});

export default searchSlice.reducer;
