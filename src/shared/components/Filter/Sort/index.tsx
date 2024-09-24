import { useState } from "react";
import Select from "react-select";
import FilterHeader from "../FilterHeader";

interface ISort {
  setFilterOpts: (optName: string, optValue: string) => void;
}

const options = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  { value: "primary_release_date.desc", label: "Release Date Descending" },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "title.desc", label: "Title (A-Z)" },
  { value: "title.asc", label: "Title (Z-A)" },
  { value: "revenue.desc", label: "Revenue Descending" },
  { value: "revenue.asc", label: "Revenue Asscending" },
  { value: "vote_count.desc", label: "Vote Count Descending" },
  { value: "vote_count.asc", label: "Vote Count Asscending" },
  { value: "original_title.desc", label: "Original Title Descending" },
  { value: "original_title.asc", label: "Original Title Asscending" },
];

const Sort = ({ setFilterOpts }: ISort) => {
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
              onChange={(e) => {
                if (e?.value) {
                  setFilterOpts("sortBy", e?.value);
                }
              }}
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
