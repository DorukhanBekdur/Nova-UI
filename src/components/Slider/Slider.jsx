import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const Slider = ({ value, min = 0, max = 100, step = 1, onChange, className = "" }) => {
  return (
    <div className={classNames("w-full flex flex-col items-center", className)}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full appearance-none bg-gray-300 h-2 rounded-lg cursor-pointer focus:outline-none"
      />
      <span className="text-sm font-medium text-gray-700 mt-2">{value}</span>
    </div>
  );
};

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Slider;
