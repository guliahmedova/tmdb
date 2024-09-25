import { PEOPLE } from "@/shared/constants/endpoints";
import { IPeopleResponse, IPerson } from "@/shared/models/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../app/axiosConfig";

interface SearchState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  people: IPerson[];
}

const initialState: SearchState = {
  loading: "idle",
  error: null,
  people: [],
};

export const getPeople = createAsyncThunk(
  "people/getPeople",
  async (
    {
      language = "en-US",
      page = 1,
    }: {
      language?: string;
      page?: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const params: { [key: string]: any } = { language, page };

      const res = await instance.get<IPeopleResponse>(`${PEOPLE.GET}/popular`, {
        params,
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPeople.fulfilled, (state, action) => {
      state.people = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(getPeople.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getPeople.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });
  },
});

export default peopleSlice.reducer;
