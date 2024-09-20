import movieCover from "@/assets/imgs/m1.jpg";
import moreIcon from "@/assets/imgs/more.svg";
import { Link } from "react-router-dom";

const CarouselCard = () => {
  return (
    <div className="ml-10 w-[150px] min-w-56 h-full relative">
      <Link to="#" className="w-full h-[225px] rounded-md inline-block">
        <img
          src={movieCover}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>

      <div className="options | absolute top-2 right-2">
        <div className=" size-6 rounded-full bg-white transition-all duration-200 ease-in-out hover:bg-sky-400 hover:opacity-100 opacity-60 cursor-pointer">
          <img src={moreIcon} alt="" />
        </div>
      </div>

      <div className="content | relative">
        <div className="rang-circle">67</div>
        <div className="pt-6 px-3">
          <Link
            to="#"
            className="text-dark_blue font-bold mb-1 block hover:text-sky-400 duration-200 ease-in-out"
          >
            Agatha All Along
          </Link>
          <span className="text-slate-600">Sep 18, 2024</span>
        </div>
      </div>
      <div className="hover"></div>
    </div>
  );
};

export default CarouselCard;
