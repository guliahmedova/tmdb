import m from "@/assets/imgs/m1.jpg";

const CastCard = () => {
  return (
    <div className="min-w-36 w-36 ml-4 shadow-lg border rounded-lg h-[270px]">
      <div className="h-36">
        <img
          src={m}
          alt=""
          className="size-full object-fill rounded-tl-md rounded-tr-md"
        />
      </div>
      <div className="p-4 pb-0">
        <h5 className="font-bold">Joe Locke</h5>
        <p>
          <span className="block text-sm text-slate-600">Teen </span>
          <span className="block text-sm text-slate-500">9 Episodes</span>
        </p>
      </div>
    </div>
  );
};

export default CastCard;
