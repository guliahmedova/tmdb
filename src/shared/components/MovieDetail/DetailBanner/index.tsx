import addIcon from "@/assets/imgs/add-list.svg";
import closeIcon from "@/assets/imgs/close.svg";
import expandIcon from "@/assets/imgs/expand.svg";
import img from "@/assets/imgs/img.svg";
import info from "@/assets/imgs/info.svg";
import playIcon from "@/assets/imgs/play.svg";
import saveIcon from "@/assets/imgs/save.svg";
import heartIcon from "@/assets/imgs/whiteheart.svg";
import { Genre, IMovieImageResponse } from "@/shared/models/movie";
import CircularProgress from "@/shared/reusable/CircularBar";
import PopupWrapper from "@/shared/reusable/PopupWrapper";
import { formatOverview } from "@/shared/utils/formatText";
import { getImageUrl } from "@/shared/utils/getImageUrl";
import { useState } from "react";
import ExpandModal from "../ExpandModal";

interface IDetailBanner {
  title: string;
  genres: Genre[];
  vote_average: number;
  overview: string;
  images: IMovieImageResponse;
  movieImage: string;
}

const DetailBanner = ({
  title,
  genres,
  overview,
  movieImage,
  vote_average,
  images,
}: IDetailBanner) => {
  const [isTrailerPopupVisible, setTrailerPopupVisibility] = useState(false);
  const [isImageExpand, setImageExpend] = useState(false);

  const renderBgImage = () => {
    if (images?.posters?.length > 0) {
      return getImageUrl(images?.posters[0].file_path);
    } else if (images?.backdrops?.length > 0) {
      return getImageUrl(images?.backdrops[0].file_path);
    } else {
      return getImageUrl(movieImage);
    }
  };

  return (
    <>
      <div
        className="bg-black flex justify-center bg-top bg-cover bg-no-repeat relative md:px-5 px-5"
        style={{ backgroundImage: `url(${renderBgImage()})` }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="container mx-auto px-4 py-8 max-w-7xl w-full relative">
          <div className="flex flex-wrap gap-2">
            <div
              className="w-full md:w-[300px] px-4 md:h-[450px] mb-8 relative max-w-sm mx-auto lg:mx-0 group"
              onClick={() => setImageExpend(true)}
            >
              <img
                src={movieImage ? getImageUrl(movieImage) : img}
                alt={title}
                className="w-full h-full rounded-lg shadow-md mb-4 object-cover bg-gray-500"
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer flex opacity-0 flex-col justify-center items-center text-white group-hover:opacity-100 ease-in-out duration-300 transition-all">
                <div className="flex items-center gap-2 font-semibold">
                  <img src={expandIcon} alt="expand" className="size-4" />
                  Expand
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4 flex flex-col">
              <h2 className="lg:text-3xl text-lg font-bold mb-2 text-white">
                {title}
              </h2>
              <div className="mt-2 flex items-center gap-2 flex-wrap">
                <span className="border border-gray-400 rounded-lg p-1 text-gray-400 xl:text-base text-xs">
                  TV-14
                </span>
                <ul className="text-gray-50 flex items-center gap-1 xl:text-base text-xs flex-wrap">
                  {genres?.map((genre) => (
                    <li
                      className="hover:text-gray-500 cursor-default"
                      key={genre.id}
                    >
                      <span>{genre.name}, </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:flex hidden my-8 items-center gap-4 relative">
                <CircularProgress
                  percentage={vote_average}
                  top={2.5}
                  left={0}
                />
                <span className="text-white font-semibold ml-12">
                  User Score
                </span>
                <button className="flex items-center md:gap-2 gap-1 text-xs shadow hover:scale-x-105 md:bg-dark_blue p-2 text-white font-semibold rounded-2xl">
                  What's your
                  <span className="border-b-2 border-sky-500">Vibe?</span>
                  <div className="relative group md:inline-block hidden">
                    <img src={info} alt="info" className="size-4" />
                    <span className="absolute -top-5 left-8 bg-dark_blue text-white rounded-lg shadow p-2 w-72 text-left scale-105 hidden  group-hover:inline-block">
                      Welcome to Vibes, TMDB's new rating system! For more
                      information, visit the contribution bible.
                    </span>
                  </div>
                </button>
              </div>
              <div className="md:flex hidden mb-3 items-center gap-4">
                <div className="size-12 bg-dark_blue rounded-full flex flex-col items-center justify-center cursor-pointer">
                  <img className="size-4" src={addIcon} alt="add to list" />
                </div>
                <div className="size-12 bg-dark_blue rounded-full flex flex-col items-center justify-center cursor-pointer">
                  <img
                    className="size-4"
                    src={heartIcon}
                    alt="mark as favorite"
                  />
                </div>
                <div className="size-12 bg-dark_blue rounded-full flex flex-col items-center justify-center cursor-pointer">
                  <img
                    className="size-4"
                    src={saveIcon}
                    alt="add to your watchlist"
                  />
                </div>
                <div
                  className="flex items-center gap-2 hover:text-slate-200 text-white font-bold cursor-pointer"
                  onClick={() => setTrailerPopupVisibility(true)}
                >
                  <img className="size-4" src={playIcon} alt="" />
                  <span>Play Trailer</span>
                </div>
              </div>
              {overview && (
                <p className="text-white mb-6 place-content-end flex-1 text-sm">
                  <span className="font-semibold text-lg block lg:my- lg:mt-0 mt-5">
                    Overview
                  </span>
                  {formatOverview(overview)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <PopupWrapper
        isOpen={isImageExpand}
        children={
          <ExpandModal setState={setImageExpend} movieImages={images} />
        }
      />

      <PopupWrapper
        isOpen={isTrailerPopupVisible}
        children={
          <div className="bg-black shadow-lg w-8/12 h-[90vh] rounded-lg flex flex-col justify-between">
            <div className="text-right w-full z-10 flex justify-between px-4 py-4">
              <h6 className="text-lg text-white font-semibold">Play Trailer</h6>
              <button onClick={() => setTrailerPopupVisibility(false)}>
                <img
                  src={closeIcon}
                  className="size-8 invert"
                  alt="close trailer popup"
                />
              </button>
            </div>
            <div className="size-full rounded-lg flex justify-end">
              <iframe
                className="mb-0 size-full"
                src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        }
      />
    </>
  );
};

export default DetailBanner;
