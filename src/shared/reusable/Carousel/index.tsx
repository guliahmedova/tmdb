import { RootState } from "@/redux/app/store";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";

interface ICarousel {
  title: string;
  bgImage?: string;
  children: ReactNode;
  tabChildren?: ReactNode;
}

const Carousel = ({ title, bgImage, children, tabChildren }: ICarousel) => {
  const trendingMovieLoading = useSelector(
    (state: RootState) => state.movie.loading
  );

  return (
    <section className="flex justify-center min-h-96 my-8">
      <div
        className={`max-w-7xl w-full bg-white ${
          bgImage
            ? `bg-${bgImage} bg-no-repeat bg-contain xl:bg-bottom bg-center`
            : ""
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-5 pl-10">
            <h3 className="font-semibold text-2xl text-dark_blue">{title}</h3>
            {tabChildren !== "undefined" && tabChildren}
          </div>
          <div className="my-5 relative">
            <div className="w-full after:content-[''] after:w-16 after:h-full after:absolute after:top-0 after:right-0 after:bg-gradient-to-r from-white/0 to-white after:pointer-events-none">
              <div className="w-full flex overflow-x-auto">
                {trendingMovieLoading === "succeeded" ? children : <Skeleton />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
