import arrowNext from "@/assets/imgs/arrow-next.svg";
import closeIcon from "@/assets/imgs/close.svg";
import downArrow from "@/assets/imgs/down-arrow.svg";
import playIcon from "@/assets/imgs/play.svg";
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
import DetailBanner from "@/shared/components/MovieDetail/DetailBanner";
import Media from "@/shared/components/MovieDetail/Media";
import RecommendationCard from "@/shared/components/MovieDetail/RecommendationCard";
import ReviewsCard from "@/shared/components/MovieDetail/ReviewsCard";
import Carousel from "@/shared/reusable/Carousel";
import PopupWrapper from "@/shared/reusable/PopupWrapper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const MovieDetail = () => {
  const [activeSocialTab, setActiveSocialTab] = useState<
    "review" | "discussion"
  >("review");
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
      dispatch(getMovieById({ movieId: id, language: "fr" }));
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
          <div className="">
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

            <DetailBanner
              title={movie?.title}
              genres={movie?.genres}
              overview={movie.overview}
              vote_average={movie?.vote_average}
              movieImage={movie?.backdrop_path}
              images={movieImages}
            />
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
                    <div className="flex items-center flex-wrap gap-5 lg:pl-10 px-5">
                      <h3 className="font-semibold lg:text-2xl text-dark_blue pb-3">
                        Social
                      </h3>
                      <div className="flex items-center gap-4 font-semibold">
                        <span
                          className={`pb-2 lg:text-base text-sm ${
                            activeSocialTab === "review"
                              ? "border-b-2 border-black"
                              : "border-b-2 border-transparent "
                          } cursor-pointer`}
                          onClick={() => setActiveSocialTab("review")}
                        >
                          Reviews {movieReviews?.length}
                        </span>
                        <span
                          className={`pb-2 lg:text-base text-sm ${
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
                          <p className="text-slate-500 lg:pl-10 lg:text-base text-sm">
                            We don't have any reviews for {movie.title}. Would
                            you like to write one?
                          </p>
                        )
                      ) : (
                        <p className="text-slate-500 lg:pl-10 lg:text-base text-sm">
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
                  <div className="md:flex hidden items-center gap-5 flex-wrap">
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
