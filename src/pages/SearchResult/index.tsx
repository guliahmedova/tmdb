import { RootState, useAppDispatch } from "@/redux/app/store";
import { searchMovies } from "@/redux/features/searchSlice";
import SearchBar from "@/shared/components/SearchBar";
import { SEARCH } from "@/shared/constants/endpoints";
import { formatOverview } from "@/shared/utils/formatText";
import { getImageUrl } from "@/shared/utils/getImageUrl";
import moment from "moment";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { category } = useParams<{ category: string }>();
  const query = searchParams.get("query");
  const { movies, tvShows, collections, companies, keywords, people } =
    useSelector((state: RootState) => state.search);

  useEffect(() => {
    if (query) {
      dispatch(searchMovies({ searchQuery: query }));
    }
  }, [query]);

  const renderSearchResults = () => {
    if (category) {
      switch (category) {
        case SEARCH.PEOPLE:
          return people?.map((person) => (
            <div
              className="flex items-center border shadow rounded gap-2 mb-4 h-20"
              key={person.id}
            >
              <div className="max-w-20 w-20 h-20 bg-gray-500">
                <img
                  src={getImageUrl(person.profile_path)}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-semibold">{person.name}</h2>
                <p className="text-gray-400">{person.known_for_department}</p>
              </div>
            </div>
          ));
        case SEARCH.MOVIE:
          return movies?.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              className="flex bg-white rounded-lg shadow-md h-36 w-full mb-2"
              key={movie.id}
            >
              <div className="min-w-24 w-24 h-36">
                <div className="w-full h-full bg-gray-500">
                  <img
                    src={
                      movie.backdrop_path
                        ? getImageUrl(movie.backdrop_path)
                        : ""
                    }
                    className="min-w-full w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>

              <div className="ml-4 p-4">
                <h2 className="lg:text-base text-sm hover:text-gray-500 font-bold text-gray-600">
                  {movie.title || movie.name}
                </h2>
                <p className="text-sm text-gray-400">
                  {moment(movie.release_date).format("LL")}
                </p>

                <p className="mt-2 text-gray-700 lg:text-base text-xs">
                  {formatOverview(movie?.overview)}...
                </p>
              </div>
            </Link>
          ));
        case SEARCH.KEYWORD:
          return keywords.map((keyword) => (
            <p key={keyword.id}>{keyword.name}</p>
          ));
        case SEARCH.COMPANY:
          return companies?.map((company) => (
            <div
              key={company.id}
              className="flex items-center mb-2 gap-2 font-semibold border-b pb-2"
            >
              <img
                src={getImageUrl(company.logo_path)}
                alt=""
                className="size-6 bg-gray-100"
              />
              <h2>
                {company.name} <span>{company.origin_country}</span>
              </h2>
            </div>
          ));
        case SEARCH.COLLECTION:
          return collections?.map((collection) => (
            <Link
              to={`/movie/${collection.id}`}
              className="flex bg-white rounded-lg shadow-md h-36 w-full mb-2"
              key={collection.id}
            >
              <div className="min-w-24 w-24 h-36">
                <div className="w-full h-full bg-gray-500">
                  <img
                    src={
                      collection.backdrop_path
                        ? getImageUrl(collection.backdrop_path)
                        : ""
                    }
                    className="min-w-full w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>

              <div className="ml-4 p-4">
                <h2 className="lg:text-base text-sm hover:text-gray-500 font-bold text-gray-600">
                  {collection.title || collection.name}
                </h2>
                <p className="text-sm text-gray-400">
                  {moment(collection.release_date).format("LL")}
                </p>

                <p className="mt-2 text-gray-700 lg:text-base text-xs">
                  {formatOverview(collection?.overview)}...
                </p>
              </div>
            </Link>
          ));
        case SEARCH.TV:
          return tvShows?.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              className="flex bg-white rounded-lg shadow-md h-36 w-full mb-2"
              key={movie.id}
            >
              <div className="min-w-24 w-24 h-36">
                <div className="w-full h-full">
                  <img
                    src={
                      movie.backdrop_path
                        ? getImageUrl(movie.backdrop_path)
                        : ""
                    }
                    className="min-w-full w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>

              <div className="ml-4 p-4">
                <h2 className="lg:text-base text-sm hover:text-gray-500 font-bold text-gray-600">
                  {movie.title || movie.name}
                </h2>
                <p className="text-sm text-gray-400">
                  {moment(movie.release_date).format("LL")}
                </p>

                <p className="mt-2 text-gray-700 lg:text-base text-xs">
                  {formatOverview(movie?.overview)}...
                </p>
              </div>
            </Link>
          ));
      }
    }
  };

  return (
    <div className="w-full h-full flex justify-center bg-white">
      <SearchBar />
      <div className="max-w-7xl w-full h-full px-10 lg:my-16 my-12">
        <div className="flex gap-5 lg:flex-row flex-col flex-wrap">
          {/* ----- left side--------- */}
          <div className="lg:w-3/12 w-full">
            <div className="font-semibold text-white bg-[#01B4E4] rounded-tr-md rounded-tl-md py-4 px-4 w-full mb-2 cursor-default">
              Search Results
            </div>

            <div className="flex lg:flex-col border lg:shadow rounded overflow-x-auto gap-2">
              <Link
                to={`/search/tv?query=${query}`}
                className={`${
                  category === SEARCH.TV && "lg:bg-gray-100"
                } flex justify-between items-center font-semibold px-4 py-1 cursor-pointer whitespace-nowrap lg:gap-0 gap-3`}
              >
                <span className="lg:text-gray-600 text-sky-500">TV Shows</span>
                <span
                  className={`${
                    category === SEARCH.TV ? "lg:bg-white" : "lg:bg-gray-100"
                  } rounded-xl py-1 px-3 text-gray-400 border lg:border-transparent border-sky-500`}
                >
                  {tvShows?.length}
                </span>
              </Link>
              <Link
                to={`/search/movie?query=${query}`}
                className={`${
                  category === SEARCH.MOVIE && "lg:bg-gray-100"
                } flex justify-between items-center font-semibold px-4 py-1 cursor-pointer whitespace-nowrap lg:gap-0 gap-3`}
              >
                <span className="text-gray-500">Movies</span>
                <span
                  className={`${
                    category === SEARCH.MOVIE ? "lg:bg-white" : "lg:bg-gray-100"
                  } rounded-xl py-1 px-3 text-gray-400 border lg:border-transparent border-sky-500`}
                >
                  {movies?.length}
                </span>
              </Link>
              <Link
                to={`/search/person?query=${query}`}
                className={`${
                  category === SEARCH.PEOPLE && "lg:bg-gray-100"
                } flex justify-between items-center font-semibold px-4 py-1 cursor-pointer whitespace-nowrap lg:gap-0 gap-3`}
              >
                <span className="text-gray-500">People</span>
                <span
                  className={`${
                    category === SEARCH.PEOPLE
                      ? "lg:bg-white"
                      : "lg:bg-gray-100"
                  } rounded-xl py-1 px-3 text-gray-400 border lg:border-transparent border-sky-500`}
                >
                  {people?.length}
                </span>
              </Link>
              <Link
                to={`/search/company?query=${query}`}
                className={`${
                  category === SEARCH.COMPANY && "lg:bg-gray-100"
                } flex justify-between items-center font-semibold px-4 py-1 cursor-pointer whitespace-nowrap lg:gap-0 gap-3`}
              >
                <span className="text-gray-500">Companies</span>
                <span
                  className={`${
                    category === SEARCH.COMPANY
                      ? "lg:bg-white"
                      : "lg:bg-gray-100"
                  } rounded-xl py-1 px-3 text-gray-400 border lg:border-transparent border-sky-500`}
                >
                  {companies?.length}
                </span>
              </Link>
              <Link
                to={`/search/keyword?query=${query}`}
                className={`${
                  category === SEARCH.KEYWORD && "lg:bg-gray-100"
                } flex justify-between items-center font-semibold px-4 py-1 cursor-pointer whitespace-nowrap lg:gap-0 gap-3`}
              >
                <span className="text-gray-500">Keywords</span>
                <span
                  className={`${
                    category === SEARCH.KEYWORD
                      ? "lg:bg-white"
                      : "lg:bg-gray-100"
                  } rounded-xl py-1 px-3 text-gray-400 border lg:border-transparent border-sky-500`}
                >
                  {keywords?.length}
                </span>
              </Link>
              <Link
                to={`/search/collection?query=${query}`}
                className={`${
                  category === SEARCH.COLLECTION && "lg:bg-gray-100"
                } flex justify-between items-center font-semibold px-4 py-1 cursor-pointer whitespace-nowrap lg:gap-0 gap-3`}
              >
                <span className="text-gray-500">Collections</span>
                <span
                  className={`${
                    category === SEARCH.COLLECTION
                      ? "lg:bg-white"
                      : "lg:bg-gray-100"
                  } rounded-xl py-1 px-3 text-gray-400 border lg:border-transparent border-sky-500`}
                >
                  {collections?.length}
                </span>
              </Link>
            </div>
          </div>
          {/* ------left side-------- */}

          <div className="lg:w-8/12 w-full">{renderSearchResults()}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
