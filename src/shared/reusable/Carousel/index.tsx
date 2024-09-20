import CarouselCard from "./Card";
import SlidingTabBar from "./SlidingTabBar";

const Carousel = () => {
  return (
    <section className="bg-red-500 flex justify-center min-h-96 my-8">
      <div className="max-w-7xl w-full bg-white bg-trending bg-no-repeat bg-contain bg-bottom">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-5 pl-10">
            <h3 className="font-semibold text-2xl text-dark_blue">Trending</h3>
            <SlidingTabBar />
          </div>
          {/* CAROUSEL */}
          <div className="my-5 relative top-0 left-0 flex justify-center w-full min-w-full flex-wrap items-start content-start h-full">
            <div className="min-h-0 h-full w-full min-w-full bg-urple-600 overflow-x-scroll overflow-y-hidden transition-all duration-300 ease-linear">
              <CarouselCard />
            </div>
          </div>
          {/* CAROUSEL */}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
