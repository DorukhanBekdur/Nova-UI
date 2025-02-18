import PropTypes from "prop-types";
import { useState } from "react";
import { classNames } from "../../utils/classNames";

const Rating = ({ max = 5, value, onChange, className = "" }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={classNames("flex space-x-1 cursor-pointer", className)}>
      {[...Array(max)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={classNames(
              "text-2xl",
              starValue <= (hovered || value) ? "text-yellow-400" : "text-gray-300"
            )}
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onChange(starValue)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

Rating.propTypes = {
  max: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Rating;
