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
  IMovieRecommendation,
  IMovieRecommendationResponse,
  IMovieResponse,
  IMovieReview,
  IMovieReviewsResponse,
  IMovieVideo,
  IMovieVideoResponse,
} from "@/shared/models/movie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../app/axiosConfig";

interface MovieState {
  trendingMovies: IMovie[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  movieDetails: IMovieDetail;
  movieImages: IMovieImageResponse;
  movieKeywords: IMovieKeyword[];
  movieReviews: IMovieReview[];
  movieCredits: IMovieCredit[];
  movieCrews: IMovieCrew[];
  movieRecommendations: IMovieRecommendation[];
  movieVideos: IMovieVideo[];
  movies: IMovie[];
}

const initialState: MovieState = {
  trendingMovies: [],
  loading: "idle",
  error: null,
  movieDetails: {} as IMovieDetail,
  movieImages: {} as IMovieImageResponse,
  movieKeywords: [],
  movieReviews: [],
  movieCredits: [],
  movieCrews: [],
  movieRecommendations: [],
  movieVideos: [],
  movies: [],
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
    const res = await instance.get<IMovieResponse>(
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

export const getMovieVideosById = createAsyncThunk(
  "movie/getMovieVideosById",
  async ({
    movieId,
    language = "en-US",
  }: {
    movieId: string;
    language?: string;
  }) => {
    const res = await instance.get<IMovieVideoResponse>(
      `${MOVIE.GET_MOVIE}${movieId}/videos?language=${language}`
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

export const getMovieListByPathKey = createAsyncThunk(
  "movie/getMovieListByPathKey",
  async ({
    page = 1,
    language = "en-US",
    pathKey,
  }: {
    page?: number;
    language?: string;
    pathKey: string;
  }) => {
    const res = await instance.get(
      `${MOVIE.GET_MOVIE}${pathKey}?language=${language}&page=${page}`
    );

    return res.data;
  }
);

export const getMovieRecommendationsById = createAsyncThunk(
  "movie/getMovieRecommendationsById",
  async ({
    movieId,
    page = 1,
    language = "en-US",
  }: {
    movieId: string;
    page?: number;
    language?: string;
  }) => {
    const res = await instance.get<IMovieRecommendationResponse>(
      `${MOVIE.GET_MOVIE}${movieId}/recommendations?language=${language}&page=${page}`
    );

    return res.data;
  }
);

//const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=AD&with_watch_providers=232%7C445%7C638';
export const getFilteredMovies = createAsyncThunk(
  "movie/getFilteredMovies",
  async ({
    page = 1,
    language = "en-US",
    sort_by = "popularity.desc",
    watch_region,
    with_watch_providers,
    with_genres,
  }: {
    page?: number;
    language?: string;
    sort_by?: string;
    watch_region?: string;
    with_watch_providers?: string;
    with_genres: string;
  }) => {
    const params: { [key: string]: any } = {
      page,
      sort_by,
    };

    if (with_watch_providers) {
      params.with_watch_providers = with_watch_providers;
    }
    if (language) {
      params.language = language;
    }
    if (watch_region) {
      params.watch_region = watch_region;
    }
    if (with_genres) {
      params.with_genres = with_genres;
    }

    const res = await instance.get<IMovieResponse>(`${MOVIE.FILTER_MOVIE}`, {
      params,
    });

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

    builder.addCase(getMovieListByPathKey.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(getMovieListByPathKey.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getMovieListByPathKey.rejected, (state, action) => {
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

    builder.addCase(getMovieRecommendationsById.fulfilled, (state, action) => {
      state.movieRecommendations = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(getMovieRecommendationsById.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getMovieRecommendationsById.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });

    builder.addCase(getMovieVideosById.fulfilled, (state, action) => {
      state.movieVideos = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(getMovieVideosById.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getMovieVideosById.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });

    builder.addCase(getFilteredMovies.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.loading = "succeeded";
    });
    builder.addCase(getFilteredMovies.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getFilteredMovies.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to fetch trending movies";
    });
  },
});

export default movieSlice.reducer;
