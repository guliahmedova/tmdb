import { RootState, useAppDispatch } from "@/redux/app/store";
import { getTrendingMovies } from "@/redux/features/movieSlice";
import Hero from "@/shared/components/Home/Hero";
import { trendingTabs } from "@/shared/constants/tabs";
import Carousel from "@/shared/reusable/Carousel";
import CarouselCard from "@/shared/reusable/Carousel/Card";
import SlidingTabBar from "@/shared/reusable/Carousel/SlidingTabBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [activeTrendMovieTab, setActiveTrendMovieTab] = useState(
    trendingTabs[0].key
  );
  const trendingMovies = useSelector(
    (state: RootState) => state.movie.trendingMovies
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrendingMovies({ time_window: activeTrendMovieTab }));
  }, [activeTrendMovieTab]);

  return (
    <>
      <Hero />

      <Carousel
        title="Trending"
        bgImage="trending"
        loading="succeeded"
        tabChildren={
          <SlidingTabBar
            tabs={trendingTabs}
            activeTab={activeTrendMovieTab}
            setActiveTab={setActiveTrendMovieTab}
          />
        }
      >
        {trendingMovies?.map((movie) => (
          <CarouselCard key={movie.id} movie={movie} bgBlur={true} />
        ))}
      </Carousel>
    </>
  );
};

export default Home;
