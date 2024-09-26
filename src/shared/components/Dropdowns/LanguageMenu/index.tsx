import arrow from "@/assets/imgs/arrow-down.svg";
import searchIcon from "@/assets/imgs/search_black.svg";
import { RootState, useAppDispatch } from "@/redux/app/store";
import { getLanguages } from "@/redux/features/filterOptSlice";
import { setLangToStorage } from "@/redux/features/translationSlice";
import OutsideWrapper from "@/shared/components/OutsideWrapper";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const LanguageDropdown = () => {
  const [isLangDropdownVisible, setLangDropdownVisibility] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const currentLang = useSelector((state: RootState) => state.translation.lang);
  const [selectedLang, setSelectedLang] = useState(currentLang || "en");
  const languages = useSelector(
    (state: RootState) => state.filterOpt.languages
  );
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  const changeLanguage = (lng: string) => {
    dispatch(setLangToStorage(lng));
    i18n.changeLanguage(lng);
  };

  return (
    <OutsideWrapper setDropdownVisibility={setLangDropdownVisibility}>
      <div className="2xl:relative 2xl:inline-block hidden">
        <button
          className="border-2 border-white uppercase cursor-pointer duration-300 ease-in-out text-md rounded text-white bg-transparent p-1 px-2 hover:bg-white hover:text-slate-800 min-w-8"
          onClick={() => setLangDropdownVisibility((prev) => !prev)}
        >
          {selectedLang.toUpperCase()}
        </button>

        {isLangDropdownVisible && (
          <div className="absolute bg-white right-1/2 translate-x-1/2 top-12 shadow border rounded py-4 px-4 w-[300px]">
            <div className="absolute -top-3 left-[45%] translate-x-1/2 h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white"></div>
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
                    autoFocus
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
                    } ${
                      lang.iso_639_1.toLowerCase() ===
                        selectedLang.toLowerCase() && "bg-sky-50"
                    }`}
                    onClick={() => {
                      if (
                        lang.iso_639_1.toLowerCase() !==
                        selectedLang.toLowerCase()
                      ) {
                        setSelectedLang(lang.iso_639_1);
                        setSearchInput("");
                        setLangDropdownVisibility(false);
                        changeLanguage(lang.iso_639_1);
                      }
                    }}
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

export default LanguageDropdown;
