import plusIcon from "@/assets/imgs/plus.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import OutsideWrapper from "../../OutsideWrapper";

const NewDropdown = () => {
  const [isAddDropdownVisible, setAddDropdownVisibility] = useState(false);

  const toggleDropdown = () => {
    setAddDropdownVisibility(true);
  };

  return (
    <OutsideWrapper setDropdownVisibility={setAddDropdownVisibility}>
      <div className="relative 2xl:inline-block hidden">
        <img
          src={plusIcon}
          alt="add"
          className="size-5 cursor-pointer"
          onClick={toggleDropdown}
        />
        {isAddDropdownVisible && (
          <div className="absolute bg-white shadow border rounded py-2 right-1/2 translate-x-1/2 top-8">
            <div className="absolute -top-3 left-[42%] translate-x-1/2 h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white"></div>
            <Link
              className="py-2 pl-4 pr-8 block hover:bg-slate-900 hover:text-white whitespace-nowrap"
              to="#"
            >
              Add New Movie
            </Link>
            <Link
              className="py-2 pl-4 pr-8 block hover:bg-slate-800 hover:text-white whitespace-nowrap"
              to="#"
            >
              Add New TV Show
            </Link>
          </div>
        )}
      </div>
    </OutsideWrapper>
  );
};

export default NewDropdown;
