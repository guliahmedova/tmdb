import { IMovieCredit } from "@/shared/models/movie";
import { getImageUrl } from "@/shared/utils/getImageUrl";

const CastCard = ({ credit }: { credit: IMovieCredit }) => {
  return (
    <div className="min-w-36 w-36 ml-4 shadow-lg border rounded-lg h-[290px]">
      <div className="h-36">
        <img
          src={getImageUrl(credit.profile_path)}
          alt=""
          className="size-full object-cover rounded-tl-md rounded-tr-md"
        />
      </div>
      <div className="p-4 pb-0">
        <h5 className="font-bold text-nowrap">{credit.original_name}</h5>
        <p className="mt-1">
          <span className="block text-sm text-slate-600">
            {credit.name} ({credit.known_for_department}){" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CastCard;
