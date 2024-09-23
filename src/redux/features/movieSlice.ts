import { MOVIE } from "@/shared/constants/endpoints";
import {
  IMovie,
  IMovieCredit,
  IMovieCreditsResponse,
  IMovieCrew,
  IMovieDetail,
  IMovieImageResponse,
  IMovieKeyword,
  IMovieKeywordsResponse,
  IMovieReview,
  IMovieReviewsResponse,
  ITrendingMovieResponse,
} from "@/shared/models/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../app/axiosConfig";

interface MovieState {
  trendingMovies: IMovie[];
  popularMovies: IMovie[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  movieDetails: IMovieDetail;
  movieImages: IMovieImageResponse;
  movieKeywords: IMovieKeyword[];
  movieReviews: IMovieReview[];
  movieCredits: IMovieCredit[];
  movieCrews: IMovieCrew[];
}

const initialState: MovieState = {
  trendingMovies: [],
  loading: "idle",
  popularMovies: [],
  error: null,
  movieDetails: {} as IMovieDetail,
  movieImages: {} as IMovieImageResponse,
  movieKeywords: [],
  movieReviews: [],
  movieCredits: [],
  movieCrews: [],
};

export const getTrendingMovies = createAsyncThunk(
  "movie/getTrendingMovies",
  async ({
    time_window,
    language = "en-US",
  }: {
    time_window: string;
    language?: string;
  }) => {
    const res = await instance.get<ITrendingMovieResponse>(
      `${MOVIE.GET_TRENDS}${time_window}?language=${language}`
    );
    return res.data;
  }
);

export const getMovieById = createAsyncThunk(
  "movie/getMovieById",
  async ({
    movieId,
    language = "en-US",
  }: {
    movieId: string;
    language?: string;
  }) => {
    const res = await instance.get<IMovieDetail>(
      `${MOVIE.GET_MOVIE}${movieId}?language=${language}`
    );

    return res.data;
  }
);

export const getMovieImagesById = createAsyncThunk(
  "movie/getMovieImagesById",
  async ({ movieId }: { movieId: string }) => {
    const res = await instance.get<IMovieImageResponse>(
      `${MOVIE.GET_MOVIE}${movieId}/images`
    );
    return res.data;
  }
);

export const getMovieKeywordsById = createAsyncThunk(
  "movie/getMovieKeywordsById",
  async ({ movieId }: { movieId: string }) => {
    const res = await instance.get<IMovieKeywordsResponse>(
      `${MOVIE.GET_MOVIE}${movieId}/keywords`
    );
    return res.data;
  }
);

export const getMovieReviewsById = createAsyncThunk(
  "movie/getMovieReviewsById",
  async ({
    movieId,
    page = 1,
    language = "en-US",
  }: {
    movieId: string;
    page?: number;
    language?: string;
  }) => {
    const res = await instance.get<IMovieReviewsResponse>(
      `${MOVIE.GET_MOVIE}${movieId}/reviews?language=${language}&page=${page}`
    );
    return res.data;
  }
);

export const getMovieCreditsById = createAsyncThunk(
  "movie/getMovieCreditsById",
  async ({
    movieId,
    language = "en-US",
  }: {
    movieId: string;
    language?: string;
  }) => {
    const res = await instance.get<IMovieCreditsResponse>(
      `${MOVIE.GET_MOVIE}${movieId}/credits?language=${language}`
    );
    return res.data;
  }
);

export const getPopularMovies = createAsyncThunk(
  "movie/getPopularMovies",
  async ({
    query,
    page = 1,
    language = "en-US",
  }: {
    query: string;
    page?: number;
    language?: string;
  }) => {
    const res = await instance.get(
      `${MOVIE.GET_MOVIE}${query}?language=${language}&page=${page}`
    );

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
      state.loading = "succeeded";
    });
    builder.addCase(getTrendingMovies.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getTrendingMovies.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });

    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      state.popularMovies = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(getPopularMovies.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getPopularMovies.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });

    builder.addCase(getMovieById.fulfilled, (state, action) => {
      state.movieDetails = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getMovieById.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getMovieById.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });

    builder.addCase(getMovieImagesById.fulfilled, (state, action) => {
      state.movieImages = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getMovieImagesById.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getMovieImagesById.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });

    builder.addCase(getMovieReviewsById.fulfilled, (state, action) => {
      state.movieReviews = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(getMovieReviewsById.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getMovieReviewsById.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });

    builder.addCase(getMovieCreditsById.fulfilled, (state, action) => {
      state.movieCredits = action.payload.cast;
      state.movieCrews = action.payload.crew;
      state.loading = "succeeded";
    });
    builder.addCase(getMovieCreditsById.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getMovieCreditsById.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });
  },
});

export default movieSlice.reducer;
