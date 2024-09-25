import arrow from "@/assets/imgs/down-arrow-sort.svg";
import { RootState, useAppDispatch } from "@/redux/app/store";
import { addFavorite, getFavorites } from "@/redux/features/favoriteSlice";
import { formatOverview } from "@/shared/utils/formatText";
import { getImageUrl } from "@/shared/utils/getImageUrl";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

enum SORT {
  asc = "created_at.asc",
  desc = "created_at.desc",
}

const Favorite = () => {
  const dispatch = useAppDispatch();
  const favorites = useSelector((state: RootState) => state.favorite.favorites);
  const [dropdownVisibility, setDropdownVisibility] = useState<
    Record<number, boolean>
  >({});
  const [favoriteType, setFavoriteType] = useState<"movies" | "tv">("movies");
  const [sortBy, setSortBy] = useState<SORT.asc | SORT.desc>(SORT.asc);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    dispatch(getFavorites({ favoriteType: favoriteType, sort_by: sortBy }));
  }, [favoriteType, sortBy, isDelete]);

  const toggleDropdown = (id: number) => {
    setDropdownVisibility((prev) => ({
      [id]: !prev[id],
    }));
  };

  const handleOrderChange = () => {
    setSortBy((prevSort) => (prevSort === SORT.asc ? SORT.desc : SORT.asc));
  };

  return (
    <div className="flex justify-center w-full py-10 bg-white">
      <div className="max-w-7xl w-full px-10">
        <div>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h1 className="font-bold text-2xl text-dark_blue">My Favorites</h1>
            <div className="flex items-center lg:gap-4 flex-wrap gap-2">
              <button
                onClick={() => setFavoriteType("movies")}
                className={`border border-dark_blue px-2 lg:py-0 py-1 rounded-lg shadow text-dark_blue font-semibold lg:text-lg ${
                  favoriteType === "movies" && "bg-dark_blue text-white"
                }`}
              >
                Movies
              </button>
              <button
                onClick={() => setFavoriteType("tv")}
                className={`border border-dark_blue px-2 lg:py-0 py-1 rounded-lg shadow text-dark_blue font-semibold lg:text-lg ${
                  favoriteType === "tv" && "bg-dark_blue text-white"
                }`}
              >
                TV
              </button>
            </div>
            <div className="flex items-center font-semibold text-lg">
              Order:
              <button onClick={handleOrderChange}>
                <img
                  src={arrow}
                  alt="arrow"
                  className={`size-6 ${
                    sortBy === SORT.desc ? "rotate-0" : "rotate-180"
                  } cursor-pointer`}
                />
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-2 flex-wrap mt-8">
            {favorites?.map((favorite) => (
              <div
                className="w-full lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow relative h-96"
                key={favorite.id}
              >
                <div className="flex justify-end px-4 pt-4 relative">
                  <button
                    onClick={() => toggleDropdown(favorite.id)}
                    id="dropdownButton"
                    data-dropdown-toggle="dropdown"
                    className="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
                    type="button"
                  >
                    <span className="sr-only">Open dropdown</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  </button>
                  {dropdownVisibility[favorite.id] && (
                    <div
                      id="dropdown"
                      className="z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-10"
                    >
                      <ul className="py-2" aria-labelledby="dropdownButton">
                        <li
                          onClick={() => {
                            dispatch(
                              addFavorite({
                                media_type:
                                  favoriteType === "movies"
                                    ? "movie"
                                    : favoriteType,
                                media_id: favorite.id,
                                favorite: false,
                              })
                            );
                            setIsDelete(true);
                          }}
                        >
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                          >
                            Remove
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center pb-20">
                  <img
                    className="w-36 h-36 mb-3 rounded-lg shadow-lg object-cover"
                    src={getImageUrl(favorite.backdrop_path)}
                    alt={favorite.original_title}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900">
                    {favorite.original_title}
                  </h5>
                  <p className="text-gray-500 font-medium">
                    {moment(favorite.release_date).format("ll")}
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400 text-wrap whitespace-pre-wrap px-4 text-center">
                    {formatOverview(favorite.overview)}...
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
