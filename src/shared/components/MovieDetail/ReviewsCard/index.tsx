import m from "@/assets/imgs/m1.jpg";
import { Link } from "react-router-dom";

const ReviewsCard = () => {
  return (
    <div className="border p-6 shadow-lg rounded-lg">
      <div className="flex gap-4">
        <div className="size-11 rounded-full">
          <img src={m} alt="" className="size-full object-cover rounded-full" />
        </div>
        <div>
          <Link to="#" className="text-black font-semibold hover:text-gray-700">
            A review by Chris Sawin
          </Link>
          <p className="text-gray-500">
            Written by
            <Link to="#" className="text-gray-600">
              Chris Sawin
            </Link>
            on July 3, 2024
          </p>
        </div>
      </div>
      <p className="text-gray-500 mt-4">It's trash. Don't see it.</p>
      <p className="text-gray-600 mt-3">
        <span className="text-gray-700 font-bold">Full review: </span>
        https://bit.ly/Grupid
      </p>
    </div>
  );
};

export default ReviewsCard;
