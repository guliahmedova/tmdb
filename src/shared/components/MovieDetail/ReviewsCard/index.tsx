import { IMovieReview } from "@/shared/models/movie";
import { getImageUrl } from "@/shared/utils/getImageUrl";
import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";

const ReviewsCard = ({ review }: { review: IMovieReview }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const splittedText = review.content.split(" ");
  const itCanOverflow = splittedText.length > 100;

  const beginText = itCanOverflow
    ? splittedText.slice(0, 100 - 1).join(" ")
    : review.content;
  const endText = splittedText.slice(100 - 1).join(" ");

  const handleKeyboard = (e: any) => {
    if (e.code === "Space" || e.code === "Enter") {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="border p-6 shadow-lg rounded-lg">
      <div className="flex gap-4">
        <div className="size-11 rounded-full">
          <img
            src={getImageUrl(review.author_details.avatar_path)}
            alt=""
            className="size-full object-cover rounded-full"
          />
        </div>
        <div>
          <Link
            to={review.url}
            className="text-black font-bold text-lg hover:text-gray-700"
          >
            A review by {review.author}
          </Link>
          <p className="text-gray-500">
            <span className="bg-dark_blue font-medium text-white rounded-md px-3 mr-1.5">
              {review.author_details.rating * 10} %
            </span>
            Written by
            <Link to="#" className="text-gray-600">
              {review.author} <span> </span>
            </Link>
            on {moment(review.created_at).format("ll")}
          </p>
        </div>
      </div>
      <p className="text-gray-500 mt-4">
        {beginText}
        {itCanOverflow && (
          <>
            {!isExpanded && <span>... </span>}
            <span
              className={`${!isExpanded && "hidden"}`}
              aria-hidden={!isExpanded}
            >
              {endText}
            </span>
            <span
              className="text-gray-700 ml-2"
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              aria-controls={review.id}
              onKeyDown={handleKeyboard}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "show less" : " read the rest."}
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default ReviewsCard;
