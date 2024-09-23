import { RootState, useAppDispatch } from "@/redux/app/store";
import { getMovieCreditsById } from "@/redux/features/movieSlice";
import { getImageUrl } from "@/shared/utils/getImageUrl";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Casts = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { movieCredits, movieCrews } = useSelector(
    (state: RootState) => state.movie
  );

  useEffect(() => {
    if (id) {
      dispatch(getMovieCreditsById({ movieId: id }));
    }
  }, [id]);

  return (
    <section className="bg-gray-100 flex justify-center py-10">
      <div className="max-w-7xl w-full px-10 grid grid-cols-1 md:grid-cols-2">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Series Cast {movieCredits?.length}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {movieCredits?.map((credit) => (
              <div
                className="bg-white rounded-lg shadow-md p-6 my-6 text-center min-h-80"
                key={credit.id}
              >
                <img
                  src={getImageUrl(credit.profile_path)}
                  alt={credit.original_name}
                  className="size-40 object-cover mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  {credit.original_name}
                </h3>
                <p className="text-gray-700">
                  {credit.character && <>Role Name: {credit.character}</>} (
                  {credit.known_for_department})
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Series Crew {movieCrews?.length}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {movieCrews?.map((crew) => (
              <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center min-h-80">
                <img
                  src={getImageUrl(crew.profile_path)}
                  alt={crew.original_name}
                  className="size-40 object-cover mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  {crew.original_name}
                </h3>
                <p className="text-gray-700">
                  {crew.department}
                  Job: {crew.job} ({crew.known_for_department})
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Casts;
