import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const Spinner = ({ size = "md", color = "blue", className = "" }) => {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-4",
    lg: "w-10 h-10 border-4",
  };

  const colors = {
    blue: "border-gray-300 border-t-blue-500",
    green: "border-gray-300 border-t-green-500",
    red: "border-gray-300 border-t-red-500",
    yellow: "border-gray-300 border-t-yellow-500",
  };

  return (
    <div
      className={classNames(
        "rounded-full animate-spin",
        sizes[size],
        colors[color],
        className
      )}
    />
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["blue", "green", "red", "yellow"]),
  className: PropTypes.string,
};

Spinner.defaultProps = {
  size: "md",
  color: "blue",
  className: "",
};

export default Spinner;
