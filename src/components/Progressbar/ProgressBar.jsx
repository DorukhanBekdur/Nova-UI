import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const ProgressBar = ({ value, max = 100, color = "blue", className = "" }) => {
  const colors = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div className={classNames("w-full bg-gray-200 rounded-full h-4", className)}>
      <div
        className={classNames("h-full rounded-full", colors[color])}
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.oneOf(["blue", "green", "red", "yellow"]),
  className: PropTypes.string,
};

export default ProgressBar;
