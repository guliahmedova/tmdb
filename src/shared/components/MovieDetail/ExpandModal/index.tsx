import arrowNext from "@/assets/imgs/arrow-next.svg";
import closeIcon from "@/assets/imgs/close.svg";
import { IMovieImageResponse } from "@/shared/models/movie";
import { getImageUrl } from "@/shared/utils/getImageUrl";
import { SetStateAction, useState } from "react";
import img from "@/assets/imgs/img.svg";

interface IExpandModal {
  setState: React.Dispatch<SetStateAction<boolean>>;
  movieImages: IMovieImageResponse;
}

const ExpandModal = ({ setState, movieImages }: IExpandModal) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images =
    movieImages?.posters?.length > 0
      ? movieImages?.posters
      : movieImages?.backdrops;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images?.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images?.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-black bg-opacity-75 fixed inset-0 flex justify-center items-center z-50">
      <div className="relative bg-white shadow-lg rounded-lg lg:w-9/12 w-full h-[80vh] flex items-center justify-center">
        <img
          src={
            images?.length ? getImageUrl(images?.[currentIndex].file_path) : img
          }
          alt="Expanded Movie"
          className="max-h-full max-w-full object-contain"
        />

        <button
          className="absolute top-4 right-4 bg-gray-800 text-white rounded-full p-2"
          onClick={() => setState(false)}
        >
          <img src={closeIcon} alt="Close Modal" className="size-4 invert" />
        </button>

        <button
          className="absolute left-4 bg-gray-800 text-white rounded-full p-2"
          onClick={handlePrev}
        >
          <img
            src={arrowNext}
            alt="Previous"
            className="size-8 invert rotate-180"
          />
        </button>

        <button
          className="absolute right-4 bg-gray-800 text-white rounded-full p-2"
          onClick={handleNext}
        >
          <img src={arrowNext} alt="Next" className="size-8 invert" />
        </button>
      </div>
    </div>
  );
};

export default ExpandModal;
