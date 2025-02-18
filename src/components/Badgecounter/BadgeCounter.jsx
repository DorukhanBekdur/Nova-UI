import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const BadgeCounter = ({ count, max = 99, className = "" }) => {
  const displayCount = count > max ? `${max}+` : count;

  return (
    <span
      className={classNames(
        "inline-block bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full",
        className
      )}
    >
      {displayCount}
    </span>
  );
};

BadgeCounter.propTypes = {
  count: PropTypes.number.isRequired,
  max: PropTypes.number,
  className: PropTypes.string,
};

BadgeCounter.defaultProps = {
  max: 99,
  className: "",
};

export default BadgeCounter;
