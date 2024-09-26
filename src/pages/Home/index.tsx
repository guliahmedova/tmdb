import { RootState, useAppDispatch } from "@/redux/app/store";
import {
  getFilteredMovies,
  getTrendingMovies,
} from "@/redux/features/movieSlice";
import Hero from "@/shared/components/Home/Hero";
import { popularTabs, trendingTabs } from "@/shared/constants/tabs";
import { IMovie } from "@/shared/models/movie";
import Carousel from "@/shared/reusable/Carousel";
import CarouselCard from "@/shared/reusable/Carousel/Card";
import SlidingTabBar from "@/shared/reusable/Carousel/SlidingTabBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [activeTrendMovieTab, setActiveTrendMovieTab] = useState(
    trendingTabs[0].key
  );
  const [activeTvShowActiveTab, setTvShowActiveTab] = useState(
    popularTabs[0].key
  );

  const { lang } = useSelector((state: RootState) => state.translation);

  const trendingMovies = useSelector(
    (state: RootState) => state.movie.trendingMovies
  );
  const popularMovies = useSelector((state: RootState) => state.movie.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getTrendingMovies({ time_window: activeTrendMovieTab, language: lang })
    );
  }, [activeTrendMovieTab, lang]);

  useEffect(() => {
    dispatch(
      getFilteredMovies({
        with_release_type: activeTvShowActiveTab,
        language: lang,
      })
    );
  }, [activeTvShowActiveTab, lang]);

  return (
    <>
      <Hero />

      <Carousel
        title="Trending"
        bgImage={`trending`}
        loading="succeeded"
        tabChildren={
          <SlidingTabBar
            tabs={trendingTabs}
            layoutId="bubble1"
            activeTab={activeTrendMovieTab}
            getActiveTab={setActiveTrendMovieTab}
          />
        }
      >
        {trendingMovies?.map((movie: IMovie) => (
          <CarouselCard key={movie.id} movie={movie} bgBlur={true} />
        ))}
      </Carousel>

      <Carousel
        title="What's Popular"
        loading="succeeded"
        sectionTop={0}
        tabChildren={
          <SlidingTabBar
            tabs={popularTabs}
            layoutId="bubble2"
            activeTab={activeTvShowActiveTab}
            getActiveTab={setTvShowActiveTab}
          />
        }
      >
        {popularMovies?.map((movie: IMovie) => (
          <CarouselCard key={movie.id} movie={movie} bgBlur={true} />
        ))}
      </Carousel>
    </>
  );
};

export default Home;
