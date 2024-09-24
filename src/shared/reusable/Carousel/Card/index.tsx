import heartIcon from "@/assets/imgs/heart.svg";
import moreIcon from "@/assets/imgs/more.svg";
import { useAppDispatch } from "@/redux/app/store";
import { addFavorite } from "@/redux/features/favoriteSlice";
import OutsideWrapper from "@/shared/components/OutsideWrapper";
import { IMovie } from "@/shared/models/movie";
import { getImageUrl } from "@/shared/utils/getImageUrl";
import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import CircularBar from "../../CircularBar";

const CarouselCard = ({
  movie,
  bgBlur,
}: {
  movie: IMovie;
  bgBlur?: boolean;
}) => {
  const [isMoreOptionsVisible, setMoreOptionsVisibility] = useState(false);
  const [isAddedFavorite, setIsAddedFavorite] = useState(false);
  const dispatch = useAppDispatch();

  const handleFavoriteClick = () => {
    const newFavoriteState = !isAddedFavorite;
    setIsAddedFavorite(newFavoriteState);

    if (movie.id) {
      dispatch(
        addFavorite({
          media_type: movie.media_type,
          media_id: movie.id,
          favorite: newFavoriteState,
        })
      );

      if (newFavoriteState) {
        alert("Added Successfully!");
      } else {
        alert("Removed Successfully!");
      }
    }
  };

  const svgFilter = isAddedFavorite
    ? "invert(20%) sepia(100%) saturate(7493%) hue-rotate(-4deg) brightness(106%) contrast(105%)"
    : "invert(0%) sepia(98%) saturate(2%) hue-rotate(180deg) brightness(93%) contrast(101%)";

  return (
    <>
      <OutsideWrapper setDropdownVisibility={setMoreOptionsVisibility}>
        <div className="ml-5 w-[150px] h-full relative shadow">
          <Link
            to={`/movie/${movie.id}`}
            className="w-full h-[225px] rounded-md inline-block"
          >
            <img
              src={getImageUrl(movie.backdrop_path)}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>

          <div
            className="absolute top-4 right-4"
            onClick={() => {
              setMoreOptionsVisibility(true);
            }}
          >
            <div className="size-6 rounded-full bg-white transition-all duration-200 ease-in-out hover:bg-sky-400 hover:opacity-100 opacity-60 cursor-pointer">
              <img src={moreIcon} alt="" />
            </div>
          </div>

          {isMoreOptionsVisible && (
            <div className="bg-white border shadow py-2 flex flex-col rounded absolute top-8 -right-12 w-32 z-20">
              <button className="text-slate-600 outline-none hover:text-white py-2 hover:bg-dark_blue duration-200 ease-in-out border-b border-b-slate-400">
                Add to list
              </button>
              <button
                className="text-slate-600 outline-none hover:text-white py-2 hover:bg-dark_blue duration-200 ease-in-out border-b border-b-slate-400 flex items-center justify-center gap-2"
                onClick={handleFavoriteClick}
              >
                <img
                  src={heartIcon}
                  alt="add to favorite"
                  className="w-[18px] h-[18px]"
                  style={{ filter: svgFilter }}
                />
                Favorite
              </button>
              <button className="text-slate-600 outline-none hover:text-white py-2 hover:bg-dark_blue duration-200 ease-in-out border-b border-b-slate-400">
                Watchlist
              </button>
              <button className="text-slate-600 outline-none hover:text-white py-2 hover:bg-dark_blue duration-200 ease-in-out">
                Your rating
              </button>
            </div>
          )}

          <div className=" relative">
            <CircularBar percentage={movie.vote_average * 10} />
            <div className="pt-6 px-3">
              <Link
                to={`/movie/${movie.id}`}
                className="text-dark_blue font-bold mb-1 block hover:text-sky-400 duration-200 ease-in-out leading-4"
              >
                {movie.original_title || movie.original_name}
              </Link>
              <span className="text-slate-600">
                {moment(movie.first_air_date || movie.release_date).format(
                  "ll"
                )}
              </span>
            </div>
          </div>

          {isMoreOptionsVisible && bgBlur && (
            <div className="absolute inset-0 backdrop-blur-xl bg-black/50 rounded"></div>
          )}
        </div>
      </OutsideWrapper>
    </>
  );
};

export default CarouselCard;
