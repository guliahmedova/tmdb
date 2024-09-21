import c from "@/assets/imgs/m1.jpg";
import { Link } from "react-router-dom";

const SearchResult = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="max-w-7xl w-full h-full px-10 py-10">
        <div className="flex gap-x-5">
          {/* -------------- */}
          <div className="w-3/12">
            <div className="font-semibold text-white bg-[#01B4E4] rounded-tr-md rounded-tl-md py-4 px-4 w-full mb-2 cursor-default">
              Search Results
            </div>

            <div className="bg-sky-500 border shadow rounded">
              <div className="bg-gray-100 flex justify-between items-center font-semibold p-4 cursor-pointer">
                <span className="text-black">TV Shows</span>
                <span className="bg-white rounded-xl py-1 px-3 text-gray-400">
                  200
                </span>
              </div>
              <div className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold p-4 cursor-pointer">
                <span className="text-gray-500">Movies</span>
                <span className="bg-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  200
                </span>
              </div>
              <div className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold p-4 cursor-pointer">
                <span className="text-gray-500">People</span>
                <span className="bg-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  200
                </span>
              </div>
              <div className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold p-4 cursor-pointer">
                <span className="text-gray-500">Companies</span>
                <span className="bg-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  200
                </span>
              </div>
              <div className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold p-4 cursor-pointer">
                <span className="text-gray-500">Keywords</span>
                <span className="bg-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  200
                </span>
              </div>
              <div className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold p-4 cursor-pointer">
                <span className="text-gray-500">Collections</span>
                <span className="bg-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  200
                </span>
              </div>
              <div className="bg-white flex hover:bg-gray-100 group justify-between items-center font-semibold p-4 cursor-pointer">
                <span className="text-gray-500">Networks</span>
                <span className="bg-gray-100 rounded-xl py-1 px-3 group-hover:bg-white text-gray-400">
                  200
                </span>
              </div>
            </div>
          </div>
          {/* -------------- */}

          <div className="w-9/12">
            <div className="bg-white rounded-md shadow-md flex gap-x-4 h-36">
              <Link to="">
                <img
                  src={c}
                  alt=""
                  className="object-cover rounded-tl-md rounded-bl-md w-full h-full"
                />
              </Link>
              <div className="py-4 flex flex-col justify-between">
                <div>
                  <Link
                    to="#"
                    className="font-semibold text-lg hover:text-gray-500"
                  >
                    Mother
                  </Link>
                  <span className="block text-gray-500">April 14, 2010</span>
                </div>
                <p className="text-gray-600 mt-3 mb-0">
                  Yasuko Matsuyuki plays the part of Nao Suzuhara, an elementary
                  school teacher. When she realizes that one of the female
                  students is receiving abuse from her mother, Nao's maternal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
