import { useState } from "react";
import Select from "react-select";
import OutsideWrapper from "../OutsideWrapper";

const LanguageDropdown = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedOption, _] = useState(null);
  const [isLangDropdownVisible, setLangDropdownVisibility] = useState(false);

  return (
    <OutsideWrapper setDropdownVisibility={setLangDropdownVisibility}>
      <button
        className="border-2 border-white uppercase cursor-pointer duration-300 ease-in-out text-md rounded text-white bg-transparent p-1 px-2 hover:bg-white hover:text-slate-800"
        onClick={() => setLangDropdownVisibility(true)}
      >
        EN
      </button>

      {isLangDropdownVisible && (
        <div className="absolute bg-white right-1/2 translate-x-1/2 top-12 shadow border rounded py-4 px-4 w-[300px]">
          <div className="absolute -top-3 left-[45%] translate-x-1/2 h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white"></div>

          <h2 className="text-xl text-slate-800 font-bold whitespace-nowrap mb-4">
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
                  options={options}
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
          </div>
        </div>
      )}
    </OutsideWrapper>
  );
};

export default LanguageDropdown;
