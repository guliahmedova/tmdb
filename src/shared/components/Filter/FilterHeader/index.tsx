import arrowDown from "@/assets/imgs/arrow-down.svg";
import { SetStateAction } from "react";

interface IFilterHeader {
  title: string;
  setState: React.Dispatch<SetStateAction<boolean>>;
  isBodyVisible: boolean;
  count?: number;
}

const FilterHeader = ({
  title,
  setState,
  count,
  isBodyVisible,
}: IFilterHeader) => {
  return (
    <div
      className="flex items-center justify-between font-semibold p-4 cursor-pointer"
      onClick={() => setState((prevState) => !prevState)}
    >
      {title}
      <div className="flex items-center gap-1">
        {count && (
          <span className="bg-gray-100 text-gray-500 rounded-lg text-xs px-2">
            {count}
          </span>
        )}
        <img
          src={arrowDown}
          className={`size-5 ${!isBodyVisible ? "-rotate-90" : ""}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default FilterHeader;
