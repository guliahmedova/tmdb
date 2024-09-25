import { SEARCH } from "@/shared/constants/endpoints";
import {
  IMovie,
  IMovieResponse,
  IPeopleResponse,
  IPerson,
  IProductionCompanyResponse,
  ProductionCompany,
} from "@/shared/models/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../app/axiosConfig";
import { IKeyword, IKeywordReponse } from "@/shared/models/filterOpt";

interface SearchState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  movies: IMovie[];
  tvShows: IMovie[];
  collections: IMovie[];
  keywords: IKeyword[];
  people: IPerson[];
  companies: ProductionCompany[];
  multiMovies: IMovie[];
}

const initialState: SearchState = {
  loading: "idle",
  error: null,
  movies: [],
  tvShows: [],
  collections: [],
  keywords: [],
  people: [],
  companies: [],
  multiMovies: [],
};

export const searchMovies = createAsyncThunk(
  "search/searchMovies",
  async (
    {
      searchQuery,
      language = "en-US",
    }: {
      searchQuery: string;
      language?: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const params: { [key: string]: any } = { language };

      if (searchQuery) {
        params.query = searchQuery;
      }

      const resTvShow = await instance.get<IMovieResponse>(
        `${SEARCH.GET}/${SEARCH.TV}`,
        {
          params,
        }
      );
      const resMovie = await instance.get<IMovieResponse>(
        `${SEARCH.GET}/${SEARCH.MOVIE}`,
        {
          params,
        }
      );
      const resPeople = await instance.get<IPeopleResponse>(
        `${SEARCH.GET}/${SEARCH.PEOPLE}`,
        {
          params,
        }
      );
      const resCompany = await instance.get<IProductionCompanyResponse>(
        `${SEARCH.GET}/${SEARCH.COMPANY}`,
        {
          params,
        }
      );
      const resKeyword = await instance.get<IKeywordReponse>(
        `${SEARCH.GET}/${SEARCH.KEYWORD}`,
        {
          params,
        }
      );
      const resCollection = await instance.get<IMovieResponse>(
        `${SEARCH.GET}/${SEARCH.COLLECTION}`,
        {
          params,
        }
      );

      const searchResult = {
        movieData: resMovie.data,
        tvShowData: resTvShow.data,
        collectionData: resCollection.data,
        companyData: resCompany.data,
        peopleData: resPeople.data,
        keywordData: resKeyword.data,
      };

      return searchResult;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchMulti = createAsyncThunk(
  "search/searchMulti",
  async (
    {
      searchQuery,
      language = "en-US",
    }: {
      searchQuery: string;
      language?: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const params: { [key: string]: any } = { language };

      if (searchQuery) {
        params.query = searchQuery;
      }

      const res = await instance.get<IMovieResponse>(
        `${SEARCH.GET}/${SEARCH.MULTI}`,
        {
          params,
        }
      );

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
      state.movies = action.payload.movieData.results;
      state.tvShows = action.payload.tvShowData.results;
      state.collections = action.payload.collectionData.results;
      state.people = action.payload.peopleData.results;
      state.keywords = action.payload.keywordData.results;
      state.companies = action.payload.companyData.results;
      state.loading = "succeeded";
    });
    builder.addCase(searchMovies.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(searchMovies.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });

    builder.addCase(searchMulti.fulfilled, (state, action) => {
      state.multiMovies = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(searchMulti.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(searchMulti.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });
  },
});

export default searchSlice.reducer;
