export interface IMovie {
  name?: string;
  original_name?: string;
  first_air_date?: string;
  origin_country?: string[];
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieDate {
  maximum: string;
  minimum: string;
}

export interface IMovieDetail {
  adult: boolean;
  backdrop_path: any;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface ISearchResult {
  movies: IMovie[];
  collections: IMovie[];
  keywords: IMovie[];
  companies: IMovie[];
  tvShows: IMovie[];
  people: IMovie[];
}

export interface IMovieResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
  dates?: IMovieDate;
}

export interface IMovieImageResponse {
  backdrops: Backdrop[];
  id: number;
  logos: Logo[];
  posters: Poster[];
}

export interface Backdrop {
  aspect_ratio: number;
  height: number;
  iso_639_1?: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Logo {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Poster {
  aspect_ratio: number;
  height: number;
  iso_639_1?: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface IMovieKeywordsResponse {
  id: number;
  keywords: IMovieKeyword[];
}

export interface IMovieKeyword {
  id: number;
  name: string;
}

export interface IMovieReviewsResponse {
  id: number;
  page: number;
  results: IMovieReview[];
  total_pages: number;
  total_results: number;
}

export interface IMovieReview {
  author: string;
  author_details: IMovieReviewAuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface IMovieReviewAuthorDetails {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}

export interface IMovieCreditsResponse {
  id: number;
  cast: IMovieCredit[];
  crew: IMovieCrew[];
}

export interface IMovieCredit {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface IMovieCrew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface IMovieRecommendationResponse {
  page: number;
  results: IMovieRecommendation[];
  total_pages: number;
  total_results: number;
}

export interface IMovieRecommendation {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieVideoResponse {
  id: number;
  results: IMovieVideo[];
}

export interface IMovieVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
}
