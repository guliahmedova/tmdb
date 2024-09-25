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

  const renderSearchResults = (key: string = SEARCH.TV) => {
    console.log(key, category);

    if (key) {
      switch (key) {
        case SEARCH.PEOPLE:
          return people;
        case SEARCH.MOVIE:
          return movies;
        case SEARCH.KEYWORD:
          return keywords;
        case SEARCH.COMPANY:
          return companies;
        case SEARCH.COLLECTION:
          return collections;
        case SEARCH.TV:
          return tvShows;
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
                className="lg:bg-gray-100 flex justify-between items-center font-semibold px-4 py-1 cursor-pointer whitespace-nowrap lg:gap-0 gap-3"
              >
                <span className="lg:text-gray-600 text-sky-500">TV Shows</span>
                <span className="lg:bg-white rounded-xl py-1 px-3 text-gray-400 border lg:border-transparent border-sky-500">
                  {tvShows?.length}
                </span>
              </Link>
              <Link
                to={`/search/movie?query=${query}`}
                className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold px-4 py-1 cursor-pointer whitespace-nowrap lg:gap-0 gap-3"
              >
                <span className="text-gray-500">Movies</span>
                <span className="lg:bg-gray-100 border border-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  {movies?.length}
                </span>
              </Link>
              <Link
                to={`/search/person?query=${query}`}
                className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold px-4 py-1 cursor-pointer whitespace-nowrap lg:gap-0 gap-3"
              >
                <span className="text-gray-500">People</span>
                <span className="lg:bg-gray-100 border border-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  {people?.length}
                </span>
              </Link>
              <Link
                to={`/search/company?query=${query}`}
                className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold px-4 py-1 cursor-pointer whitespace-nowrap lg:gap-0 gap-3"
              >
                <span className="text-gray-500">Companies</span>
                <span className="lg:bg-gray-100 border border-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  {companies?.length}
                </span>
              </Link>
              <Link
                to={`/search/keyword?query=${query}`}
                className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold px-4 py-1 cursor-pointer whitespace-nowrap lg:gap-0 gap-3"
              >
                <span className="text-gray-500">Keywords</span>
                <span className="lg:bg-gray-100 border border-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  {keywords?.length}
                </span>
              </Link>
              <Link
                to={`/search/collection?query=${query}`}
                className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold px-4 py-1 cursor-pointer whitespace-nowrap lg:gap-0 gap-3"
              >
                <span className="text-gray-500">Collections</span>
                <span className="lg:bg-gray-100 border border-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  {collections?.length}
                </span>
              </Link>
            </div>
          </div>
          {/* ------left side-------- */}

          <div className="lg:w-8/12 w-full">
            {renderSearchResults(category)?.map((movie) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
