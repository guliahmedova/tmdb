import { useSelector } from "react-redux";
import CarouselCard from "./Card";
import SlidingTabBar from "./SlidingTabBar";
import { RootState, useAppDispatch } from "@/redux/app/store";
import { useEffect } from "react";
import { getTrendingMovies } from "@/redux/features/movieSlice";
import { IMovie } from "@/shared/models/movie";

const Carousel = () => {
  const trendingMovies = useSelector(
    (state: RootState) => state.movie.trendingMovies
  );
  const dispatch = useAppDispatch();

  console.log(trendingMovies, "TRENDING MOVIES IN COMPONENT");

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, []);

  return (
    <section className="flex justify-center min-h-96 my-8">
      <div className="max-w-7xl w-full bg-white bg-trending bg-no-repeat bg-contain bg-bottom">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-5 pl-10">
            <h3 className="font-semibold text-2xl text-dark_blue">Trending</h3>
            <SlidingTabBar />
          </div>
          {/* CAROUSEL */}
          <div className="my-5 relative">
            <div className="w-full after:content-[''] after:w-16 after:h-full after:absolute after:top-0 after:right-0 after:bg-gradient-to-r from-white/0 to-white after:pointer-events-none">
              <div className="bg-purpl-500 w-full flex overflow-x-auto">
                {trendingMovies?.map((trendMovie: IMovie) => (
                  <CarouselCard key={trendMovie.id} trendMovie={trendMovie} />
                ))}
              </div>
            </div>
          </div>
          {/* CAROUSEL */}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
