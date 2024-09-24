import { RootState, useAppDispatch } from "@/redux/app/store";
import { searchMovies } from "@/redux/features/searchSlice";
import SearchBar from "@/shared/components/SearchBar";
import { formatOverview } from "@/shared/utils/formatText";
import { getImageUrl } from "@/shared/utils/getImageUrl";
import moment from "moment";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { movies } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    if (query) {
      dispatch(searchMovies({ searchQuery: query }));
    }
  }, [query]);

  console.log(movies);

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

            <div className="flex lg:flex-col border lg:shadow rounded overflow-x-auto">
              <div className="lg:bg-gray-100 flex justify-between items-center font-semibold p-4 cursor-pointer whitespace-nowrap lg:gap-0 gap-3">
                <span className="lg:text-gray-600 text-sky-500">TV Shows</span>
                <span className="lg:bg-white rounded-xl py-1 px-3 text-gray-400 border lg:border-transparent border-sky-500">
                  200
                </span>
              </div>
              <div className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold p-4 cursor-pointer whitespace-nowrap lg:gap-0 gap-3">
                <span className="text-gray-500">Movies</span>
                <span className="lg:bg-gray-100 border border-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  200
                </span>
              </div>
              <div className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold p-4 cursor-pointer whitespace-nowrap lg:gap-0 gap-3">
                <span className="text-gray-500">People</span>
                <span className="lg:bg-gray-100 border border-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  200
                </span>
              </div>
              <div className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold p-4 cursor-pointer whitespace-nowrap lg:gap-0 gap-3">
                <span className="text-gray-500">Companies</span>
                <span className="lg:bg-gray-100 border border-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  200
                </span>
              </div>
              <div className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold p-4 cursor-pointer whitespace-nowrap lg:gap-0 gap-3">
                <span className="text-gray-500">Keywords</span>
                <span className="lg:bg-gray-100 border border-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  200
                </span>
              </div>
              <div className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold p-4 cursor-pointer whitespace-nowrap lg:gap-0 gap-3">
                <span className="text-gray-500">Collections</span>
                <span className="lg:bg-gray-100 border border-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  200
                </span>
              </div>
              <div className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold p-4 cursor-pointer whitespace-nowrap lg:gap-0 gap-3">
                <span className="text-gray-500">Networks</span>
                <span className="lg:bg-gray-100 border border-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  200
                </span>
              </div>
            </div>
          </div>
          {/* ------left side-------- */}

          <div className="lg:w-8/12 w-full">
            {movies?.map((movie) => (
              <Link
                to={`/movie/${movie.id}`}
                className="flex bg-white rounded-lg shadow-md p-4 w-full mb-2"
                key={movie.id}
              >
                <img
                  src={getImageUrl(movie.backdrop_path)}
                  alt="Monsters"
                  className="w-24 h-36 object-cover rounded-md"
                />

                <div className="ml-4">
                  <h2 className="text-lg hover:text-gray-500 font-bold text-gray-600">
                    {movie.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {moment(movie.release_date).format("LL")}
                  </p>

                  <p className="mt-2 text-gray-700">
                    {formatOverview(movie.overview)}...
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
