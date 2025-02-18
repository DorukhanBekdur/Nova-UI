import PropTypes from "prop-types";
import { useState } from "react";
import { classNames } from "../../utils/classNames";

const Tooltip = ({ text, position = "top", children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionStyles = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  return (
    <div 
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && (
        <div
          className={classNames(
            "absolute px-2 py-1 bg-gray-700 text-white text-xs rounded-lg shadow-md",
            positionStyles[position],
            className
          )}
        >
          {text}
        </div>
      )}
      {children}
    </div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Tooltip.defaultProps = {
  position: "top",
  className: "",
};

export default Tooltip;
