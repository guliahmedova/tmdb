import addIcon from "@/assets/imgs/add-list.svg";
import arrowNext from "@/assets/imgs/arrow-next.svg";
import downArrow from "@/assets/imgs/down-arrow.svg";
import expand from "@/assets/imgs/expand.svg";
import heartIcon from "@/assets/imgs/heart.svg";
import info from "@/assets/imgs/info.svg";
import m from "@/assets/imgs/m1.jpg";
import closeIcon from "@/assets/imgs/close.svg";
import playIcon from "@/assets/imgs/play.svg";
import saveIcon from "@/assets/imgs/save.svg";
import CastCard from "@/shared/components/MovieDetail/CastCard";
import ExpandModal from "@/shared/components/MovieDetail/ExpandModal";
import Media from "@/shared/components/MovieDetail/Media";
import ReviewsCard from "@/shared/components/MovieDetail/ReviewsCard";
import Carousel from "@/shared/reusable/Carousel";
import CircularProgress from "@/shared/reusable/CircularBar";
import PopupWrapper from "@/shared/reusable/PopupWrapper";
import { useState } from "react";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const [activeSocialTab, setActiveSocialTab] = useState<
    "review" | "discussion"
  >("review");
  const [isImageExpand, setImageExpend] = useState(false);
  const [isTrailerPopupVisible, setTrailerPopupVisibility] = useState(false);

  return (
    <>
      <div className="flex justify-center bg-white">
        <div className="w-full">
          <div>
            <div className="flex justify-center pt-4 border">
              <ul className="flex gap-10">
                <li className="flex items-center gap-1 pb-4 text-slate-600 border-b-4 border-sky-500">
                  Overview <img src={downArrow} className="size-2" alt="" />
                </li>
                <li className="flex items-center gap-1 pb-4 text-slate-600 border-b-4 border-transparent">
                  Media <img src={downArrow} className="size-2" alt="" />
                </li>
                <li className="flex items-center gap-1 pb-4 text-slate-600 border-b-4 border-transparent">
                  Fandom <img src={downArrow} className="size-2" alt="" />
                </li>
                <li className="flex items-center gap-1 pb-4 text-slate-600 border-b-4 border-transparent">
                  Share <img src={downArrow} className="size-2" alt="" />
                </li>
              </ul>
            </div>

            <div className="py-10 flex justify-center bg-black">
              <div className="max-w-7xl w-full flex gap-6">
                <div
                  className="relative w-3/12 cursor-pointer group rounded-lg"
                  onClick={() => setImageExpend(true)}
                >
                  <img
                    src={m}
                    alt=""
                    className="size-full object-cover border shadow rounded-lg"
                  />
                  <div className="absolute size-full backdrop-blur-lg bg-black/10 inset-0 flex-col justify-center items-center rounded-lg hidden group-hover:flex border shadow">
                    <div className="flex gap-3 items-center">
                      <img src={expand} alt="expand" className="size-10" />
                      <span className="text-white font-bold">Expand</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h2 className="text-4xl font-bold text-white">
                    The Flash
                    <span className="font-normal text-slate-50"> (2014)</span>
                  </h2>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="border border-gray-500 rounded-lg p-1 text-gray-500">
                      TV-14
                    </span>
                    <ul className="text-gray-50 flex items-center gap-1">
                      <li className="hover:text-gray-500">
                        <Link to="#">Drama,</Link>
                      </li>
                      <li className="hover:text-gray-500">
                        <Link to="#"> Sci-Fi & Fantasy </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="my-8 flex items-center gap-4 relative">
                    <CircularProgress
                      percentage={78}
                      top={0}
                      left={0}
                      size={68}
                      width={64}
                      height={64}
                      percentageFontSize={8}
                      percentageTop={0}
                      fontSize="lg"
                    />
                    <span className="font-bold text-white w-12 ml-20">
                      User Score
                    </span>
                    <span className="size-9 cursor-pointer inline-block text-2xl scale-110 hover:scale-125 text-center relative group">
                      😍
                      <span className="absolute bg-slate-700 border border-gray-50 px-2 rounded-lg top-6 left-8 text-white text-[10px] text-nowrap hidden group-hover:inline-block">
                        Smilling face with heart eyes
                      </span>
                    </span>
                    <button className="flex items-center gap-2 shadow hover:scale-x-105 bg-dark_blue p-2 text-white font-semibold rounded-2xl ">
                      What's your <span>Vibe?</span>
                      <div className="relative group">
                        <img src={info} alt="info" className="size-4" />
                        <span className="absolute -top-8 left-8 bg-dark_blue text-white rounded-lg shadow p-2 w-72 text-left scale-105 hidden  group-hover:inline-block">
                          Welcome to Vibes, TMDB's new rating system! For more
                          information, visit the contribution bible.
                        </span>
                      </div>
                    </button>
                  </div>

                  <div className="flex items-center gap-5">
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

                  <div className="mt-8">
                    <span className="font-medium text-slate-100 italic">
                      Revenge is a witch.
                    </span>
                    <div>
                      <h5 className="font-bold text-lg text-white">Overview</h5>
                      <p className="font-medium text-slate-100">
                        Agatha Harkness gathers a coven of witches and sets off
                        down, down, down The Witches' Road.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Link
                        className="text-white font-bold hover:text-slate-200"
                        to=""
                      >
                        Jac Schaeffer
                      </Link>
                      <span className="text-slate-50 text-xs block">
                        Creator
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <div className="max-w-7xl w-full">
              <div className="flex gap-4">
                <div className="w-[80%]">
                  <Carousel title="Series Cast" loading="succeeded">
                    <CastCard />
                    <CastCard />
                    <CastCard />
                    <CastCard />
                    <CastCard />
                    <CastCard />
                    <CastCard />
                    <CastCard />
                    <CastCard />
                    <CastCard />
                    <div className="min-w-36 w-36 text-xs ml-4 h-[270px] flex gap-2 items-center justify-center">
                      <Link to="#" className="hover:text-gray-500">
                        View More
                      </Link>
                      <img src={arrowNext} className="size-6" alt="view more" />
                    </div>
                  </Carousel>

                  <div className="border-b pb-4">
                    <div className="flex items-center gap-5 pl-10">
                      <h3 className="font-semibold text-2xl text-dark_blue pb-3">
                        Social
                      </h3>
                      <div className="flex items-center gap-4 font-semibold">
                        <span
                          className={`pb-2 ${
                            activeSocialTab === "review"
                              ? "border-b-2 border-black"
                              : "border-b-2 border-transparent "
                          } cursor-pointer`}
                          onClick={() => setActiveSocialTab("review")}
                        >
                          Reviews 0
                        </span>
                        <span
                          className={`pb-2 ${
                            activeSocialTab === "discussion"
                              ? "border-b-2 border-black"
                              : "border-b-2 border-transparent "
                          } cursor-pointer`}
                          onClick={() => setActiveSocialTab("discussion")}
                        >
                          Discussions 2
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-4">
                      {activeSocialTab === "review" ? (
                        // <p className="text-slate-500 pl-10">
                        //   We don't have any reviews for Agatha All Along. Would
                        //   you like to write one?
                        // </p>
                        <ReviewsCard />
                      ) : (
                        <p className="text-slate-500 pl-10">
                          We don't have any discussions for Agatha All Along.
                          Would you like to write one?
                        </p>
                      )}
                    </div>
                  </div>

                  <Media />
                </div>

                <div className="w-full">
                  <div className="flex items-center gap-5">
                    <button className="bg-sky-500 shadow-lg text-white font-semibold rounded-lg px-4 py-2 flex items-center gap-3 w-28">
                      <img
                        src={playIcon}
                        alt="play now"
                        className="size-4 animate-pulse"
                      />
                      Play Now
                    </button>
                    <Link to="" className="w-24 leading-tight">
                      Presumed Innocent on Apple TV+
                    </Link>
                  </div>

                  <div className="mt-4">
                    <h2 className="font-semibold">Facts</h2>
                    <ul>
                      <li>
                        <h2 className="font-semibold mt-2">Status</h2>
                        <p className="text-gray-400 font-medium">
                          Returning Series
                        </p>
                      </li>
                      <li>
                        <h2 className="font-semibold mt-2">Type</h2>
                        <p className="text-gray-400 font-medium">Miniseries</p>
                      </li>
                      <li>
                        <h2 className="font-semibold mt-2">
                          Original Language
                        </h2>
                        <p className="text-gray-400 font-medium">English</p>
                      </li>
                      <li>
                        <h2 className="font-semibold mt-2">Keywords</h2>
                        <ul>
                          <li className="border bg-gray-100 p-1 rounded-lg shadow w-fit text-gray-600 text-xs">
                            witch
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PopupWrapper
        isOpen={isImageExpand}
        children={<ExpandModal setState={setImageExpend} />}
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

export default MovieDetail;
