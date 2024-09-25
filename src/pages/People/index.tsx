import { RootState, useAppDispatch } from "@/redux/app/store";
import { getPeople } from "@/redux/features/peopleSlice";
import { getImageUrl } from "@/shared/utils/getImageUrl";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const People = () => {
  const people = useSelector((state: RootState) => state.people.people);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPeople({}));
  }, []);

  return (
    <div className="flex justify-center bg-white">
      <div className="max-w-7xl w-full px-10 py-10">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 flex-wrap gap-6">
          {people?.map((person) => (
            <div
              className="w-full bg-white border border-gray-200 rounded-lg shadow h-[340px]"
              key={person.id}
            >
              <div className="w-full h-64 bg-slate-400">
                <img
                  className="rounded-t-lg w-full h-full object-cover"
                  src={getImageUrl(person.profile_path)}
                  alt=""
                />
              </div>
              <div className="px-5">
                <h5 className="mb-2 lg:text-lg mt-2 font-bold tracking-tight text-gray-600">
                  {person.name || person.original_name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 inline-block text-xs">
                  {person.known_for_department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;
