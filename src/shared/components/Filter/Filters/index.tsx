import { useState } from "react";
import FilterHeader from "../FilterHeader";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Filters = () => {
  const [isBodyVisible, setBodyVisibility] = useState(true);
  const [isAvailabilitieVisible, setAvailabilitiesVisibility] = useState(false);
  const [genres, setGenres] = useState<string[]>([]);

  const handleGenres = (genre: string) => {
    setGenres((prevState) =>
      prevState.includes(genre)
        ? prevState?.filter((g) => g !== genre)
        : [...prevState, genre]
    );
  };

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
            <p className="text-gray-500">Show Me</p>
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
            <p className="text-gray-500">Availabilities</p>
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
            <p className="text-gray-500">Release Dates</p>
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
            <div className="mt-4">
              <ul className="flex gap-2">
                <li
                  className={`${
                    genres.includes("action")
                      ? "bg-sky-400 text-white border-sky-400"
                      : ""
                  } border-2 text-xs rounded-2xl px-2 py-1 w-fit cursor-pointer hover:bg-sky-400 hover:text-white hover:border-sky-400`}
                  onClick={() => handleGenres("action")}
                >
                  Action
                </li>
                <li
                  className={`${
                    genres.includes("Crime")
                      ? "bg-sky-400 text-white border-sky-400"
                      : ""
                  } border-2 text-xs rounded-2xl px-2 py-1 w-fit cursor-pointer hover:bg-sky-400 hover:text-white hover:border-sky-400`}
                  onClick={() => handleGenres("Crime")}
                >
                  Crime
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 border-t">
            <p className="text-gray-500">Certification</p>
          </div>

          <div className="p-4 border-t">
            <p className="text-gray-500">Language</p>
            <Select
              className="bg-slate-200 mt-4"
              options={options}
              defaultValue={options[0]}
            />
          </div>

          <div className="p-4 border-t">
            <p className="text-gray-500">User Score</p>
          </div>
          <div className="p-4 border-t">
            <p className="text-gray-500">Minimum User Votes</p>
          </div>
          <div className="p-4 border-t">
            <p className="text-gray-500">Runtime</p>
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
