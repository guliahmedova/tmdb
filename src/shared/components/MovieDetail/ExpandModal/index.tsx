import { SetStateAction } from "react";
import m from "@/assets/imgs/m1.jpg";
import like from "@/assets/imgs/like.svg";
import arrow from "@/assets/imgs/arrow-next.svg";
import closeIcon from "@/assets/imgs/close.svg";

interface IExpandModal {
  setState: React.Dispatch<SetStateAction<boolean>>;
}

const ExpandModal = ({ setState }: IExpandModal) => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-6/12 h-[80vh]">
      <div className="flex">
        <div className="w-6/12">
          <img
            src={m}
            alt=""
            className="size-full object-cover rounded-tl-lg rounded-bl-lg"
          />
        </div>

        <div className="w-6/12 p-4">
          <div className="text-right">
            <button
              className="cursor-pointer mr-0"
              onClick={() => setState(false)}
            >
              <img src={closeIcon} alt="close popup" className="size-8" />
            </button>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button>
              <img src={like} className="size-5 rotate-180" alt="dislike" />
            </button>
            <button>
              <img src={like} className="size-5" alt="like" />
            </button>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button>
              <img
                src={arrow}
                className="size-8 -scale-x-100"
                alt="previous image"
              />
            </button>
            <button>
              <img src={arrow} className="size-8" alt="next image" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandModal;
