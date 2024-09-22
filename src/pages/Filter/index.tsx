import { RootState, useAppDispatch } from "@/redux/app/store";
import { getTrendingMovies } from "@/redux/features/movieSlice";
import Filters from "@/shared/components/Filter/Filters";
import Sort from "@/shared/components/Filter/Sort";
import ToWatch from "@/shared/components/Filter/ToWatch";
import CarouselCard from "@/shared/reusable/Carousel/Card";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Filter = () => {
  const trendingMovies = useSelector(
    (state: RootState) => state.movie.trendingMovies
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrendingMovies({ time_window: "day" }));
  }, []);

  return (
    <div className="flex justify-center bg-white py-10">
      <div className="max-w-7xl w-full xl:px-10 px-6">
        <div className="flex justify-between lg:flex-row flex-col">
          <div className="lg:w-3/12 w-full lg:mb-0 mb-8">
            <h2 className="text-2xl font-semibold text-dark_blue mb-5">
              Popular Movies
            </h2>
            <Sort />
            <ToWatch />
            <Filters />
            <button className="bg-sky-400 rounded-full w-full py-3 hover:bg-dark_blue text-lg font-semibold text-white">
              Search
            </button>
          </div>

          <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-y-6 gap-y-4 lg:w-9/12 w-full">
            {trendingMovies?.map((movie) => (
              <CarouselCard key={movie.id} movie={movie} bgBlur={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
