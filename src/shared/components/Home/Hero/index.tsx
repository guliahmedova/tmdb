import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.length) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <section className="min-h-[320px] h-max flex justify-center bg-white">
      <div className="max-w-7xl px-10 w-full bg-dark_blue bg-home_hero bg-no-repeat bg-center bg-cover">
        <div className="h-full flex flex-col items-start justify-center">
          <div className="text-white mb-5">
            <h1 className="font-bold xl:text-5xl xl:mb-0 mb-4 text-4xl">
              Welcome.
            </h1>
            <p className="xl:text-3xl text-2xl font-semibold">
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
          </div>

          <div className="bg-red-200 w-full rounded-full">
            <form
              className="bg-white w-full flex items-center rounded-full relative"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                name="searchQuery"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-10/12 rounded-full rounded-tr-none outline-none text-slate-400 rounded-br-none py-3 px-5 whitespace-nowrap overflow-hidden text-ellipsis placeholder:t"
              />
              <div
                className={`absolute left-4 text-slate-400 ${
                  searchQuery ? "hidden" : "inline-block"
                }`}
              >
                <span className="xl:inline-block hidden">
                  Search for a movie, tv show, person......
                </span>
                <span className="xl:hidden inline-block">Search...</span>
              </div>
              <button
                className="xl:w-1/12 md:w-2/12 sm:w-3/12 w-4/12 text-white font-bold rounded-full absolute right-0 h-full bg-gradient-to-r from-teal-400 to-sky-400"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
