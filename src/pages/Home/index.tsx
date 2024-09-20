import Hero from "@/shared/components/Home/Hero";
import {
  freeMoviesTabs,
  popularTabs,
  trendingTabs,
} from "@/shared/constants/tabs";
import Carousel from "@/shared/reusable/Carousel";

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel
        title="Trending"
        tabs={trendingTabs}
        bgBlur={true}
        bgImage="trending"
      />

      <Carousel title="What's Popular" tabs={popularTabs} bgBlur={true} />
      <Carousel title="Free To Watch" tabs={freeMoviesTabs} bgBlur={true} />
    </>
  );
};

export default Home;
