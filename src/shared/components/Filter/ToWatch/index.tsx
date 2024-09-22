import { useState } from "react";
import FilterHeader from "../FilterHeader";
import editIcon from "@/assets/imgs/edit.svg";
import netflixIcon from "@/assets/imgs/netflix-icon.svg";
import doneIcon from "@/assets/imgs/done-round.svg";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ToWatch = () => {
  const [isBodyVisible, setBodyVisibility] = useState(false);
  const [checkedOpts, setCheckedOpts] = useState<string[]>([]);

  const toggleBox = (key: string) => {
    setCheckedOpts((prevState) =>
      prevState.includes(key)
        ? prevState?.filter((optKey) => optKey !== key)
        : [...prevState, key]
    );
  };

  return (
    <div className="rounded-lg shadow-lg border w-full my-4">
      <FilterHeader
        title="Where To Watch"
        count={6}
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
              className="flex items-baseline mt-3 gap-2 cursor-pointer"
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
            <Select
              className="bg-slate-200"
              defaultValue={options[0]}
              options={options}
            />
            <ul className="mt-4 flex gap-2 items-center">
              <li
                className="size-12 relative cursor-pointer"
                onClick={() => toggleBox("netflix")}
              >
                <img
                  src={netflixIcon}
                  alt="netflix icon"
                  className="size-full rounded-lg"
                />
                {checkedOpts.includes("netflix") && (
                  <div className="bg-[#00A2CD] absolute inset-0 rounded-lg">
                    <img src={doneIcon} alt="done" />
                  </div>
                )}
              </li>
              <li
                className="size-12 relative cursor-pointer"
                onClick={() => toggleBox("google")}
              >
                <img
                  src={netflixIcon}
                  alt="netflix icon"
                  className="size-full rounded-lg"
                />
                {checkedOpts.includes("google") && (
                  <div className="bg-[#00A2CD] absolute inset-0 rounded-lg">
                    <img src={doneIcon} alt="done" />
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToWatch;
