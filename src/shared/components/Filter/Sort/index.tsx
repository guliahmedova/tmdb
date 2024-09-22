import { useState } from "react";
import FilterHeader from "../FilterHeader";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Sort = () => {
  const [isBodyVisible, setBodyVisibility] = useState(false);

  return (
    <div className="rounded-lg shadow-lg border w-full">
      <FilterHeader
        title="Sort"
        setState={setBodyVisibility}
        isBodyVisible={isBodyVisible}
      />
      {isBodyVisible && (
        <div className="border-t">
          <p className="text-gray-500 p-4">Sort Results By</p>
          <div className="px-4 pb-4">
            <Select
              className="bg-slate-200"
              defaultValue={options[0]}
              options={options}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sort;
