import { RootState, useAppDispatch } from "@/redux/app/store";
import {
  getGenres,
  getLanguages,
  searchLanguages,
} from "@/redux/features/filterOptSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OutsideWrapper from "../../OutsideWrapper";
import FilterHeader from "../FilterHeader";
import RangeSlider from "../RangeSlider";

interface IFilters {
  setFilterOpts: (optName: string, optValue: string) => void;
}

const Filters = ({ setFilterOpts }: IFilters) => {
  const [isBodyVisible, setBodyVisibility] = useState(false);
  const [isAvailabilitieVisible, setAvailabilitiesVisibility] = useState(false);
  const [toggleLangBtn, setToggleLangBtn] = useState(false);
  const [selectedLang, setSelectedLang] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { languages, movieGenres } = useSelector(
    (state: RootState) => state.filterOpt
  );
  const dispatch = useAppDispatch();

  const [genres, setGenres] = useState<number[]>([]);

  useEffect(() => {
    dispatch(getLanguages());
    dispatch(getGenres());
  }, []);

  const handleLangSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    dispatch(searchLanguages(event.target.value));
  };

  const handleGenres = (genreId: number) => {
    setGenres((prevState) =>
      prevState.includes(genreId)
        ? prevState?.filter((g) => g !== genreId)
        : [...prevState, genreId]
    );
  };

  useEffect(() => {
    if (genres.length > 0) {
      setFilterOpts("with_genres", genres?.join(","));
    }
  }, [genres]);

  return (
    <div className="rounded-lg shadow-lg border w-full mb-4">
      <FilterHeader
        title="Filters"
        setState={setBodyVisibility}
        isBodyVisible={isBodyVisible}
      />
      {isBodyVisible && (
        <div className="border-t">
          <div className="p-4">
            <p className="text-gray-500 mb-2">Show Me</p>
            <ul>
              <li>
                <label className="flex gap-2" htmlFor="Everything">
                  <input
                    type="radio"
                    className="accent-sky-300"
                    id="Everything"
                  />
                  Everything
                </label>
              </li>
              <li>
                <label className="flex gap-2" htmlFor="notseen">
                  <input type="radio" className="accent-sky-300" id="notseen" />
                  Movies I Haven't Seen
                </label>
              </li>
              <li>
                <label className="flex gap-2" htmlFor="haveseen">
                  <input
                    type="radio"
                    className="accent-sky-300"
                    id="haveseen"
                  />
                  Movies I Have Seen
                </label>
              </li>
            </ul>
          </div>

          <div className="p-4 border-t">
            <p className="text-gray-500 mb-2">Availabilities</p>
            <label className="flex gap-2" htmlFor="searchaval">
              <input
                type="checkbox"
                className="accent-sky-300"
                checked={isAvailabilitieVisible}
                id="searchaval"
                onChange={(e) => setAvailabilitiesVisibility(e.target.checked)}
              />
              Search all availabilities?
            </label>
            {isAvailabilitieVisible && (
              <div>
                <label className="flex gap-2" htmlFor="Stream">
                  <input
                    type="checkbox"
                    className="accent-sky-300"
                    id="Stream"
                    checked
                  />
                  Stream
                </label>
                <label className="flex gap-2" htmlFor="Free">
                  <input
                    type="checkbox"
                    className="accent-sky-300"
                    checked
                    id="Free"
                  />
                  Free
                </label>
                <label className="flex gap-2" htmlFor="Ads">
                  <input
                    type="checkbox"
                    className="accent-sky-300"
                    checked
                    id="Ads"
                  />
                  Ads
                </label>
                <label className="flex gap-2" htmlFor="Rent">
                  <input
                    type="checkbox"
                    className="accent-sky-300"
                    checked
                    id="Rent"
                  />
                  Rent
                </label>
                <label className="flex gap-2" htmlFor="Buy">
                  <input
                    type="checkbox"
                    className="accent-sky-300"
                    checked
                    id="Buy"
                  />
                  Buy
                </label>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <p className="text-gray-500 mb-2">Release Dates</p>
            <label className="flex gap-2" htmlFor="searchall">
              <input
                type="checkbox"
                className="accent-sky-300"
                id="searchall"
              />
              Search all releases?
            </label>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 text-xs">from</span>
                <input type="date" className="border rounded-lg p-2" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs">to</span>
                <input type="date" className="border rounded-lg p-2" />
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <p className="text-gray-500">Genres</p>
            <div className="mt-2">
              <ul className="flex gap-2 flex-wrap">
                {movieGenres?.map((genre) => (
                  <li
                    key={genre.id}
                    className={`${
                      genres.includes(genre.id)
                        ? "bg-sky-400 text-white border-sky-400"
                        : ""
                    } border-2 text-xs rounded-2xl px-2 py-1 w-fit cursor-pointer hover:bg-sky-400 hover:text-white hover:border-sky-400`}
                    onClick={() => handleGenres(genre.id)}
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 border-t">
            <p className="text-gray-500 mb-2">Certification</p>
          </div>

          <div className="p-4 border-t">
            <p className="text-gray-500 mb-2">Language</p>
            <OutsideWrapper setDropdownVisibility={setToggleLangBtn}>
              <div className="relative w-full">
                <button
                  id="dropdownSearchButton"
                  data-dropdown-toggle="dropdownSearch"
                  data-dropdown-placement="bottom"
                  className="text-gray-500 w-full outline-none border-none font-semibold px-5 py-2 text-center inline-flex items-center justify-between bg-gray-200 cursor-pointer"
                  type="button"
                  onClick={() => setToggleLangBtn((prev) => !prev)}
                >
                  {selectedLang ? selectedLang : "None Selected"}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {toggleLangBtn && (
                  <div
                    id="dropdownSearch"
                    className="z-10 bg-white rounded-lg shadow w-full cursor-pointer absolute"
                  >
                    <div className="p-3">
                      <label htmlFor="input-group-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          autoFocus
                          value={searchTerm}
                          onChange={handleLangSearch}
                          id="input-group-search"
                          className="block w-full p-2 ps-10 text-sm text-gray-900 outline-none bg-gray-50 border border-sky-400"
                        />
                      </div>
                    </div>
                    <ul
                      className="h-48 px-4 pb-3 overflow-y-auto"
                      aria-labelledby="dropdownSearchButton"
                    >
                      {languages?.map((lang) => (
                        <li
                          key={lang.iso_639_1}
                          className="text-gray-500 mb-1 hover:bg-gray-50"
                          onClick={() => {
                            setFilterOpts("language", lang.iso_639_1);
                            setSelectedLang(lang.english_name);
                            setToggleLangBtn(false);
                          }}
                        >
                          {lang.english_name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </OutsideWrapper>
          </div>

          <div className="p-4 border-t">
            <p className="text-gray-500 mb-2">User Score</p>
            <RangeSlider />
          </div>
          <div className="p-4 border-t">
            <p className="text-gray-500 mb-2">Minimum User Votes</p>
          </div>
          <div className="p-4 border-t">
            <p className="text-gray-500 mb-2">Runtime</p>
            <RangeSlider />
          </div>
          <div className="p-4 border-t">
            <p className="text-gray-500">Keywords</p>
            <input
              type="text"
              placeholder="Filter by keywords"
              className="border-2 rounded-lg w-full p-2 mt-2"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
