import { IMovieRecommendation } from "@/shared/models/movie";
import { getImageUrl } from "@/shared/utils/getImageUrl";
import { Link } from "react-router-dom";

const RecommendationCard = ({
  recommendation,
}: {
  recommendation: IMovieRecommendation;
}) => {
  const splitedTitle = recommendation.title.split(" ");
  const cutTitle =
    splitedTitle.length > 2 ? splitedTitle.slice(0, 2) : recommendation.title;

  return (
    <Link
      to={`/movie/${recommendation.id}`}
      className="min-w-[250px] w-[250px] ml-4 h-full"
    >
      <div className="w-full h-40">
        <img
          src={getImageUrl(recommendation.backdrop_path)}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between opacity-55 mt-1">
        <span>{cutTitle}</span>
        <span>{(recommendation.vote_average * 10).toFixed(0)}%</span>
      </div>
    </Link>
  );
};

export default RecommendationCard;
