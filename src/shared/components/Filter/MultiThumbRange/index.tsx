interface IMultiThumbRange {
  start: number;
  end: number;
  step: number;
  setFilterOpts: (optName: string, optValue: string) => void;
}

const MultiThumbRange = ({
  start,
  end,
  step,
  setFilterOpts,
}: IMultiThumbRange) => {
  return (
    <div className="cursor-pointer relative h-8">
      <div className="w-full h-full">
        <div className="h-full w-full">
          <ul className="lg:flex grid grid-cols-11 h-full">
            <li className="lg:w-[24px] flex flex-col h-full justify-between items-center">
              <span className="w-[1px] h-2 rounded-full inline-block bg-gray-400"></span>
              <span className="text-xs text-gray-400">0</span>
            </li>
            <li className="lg:w-[24px] h-full flex flex-col items-center">
              <span className="w-[1px] h-1 rounded-full inline-block bg-gray-400 opacity-50"></span>
              <span className="text-xs text-gray-400"></span>
            </li>

            <li className="lg:w-[24px] flex flex-col h-full justify-between items-center">
              <span className="w-[1px] opacity-50 h-2 rounded-full inline-block bg-gray-400"></span>
              <span className="text-xs text-gray-400">100</span>
            </li>
            <li className="lg:w-[24px] h-full flex flex-col items-center">
              <span className="w-[1px] h-1 rounded-full inline-block bg-gray-400"></span>
              <span className="text-xs text-gray-400"></span>
            </li>

            <li className="lg:w-[24px] flex flex-col h-full justify-between items-center">
              <span className="w-[1px] h-2 rounded-full inline-block bg-gray-400"></span>
              <span className="text-xs text-gray-400">200</span>
            </li>
            <li className="lg:w-[24px] h-full flex flex-col items-center">
              <span className="w-[1px] h-1 rounded-full inline-block bg-gray-400"></span>
              <span className="text-xs text-gray-400"></span>
            </li>

            <li className="lg:w-[24px] flex flex-col h-full justify-between items-center">
              <span className="w-[1px] h-2 rounded-full inline-block bg-gray-400 opacity-50"></span>
              <span className="text-xs text-gray-400">300</span>
            </li>
            <li className="lg:w-[24px] h-full flex flex-col items-center">
              <span className="w-[1px] h-1 rounded-full inline-block bg-gray-400 opacity-50"></span>
              <span className="text-xs text-gray-400"></span>
            </li>

            <li className="lg:w-[24px] flex flex-col h-full justify-between items-center">
              <span className="w-[1px] h-2 rounded-full inline-block bg-gray-400"></span>
              <span className="text-xs text-gray-400">400</span>
            </li>
            <li className="lg:w-[24px] h-full flex flex-col items-center">
              <span className="w-[1px] h-1 rounded-full inline-block bg-gray-400"></span>
              <span className="text-xs text-gray-400"></span>
            </li>

            <li className="w-[26px] flex flex-col h-full justify-between items-center">
              <span className="w-[1px] h-2 rounded-full inline-block bg-gray-400"></span>
              <span className="text-xs text-gray-400">500</span>
            </li>
          </ul>
        </div>

        <div className="w-full absolute -top-0 mt-1">
          <input
            type="range"
            min={start}
            max={end}
            step={step}
            name="vote_count"
            onChange={(e) => setFilterOpts("vote_count", e.target.value)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MultiThumbRange;
