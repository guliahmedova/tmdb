interface IMultiThumbRange {
  start: number;
  end: number;
  step: number;
}

const MultiThumbRange = ({ start, end, step }: IMultiThumbRange) => {
  return (
    <div>
      {start} {end} {step}
    </div>
  );
};

export default MultiThumbRange;
