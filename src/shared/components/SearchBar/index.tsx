import searchIcon from "@/assets/imgs/search_black.svg";
import closeIcon from "@/assets/imgs/close.svg";
import { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div className="bg-white w-full absolute top-16 h-11 border-b flex justify-center">
      <div className="px-12 max-w-7xl h-full w-full relative flex items-center">
        <div className="absolute size-5 left-8">
          <img src={searchIcon} alt="search" />
        </div>
        <form className="w-full h-full bg-green-800">
          <input
            name="searchInput"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            className="w-full h-full outline-none px-4 text-slate-500"
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
    </div>
  );
};

export default SearchBar;
