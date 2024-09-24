import { RootState, useAppDispatch } from "@/redux/app/store";
import {
  getFilteredMovies,
  getMovieListByPathKey,
} from "@/redux/features/movieSlice";
import Filters from "@/shared/components/Filter/Filters";
import Sort from "@/shared/components/Filter/Sort";
import ToWatch from "@/shared/components/Filter/ToWatch";
import CarouselCard from "@/shared/reusable/Carousel/Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

enum PATH_KEYWORDS {
  popular = "popular",
  now_playing = "now_playing",
  upcoming = "upcoming",
  top_rated = "top_rated",
  tv = "tv",
  airing_today = "airing_today",
  on_the_air = "on_the_air",
}

const Filter = () => {
  const movies = useSelector((state: RootState) => state.movie.movies);
  const [isSearchBtnDisabled, setSearchBtnDisability] = useState(true);
  const [filterOpts, setFilterOpts] = useState({
    sortBy: "popularity.desc",
    whereToRegion: "AD",
    language: "",
    whereToProvider: "",
    with_genres: "",
  });
  const [pageTitle, setPageTitle] = useState("Popular");
  const dispatch = useAppDispatch();
  const { path } = useParams();

  const renderMovieCards = (key: string) => {
    switch (key) {
      case PATH_KEYWORDS.popular:
        dispatch(getMovieListByPathKey({ pathKey: PATH_KEYWORDS.popular }));
        setPageTitle("Popular");
        break;
      case PATH_KEYWORDS.now_playing:
        dispatch(getMovieListByPathKey({ pathKey: PATH_KEYWORDS.now_playing }));
        setPageTitle("Now Playing");
        break;
      case PATH_KEYWORDS.top_rated:
        dispatch(getMovieListByPathKey({ pathKey: PATH_KEYWORDS.top_rated }));
        setPageTitle("Top Rated");
        break;
      case PATH_KEYWORDS.upcoming:
        dispatch(getMovieListByPathKey({ pathKey: PATH_KEYWORDS.upcoming }));
        setPageTitle("Upcoming");
        break;
      default:
        dispatch(getMovieListByPathKey({ pathKey: PATH_KEYWORDS.popular }));
        setPageTitle("Popular");
        break;
    }
  };

  useEffect(() => {
    if (path) {
      renderMovieCards(path);
    }
  }, [path]);

  const updateFilterOpts = (optName: string, optValue: string) => {
    setFilterOpts((prev) => ({
      ...prev,
      [optName]: optValue,
    }));
    if (optValue) {
      setSearchBtnDisability(false);
    }
  };

  const handleFilterSearchBtn = () => {
    dispatch(
      getFilteredMovies({
        sort_by: filterOpts.sortBy,
        watch_region: filterOpts.whereToRegion,
        with_watch_providers: filterOpts.whereToProvider,
        language: filterOpts.language,
        with_genres: filterOpts.with_genres,
      })
    );
  };

  return (
    <div className="flex justify-center bg-white py-10">
      <div className="max-w-7xl w-full xl:px-10 px-6">
        <div className="flex flex-wrap">
          <div className="lg:w-3/12 w-full lg:mb-0 mb-8 h-auto">
            <h2 className="text-2xl font-semibold text-dark_blue mb-5">
              {pageTitle} Movies
            </h2>
            <Sort setFilterOpts={updateFilterOpts} />
            <ToWatch
              setFilterOpts={updateFilterOpts}
              region={filterOpts.whereToRegion}
            />
            <Filters setFilterOpts={updateFilterOpts} />
            <button
              className="bg-sky-400 rounded-full disabled:bg-gray-200 disabled:text-gray-400 w-full py-3 hover:bg-dark_blue text-lg font-semibold text-white"
              disabled={isSearchBtnDisabled}
              type="button"
              onClick={handleFilterSearchBtn}
            >
              Search
            </button>
          </div>

          <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-y-6 gap-y-4 lg:w-9/12 w-full h-full">
            {movies?.map((movie) => (
              <CarouselCard key={movie.id} movie={movie} bgBlur={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
