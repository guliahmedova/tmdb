import arrow from "@/assets/imgs/arrow-down.svg";
import searchIcon from "@/assets/imgs/search_black.svg";
import { RootState, useAppDispatch } from "@/redux/app/store";
import { getLanguages } from "@/redux/features/filterOptSlice";
import OutsideWrapper from "@/shared/components/OutsideWrapper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SelectBox = () => {
  const [isLangDropdownVisible, setLangDropdownVisibility] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const languages = useSelector(
    (state: RootState) => state.filterOpt.languages
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  return (
    <OutsideWrapper setDropdownVisibility={setLangDropdownVisibility}>
      <div className="2xl:relative 2xl:inline-block hidden">
        <button
          className="border-2 border-white uppercase cursor-pointer duration-300 ease-in-out text-md rounded text-white bg-transparent p-1 px-2 hover:bg-white hover:text-slate-800"
          onClick={() => setLangDropdownVisibility(true)}
        >
          EN
        </button>

        {isLangDropdownVisible && (
          <div className="absolute bg-white right-1/2 translate-x-1/2 top-12 shadow border rounded py-4 px-4 w-[300px]">
            <div className="absolute -top-3 left-[45%] translate-x-1/2 h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white"></div>

            {/* <h2 className="text-xl text-slate-800 font-bold whitespace-nowrap mb-4">
              Language Preferences
            </h2>

            <div>
              <div>
                <div className="flex items-center justify-between font-medium text-slate-500">
                  <span>Default Language</span>
                  <button>Reset</button>
                </div>
                <div className="bg-red-200 mt-1">
                  <Select
                    className="bg-slate-200"
                    defaultValue={selectedOption}
                    // onChange={setSelectedOption}
                    options={languages}
                  />
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center font-medium text-slate-500">
                  <span>Fallback Language</span>
                </div>
                <div className="bg-red-200 mt-1">
                  <Select
                    className="bg-slate-200"
                    defaultValue={selectedOption}
                    // onChange={setSelectedOption}
                    options={options}
                  />
                </div>
              </div>
            </div> */}

            <div className="w-full font-medium h-80">
              <div className="bg-white w-full p-2 flex items-center justify-between rounded font-semibold text-gray-600">
                Country
                <img alt="arrow" src={arrow} className="size-6" />
              </div>
              <ul className="bg-white mt-2 font-medium max-h-60 overflow-y-auto">
                <div className="flex items-center border border-sky-50 px-2 sticky top-0 bg-white">
                  <img
                    src={searchIcon}
                    alt="search"
                    className="size-4 opacity-50"
                  />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    name="searchInput"
                    onChange={(e) =>
                      setSearchInput(e.target.value.toLowerCase())
                    }
                    className="placeholder:text-gray-400 font-medium text-xs w-full rounded p-2 outline-none"
                  />
                </div>
                {languages?.map((lang) => (
                  <li
                    className={`text-sm p-2 px-4 hover:bg-sky-50 cursor-pointer text-gray-600 ${
                      lang.english_name.toLowerCase().startsWith(searchInput)
                        ? "block"
                        : "hidden"
                    }`}
                    key={lang.iso_639_1}
                  >
                    {lang.english_name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </OutsideWrapper>
  );
};

export default SelectBox;
