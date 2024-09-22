const CircularProgress = ({
  percentage,
  top = 8,
  left = 4,
  size = 38,
  width = 34,
  height = 34,
  fontSize = "base",
  percentageFontSize = 4,
  percentageTop = 1,
}: {
  percentage: number;
  top?: number;
  left?: number;
  size?: number;
  width?: number;
  height?: number;
  fontSize?: string;
  percentageFontSize?: number;
  percentageTop?: number;
}) => {
  const dashArray = Math.PI * 100;
  const dashOffset = Math.PI * (100 - percentage);

  const bar = {
    low: "#db2360",
    medium: "#d2d531",
    high: "#21d07a",
    none: "#d4d4d4",
  };
  const track = {
    low: "#571435",
    medium: "#423d0f",
    high: "#204529",
    none: "#666666",
  };

  const getColor = (
    ratingPercentage: number
  ): "low" | "medium" | "high" | "none" => {
    if (ratingPercentage >= 70) {
      return "high";
    }
    if (ratingPercentage >= 40) {
      return "medium";
    }
    if (ratingPercentage > 0) {
      return "low";
    }

    return "none";
  };

  return (
    <div
      className={`absolute -top-${top} left-${left} size-[${size}] bg-dark_blue rounded-full flex justify-center items-center hover:scale-105 cursor-pointer`}
    >
      <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 100 100"
        className="-rotate-90"
      >
        <circle
          cx="52.5"
          cy="52.5"
          r="50"
          fill="transparent"
          stroke={track[getColor(percentage)]}
          strokeWidth={6}
          strokeDasharray={dashArray}
          className="scale-[0.95]"
        />
        <circle
          cx="52.5"
          cy="52.5"
          r="50"
          fill="transparent"
          stroke={bar[getColor(percentage)]}
          strokeDashoffset={dashOffset}
          strokeWidth={6}
          strokeDasharray={dashArray}
          strokeLinecap="round"
          className="scale-[0.95]"
        />
      </svg>
      <div className={`font-semibold absolute text-white text-${fontSize}`}>
        {percentage ? (
          <>
            {percentage.toFixed(0)}
            <span
              className={`absolute text-[${percentageFontSize}px] top-${percentageTop}`}
            >
              %
            </span>
          </>
        ) : (
          "NR"
        )}
      </div>
    </div>
  );
};

export default CircularProgress;
