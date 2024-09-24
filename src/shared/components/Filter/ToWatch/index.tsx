import doneIcon from "@/assets/imgs/done-round.svg";
import editIcon from "@/assets/imgs/edit.svg";
import { RootState, useAppDispatch } from "@/redux/app/store";
import { getMovieProviders, getRegions } from "@/redux/features/filterOptSlice";
import { getImageUrl } from "@/shared/utils/getImageUrl";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilterHeader from "../FilterHeader";

interface IToWatch {
  setFilterOpts: (optName: string, optValue: string) => void;
  region: string;
}

const ToWatch = ({ setFilterOpts, region }: IToWatch) => {
  const [isBodyVisible, setBodyVisibility] = useState(false);
  const [checkedOpts, setCheckedOpts] = useState<number[]>([]);
  const dispatch = useAppDispatch();
  const { regions, movieProviders } = useSelector(
    (state: RootState) => state.filterOpt
  );

  const toggleBox = (key: number) => {
    setCheckedOpts((prevState) =>
      prevState.includes(key)
        ? prevState?.filter((optKey) => optKey !== key)
        : [...prevState, key]
    );
  };

  useEffect(() => {
    if (checkedOpts.length > 0) {
      setFilterOpts("whereToProvider", checkedOpts.join("|"));
    }
  }, [checkedOpts]);

  useEffect(() => {
    dispatch(getRegions());
  }, []);

  useEffect(() => {
    dispatch(getMovieProviders({ watch_region: region }));
  }, [region]);

  return (
    <div className="rounded-lg shadow-lg border w-full my-4">
      <FilterHeader
        title="Where To Watch"
        count={movieProviders?.length}
        isBodyVisible={isBodyVisible}
        setState={setBodyVisibility}
      />
      {isBodyVisible && (
        <div className="border-t">
          <div className="p-4">
            <p className="text-gray-500 flex items-center gap-2">
              My Services
              <img src={editIcon} className="size-4" alt="my services" />
            </p>
            <label
              htmlFor="towatch"
              className="flex items-baseline mt-2 gap-2 cursor-pointer"
            >
              <input type="checkbox" id="towatch" className="accent-sky-400" />
              <span className="w-44">
                Restrict searches to my subscribed services?
              </span>
            </label>
          </div>
          <div className="border-t p-4">
            <p className="text-gray-500 flex items-center gap-2 mb-4">
              Country
            </p>
            <form className="max-w-sm mx-auto">
              <select
                defaultValue={regions?.[0].english_name}
                id="countries"
                className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(e) => setFilterOpts("whereToRegion", e.target.value)}
              >
                {regions?.map((region) => (
                  <option value={region.iso_3166_1} key={region.iso_3166_1}>
                    {region.native_name}
                  </option>
                ))}
              </select>
            </form>

            <ul className="mt-4 grid grid-cols-4 gap-2 items-center flex-wrap">
              {movieProviders?.map((provider) => (
                <li
                  key={provider.provider_id}
                  className="w-full h-full relative cursor-pointer"
                  onClick={() => toggleBox(provider.provider_id)}
                >
                  <img
                    src={getImageUrl(provider.logo_path)}
                    alt={provider.provider_name}
                    className="size-full rounded-lg"
                  />
                  {checkedOpts.includes(provider.provider_id) && (
                    <div className="bg-[#00A2CD] absolute inset-0 rounded-lg">
                      <img src={doneIcon} alt="done" />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToWatch;
