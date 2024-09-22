import downArrow from "@/assets/imgs/down-arrow.svg";
import m from "@/assets/imgs/m1.jpg";
import expand from "@/assets/imgs/expand.svg";
import info from "@/assets/imgs/info.svg";
import saveIcon from "@/assets/imgs/save.svg";
import heartIcon from "@/assets/imgs/heart.svg";
import playIcon from "@/assets/imgs/play.svg";
import addIcon from "@/assets/imgs/add-list.svg";
import { Link } from "react-router-dom";
import CircularProgress from "@/shared/reusable/CircularBar";
import Carousel from "@/shared/reusable/Carousel";
import CastCard from "@/shared/components/MovieDetail/CastCard";

const MovieDetail = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <div>
          {/* --- navbar --- */}
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
          {/* --- navbar --- */}

          {/* DETAILS */}
          <div className="py-10 flex justify-center bg-black">
            <div className="max-w-7xl w-full flex gap-6">
              <div className="relative w-3/12 cursor-pointer group rounded-lg">
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
                  <div className="flex items-center gap-2 hover:text-slate-200 text-white font-bold cursor-pointer">
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
                    <span className="text-slate-50 text-xs block">Creator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* DETAILS */}
        </div>

        <div className="mt-4 flex justify-center">
          <div className="max-w-7xl w-full bg-red-400">
            <div className="flex items-center gap-8">
              <div className="w-10/12 bg-purple-300">
                <Carousel title="Series Cast">
                  <CastCard />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
