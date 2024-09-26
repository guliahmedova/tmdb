import arrowNext from "@/assets/imgs/arrow-next.svg";
import { IMovieImageResponse, IMovieVideo } from "@/shared/models/movie";
import Carousel from "@/shared/reusable/Carousel";
import { getImageUrl } from "@/shared/utils/getImageUrl";
import { useState } from "react";
import { Link } from "react-router-dom";

const Media = ({
  movieVideos,
  movieImages,
}: {
  movieVideos: IMovieVideo[];
  movieImages: IMovieImageResponse;
}) => {
  const [activeSocialTab, setActiveSocialTab] = useState<
    "popular" | "videos" | "backdrops" | "posters"
  >("backdrops");

  const renderTabContent = (
    tabKey: "popular" | "videos" | "backdrops" | "posters"
  ) => {
    switch (tabKey) {
      case "popular":
        return movieImages.logos?.length > 0 ? (
          movieImages?.logos?.map((backdrop) => (
            <div
              className="min-w-96 w-96 h-80 rounded-lg"
              key={backdrop.file_path}
            >
              <img
                src={getImageUrl(backdrop.file_path)}
                alt=""
                className="size-full object-contain"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-400">No logos available for this movie.</p>
        );
      case "videos":
        return movieVideos?.length > 0 ? (
          movieVideos.map((video) => (
            <div key={video.id} className="aspect-video">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No videos available for this movie.</p>
        );
      case "backdrops":
        return movieImages.backdrops?.length > 0 ? (
          movieImages?.backdrops?.map((backdrop) => (
            <div
              className="min-w-96 w-96 h-80 rounded-lg"
              key={backdrop.file_path}
            >
              <img
                src={getImageUrl(backdrop.file_path)}
                alt=""
                className="size-full object-cover"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-400">
            No backdrops available for this movie.
          </p>
        );
      case "posters":
        return movieImages.posters?.length > 0 ? (
          movieImages?.posters?.map((poster) => (
            <div
              className="min-w-96 w-96 h-80 rounded-lg"
              key={poster.file_path}
            >
              <img
                src={getImageUrl(poster.file_path)}
                alt=""
                className="size-full object-cover"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-400">No posters available for this movie.</p>
        );
      default:
        break;
    }
  };

  return (
    <div className="md:border-b mt-10">
      <div className="flex items-center gap-5 lg:pl-10 px-5 flex-wrap">
        <h3 className="font-semibold lg:text-2xl text-dark_blue pb-3">Media</h3>
        <div className="flex items-center gap-4 font-semibold">
          <span
            className={`pb-2 lg:text-base text-sm ${
              activeSocialTab === "backdrops"
                ? "border-b-2 border-black"
                : "border-b-2 border-transparent "
            } cursor-pointer`}
            onClick={() => setActiveSocialTab("backdrops")}
          >
            Backdrops {movieImages?.backdrops?.length}
          </span>
          <span
            className={`pb-2 lg:text-base text-sm ${
              activeSocialTab === "videos"
                ? "border-b-2 border-black"
                : "border-b-2 border-transparent "
            } cursor-pointer`}
            onClick={() => setActiveSocialTab("videos")}
          >
            Videos {movieVideos?.length}
          </span>
          <span
            className={`pb-2 lg:text-base text-sm ${
              activeSocialTab === "posters"
                ? "border-b-2 border-black"
                : "border-b-2 border-transparent "
            } cursor-pointer`}
            onClick={() => setActiveSocialTab("posters")}
          >
            Posters 104
          </span>
          <span
            className={`pb-2 lg:text-base text-sm ${
              activeSocialTab === "popular"
                ? "border-b-2 border-black"
                : "border-b-2 border-transparent "
            } cursor-pointer`}
            onClick={() => setActiveSocialTab("popular")}
          >
            Logos {movieImages?.logos?.length}
          </span>
        </div>
      </div>

      <Carousel title="" loading="succeeded" sectionTop={0}>
        {renderTabContent(activeSocialTab)}
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
