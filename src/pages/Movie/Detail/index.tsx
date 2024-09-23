import addIcon from "@/assets/imgs/add-list.svg";
import arrowNext from "@/assets/imgs/arrow-next.svg";
import closeIcon from "@/assets/imgs/close.svg";
import downArrow from "@/assets/imgs/down-arrow.svg";
import expand from "@/assets/imgs/expand.svg";
import heartIcon from "@/assets/imgs/heart.svg";
import info from "@/assets/imgs/info.svg";
import playIcon from "@/assets/imgs/play.svg";
import saveIcon from "@/assets/imgs/save.svg";
import { RootState, useAppDispatch } from "@/redux/app/store";
import {
  getMovieById,
  getMovieCreditsById,
  getMovieImagesById,
  getMovieKeywordsById,
  getMovieRecommendationsById,
  getMovieReviewsById,
  getMovieVideosById,
} from "@/redux/features/movieSlice";
import CastCard from "@/shared/components/MovieDetail/Casts/CastCard";
import ExpandModal from "@/shared/components/MovieDetail/ExpandModal";
import Media from "@/shared/components/MovieDetail/Media";
import RecommendationCard from "@/shared/components/MovieDetail/RecommendationCard";
import ReviewsCard from "@/shared/components/MovieDetail/ReviewsCard";
import Carousel from "@/shared/reusable/Carousel";
import CircularProgress from "@/shared/reusable/CircularBar";
import PopupWrapper from "@/shared/reusable/PopupWrapper";
import { getImageUrl } from "@/shared/utils/getImageUrl";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const MovieDetail = () => {
  const [activeSocialTab, setActiveSocialTab] = useState<
    "review" | "discussion"
  >("review");
  const [isImageExpand, setImageExpend] = useState(false);
  const [isTrailerPopupVisible, setTrailerPopupVisibility] = useState(false);
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const movie = useSelector((state: RootState) => state.movie.movieDetails);
  const {
    movieImages,
    movieKeywords,
    movieReviews,
    movieCredits,
    movieRecommendations,
    movieVideos,
  } = useSelector((state: RootState) => state.movie);

  useEffect(() => {
    if (id) {
      dispatch(getMovieById({ movieId: id }));
      dispatch(getMovieImagesById({ movieId: id }));
      dispatch(getMovieKeywordsById({ movieId: id }));
      dispatch(getMovieReviewsById({ movieId: id }));
      dispatch(getMovieCreditsById({ movieId: id }));
      dispatch(getMovieRecommendationsById({ movieId: id }));
      dispatch(getMovieVideosById({ movieId: id }));
    }
  }, []);

  return (
    <>
      <div className="flex justify-center bg-white">
        <div className="w-full">
          <div>
            <div className="flex justify-center pt-4 border">
              <ul className="flex lg:gap-10 gap-5">
                <li className="flex xl:text-base text-sm items-baseline gap-1 xl:pb-4 pb-3 text-slate-600 border-b-4 border-sky-500">
                  Overview <img src={downArrow} className="size-2" alt="" />
                </li>
                <li className="flex xl:text-base text-sm items-baseline gap-1 xl:pb-4 pb-3 text-slate-600 border-b-4 border-transparent">
                  Media <img src={downArrow} className="size-2" alt="" />
                </li>
                <li className="flex xl:text-base text-sm items-baseline gap-1 xl:pb-4 pb-3 text-slate-600 border-b-4 border-transparent">
                  Fandom <img src={downArrow} className="size-2" alt="" />
                </li>
                <li className="flex xl:text-base text-sm items-baseline gap-1 xl:pb-4 pb-3 text-slate-600 border-b-4 border-transparent">
                  Share <img src={downArrow} className="size-2" alt="" />
                </li>
              </ul>
            </div>

            <div
              className="py-10 flex justify-center lg:px-0 px-10 bg-no-repeat bg-center bg-cover relative"
              // style={{
              //   backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieImages?.posters?.[0].file_path})`,
              // }}
            >
              <div className="absolute inset-0 bg-black opacity-80"></div>
              <div className="max-w-7xl w-full flex gap-8 md:flex-row flex-col md:px-0 px-10 relative">
                {movie?.poster_path && (
                  <div
                    className="relative w-[300px] h-[450px] cursor-pointer group rounded-lg md:mx-0 mx-auto"
                    onClick={() => setImageExpend(true)}
                  >
                    <img
                      src={getImageUrl(movie?.poster_path)}
                      alt={movie?.original_title}
                      className="w-full h-full object-cover shadow rounded-lg"
                    />
                    <div className="absolute size-full backdrop-blur-lg bg-black/10 inset-0 flex-col justify-center items-center rounded-lg hidden group-hover:flex shadow">
                      <div className="flex xl:gap-3 items-center xl:flex-row flex-col">
                        <img
                          src={expand}
                          alt="expand"
                          className="xl:size-10 size-6"
                        />
                        <span className="text-white font-bold">Expand</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="md:mt-4">
                  <h2 className="md:text-4xl text-lg font-bold text-white md:text-left text-center">
                    {movie?.original_title}
                    <span className="font-normal text-slate-50"> (2014)</span>
                  </h2>

                  <div className="mt-2 flex items-center gap-2 justify-center md:justify-start">
                    <span className="border border-gray-500 rounded-lg p-1 text-gray-500 xl:text-base text-xs">
                      TV-14
                    </span>
                    <ul className="text-gray-50 flex items-center gap-1 xl:text-base text-xs">
                      <li className="hover:text-gray-500">
                        <Link to="#">Drama,</Link>
                      </li>
                      <li className="hover:text-gray-500">
                        <Link to="#"> Sci-Fi & Fantasy </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="md:my-10 my-3 flex items-center gap-4 relative md:justify-start justify-center">
                    <CircularProgress
                      percentage={movie?.vote_average}
                      top={5}
                      left={0}
                      size={68}
                      width={64}
                      height={64}
                      percentageFontSize={8}
                      percentageTop={0}
                      fontSize={18}
                    />
                    <span className="font-bold text-white lg:w-12 md:text-wrap text-nowrap md:text-base text-xs lg:ml-20 lg:mr-0 hidden lg:inline-block">
                      User Score
                    </span>
                    <span className="size-9 cursor-pointer lg:inline-block text-2xl scale-110 hover:scale-125 text-center relative group hidden">
                      😍
                      <span className="absolute bg-slate-700 border border-gray-50 px-2 rounded-lg top-6 left-8 text-white text-[10px] text-nowrap hidden group-hover:inline-block">
                        Smilling face with heart eyes
                      </span>
                    </span>
                    <button className="flex items-center md:gap-2 gap-1 text-xs md:text-base shadow hover:scale-x-105 md:bg-dark_blue p-2 text-white font-semibold rounded-2xl lg:ml-0 md:ml-20">
                      What's your
                      <span className="border-b-2 border-sky-500">Vibe?</span>
                      <div className="relative group md:inline-block hidden">
                        <img src={info} alt="info" className="size-4" />
                        <span className="absolute -top-8 left-8 bg-dark_blue text-white rounded-lg shadow p-2 w-72 text-left scale-105 hidden  group-hover:inline-block">
                          Welcome to Vibes, TMDB's new rating system! For more
                          information, visit the contribution bible.
                        </span>
                      </div>
                    </button>
                  </div>

                  <div className="md:flex hidden items-center gap-5">
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
                      {movie?.tagline}
                    </span>
                    <div>
                      <h5 className="font-bold md:text-lg text-white">
                        Overview
                      </h5>
                      <p className="font-medium text-xs md:text-base text-slate-100">
                        {movie?.overview}
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
              <div className="flex md:flex-row flex-col gap-4">
                <div className="md:w-[80%] w-full">
                  {movieCredits?.length > 0 && (
                    <Carousel title="Series Cast" loading="succeeded">
                      {movieCredits?.slice(0, 9)?.map((credit) => (
                        <CastCard key={credit.id} credit={credit} />
                      ))}
                      <div className="min-w-36 w-36 text-xs ml-4 h-[270px] flex gap-2 items-center justify-center">
                        <Link
                          to={`/${id}/cast`}
                          className="hover:text-gray-500"
                        >
                          View More
                        </Link>
                        <img
                          src={arrowNext}
                          className="size-6"
                          alt="view more"
                        />
                      </div>
                    </Carousel>
                  )}

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
                          Discussions 0
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 md:px-0 px-8">
                      {activeSocialTab === "review" ? (
                        movieReviews?.length > 0 ? (
                          movieReviews?.map((review) => (
                            <ReviewsCard key={review.id} review={review} />
                          ))
                        ) : (
                          <p className="text-slate-500 pl-10">
                            We don't have any reviews for {movie.title}. Would
                            you like to write one?
                          </p>
                        )
                      ) : (
                        <p className="text-slate-500 pl-10">
                          We don't have any discussions for {movie.title}. Would
                          you like to write one?
                        </p>
                      )}
                    </div>
                  </div>

                  <Media movieImages={movieImages} movieVideos={movieVideos} />

                  {movieRecommendations?.length > 0 && (
                    <Carousel
                      title="Recommendations"
                      loading="succeeded"
                      sectionTop={1}
                    >
                      {movieRecommendations?.map((recommendation) => (
                        <RecommendationCard
                          key={recommendation.id}
                          recommendation={recommendation}
                        />
                      ))}
                    </Carousel>
                  )}
                </div>

                <div className="w-full md:px-0 px-8 md:pb-0 pb-4">
                  <div className="md:flex hidden items-center gap-5">
                    <button className="bg-sky-500 shadow-lg text-white font-semibold rounded-lg px-3 py-2 text-nowrap flex items-center gap-3">
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

                  <div className="md:mt-4 ">
                    <h2 className="font-semibold">Facts</h2>
                    <ul>
                      <li>
                        <h2 className="font-semibold mt-2">Status</h2>
                        <p className="text-gray-400 font-medium">
                          {movie?.status}
                        </p>
                      </li>
                      {movie?.genres?.length > 0 && (
                        <li>
                          <h2 className="font-semibold mt-2">Type</h2>
                          <p className="text-gray-400 font-medium">
                            {movie?.genres?.[0].name}
                          </p>
                        </li>
                      )}
                      <li>
                        <h2 className="font-semibold mt-2">Revenue</h2>
                        <p className="text-gray-400 font-medium">
                          ${movie?.revenue}
                        </p>
                      </li>
                      <li>
                        <h2 className="font-semibold mt-2">Budget</h2>
                        <p className="text-gray-400 font-medium">
                          ${movie?.budget}
                        </p>
                      </li>
                      <li>
                        <h2 className="font-semibold mt-2">
                          Original Language
                        </h2>
                        <p className="text-gray-400 font-medium">
                          {movie.original_language}
                        </p>
                      </li>
                      <li>
                        <h2 className="font-semibold mt-2">Keywords</h2>
                        <ul className="mt-2 flex gap-2 flex-wrap">
                          {movieKeywords?.length > 0 ? (
                            movieKeywords?.map((keyword) => (
                              <li
                                className="border bg-gray-100 p-1 rounded-lg shadow w-fit text-gray-600 text-xs"
                                key={keyword.id}
                              >
                                {keyword.name}
                              </li>
                            ))
                          ) : (
                            <p className="text-slate-400">
                              No keywords have been added.
                            </p>
                          )}
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
