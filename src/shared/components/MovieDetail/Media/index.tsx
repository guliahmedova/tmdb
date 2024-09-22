import { useState } from "react";
import arrowNext from "@/assets/imgs/arrow-next.svg";
import mediabg from "@/assets/imgs/mediabg.webp";
import Carousel from "@/shared/reusable/Carousel";
import { Link } from "react-router-dom";

const Media = () => {
  const [activeSocialTab, setActiveSocialTab] = useState<
    "popular" | "videos" | "backdrops" | "posters"
  >("popular");

  return (
    <div className="md:border-b mt-10">
      <div className="flex items-center gap-5 pl-10">
        <h3 className="font-semibold text-2xl text-dark_blue pb-3">Media</h3>
        <div className="flex items-center gap-4 font-semibold">
          <span
            className={`pb-2 ${
              activeSocialTab === "popular"
                ? "border-b-2 border-black"
                : "border-b-2 border-transparent "
            } cursor-pointer`}
            onClick={() => setActiveSocialTab("popular")}
          >
            Most Popular
          </span>
          <span
            className={`pb-2 ${
              activeSocialTab === "videos"
                ? "border-b-2 border-black"
                : "border-b-2 border-transparent "
            } cursor-pointer`}
            onClick={() => setActiveSocialTab("videos")}
          >
            Videos 2
          </span>
          <span
            className={`pb-2 ${
              activeSocialTab === "backdrops"
                ? "border-b-2 border-black"
                : "border-b-2 border-transparent "
            } cursor-pointer`}
            onClick={() => setActiveSocialTab("backdrops")}
          >
            Backdrops 47
          </span>
          <span
            className={`pb-2 ${
              activeSocialTab === "posters"
                ? "border-b-2 border-black"
                : "border-b-2 border-transparent "
            } cursor-pointer`}
            onClick={() => setActiveSocialTab("posters")}
          >
            Posters 104
          </span>
        </div>
      </div>

      <Carousel title="" loading="succeeded" sectionTop={4}>
        <div className="min-w-[500px] w-[500px] rounded-lg">
          <img src={mediabg} alt="" className="size-full object-cover" />
        </div>
        <div className="min-w-[500px] w-[500px] rounded-lg">
          <img src={mediabg} alt="" className="size-full object-cover" />
        </div>
        <div className="min-w-[500px] w-[500px] rounded-lg">
          <img src={mediabg} alt="" className="size-full object-cover" />
        </div>
        <div className="min-w-[500px] w-[500px] rounded-lg">
          <img src={mediabg} alt="" className="size-full object-cover" />
        </div>
        <div className="min-w-36 w-36 text-xs ml-4 h-[270px] flex gap-2 items-center justify-center">
          <Link to="#" className="hover:text-gray-500">
            View More
          </Link>
          <img src={arrowNext} className="size-6" alt="view more" />
        </div>
      </Carousel>
    </div>
  );
};

export default Media;
