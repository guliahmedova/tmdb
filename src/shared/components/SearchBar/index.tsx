import closeIcon from "@/assets/imgs/close.svg";
import searchIcon from "@/assets/imgs/search_black.svg";
import { RootState, useAppDispatch } from "@/redux/app/store";
import { searchMulti } from "@/redux/features/searchSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = ({
  searchQuery = "",
  categpry,
}: {
  searchQuery?: string | null;
  categpry?: string | null;
}) => {
  const [searchInput, setSearchInput] = useState<string>(searchQuery || "");
  const navigate = useNavigate();
  const movies = useSelector((state: RootState) => state.search.multiMovies);
  const dispatch = useAppDispatch();
  const [isSearchBarVisible, setSearchBarVisibility] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.length) {
      navigate(`/search/${categpry}?query=${searchInput}`);
    }
    setSearchBarVisibility(false);
  };

  useEffect(() => {
    if (searchInput) {
      setSearchBarVisibility(true);
      dispatch(searchMulti({ searchQuery: searchInput }));
    }
  }, [searchInput]);

  return (
    <div className="bg-white w-full absolute top-16 border-b flex flex-col justify-center items-center z-20">
      <div className="px-12 max-w-7xl w-full relative flex items-center h-11">
        <div className="absolute size-5 left-8">
          <img src={searchIcon} alt="search" />
        </div>
        <form className="w-full h-full bg-green-800" onSubmit={handleSearch}>
          <input
            name="searchInput"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            className="w-full h-full outline-none px-4 text-slate-500 md:text-base text-xs  "
            type="search"
            placeholder="Search for a movie, tv show, person..."
          />
        </form>
        <div
          className="absolute size-6 right-8"
          onClick={() => setSearchInput("")}
        >
          <img src={closeIcon} alt="close" />
        </div>
      </div>

      {isSearchBarVisible && (
        <div className="bg-white py-2 w-full flex justify-center text-gray-500 h-96 overflow-y-auto">
          <div className="max-w-7xl w-full px-12">
            <div className="w-full">
              {movies?.map((movie) => (
                <Link
                  to={`/search/tv?query=${searchInput}`}
                  key={movie.id}
                  onClick={() => setSearchBarVisibility(false)}
                  className="block py-1 border-b lg:text-base text-xs"
                >
                  {movie.name || movie.title || movie.original_title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
